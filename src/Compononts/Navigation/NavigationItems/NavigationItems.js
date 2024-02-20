import React from "react";

// #224aa0 - #e43b97
import NavigationItem from "./NavigationItem/NavigationItem";
import { CiHome, CiFloppyDisk, CiSettings } from "react-icons/ci";
import { TbMessages } from "react-icons/tb";
import { GoProjectSymlink, GoShield } from "react-icons/go";
import { FiBox, FiUsers } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";

const navigationItems = (props) => {
  console.log(`NavItems  ${props.theme}`);
  return (
    <ul className="flex justify-between items-start md:flex-row flex-col ">
      <NavigationItem
        path="/"
        className={`${props.theme == "dark" ? "text-gray-300" : "text-Cgray"}`}
      >
        <CiHome className="text-xl" />
        <span>Overview</span>
      </NavigationItem>

      <NavigationItem
        path="/Respositories"
        className={`${props.theme == "dark" ? "text-gray-300" : "text-Cgray"}`}
      >
        <CiFloppyDisk className="text-xl" />
        <span>Respositories</span>
      </NavigationItem>

      <NavigationItem
        path="/discussions"
        className={`${props.theme == "dark" ? "text-gray-300" : "text-Cgray"}`}
      >
        <TbMessages className="text-xl" />
        <span>Discussions</span>
      </NavigationItem>

      <NavigationItem
        path="/projects"
        className={`${props.theme == "dark" ? "text-gray-300" : "text-Cgray"}`}
      >
        <GoProjectSymlink className="text-xl" />
        <span>Projects</span>
      </NavigationItem>

      <NavigationItem
        path="/packages"
        className={`${props.theme == "dark" ? "text-gray-300" : "text-Cgray"}`}
      >
        <FiBox className="text-xl" />
        <span>Packages</span>
      </NavigationItem>

      <NavigationItem
        path="/teams"
        className={`${props.theme == "dark" ? "text-gray-300" : "text-Cgray"}`}
      >
        <FiUsers className="text-xl" />
        <span>Teams</span>
      </NavigationItem>

      <NavigationItem
        path="/people"
        className={`${props.theme == "dark" ? "text-gray-300" : "text-Cgray"}`}
      >
        <FaRegUser className="text-xl" />
        <span>People</span>
      </NavigationItem>

      <NavigationItem
        path="/security"
        exact={true}
        className={`${props.theme == "dark" ? "text-gray-300" : "text-Cgray"}`}
      >
        <GoShield className="text-xl" />
        Security
      </NavigationItem>

      <NavigationItem
        path="/insights"
        className={`${props.theme == "dark" ? "text-gray-300" : "text-Cgray"}`}
      >
        <FaChartLine className="text-xl" />
        <span>Insights</span>
      </NavigationItem>

      <NavigationItem
        path="/settings"
        className={`${props.theme == "dark" ? "text-gray-300" : "text-Cgray"}`}
      >
        <CiSettings className="text-xl" />
        <span>Settings</span>
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
