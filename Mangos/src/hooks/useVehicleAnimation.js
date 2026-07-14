import { useFrame } from "@react-three/fiber";

export default function useVehicleAnimation({
    vehicleRef,
    carRef,

    frontLeftSteerRef,
    frontRightSteerRef,

    frontLeftWheelRef,
    frontRightWheelRef,
    rearLeftWheelRef,
    rearRightWheelRef,
}) {
    useFrame((state, delta) => {
        const vehicle = vehicleRef.current;
        if (!vehicle) return;

        if (
            !carRef.current ||
            !frontLeftSteerRef.current ||
            !frontRightSteerRef.current ||
            !frontLeftWheelRef.current ||
            !frontRightWheelRef.current ||
            !rearLeftWheelRef.current ||
            !rearRightWheelRef.current
        ) {
            return;
        }

        const { speed, steering, position, yaw } = vehicle;
        const dt = Math.min(delta, 1 / 20);

        // Steer pivots turn on Y at this nesting depth (the two parent
        // rotations above them cancel out to ~0 on X), so this correctly
        // maps to visual left/right turn of the front wheels.
        frontLeftSteerRef.current.rotation.z = steering+Math.PI;
        frontRightSteerRef.current.rotation.z = -steering+Math.PI;

        // All four wheels spin the same sign — each wheel's own mount
        // rotation already mirrors left vs right, so a single sign here
        // makes them all visually roll forward together.
        const spinDelta = speed * dt;
        frontLeftWheelRef.current.rotation.y -= spinDelta;
        frontRightWheelRef.current.rotation.y -= spinDelta;
        rearLeftWheelRef.current.rotation.y -= spinDelta;
        rearRightWheelRef.current.rotation.y -= spinDelta;

        // Vehicle transform
        carRef.current.position.set(position.x, position.y, position.z);
        carRef.current.rotation.y = yaw;
    });
}