import React from "react";
import "./Eyeclic.css";

import w1 from "./assets/w1.png";
import w2 from "./assets/w2.png";
import w3 from "./assets/w3.png";

const Eyeclic = () => {
    return (
        <section className="Eyeclic">

            <div className="heading1">
                <div className="line"></div>
                <h2>EYECLICK’S COLECTION</h2>
                <div className="line"></div>
            </div>

            <div className="photo">
                <img src={w1} alt="" />
            </div>

             <div className="heading2">
                <div className="line"></div>
                <h2>POLICE COLECTION</h2>
                <div className="line"></div>
            </div>

            <div className="photo">
                <img src={w2} alt="" />
            </div>

        </section>
    );
};

export default Eyeclic;