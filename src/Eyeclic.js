import React from "react";
import "./Eyeclic.css";
import { useNavigate } from "react-router-dom";
import w1 from "./assets/w1.png";
import w2 from "./assets/w2.png";
import w3 from "./assets/w3.png";
import w4 from "./assets/w4.png";
import w5 from "./assets/w5.png";
import w6 from "./assets/w6.png";


const Eyeclic = () => {

    const navigate = useNavigate();

    const handleExplore = (item) => {

        localStorage.setItem(
            "selectedBrand",
            JSON.stringify({
                brand: item.brand,
            })
        );

        navigate("/Product_Explore");
    };
    return (
        <section className="Eyeclic">

            <div className="heading">
                <div className="line"></div>
                <h2>EYECLICK’S COLECTION</h2>
                <div className="line"></div>
            </div>

            <div className="photo">
                <img src={w1} alt="" onClick={() => handleExplore({ brand: "Eyeclic"})} />
            </div>

            <div className="heading">
                <div className="line"></div>
                <h2>POLICE COLECTION</h2>
                <div className="line"></div>
            </div>

            <div className="photo">
                <img src={w2} alt="" onClick={() => handleExplore({ brand: "Police"})} />
            </div>

            <div className="heading">
                <div className="line"></div>
                <h2>OPIUM’S COLECTION</h2>
                <div className="line"></div>
            </div>

            <div className="photo">
                <img src={w3} alt="" onClick={() => handleExplore({ brand: "Opium"})} />
            </div>
            <div className="heading">
                <div className="line"></div>
                <h2>Ray-Ban COLECTION</h2>
                <div className="line"></div>
            </div>

            <div className="photo">
                <img src={w4} alt="" onClick={() => handleExplore({ brand: "Ray-Ban"})}/>
            </div>

            <div className="heading">
                <div className="line"></div>
                <h2>Carrera COLECTION</h2>
                <div className="line"></div>
            </div>

            <div className="photo">
                <img src={w5} alt="" onClick={() => handleExplore({ brand: "Carrera"})}/>
            </div>

            <div className="heading">
                <div className="line"></div>
                <h2>Calvin Klein COLECTION</h2>
                <div className="line"></div>
            </div>

            <div className="photo">
                <img src={w6} alt="" onClick={() => handleExplore({ brand: "Calvin Klein"})}/>
            </div>
        </section>
    );
};

export default Eyeclic;