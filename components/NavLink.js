import React from "react";
import styles from "../styles/Navbar.module.css";

const NavLink = ({ item, toggleMenu }) => {
  return (
    <li className={styles.navItem}>
      <a
        onClick={toggleMenu}
        className={`${styles.navLink} linkUnderline`}
        href={`#${item === "Home" ? "" : item.toLowerCase()}`}
      >
        {item}
      </a>
    </li>
  );
};

export default NavLink;
