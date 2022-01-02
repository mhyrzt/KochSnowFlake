import React from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

interface ValueInterface {
	iteration: number;
}

const IterationContext = React.createContext<ValueInterface>({
	iteration: 0,
});

const useIteration = () => React.useContext(IterationContext);

const IterationProvider: React.FC = ({ children }) => {
	const [iteration, setIteration] = React.useState(0);
	const upHandler = () => setIteration(iteration + 1);
	const downHandler = () =>
		setIteration(iteration ? iteration - 1 : iteration);

	return (
		<ReactScrollWheelHandler {...{ upHandler, downHandler }}>
			<IterationContext.Provider value={{ iteration }}>
				{children}
			</IterationContext.Provider>
		</ReactScrollWheelHandler>
	);
};

export { useIteration, IterationProvider };
