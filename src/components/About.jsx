import React from "react";
import Skill from "./Skill";
import "./About.css";

const About = () => {
  return (
    <section
      id="about"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        paddingTop: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <h2>About</h2>
          <p>
            Full stack web developer based in Miami, Florida with a passion for
            javascript.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div
          style={{
            width: "50%",
          }}
        >
          {/* <h1>Skills</h1> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <Skill
                skillName={"HTML"}
                skillImg={`https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg`}
              />
              <Skill
                skillName={"CSS"}
                skillImg={`https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg`}
              />
              <Skill
                skillName={"JavaScript"}
                skillImg={`https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg`}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <Skill
                skillName={"React"}
                skillImg={`https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg`}
              />
              <Skill
                skillName={"NodeJS"}
                skillImg={`https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg`}
              />
              <Skill
                skillName={"MongoDB"}
                skillImg={`https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg`}
              />
              <Skill
                skillName={"GIT"}
                skillImg={`https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg`}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <Skill
                skillName={"Express"}
                skillImg={`https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg`}
              />
              <Skill
                skillName={"TailwindCSS"}
                skillImg={`https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg`}
              />
              <Skill
                skillName={"Sass"}
                skillImg={`https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
