import React from "react";
import useKSF from "../hooks/useKoch";
import { Position } from "../hooks/useKoch/types";

const KochSnowlake: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    

    const [center, setCenter] = React.useState<Position>({
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2,
    });
    const [length, setLength] = React.useState<number>(1000);
    const ksf = useKSF(length, center);

    return <>{ksf.renderKSF("container")}</>;
};

export default KochSnowlake;
