import React from "react";

import { NavLink } from "react-router-dom";

const navigationItem = (props) => {
  return (
    <li className={"py-3 px-2 " + props.className}>
      <NavLink
        exact
        to={props.path}
        clicked={props.clicked}
        activeClassName="active"
        className="flex flex-row gap-x-1 max-h-5 justify-center text-sm items-center hover:hoverElement"
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
