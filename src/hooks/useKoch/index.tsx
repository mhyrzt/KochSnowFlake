import React from "react";
import { Line } from "react-lineto";
import KSF from "./KSF";
import { ACTIONS } from "./KSF";
import { Position } from "./types";

export default function useKSF(length: number, center: Position) {
    const reducer = KSF.reducer;
    const [initial, setInitial] = React.useState(
        KSF.getInitialState(length, center)
    );
    React.useEffect(
        () => setInitial(KSF.getInitialState(length, center)),
        [length, center]
    );

    const [state, dispatch] = React.useReducer(reducer, initial);

    const nextState = () => dispatch(ACTIONS.NEXT);
    const prevState = () => dispatch(ACTIONS.PREV);

    const renderKSF = (within: string) => {
        let h = [...state];
        h = KSF.nextIteration(h);
        h = KSF.nextIteration(h);
        h = KSF.nextIteration(h);
        h = KSF.nextIteration(h);
        h = KSF.nextIteration(h);
        h = KSF.nextIteration(h);
        const elems = [];
        for (let i = 0; i < h.length - 1; i++) {
            const p1 = h[i];
            const p2 = h[i + 1];
            elems.push(
                <Line x0={p1.x} y0={p1.y} x1={p2.x} y1={p2.y} key={i} />
            );
        }
        return elems;
    };

    return {
        state,
        nextState,
        prevState,
        renderKSF,
    };
}
