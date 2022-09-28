import React from "react";

const Skill = ({ skillImg, skillName }) => {
  const styles = {
    skillContainer: {
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "100px",
      width: "160px",
      //   border: `5px solid black`,
      borderRadius: "1rem",
      backgroundColor: "#323234",
    },
  };

  return (
    <div style={styles.skillContainer}>
      <img style={{ height: "60px", width: "60px" }} src={`${skillImg}`} />
      <span style={{ fontWeight: "600" }}>{skillName}</span>
    </div>
  );
};

export default Skill;
