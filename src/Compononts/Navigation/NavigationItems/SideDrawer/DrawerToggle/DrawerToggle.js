import React from "react";

import "../../../../../index.css";

const drawerToggle = (props) => (
  <div className="flex flex-col	gap-y-[5px] md:hidden" onClick={props.clicked}>
    <div
      className={`${
        props.theme == "dark" ? "bg-gray-300" : "bg-Cgray"
      } drawerIcons w-8`}
    ></div>
    <div
      className={`${
        props.theme == "dark" ? "bg-gray-300" : "bg-Cgray"
      } drawerIcons w-4`}
    ></div>
    <div
      className={`${
        props.theme == "dark" ? "bg-gray-300" : "bg-Cgray"
      } drawerIcons w-2 `}
    ></div>
  </div>
);

export default drawerToggle;
