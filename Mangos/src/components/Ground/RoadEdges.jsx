export default function RoadEdges() {
    return (
        <>
            {/* Left Edge */}
            <mesh position={[0, 0.021, -5.8]} receiveShadow>
                <boxGeometry args={[300, 0.01, 0.15]} />
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Right Edge */}
            <mesh position={[0, 0.021, 5.8]} receiveShadow>
                <boxGeometry args={[300, 0.01, 0.15]} />
                <meshStandardMaterial color="white" />
            </mesh>
        </>
    );
}