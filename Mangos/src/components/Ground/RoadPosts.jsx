export default function RoadPosts() {

    const posts = [];

    for (let x = -145; x <= 145; x += 8) {

        posts.push(

            <group key={x}>

                {/* Left post */}
                <mesh
                    position={[x, 0.6, -7]}
                    castShadow
                >
                    <boxGeometry args={[0.12, 1.2, 0.12]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>

                {/* Right post */}
                <mesh
                    position={[x, 0.6, 7]}
                    castShadow
                >
                    <boxGeometry args={[0.12, 1.2, 0.12]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>

            </group>

        );
    }

    return <>{posts}</>;
}