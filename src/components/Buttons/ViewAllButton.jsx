import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ViewAllButton = ({link}) => {
  return (
    <NavLink
      className="text-xl w-40 hidden md:visible md:flex items-center justify-center h-14 text-[#4b7dc8] whitespace-nowrap px-4 py-2"
      to={link}
    >
      <p>View All</p>
      <span>
        <MdKeyboardArrowRight size={30} />
      </span>
    </NavLink>
  );
};

export default ViewAllButton;