interface Position {
    x: number;
    y: number;
}

interface Action {
    type: string;
}

type ArrayPosition = Array<Position>;


export type { Position, Action, ArrayPosition };
