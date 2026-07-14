export default function Sidewalks() {
    return (
        <>
            {/* Left sidewalk */}
            <mesh
                position={[0, 0.03, -8]}
                receiveShadow
            >
                <boxGeometry args={[300, 0.08, 3]} />
                <meshStandardMaterial
                    color="#bdbdbd"
                    roughness={1}
                />
            </mesh>

            {/* Right sidewalk */}
            <mesh
                position={[0, 0.03, 8]}
                receiveShadow
            >
                <boxGeometry args={[300, 0.08, 3]} />
                <meshStandardMaterial
                    color="#bdbdbd"
                    roughness={1}
                />
            </mesh>
        </>
    );
}