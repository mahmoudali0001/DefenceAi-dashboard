import React, { Fragment } from "react";

import NavigationItems from "../NavigationItems";
import Logo from "../../../Logo/Logo";
import DropBack from "../../../UI/DropBack/DropBack";

const sideDrawer = (props) => {
  let sideDrawerClasses = [
    `fixed | top-[-3px] -md:-left-100 | ${
      props.theme === "dark" ? "bg-[#333]" : "bg-white"
    } h-screen w-1/2 | py-9 px-2 | duration-300	z-50`,
  ];

  if (props.closed) {
    sideDrawerClasses.push("-left-full");
  }

  if (props.open) {
    sideDrawerClasses.push("left-[-4px]");
  }

  return (
    <>
      <DropBack show={props.open} clicked={props.closed} theme={props.theme} />
      <div className={sideDrawerClasses.join(" ")}>
        <Logo classes="mb-10" theme={props.theme} />
        <nav>
          <NavigationItems theme={props.theme} />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
