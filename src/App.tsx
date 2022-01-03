import React from "react";
import KochSnowFlake from "./Components/KochSnowFlake";
import Info from "./Components/Info";
import "./App.css";

function App() {
    const [iteration, setIteration] = React.useState<number>(0);
    const [inverse, setInverse] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <KochSnowFlake iteration={iteration} inverse={inverse} />
            <Info
                inverse={inverse}
                iteration={iteration}
                setInverse={setInverse}
                setIteration={setIteration}
            />
        </React.Fragment>
    );
}

export default App;
