import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

const Hero = () => {
  return (
    <section id="home">
      <div className="header">
        <h1>Ivan</h1>
        <h1>Menendez</h1>
        <div className="short-info">
          <div>
            <span>
              <FontAwesomeIcon color="white" icon={faSquareCheck} />
            </span>
            <p>javascript enthusiast</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon color="white" icon={faSquareCheck} />
            </span>
            <p>react developer</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon color="white" icon={faSquareCheck} />
            </span>
            <p>front end focused</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
