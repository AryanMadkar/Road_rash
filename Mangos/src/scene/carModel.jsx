import { useGLTF } from "@react-three/drei";

export default function CarModel(props) {
    const { scene } = useGLTF("/models/phonix/scene.gltf");

    return (
        <primitive
            object={scene}
            {...props}
        />
    );
}

useGLTF.preload("/models/phonix/scene.gltf");
