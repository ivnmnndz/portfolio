import React from "react";
import "./Hero.css";

const Hero = () => {
  const [style, setStyle] = React.useState({ display: "none" });
  return (
    <section
      id="home"
      style={{ height: "100vh", width: "100%", paddingTop: "5rem" }}
    >
      <div>
        <h1>
          Hello,{" "}
          <span style={style} className="wave">
            👋
          </span>
          <br />
          I'm{" "}
          <span
            onMouseEnter={(e) => setStyle({ display: "inline-block" })}
            onMouseLeave={(e) => setStyle({ display: "none" })}
            style={{ color: "rgb(50, 150, 230)" }}
          >
            Ivan.
          </span>{" "}
          A Fullstack Web Developer
        </h1>
      </div>
    </section>
  );
};

export default Hero;
