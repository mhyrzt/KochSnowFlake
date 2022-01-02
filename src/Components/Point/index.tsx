import React from "react";

interface Position {
	x: number;
	y: number;
}

interface props {
	id: string | number;
	pos: Position;
}

const Point: React.FC<props> = ({ id, pos }) => {
	const { x: top, y: left } = pos;
	return <div className={`point p-${id}`} style={{ top, left }} />;
};

export default Point;
