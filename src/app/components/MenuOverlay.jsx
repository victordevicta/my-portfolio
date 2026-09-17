import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onLinkClick }) => {
  return (
    <ul className="flex flex-col items-center border-t border-brass-500/20 bg-bronze-950/95 py-4">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink href={link.path} title={link.title} onClick={onLinkClick} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
