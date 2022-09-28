import React from "react";
import Project from "./Project";
import img from "../calc.jpg";

const websites = [
  {
    title: "Average Share Calculator",
    description: "A simple calculator to plan out future stock purchases.",
    url: "https://calculator.ivanmenendez.com",
    img: img,
    alt: "",
  },
  {
    title: "This Portfolio Site",
    description: "This Site",
    url: "https://www.ivanmenendez.com",
    img: img,
    alt: "",
  },
];

const Projects = () => {
  return (
    <section style={{ paddingTop: "5rem" }} id="projects">
      <h2>Projects</h2>
      <div>
        {websites.map((website, i) => {
          return (
            <Project
              key={i}
              title={website.title}
              description={website.description}
              url={website.url}
              img={img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
