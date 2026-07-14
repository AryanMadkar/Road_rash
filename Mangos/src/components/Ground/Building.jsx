export default function Building({
    position = [0, 0, 0],
    size = [6, 10, 6],
    color = "#c9c9c9",
}) {
    const [width, height, depth] = size;

    return (
        <mesh
            position={[
                position[0],
                height / 2,
                position[2],
            ]}
            castShadow
            receiveShadow
        >
            <boxGeometry args={[width, height, depth]} />

            <meshStandardMaterial
                color={color}
                roughness={0.9}
            />
        </mesh>
    );
}