import React from "react";

const NavLink = ({ item }) => {
  return (
    <li>
      <a className="link-underline" href={`#${item.toLowerCase()}`}>
        {item}
      </a>
    </li>
  );
};

export default NavLink;
