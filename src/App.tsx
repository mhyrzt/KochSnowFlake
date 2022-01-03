import React from "react";
import KochSnowFlake from "./Components/KochSnowFlake";
import Info from "./Components/Info";
import "./App.css";

function App() {
    const [iteration, setIteration] = React.useState<number>(3);
    return (
        <React.Fragment>
            <KochSnowFlake iteration={iteration} />
            <Info iteration={iteration} setIteration={setIteration} />
        </React.Fragment>
    );
}

export default App;
