import { forwardRef, useEffect, useRef } from "react";

const Wheel = forwardRef(function Wheels(
    {
        geometry,
        material,
        position,
        rotation,
        scale,
        steerRef = null,
        wheelRef = null,
    },
    ref
) {
    return (<group ref={steerRef} position={position} rotation={rotation} scale={scale}>
        <group ref={wheelRef}>
            <mesh geometry={geometry} material={material} position={[0, -0.002, 0]} />
        </group>
    </group>)
})

export default Wheel;