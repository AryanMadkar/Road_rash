import BuildingSmall1 from "../../assets/city/BuildingSmall1";

export default function BuildingSmall({
    position,
    rotation = [0, 0, 0],
}) {
    return (
        <BuildingSmall1
            position={position}
            rotation={rotation}
            castShadow
            receiveShadow
        />
    );
}