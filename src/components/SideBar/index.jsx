import React from "react";
import { useLocation } from "react-router-dom";
import { Menus } from "../../models/menus";

function SideBar({ isToggleMenu }) {
  const { pathname } = useLocation();

  return (
    <nav className={`sidebar${isToggleMenu ? " active" : ""}`}>
      <ul>
        {Menus &&
          Menus.map((item, index) => (
            <li
              className={`menu${item?.link === pathname ? " active" : ""}`}
              key={item.id}
            >
              <a href={item.link}>
                <i className={item.icon} />
                {isToggleMenu ? "" : <p>{item.name}</p>}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default SideBar;
