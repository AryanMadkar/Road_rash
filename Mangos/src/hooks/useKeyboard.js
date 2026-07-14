import { useEffect, useRef } from "react";

// Keys the game actually uses — arrow keys and space are blocked from
// scrolling/activating the page while the canvas has focus.
const GAME_KEYS = new Set([
    "w", "a", "s", "d",
    "arrowup", "arrowdown", "arrowleft", "arrowright",
    " ",
]);

export default function useKeyboard() {
    const keys = useRef({});

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toLowerCase();
            if (GAME_KEYS.has(key)) event.preventDefault();
            keys.current[key] = true;
        };

        const handleKeyUp = (event) => {
            keys.current[event.key.toLowerCase()] = false;
        };

        // FIX: if the window loses focus (alt-tab, clicking another app,
        // switching browser tabs) while a key is held down, the browser
        // never fires keyup for it. Without this, the car keeps driving
        // forever until you tab back and physically re-press the key.
        const clearAllKeys = () => {
            for (const key in keys.current) {
                keys.current[key] = false;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        window.addEventListener("blur", clearAllKeys);
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) clearAllKeys();
        });

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            window.removeEventListener("blur", clearAllKeys);
            document.removeEventListener("visibilitychange", clearAllKeys);
        };
    }, []);

    return keys;
}