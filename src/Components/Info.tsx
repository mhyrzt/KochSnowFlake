import React from "react";
import { InfoProps } from "../utils/types";

const Info: React.FC<InfoProps> = ({ setIteration, iteration }) => {
    return (
        <div className="info">
            <div className="row" style={{ justifyContent: "space-around" }}>
                <label htmlFor="iter-input">{"iteration"}</label>
                <input
                    value={iteration}
                    id="iter-input"
                    type="number"
                    min={0}
                    max={6} // if u love ur computer dont change it :D
                    onChange={({ target }) =>
                        setIteration(parseInt(target.value))
                    }
                />

                <input
                    name="shape"
                    type="checkbox"
                    checked={false}
                    onChange={() => {}}
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
