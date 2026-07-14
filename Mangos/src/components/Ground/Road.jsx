export default function Road() {
    return (
        <mesh
            position={[0, 0.01, 0]}
            receiveShadow
        >
            <boxGeometry args={[300, 0.02, 12]} />

            <meshStandardMaterial
                color="#3d3d3d"
                roughness={0.95}
                metalness={1}
            />
        </mesh>
    );
}