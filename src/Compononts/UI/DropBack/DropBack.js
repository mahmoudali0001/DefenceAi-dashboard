import React from "react";

const backdrop = (props) =>
  props.show ? (
    <div
      className={`${
        props.theme == "dark" ? "bg-[#eeeeee36]" : "bg-[#33333370]"
      } w-[100.9%] h-screen fixed top-[-4px] left-0 z-50`}
      onClick={props.clicked}
    ></div>
  ) : null;

export default backdrop;
