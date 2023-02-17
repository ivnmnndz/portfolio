import React from "react";
import Skill from "./Skill";
import CSSLogo from "./logos/css3";
import JSLogo from "../components/logos/javascript";
import HTMLLogo from "../components/logos/html5";
import REACTLogo from "../components/logos/react";
import SASSLogo from "../components/logos/sass";
import TAILWINDLogo from "../components/logos/tailwindcss";
import NODELogo from "../components/logos/nodejs";
import EXPRESSLogo from "../components/logos/express";
import GITLogo from "../components/logos/git";
import MONGOLogo from "../components/logos/mongodb";
import NEXTJSLogo from "../components/logos/nextjs";

const skills = [
  { logo: HTMLLogo, name: "HTML" },
  { logo: CSSLogo, name: "CSS" },
  { logo: JSLogo, name: "JavaScript" },
  { logo: REACTLogo, name: "React" },
  { logo: NEXTJSLogo, name: "NextJS" },
  { logo: MONGOLogo, name: "MongoDB" },
  { logo: SASSLogo, name: "Sass" },
  { logo: TAILWINDLogo, name: "Tailwind" },
  { logo: NODELogo, name: "NodeJS" },
  { logo: EXPRESSLogo, name: "Express" },
  { logo: GITLogo, name: "GIT" },
];

const About = () => {
  return (
    <section id="about">
      <div>
        <div style={{ marginBottom: " 2rem" }}>
          <div>
            <h2>About</h2>
            <div className="about-info">
              <p className="newBackground">
                A few years ago, I took a leap of faith and pivoted my career to
                web development. Since beginning my journey, I've worked as a
                coding bootcamp instructor, sharing my passion with like-minded
                students and have developed a love for JavaScript. I'm always
                learning, continuously growing, and improving my skill set one
                project at a time.
                <br />
                <br />I am open to opportunities where I can contribute to
                creating something great. If you have a project that matches my
                skills and experience, let&apos;s work together to make it come
                to life!
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Skills</h2>
        </div>
        <div className="skill-list">
          {[...skills].map((skill, i) => {
            return <Skill key={i} skill={skill} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
