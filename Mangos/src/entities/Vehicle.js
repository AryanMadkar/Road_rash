import Entity from "./Entity";

export default class Vehicle extends Entity {
    constructor(name = "Vehicle") {
        super(name);

        this.speed = 0;
        this.steering = 0;

        // ----------------------------
        // Vehicle Tuning
        // ----------------------------

        // Speeds (m/s)
        this.maxForwardSpeed = 20; // ~72 km/h
        this.maxReverseSpeed = 8;  // ~29 km/h

        // Forces (m/s²)
        this.acceleration = 5.5;
        this.brakeForce = 12;
        this.friction = 1.8;

        // Steering
        this.maxSteering = 0.7;      // ~40°
        this.steeringSpeed = 2.5;
        this.steeringReturn = 6;

        // Distance between front & rear axle
        this.wheelBase = 2.6;
    }

    update(delta, keys) {
        const dt = Math.min(delta, 1 / 20);

        this._updateSteering(dt, keys);
        this._updateSpeed(dt, keys);
        this._updateTransform(dt);
    }

    // ---------------------------------------------------
    // Steering
    // ---------------------------------------------------

    _updateSteering(dt, keys) {
        const speedRatio = Math.min(
            Math.abs(this.speed) / this.maxForwardSpeed,
            1
        );

        // Steering becomes slower at high speed
        const steeringSpeed =
            this.steeringSpeed * (1 - speedRatio * 0.6);

        if (keys["a"]) {
            this.steering += steeringSpeed * dt;
        } else if (keys["d"]) {
            this.steering -= steeringSpeed * dt;
        } else {
            const returnAmount = this.steeringReturn * dt;

            if (Math.abs(this.steering) <= returnAmount) {
                this.steering = 0;
            } else {
                this.steering -= Math.sign(this.steering) * returnAmount;
            }
        }

        // Reduce max steering at higher speeds
        const currentMaxSteering =
            this.maxSteering * (1 - speedRatio * 0.5);

        this.steering = Math.max(
            -currentMaxSteering,
            Math.min(currentMaxSteering, this.steering)
        );
    }

    // ---------------------------------------------------
    // Speed
    // ---------------------------------------------------

    _updateSpeed(dt, keys) {

        // ----------------------------
        // Forward
        // ----------------------------

        if (keys["w"]) {

            if (this.speed < 0) {
                // Brake while reversing
                this.speed += this.brakeForce * dt;

                if (this.speed > 0) {
                    this.speed = 0;
                }
            } else {
                // Accelerate forward
                const accelFactor =
                    1 - (this.speed / this.maxForwardSpeed);

                this.speed +=
                    this.acceleration *
                    Math.max(accelFactor, 0.25) *
                    dt;
            }

        }

        // ----------------------------
        // Brake / Reverse
        // ----------------------------

        else if (keys["s"]) {

            if (this.speed > 0) {

                // Brake only
                this.speed -= this.brakeForce * dt;

                if (this.speed < 0) {
                    this.speed = 0;
                }

            } else {

                // Reverse only after stopping
                const reverseFactor =
                    1 - (Math.abs(this.speed) / this.maxReverseSpeed);

                this.speed -=
                    this.acceleration *
                    Math.max(reverseFactor, 0.35) *
                    dt;
            }

        }

        // ----------------------------
        // Coast
        // ----------------------------

        else {

            if (Math.abs(this.speed) < 0.05) {

                this.speed = 0;

            } else {

                this.speed -=
                    Math.sign(this.speed) *
                    this.friction *
                    dt;

            }

        }

        // Clamp forward & reverse speeds

        this.speed = Math.min(
            this.maxForwardSpeed,
            Math.max(-this.maxReverseSpeed, this.speed)
        );
    }

    // ---------------------------------------------------
    // Movement
    // ---------------------------------------------------

    _updateTransform(dt) {

        if (Math.abs(this.speed) < 0.001) return;

        const yawRate =
            (this.speed / this.wheelBase) *
            Math.tan(this.steering);

        this.yaw += yawRate * dt;

        const distance = this.speed * dt;

        this.position.x +=
            Math.cos(this.yaw) * distance;

        this.position.z -=
            Math.sin(this.yaw) * distance;
    }
}