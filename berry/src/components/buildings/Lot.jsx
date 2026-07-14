export default function Lot({
    position,
    size,
}) {
    return (
        <mesh
            position={[
                position[0],
                0.02,
                position[2],
            ]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeGeometry args={size} />

            <meshStandardMaterial
                color="#88b04b"
            />
        </mesh>
    );
}