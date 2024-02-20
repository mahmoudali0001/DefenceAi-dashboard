import React, { useState, useEffect } from "react";

import { GoShield } from "react-icons/go";
import { RiSpeedUpFill } from "react-icons/ri";
import { LuComputer } from "react-icons/lu";
import { IoSearchCircleOutline, IoKey } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { VscVmActive } from "react-icons/vsc";
import { FaBoxArchive } from "react-icons/fa6";
import { CgScrollV } from "react-icons/cg";

import Searchbar from "../../Compononts/Navigation/Searchbar/Searchbar";
import InfoCard from "../../Compononts/UI/InfoCards/InfoCards";

const HomePage = (props) => {
  return (
    <div className="relative h-[95vh] flex md:gap-x-2 gap-x-2 overflow-x-hidden md:mx-2 mx-1">
      <aside
        className={`glassBg ${
          props.theme === "dark" ? "text-white" : "text-black"
        } w-[20%] pt-3 px-2 md:hover:w-[20%] hover:w-[80%] z-30 ease-linear duration-300 group shadow-xl`}
      >
        <h3 className="md:text-xl sm:text-lg text-[9px] font-semibold">
          Security
        </h3>
        <section className="mt-4 px-2">
          <div
            className="flex flex-row items-center justify-between bg-[#7e7e7e73] px-2 py-1 rounded-md relative
           before:absolute before:w-1 before:rounded-lg before:h-full before:bg-gradient-to-r before:bg-sky-500 before:shadow-xl shadow-xl before:left-[-10px] before:top-0"
          >
            <div className="flex flex-row items-center md:gap-x-2 gap-x-2 text-white">
              <GoShield className="text-md" />
              <div className="text-sm md:block hidden group-hover:block">
                Risk
              </div>
            </div>
            <span className="text-green-500 border border-green-500 px-1 rounded-lg text-[9px] md:block hidden">
              Beta
            </span>
          </div>

          <div className="mt-2 flex flex-row items-center justify-between px-2 py-1 rounded-md">
            <div className="flex flex-row items-center md:gap-x-2 gap-x-2">
              <RiSpeedUpFill className="text-md" />
              <div className="text-sm md:block hidden group-hover:block">
                Converage
              </div>
            </div>
            <span className="text-green-500 border border-green-500 px-1 rounded-lg text-[9px]  md:block hidden">
              Beta
            </span>
          </div>
        </section>

        <div className="h-px w-full bg-[#7e7e7e73] mt-2"></div>

        <section className="mt-2 px-2">
          <span className="text-sm">Alerts</span>
          <div className="flex flex-row items-center justify-between px-2 py-1 rounded-md">
            <div className="flex flex-row items-center md:gap-x-2 gap-x-2">
              <LuComputer className="text-md" />
              <div className="text-sm  md:block hidden group-hover:block">
                Dependabot
              </div>
            </div>
            <span className="text-white bg-neutral-500 px-1 rounded-lg text-[9px]  md:block hidden">
              868
            </span>
          </div>

          <div className="mt-2 flex flex-row items-center justify-between px-2 py-1 rounded-md">
            <div className="flex flex-row items-center md:gap-x-2 gap-x-2">
              <IoSearchCircleOutline className="text-md" />
              <div className="text-sm md:block hidden group-hover:block">
                Code scanning
              </div>
            </div>
            <span className="text-white bg-neutral-500 px-1 rounded-lg text-[9px]  md:block hidden">
              556
            </span>
          </div>

          <div className="mt-2 flex flex-row items-center justify-between px-2 py-1 rounded-md">
            <div className="flex flex-row items-center md:gap-x-2 gap-x-2">
              <IoKey className="text-md" />
              <div className="text-sm md:block hidden group-hover:block">
                Secret scanning
              </div>
            </div>
            <span className="text-white bg-neutral-500 px-1 rounded-lg text-[9px]  md:block hidden">
              72
            </span>
          </div>
        </section>
      </aside>
      <main
        className={`glassBg shadow-xl ${
          props.theme === "dark" ? "text-white" : "text-black"
        } w-[80%] z-30 pl-3 pr-5 pt-2`}
      >
        <div className="flex justify-between">
          <h3 className="text-xl font-normal"> Security risk </h3>

          <div className="flex gap-x-2 justify-center items-center">
            <span className="text-[9px] text-blue-700">Give feedback</span>
            <span className="text-green-500 border border-green-500 px-1 py-px rounded-lg w-fit text-[9px]">
              Beta
            </span>
          </div>
        </div>
        <p
          className={`${
            props.theme == "dark" ? "text-gray-400" : "text-Cgray"
          }`}
        >
          Alert counts for security features in repositories across the
          organization
        </p>

        <div className="mt-4 flex gap-x-2 w-full items-center">
          <Searchbar
            theme={props.theme}
            placeholder="archived:false sort:code-scanning"
            className="w-[90%]"
          >
            <span className="absolute right-3 text-[9px] py-[2px] px-[5px] top-1 bg-[#858b914a] rounded-md">
              X
            </span>
          </Searchbar>

          <span className="bg-[#c5c5c54a] flex justify-center items-center gap-x-1 text-sm py-[5px] px-2 rounded-md border border-slate-600">
            Teams
            <IoMdArrowDropdown />
          </span>
        </div>

        <div className="flex items-center gap-3 mt-4 overflow-x-auto">
          <InfoCard theme={props.theme} />
          <InfoCard theme={props.theme} />
          <InfoCard theme={props.theme} />
        </div>

        <div className="overflow-y-scroll md:h-44 h-[235px]  mt-6 relative text-[9px] md:text-base">
          <table className="md:w-[98%] w-[200%] rounded-md overflow-hidden border border-Cgray">
            <tr className="bg-[#c5c5c54a] sticky top-0 z-10">
              <th className="text-start flex items-center gap-x-4 p-4">
                <div className="flex gap-x-2 items-center md:text-base text-[9px]">
                  <VscVmActive />
                  185 Active
                </div>

                <div
                  className={`${
                    props.theme == "dark" ? "text-gray-400" : "text-Cgray"
                  } flex gap-x-2 items-center text-Cgray font-light  md:text-base text-[9px]`}
                >
                  <FaBoxArchive />0 Archived
                </div>
              </th>
              <th></th>
              <th></th>
              <th className="flex justify-end">
                <div
                  className={`${
                    props.theme == "dark" ? "text-gray-400" : "text-Cgray"
                  } flex gap-x-1 items-center font-light p-4 md:text-base text-[9px]`}
                >
                  <CgScrollV />
                  Code scanning alerts <IoMdArrowDropdown />
                </div>
              </th>
            </tr>
            <tr className="border border-Cgray">
              <td className="w-[32%] p-4 md:text-base text-[9px]">
                Alfreds Futterkiste
              </td>
              <td className="w-[23%] md:text-base text-[9px]">Maria Anders</td>
              <td className="w-[23%] md:text-base text-[9px]">Germany</td>
              <td>Germany</td>
            </tr>
            <tr className="border border-Cgray">
              <td className="w-[32%] p-4 md:text-base text-[9px]">
                Alfreds Futterkiste
              </td>
              <td className="w-[23%] md:text-base text-[9px]">Maria Anders</td>
              <td className="w-[23%] md:text-base text-[9px]">Germany</td>
              <td>Germany</td>
            </tr>

            <tr className="border border-Cgray">
              <td className="w-[32%] p-4 md:text-base text-[9px]">
                Alfreds Futterkiste
              </td>
              <td className="w-[23%] md:text-base text-[9px]">Maria Anders</td>
              <td className="w-[23%] md:text-base text-[9px]">Germany</td>
              <td>Germany</td>
            </tr>

            <tr className="border border-Cgray">
              <td className="w-[32%] p-4 md:text-base text-[9px]">
                Alfreds Futterkiste
              </td>
              <td className="w-[23%] md:text-base text-[9px]">Maria Anders</td>
              <td className="w-[23%] md:text-base text-[9px]">Germany</td>
              <td>Germany</td>
            </tr>

            <tr className="border border-Cgray">
              <td className="w-[32%] p-4 md:text-base text-[9px]">
                Alfreds Futterkiste
              </td>
              <td className="w-[23%] md:text-base text-[9px]">Maria Anders</td>
              <td className="w-[23%] md:text-base text-[9px]">Germany</td>
              <td>Germany</td>
            </tr>

            <tr className="border border-Cgray">
              <td className="w-[32%] p-4 md:text-base text-[9px]">
                Alfreds Futterkiste
              </td>
              <td className="w-[23%] md:text-base text-[9px]">Maria Anders</td>
              <td className="w-[23%] md:text-base text-[9px]">Germany</td>
              <td>Germany</td>
            </tr>

            <tr className="border border-Cgray">
              <td className="w-[32%] p-4 md:text-base text-[9px]">
                Alfreds Futterkiste
              </td>
              <td className="w-[23%] md:text-base text-[9px]">Maria Anders</td>
              <td className="w-[23%] md:text-base text-[9px]">Germany</td>
              <td>Germany</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
