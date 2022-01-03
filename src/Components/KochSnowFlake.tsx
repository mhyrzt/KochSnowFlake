import React from "react";
import KSF from "../utils/KSF";
import { Line } from "react-lineto";
import useWindowDimension from "../hooks/useWindowDimension";
import { KochSnowFlakeProps, LinePoints } from "../utils/types";

const KochSnowlake: React.FC<KochSnowFlakeProps> = ({ iteration, inverse }) => {
    const { getCenter, getLength } = useWindowDimension();

    const renderKSF = () => {
        const getLine = (linePoints: LinePoints, key: number) => {
            return <Line {...linePoints} key={key} borderColor="rgb(0, 255, 0)" />;
        };

        const L = getLength();
        const C = getCenter();
        const S = KSF.getIeteration(L, C, iteration);

        const base = inverse ? KSF.flip(S[0], S) : S;
        const linePoses = KSF.getLinesPositions(KSF.getSides(base));
        const bottom = linePoses.map(getLine);
        return bottom;
    };

    return <>{renderKSF()}</>;
};

export default KochSnowlake;
