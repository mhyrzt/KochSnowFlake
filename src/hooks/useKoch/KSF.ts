import { Position, Action, ArrayPosition } from "./types";

const ACTIONS = {
    NEXT: { type: "NEXT" },
    PREV: { type: "PREV" },
};

class KSF {
    
    static rotatePosition({ x, y }: Position, theta: number): Position {
        const xp: number = x * Math.cos(theta) - y * Math.sin(theta);
        const yp: number = x * Math.sin(theta) + y * Math.cos(theta);
        return {
            x: +xp.toFixed(5),
            y: +yp.toFixed(5),
        };
    }

    static getAngle(p1: Position, p2: Position): number {
        const dx: number = p1.x - p2.x;
        const dy: number = p1.y - p2.y;
        return Math.atan2(dy, dx);
    }

    static makeStraight(p1: Position, p2: Position): ArrayPosition {
        const theta = -this.getAngle(p1, p2);
        return [this.rotatePosition(p1, theta), this.rotatePosition(p2, theta)];
    }

    static getInitialState(length: number, { x, y }: Position): ArrayPosition {
        const p1: Position = { y: y, x: x - length / 2 };
        const p2: Position = { y: y, x: x + length / 2 };
        return [p1, p2];
    }

    static validatePoistions(p1: Position, p2: Position) {
        const { x: x1, y: y1 } = p1;
        const { x: x2, y: y2 } = p2;

        if (y2 !== y1) {
            throw new Error("Positions should have same y value");
        }

        return { x1, x2, y: y1 };
    }

    static getThrid(p1: Position, p2: Position, n: 1 | 2): Position {
        const { x1, x2, y } = this.validatePoistions(p1, p2);
        const x = ((3 - n) * x1 + n * x2) / 3;
        return { x, y };
    }

    static getThirds(p1: Position, p2: Position): ArrayPosition {
        return [this.getThrid(p1, p2, 1), this.getThrid(p1, p2, 2)];
    }

    static rotateArround(c: Position, p: Position, theta: number): Position {
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);
        const x = cos * (p.x - c.x) - sin * (p.y - c.y) + c.x;
        const y = sin * (p.x - c.x) + cos * (p.y - c.y) + c.y;
        return {
            x: +x.toFixed(5),
            y: +y.toFixed(5),
        };
    }

    static getTriangle(p1: Position, p2: Position) {
        const [t1, t3] = KSF.getThirds(p1, p2);
        const t2 = KSF.rotateArround(t1, t3, Math.PI / 3);
        return [t1, t2, t3];
    }

    static nextIteration(prev: ArrayPosition): ArrayPosition {
        function getNewValues(i: number): ArrayPosition {
            const points: ArrayPosition = [prev[i], prev[i + 1]];
            const theta: number = KSF.getAngle(points[0], points[1]);
            const rot = (p: Position) => KSF.rotatePosition(p, theta);
            const [p1, p5] = KSF.makeStraight(points[0], points[1]);
            const [p2, p4] = KSF.getThirds(p1, p5);

            const p3 = KSF.rotateArround(p2, p4, Math.PI / 3);
            return [p1, p2, p3, p4, p5].map(rot);
        }

        const state: ArrayPosition = [];
        for (let i = 0; i < prev.length - 1; i++) {
            state.push(...getNewValues(i));
        }

        return state;
    }

    static prevIteration(prev: ArrayPosition): ArrayPosition {
        if (prev.length === 2) return prev;
        return prev.filter((p, idx) => idx % 4 === 0);
    }

    static reducer(prev: ArrayPosition, action: Action): ArrayPosition {
        switch (action.type) {
            case ACTIONS.NEXT.type: {
                return KSF.nextIteration(prev);
            }
            case ACTIONS.PREV.type: {
                return KSF.prevIteration(prev);
            }
            default: {
                return prev;
            }
        }
    }
}
export { ACTIONS };
export default KSF;
