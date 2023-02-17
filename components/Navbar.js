import React, { useState } from "react";
import NavLink from "./NavLink";
import Hamburger from "./Hamburger";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className={styles.logo}>
        <a href="#home">
          <span>IM</span>
        </a>
      </div>
      <Hamburger toggleMenu={toggleMenu} open={open} />
      <div className={`${styles.mobile} ${open ? `${styles.open}` : ""}`}>
        <ul className={styles.navList}>
          <NavLink toggleMenu={toggleMenu} item={"About"} />
          <NavLink toggleMenu={toggleMenu} item={"Projects"} />
          <NavLink toggleMenu={toggleMenu} item={"Contact"} />
        </ul>
      </div>
      <ul className={styles.desktopNavList}>
        <NavLink toggleMenu={toggleMenu} item={"About"} />
        <NavLink toggleMenu={toggleMenu} item={"Projects"} />
        <NavLink toggleMenu={toggleMenu} item={"Contact"} />
      </ul>
    </nav>
  );
};

export default Navbar;
