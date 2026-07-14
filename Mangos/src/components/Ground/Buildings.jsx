import Building from "./Building";

export default function Buildings() {
    return (
        <>
            {/* Left side */}
            <Building
                position={[-30, 0, -13]}
                size={[8, 14, 8]}
                color="#d6d6d6"
            />

            <Building
                position={[-15, 0, -13]}
                size={[10, 9, 8]}
                color="#b8b8b8"
            />

            <Building
                position={[5, 0, -13]}
                size={[7, 18, 8]}
                color="#cccccc"
            />

            <Building
                position={[22, 0, -13]}
                size={[9, 12, 8]}
                color="#bdbdbd"
            />

            {/* Right side */}
            <Building
                position={[-30, 0, 13]}
                size={[9, 16, 8]}
                color="#cfcfcf"
            />

            <Building
                position={[-12, 0, 13]}
                size={[7, 11, 8]}
                color="#bcbcbc"
            />

            <Building
                position={[8, 0, 13]}
                size={[8, 15, 8]}
                color="#d8d8d8"
            />

            <Building
                position={[25, 0, 13]}
                size={[10, 10, 8]}
                color="#b5b5b5"
            />
        </>
    );
}