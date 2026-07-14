import { forwardRef } from "react";

const SteeringPivot = forwardRef(function SteeringPivot(
    {
        position,
        rotation,
        scale,
        children,
    },
    ref
) {
    return (
        <group
            ref={ref}
            position={position}
            rotation={rotation}
            scale={scale}
        >
            {children}
        </group>
    );
});

export default SteeringPivot;