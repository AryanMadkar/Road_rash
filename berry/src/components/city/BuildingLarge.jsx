import BuildingLarge2 from "../../assets/city/BuildingLarge2";

export default function BuildingLarge({
    position,
    rotation = [0, 0, 0],
}) {
    return (
        <BuildingLarge2
            position={position}
            rotation={rotation}
            castShadow
            receiveShadow
        />
    );
}