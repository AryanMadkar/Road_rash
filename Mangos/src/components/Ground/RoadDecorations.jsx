const ROCK_COUNT = 40;
const ROAD_HALF_WIDTH = 6;

export default function RoadDecorations() {
    const rocks = [];

    for (let i = 0; i < ROCK_COUNT; i++) {
        const x = -190 + i * 5;

        const side = Math.random() > 0.5 ? 1 : -1;

        const z =
            side *
            (ROAD_HALF_WIDTH + 4 + Math.random() * 12);

        const scale = 0.3 + Math.random() * 0.7;

        rocks.push(
            <mesh
                key={i}
                position={[x, scale / 2, z]}
                scale={scale}
                castShadow
                receiveShadow
            >
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#707070" />
            </mesh>
        );
    }

    return <>{rocks}</>;
}