import Wheel from "./Wheel";

export default function Car({
    nodes,
    materials,

    frontLeftSteerRef,
    frontRightSteerRef,

    frontLeftWheelRef,
    frontRightWheelRef,

    rearLeftWheelRef,
    rearRightWheelRef,
}) {
    return (
        <>
            <Wheel
                steerRef={frontLeftSteerRef}
                wheelRef={frontLeftWheelRef}
                geometry={nodes.Phoenix445_WheelStock_FL_RB1c_Tire_1k_0.geometry}
                material={materials.RB1c_Tire_1k}
                position={[1.498, 0.326, -0.856]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[1.01, 0.956, 1.01]}
            />

            <Wheel
                steerRef={frontRightSteerRef}
                wheelRef={frontRightWheelRef}
                geometry={nodes.Phoenix445_WheelStock_FR_RB1c_Tire_1k_0.geometry}
                material={materials.RB1c_Tire_1k}
                position={[1.498, 0.326, 0.856]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[1.01, 0.956, 1.01]}
            />

            <Wheel
                wheelRef={rearLeftWheelRef}
                geometry={nodes.Phoenix445_WheelStock_RL_RB1c_Tire_1k_0.geometry}
                material={materials.RB1c_Tire_1k}
                position={[-1.242, 0.326, -0.856]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.01, 0.956, 1.01]}
            />

            <Wheel
                wheelRef={rearRightWheelRef}
                geometry={nodes.Phoenix445_WheelStock_RR_RB1c_Tire_1k_0.geometry}
                material={materials.RB1c_Tire_1k}
                position={[-1.242, 0.326, 0.856]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.01, 0.956, 1.01]}
            />
        </>
    );
}