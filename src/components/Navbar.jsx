import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink item={"Home"} />
        <NavLink item={"About"} />
        <NavLink item={"Projects"} />
        <NavLink item={"Contact"} />
      </ul>
    </nav>
  );
};

export default Navbar;
