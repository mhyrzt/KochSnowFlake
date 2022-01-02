import React from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

interface ValueInterface {
    iteration: number;
    setIterationFunction?: (n: number) => void;
}

const IterationContext = React.createContext<ValueInterface>({
    iteration: 0,
});

const useIteration = () => React.useContext(IterationContext);

const IterationProvider: React.FC = ({ children }) => {
    const [iteration, setIteration] = React.useState(0);

    const upHandler = () => {
        setIteration(iteration + 1);
    };

    const downHandler = () => {
        setIteration(iteration ? iteration - 1 : iteration);
    };

    const setIterationFunction = (n: number) => {
        setIteration(n < 0 ? 0 : n);
    };

    const value: ValueInterface = {
        iteration,
        setIterationFunction,
    };

    return (
        <ReactScrollWheelHandler {...{ upHandler, downHandler }}>
            <IterationContext.Provider value={value}>
                {children}
            </IterationContext.Provider>
        </ReactScrollWheelHandler>
    );
};

export { useIteration, IterationProvider };
