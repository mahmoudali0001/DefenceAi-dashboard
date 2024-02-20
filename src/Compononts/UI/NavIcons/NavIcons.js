import React from "react";

const navIcons = (props) => {
  return (
    <div
      className={`${
        props.theme == "dark" ? "border-gray-300" : "border-Cgray"
      } p-[6px] border rounded-md flex justify-center gap-x-1 relative`}
    >
      {props.children}
    </div>
  );
};

export default navIcons;
