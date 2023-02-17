import React from "react";
import Project from "./ProjectCard";
import calc from "../public/calc.png";
import laptop from "../public/laptop.png";
import styles from "../styles/Home.module.css";

const projects = [
  {
    heading: "Average Share Calculator",
    description: `A calculator to plan out future stock purchases. Made using Create-React-App, hosted on Firebase and using local storage to keep values.`,
    url: "https://calculator.ivanmenendez.com",
    github: "https://github.com/ivnmnndz/average-share-calc",
    img: calc,
    alt: "calculator",
  },
  {
    heading: "This Portfolio Site",
    description:
      "This site is built with NextJS hosted on Vercel. It also uses an Express backend to send emails through mailgun.",
    github: "https://github.com/ivnmnndz/portfolio",
    img: laptop,
    alt: "laptop",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div>
        <h2>Projects</h2>
        <div className={styles.projectList}>
          {projects.map((project, i) => {
            return <Project key={i} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
