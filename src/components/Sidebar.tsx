import React from "react";
import { Link } from "react-router-dom";
import projectIcon from "../assets/projects-icon.svg";
import MessangerIcon from "../assets/MessangerIcons.svg";
import { RxDashboard } from "react-icons/rx";
import { IoCalendarClear } from "react-icons/io5";
import { FaPlaneUp } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <aside className="h-full max-w-[200px] bg-white rounded-3xl w-full border border-[red]">
      <Link to={"login"} className="w-full cursor-pointer flex items-start ">
        <img src="/logo.svg" alt="logo" />
      </Link>

      <ul className="font-[Nunito] font-bold text-lg text-[#7D8592] border border-green-600">
        <li className="rounded-[10px]">
          <Link
            to={"/"}
            className="flex items-center justify-center gap-4 h-11"
          >
            <RxDashboard className="size-6" />
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="rounded-[10px] ">
          <Link
            to={"projects"}
            className="flex items-center justify-center gap-4 h-11"
          >
            <img src={projectIcon} alt="projects" className="size-6" />
            <span>Projects</span>
          </Link>
        </li>

        <li className="rounded-[10px] ">
          <Link
            to={"calendar"}
            className="flex items-center justify-center gap-4 h-11"
          >
            <IoCalendarClear className="size-6" />
            <span>Calendar</span>
          </Link>
        </li>

        <li className="rounded-[10px] ">
          <Link
            to={"vacations"}
            className="flex items-center justify-center gap-4 h-11"
          >
            <FaPlaneUp className="size-6" />
            <span>Vacations</span>
          </Link>
        </li>

        <li className="rounded-[10px] ">
          <Link
            to={"employees"}
            className="flex items-center justify-center gap-4 h-11"
          >
            <MdPeopleAlt />
            <span>Employees</span>
          </Link>
        </li>

        <li className="rounded-[10px] ">
          <Link
            to={"messagenger"}
            className="flex items-center justify-center gap-4 h-11"
          >
            <img src={MessangerIcon} alt="MessangerIcon" className="size-6" />
            <span>Messanger</span>
          </Link>
        </li>

        <li className="rounded-[10px] ">
          <Link
            to={"info-portal"}
            className="flex items-center justify-center gap-4 h-11"
          >
            <FaRegFolderOpen className="size-6" />
            <span>Info Portal</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
