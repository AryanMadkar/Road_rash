export default function GroundPlane() {
    return (
        <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
        >
            <planeGeometry args={[300, 300]} />

            <meshStandardMaterial
                color="#4d8b3b"
                roughness={1}
                metalness={0}
            />
        </mesh>
    );
}