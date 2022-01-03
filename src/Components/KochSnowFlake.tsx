import React from "react";
import { KochSnowFlakeProps, LinePoints, Position } from "../utils/types";
import { Line } from "react-lineto";

import useWindowDimension from "../hooks/useWindowDimension";
import KSF from "../utils/KSF";

const KochSnowlake: React.FC<KochSnowFlakeProps> = ({ iteration }) => {
    const { getCenter, getLength } = useWindowDimension();

    const renderKSF = () => {
        const getLine = (linePoints: LinePoints, key: number) => (
            <Line {...linePoints} key={key} />
        );
        const linePoses = KSF.getLinesPositions(
            KSF.getIeteration(getLength(), getCenter(), iteration)
        );
        const bottom = linePoses.map(getLine);
        return bottom;
    };

    return <>{renderKSF()}</>;
};

export default KochSnowlake;
