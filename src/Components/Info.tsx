import React from "react";
import { InfoProps } from "../utils/types";

const Info: React.FC<InfoProps> = ({
    setIteration,
    iteration,
    inverse,
    setInverse,
}) => {
    return (
        <div className="info">
            <h2>Koch Snowflake</h2>
            <div className="row" style={{ justifyContent: "space-around" }}>
                <label htmlFor="iteration">iteration</label>
                <input
                    value={iteration}
                    id="iteration"
                    name="iteration"
                    type="number"
                    min={0}
                    max={6} // if u love ur computer dont change it :D
                    onChange={({ target }) =>
                        setIteration(parseInt(target.value))
                    }
                />
                <span>|</span>
                <label htmlFor="inverse">inverse</label>
                <input
                    name="inverse"
                    id="inverse"
                    type="checkbox"
                    checked={inverse}
                    onChange={() => setInverse(!inverse)}
                />
            </div>
            <div className="row" style={{ justifyContent: "space-between" }}>
                <a href="https://github.com/mhyrzt/KochSnowFlake#readme">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/mhyrzt/">LinkedIn</a>
            </div>
        </div>
    );
};

export default Info;
