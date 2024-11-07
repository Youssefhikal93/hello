"use client";

import Image from "next/image";
import logoIcon from "@/app/public/logo.svg";
import downArrowIcon from "@/app/public/down-arrow.svg";
import connectIcon from "@/app/public/connectIcon.svg";
import userIconPlaceholder from "@/app/public/userIconPlaceholder.svg";

const TaskManagementNavbar = () => {
  return (
    <div className="w-full">
      <div
        className="flex flex-col sm:flex-row w-full min-h-[75px]
     justify-between items-center bg-[#181615] lg:gap-2 px-2 pb-2"
      >
        {/* Left side */}
        <div className="flex px-4 gap-4 md:gap-16 flex-col sm:flex-row">
          <div>
            <Image
              src={logoIcon}
              alt="flower icon"
              className="min-w-[150px]"
              priority
            />
          </div>

          <div className="text-white flex gap-6">
            <button className="flex items-center gap-2 text-lg font-bold">
              Create
              <Image src={downArrowIcon} alt="down arrow icon" />
            </button>

            <button className="flex items-center gap-2 text-lg font-bold">
              Manage
              <Image src={downArrowIcon} alt="down arrow icon" />
            </button>

            <button className="flex items-center gap-2 text-lg font-bold">
              Explore
              <Image src={downArrowIcon} alt="down arrow icon" />
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex gap-6 px-2 min-w-[80px] mt-4 sm:mt-0 items-center">
          <Image src={connectIcon} alt="connect icon" />

          <button className="text-xl text-white font-bold ">Sign up</button>

          <Image
            src={userIconPlaceholder}
            alt="user placeholder icon"
            className="w-10 h-10 sm:h-auto sm:w-auto"
          />
        </div>
      </div>

      <div className="flex w-full min-h-[49px] px-4 items-center bg-[#282624]">
        <p className="font-bold text-lg py-2 text-white">Workspaces</p>
      </div>
    </div>
  );
};

export default TaskManagementNavbar;
