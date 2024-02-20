import React, { useState } from "react";

import Searchbar from "../../Navigation/Searchbar/Searchbar";
import DrawerToggle from "../NavigationItems/SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
import NavIcons from "../../UI/NavIcons/NavIcons";
import Imgsrc from "../../../assets/sorty.jpg";
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { RiShareLine } from "react-icons/ri";
import { LuInbox } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
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
    <header className="flex items-center justify-between md:flex-row flex-col gap-y-6 | lg:mx-3 md:mx-2 mx-1 | box-border ">
      <div className="flex items-center md:justify-center justify-between md:w-fit w-full md:gap-0 gap-x-[15%] ">
        <DrawerToggle clicked={props.drawerToggleClicked} theme={props.theme} />
        <Logo theme={props.theme} />
        <button
          className={`${
            props.theme == "dark" ? "text-white" : "text-black"
          } p-1  rounded-full block md:hidden w-[70px] text-2xl relative ${
            props.theme == "dark"
              ? "shadow-darkSkillOuter"
              : "shadow-skillOuter"
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
              className={`${
                props.theme == "dark" ? "hidden" : "block"
              } text-xs`}
            />
            <HiMoon
              className={`${
                props.theme == "dark" ? "block" : "hidden"
              } text-xs`}
            />
          </span>
        </button>
      </div>

      <div className="flex gap-x-2 gap-y-5 justify-center items-center sm:flex-row flex-col cursor-pointer text-Cgray">
        <Searchbar placeholder="Type / to search" theme={props.theme}>
          <span className="text-Cgray absolute right-10">|</span>
          <LuChevronRight className="absolute top-1 right-3 text-xl text-Cgray" />
          <span className="absolute top-[6px] right-[14px] text-sm text-Cgray">
            ...
          </span>
        </Searchbar>
        <span className="md:block hidden">|</span>
        <div className="flex-row gap-x-2 flex md:p-0 pb-3">
          <NavIcons>
            <FaPlus />
            <FaAngleDown />
          </NavIcons>

          <NavIcons>
            <CiClock2 />
          </NavIcons>

          <NavIcons>
            <RiShareLine />
          </NavIcons>

          <NavIcons>
            <LuInbox />
            <span className="absolute w-2 h-2 bg-cyan-500 rounded-full top-[-4px] right-[-2px]"></span>
          </NavIcons>

          <img src={Imgsrc} alt="Me :D" className="w-8 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
