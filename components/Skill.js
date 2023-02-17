import React from "react";
import styles from "../styles/Skill.module.css";

const Skill = ({ skill }) => {
  return (
    <div className={styles.skillBox}>
      <div className={styles.skillIcon}>
        <skill.logo />
      </div>
      <span>{skill.name}</span>
    </div>
  );
};

export default Skill;
