import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef } from "react";

const FOLLOW_DISTANCE = 10;
const FOLLOW_HEIGHT = 4.5;
const LOOK_AHEAD = 2.5;

const POSITION_DAMPING = 6;
const TARGET_DAMPING = 8;
const ROTATION_DAMPING = 5;

// Reusable vectors
const forward = new THREE.Vector3();
const desiredPosition = new THREE.Vector3();
const desiredTarget = new THREE.Vector3();
const carPosition = new THREE.Vector3();

const desiredQuat = new THREE.Quaternion();

export default function useFollowCamera({ vehicleRef }) {
    const { camera, controls } = useThree();

    const isInteracting = useRef(false);

    // Camera remembers its own yaw.
    const cameraYaw = useRef(0);

    useEffect(() => {
        const down = () => (isInteracting.current = true);
        const up = () => (isInteracting.current = false);

        window.addEventListener("pointerdown", down);
        window.addEventListener("pointerup", up);

        return () => {
            window.removeEventListener("pointerdown", down);
            window.removeEventListener("pointerup", up);
        };
    }, []);

    useFrame((_, delta) => {
        const vehicle = vehicleRef.current;

        if (!vehicle || !controls) return;

        const dt = Math.min(delta, 1 / 20);

        //------------------------------------------
        // Vehicle Position
        //------------------------------------------

        carPosition.set(
            vehicle.position.x,
            vehicle.position.y + 1,
            vehicle.position.z
        );

        //------------------------------------------
        // Smooth Camera Rotation
        //------------------------------------------

        let targetYaw = vehicle.yaw;

        // Reverse should not instantly flip the camera.
        // Instead rotate smoothly toward the opposite direction.

        if (vehicle.speed < -0.1) {
            targetYaw += Math.PI;
        }

        let angle = targetYaw - cameraYaw.current;

        while (angle > Math.PI) angle -= Math.PI * 2;
        while (angle < -Math.PI) angle += Math.PI * 2;

        cameraYaw.current += angle * ROTATION_DAMPING * dt;

        //------------------------------------------
        // Camera Offset
        //------------------------------------------

        forward.set(
            Math.cos(cameraYaw.current),
            0,
            -Math.sin(cameraYaw.current)
        );

        desiredPosition.copy(carPosition);

        desiredPosition.addScaledVector(
            forward,
            -FOLLOW_DISTANCE
        );

        desiredPosition.y += FOLLOW_HEIGHT;

        //------------------------------------------
        // Look Ahead
        //------------------------------------------

        desiredTarget.copy(carPosition);

        desiredTarget.addScaledVector(
            forward,
            LOOK_AHEAD
        );

        //------------------------------------------
        // Camera Movement
        //------------------------------------------

        if (!isInteracting.current) {
            camera.position.lerp(
                desiredPosition,
                POSITION_DAMPING * dt
            );
        }

        controls.target.lerp(
            desiredTarget,
            TARGET_DAMPING * dt
        );

        //------------------------------------------
        // Smooth Camera Rotation
        //------------------------------------------

        const lookMatrix = new THREE.Matrix4();

        lookMatrix.lookAt(
            camera.position,
            controls.target,
            camera.up
        );

        desiredQuat.setFromRotationMatrix(lookMatrix);

        camera.quaternion.slerp(
            desiredQuat,
            POSITION_DAMPING * dt
        );
    });
}