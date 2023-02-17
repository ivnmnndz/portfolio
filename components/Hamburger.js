import React from "react";
import styles from "../styles/Navbar.module.css";

const Hamburger = ({ open, toggleMenu }) => {
  return (
    <div
      onClick={toggleMenu}
      className={`${styles.mobileIcon} ${open ? styles.open : ""}`}
    >
      <div className={styles.hamburger}></div>
    </div>
  );
};

export default Hamburger;
