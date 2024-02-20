import React, { useState, useEffect } from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import { BsFillSunFill } from "react-icons/bs";
import { HiMoon } from "react-icons/hi2";

const Toolbar = (props) => {
  const [theme, setTheme] = useState("");

  const handleClick = () => {
    if (props.theme === "dark") {
      setTheme("left-0 rotate-0");
    } else {
      setTheme("left-[50%] rotate-[230deg]");
    }
    props.clicked();
    console.log("work");
  };

  return (
    <header className="flex items-center justify-between | lg:mx-3 md:mx-2 mx-1 | box-border ">
      <nav className="md:inline-block hidden">
        <NavigationItems theme={props.theme} />
      </nav>
      <button
        className={`${
          props.theme == "dark" ? "text-white" : "text-black"
        } p-1 mr-4 rounded-full w-[70px] md:block hidden text-2xl relative ${
          props.theme == "dark" ? "shadow-darkSkillOuter" : "shadow-skillOuter"
        }`}
        onClick={handleClick}
      >
        <span className="absolute left-1/2 rotate-0 -translate-x-1/2 p-1 w-[85%] rounded-full h-2 z-0 bg-slate-700 top-1/2 -translate-y-1/2"></span>
        <span
          className={`relative z-10 p-2 w-8 h-8 rounded-full flex justify-center items-center rotate-0 duration-500 ease-linear left-0 ${theme}  ${
            props.theme == "dark" ? "bg-black" : "bg-white"
          }
          ${
            props.theme == "dark"
              ? "left-[50%] rotate-[230deg]"
              : "left-0 rotate-0"
          }`}
        >
          <BsFillSunFill
            className={`${props.theme == "dark" ? "hidden" : "block"} text-xs`}
          />
          <HiMoon
            className={`${props.theme == "dark" ? "block" : "hidden"} text-xs`}
          />
        </span>
      </button>
    </header>
  );
};

export default Toolbar;
