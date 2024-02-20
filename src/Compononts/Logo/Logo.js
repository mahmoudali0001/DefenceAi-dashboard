import React from "react";
import { FaGithub } from "react-icons/fa";

const logo = (props) => (
  <div
    className={`md:mt-1 text-sm ${
      props.theme === "dark" ? "text-white" : "text-black"
    } tracking-[2px] flex flex-row gap-x-3 items-center ${props.classes}`}
  >
    <FaGithub className="text-3xl" />
    <div>DefenceAI.com</div>
  </div>
);

export default logo;
