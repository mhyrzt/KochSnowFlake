import React from "react";

interface Position {
    x: number;
    y: number;
}

type ArrayPosition = Array<Position>;

interface LinePoints {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
}

interface KochSnowFlakeProps {
    inverse: boolean;
    iteration: number;
}

interface InfoProps {
    iteration: number;
    setIteration: React.Dispatch<React.SetStateAction<number>>;
    inverse: boolean;
    setInverse: React.Dispatch<React.SetStateAction<boolean>>;
}

type ArrayLinePoints = Array<LinePoints>;

export type {
    Position,
    ArrayPosition,
    LinePoints,
    ArrayLinePoints,
    KochSnowFlakeProps,
    InfoProps,
};
