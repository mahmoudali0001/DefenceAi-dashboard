import React from "react";

import { BsSearch } from "react-icons/bs";

const searchbar = (props) => {
  return (
    <div className={`relative ${props.className}`}>
      <input
        type="text"
        placeholder={props.placeholder}
        className={`${
          props.theme === "dark" ? "dark:bg-[#010409]" : "bg-white"
        } md:px-12 px-9 py-[2px] border text-Cgray border-gray rounded-md w-full`}
      />

      <BsSearch className="absolute top-1/4 md:left-4 left-3 text-Cgray" />
      {props.children}
    </div>
  );
};

export default searchbar;
