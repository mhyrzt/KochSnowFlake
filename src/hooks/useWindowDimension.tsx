import React from "react";
import { Position } from "../utils/types";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export default function useWindowDimension() {
    const [windowDimensions, setWindowDimensions] = React.useState(
        getWindowDimensions()
    );
    const { width, height } = windowDimensions;

    function getLength(): number {
        return Math.min(width, height) / 3 * 2;
    }

    function getCenter(): Position {
        return { x: width / 2, y: height / 2 };
    }

    React.useEffect(() => {
        function handleResize(): void {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { getCenter, getLength };
}
