import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { RiQuestionnaireFill } from "react-icons/ri";
import { HiArchive } from "react-icons/hi";
import { MdCategory } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { Collapse } from "react-collapse";

const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const isOpenSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  return (
    <div className="sidebar fixed top-0 left-0 bg-[rgba(245,74,74,0.9)] w-[17%] h-full border-r border-[rgba(0,0,0,0.2)] py-2 px-2">
      <div className="py-2 w-full">
        <Link to="/">
          <img
            src="https://en.wikipedia.org/static/images/icons/wikipedia.png"
            className="w-[120px]"
          ></img>
        </Link>
      </div>

      <ul className="mt-4">
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-1 !text-[rgba(0,0,0,0.8)] !text-[16px] !font-bold">
            <RiDashboardFill className="text-[18px]" />
            <span>Dashboard</span>
          </Button>
        </li>

        <li>
          <Button className="w-full !capitalize !justify-start flex gap-1 !text-[rgba(0,0,0,0.8)] !text-[16px] !font-bold">
            <RiQuestionnaireFill className="text-[18px]" />
            <span>Enquiry</span>
          </Button>
        </li>

        <li>
          <Button
            className="w-full !capitalize !justify-start flex gap-1 !text-[rgba(0,0,0,0.8)] !text-[16px] !font-bold"
            onClick={() => isOpenSubMenu(1)}
          >
            <HiArchive className="text-[18px]" />
            <span>Products</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
              <FaAngleDown
                className={`transition-all  ${
                  submenuIndex === 1 ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>
        </li>

        <Collapse isOpened={submenuIndex === 1 ? true : false}>
          <ul className="w-full" style={{ listStyle: "!disc" }}>
            <li className="w-full">
              <Button className="!w-full !capitalize !justify-start !text-[rgba(0,0,0,0.7)] !text-[14px] !pl-8 flex gap-3">
                <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>{" "}
                List 1
              </Button>
            </li>

            <li className="w-full">
              <Button className="!w-full !capitalize !justify-start !text-[rgba(0,0,0,0.7)] !text-[14px] !pl-8 flex gap-3">
                <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>{" "}
                List 2
              </Button>
            </li>
          </ul>
        </Collapse>

        <li>
          <Button
            className="w-full !capitalize !justify-start flex gap-1 !text-[rgba(0,0,0,0.8)] !text-[16px] !font-bold"
            onClick={() => isOpenSubMenu(2)}
          >
            <MdCategory className="text-[18px]" />
            <span>Category</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
              <FaAngleDown
                className={`transition-all  ${
                  submenuIndex === 2 ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>
        </li>

        <Collapse isOpened={submenuIndex === 2 ? true : false}>
          <ul className="w-full" style={{ listStyle: "!disc" }}>
            <li className="w-full">
              <Button className="!w-full !capitalize !justify-start !text-[rgba(0,0,0,0.7)] !text-[14px] !pl-8 flex gap-3">
                <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>{" "}
                Product List
              </Button>
            </li>

            <li className="w-full">
              <Button className="!w-full !capitalize !justify-start !text-[rgba(0,0,0,0.7)] !text-[14px] !pl-8 flex gap-3">
                <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>{" "}
                Add
              </Button>
            </li>
          </ul>
        </Collapse>

        <li>
          <Button className="w-full !capitalize !justify-start flex gap-1 !text-[rgba(0,0,0,0.8)] !text-[16px] !font-bold">
            <FaUsers className="text-[18px]" />
            <span>Users</span>
          </Button>
        </li>

        <li>
          <Button className="w-full !capitalize !justify-start flex gap-1 !text-[rgba(0,0,0,0.8)] !text-[16px] !font-bold">
            <IoLogOut className="text-[18px]" />
            <span>Logout</span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
