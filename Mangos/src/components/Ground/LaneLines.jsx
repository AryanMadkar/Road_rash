export default function LaneLines() {

    const lines = [];

    for (let x = -145; x <= 145; x += 6) {
        lines.push(
            <mesh
                key={x}
                position={[x, 0.021, 0]}
                receiveShadow
            >
                <boxGeometry args={[3, 0.01, 0.2]} />

                <meshStandardMaterial
                    color="black"
                />
            </mesh>
        );
    }

    return <>{lines}</>;
}