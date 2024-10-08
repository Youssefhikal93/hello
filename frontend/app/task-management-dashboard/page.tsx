"use client";

import React, { useState } from "react";
import Image from "next/image";
import lock from "../public/lock-icon.svg";
import projects from "../public/projects-icon.svg";
import leftArrow from "../public/left-arrow.svg";
import rightArrow from "../public/right-arrow.svg";
import userIcon from "../public/user-icon.png";
import upArrow from "../public/up-arrow.svg";
import notifications from "../public/notifications.svg";
import overview from "../public/overview.svg";
import members from "../public/members.svg";
import settings from "../public/settings.svg";
import plus from "../public/plus-icon.svg";

const TaskManagementNavbar = () => {
  return (
    <div className="flex w-full h-[80px] justify-between items-center bg-[#2A2D4B] rounded-t-[40px] lg:gap-2 px-2">
      <div className="flex px-4 gap-4">
        <h1 className="text-3xl font-bold">
          <span className="text-white">Flow</span>
          <span className="bg-gradient-to-r from-white to-[#FFD700] bg-clip-text text-transparent">
            erWork
          </span>
        </h1>
      </div>

      {/* User Icons */}
      <div className="flex px-4">
        <div className="bg-slate-400 h-12 w-[140px] rounded-3xl border border-white">
          <div className="relative bg-slate-700 rounded-full px-3 py-2">
            <div className="absolute inset-[1px] bg-gray-200/20 rounded-full"></div>

            <div className="flex items-center h-[30px] space-x-[-20px] ml-1">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S1</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">BIO</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-white font-bold text-sm">OM</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MP</span>
              </div>
              <div className="absolute right-[20px] bottom-[2px] w-[11px] h-[11px] rounded-full bg-green-400 border border-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TaskManagementDashboard() {
  const [isLeftDivRetracted, setIsLeftDivRetracted] = useState(false); // State to control retraction

  const toggleLeftDiv = () => {
    setIsLeftDivRetracted(!isLeftDivRetracted); // Toggle retraction
  };
  return (
    <div className="flex flex-col justify-center items-center lg:px-8 lg:py-5 md:px-8 md:py-5 ">
      <TaskManagementNavbar />

      <div className="w-full h-[85vh] flex">
        {/* Left sidebar */}
        <div
          className={`bg-[#171929] h-full rounded-b-[20px] transition-all duration-1300 p-4 ${
            isLeftDivRetracted ? "w-1/20" : "w-1/6"
          } relative`}
        >
          {isLeftDivRetracted && (
            <Image
              src={rightArrow}
              alt="right arrow icon"
              className="cursor-pointer absolute -right-5 top-24 transform -translate-y-1/2 z-50 block"
              onClick={toggleLeftDiv}
            />
          )}

          <div
            className={`text-white flex flex-col justify-between h-full ${
              isLeftDivRetracted ? "hidden" : "flex"
            }`}
          >
            {/* Top container */}
            <div>
              <h1 className="font-bold text-xl py-2">Workspaces</h1>

              <div className="flex items-center pb-10 px-1">
                <Image src={userIcon} alt="user icon" className="w-16 h-16" />

                <h1 className="font-bold text-2xl ml-2">Workspace name</h1>

                <Image
                  src={leftArrow}
                  alt="left arrow icon"
                  className="cursor-pointer "
                  onClick={toggleLeftDiv}
                />
              </div>

              {/* Mid container  */}
              <div>
                <div className="flex items-center justify-between pb-1 px-1">
                  <h1 className="text-2xl font-bold">BUSINESS SUITE</h1>

                  <Image
                    src={upArrow}
                    alt="up arrow"
                    className="cursor-pointer"
                  />
                </div>

                <hr />

                <div className="pl-5">
                  <div className="flex flex-col items-end">
                    <h1 className="font-bold text-xl py-2">
                      Project planning and management
                      <span className="text-xs font-light ml-1">
                        (Trello, ClickUp)
                      </span>
                    </h1>

                    <p className="text-sm font-light">
                      Task creation & management
                    </p>
                  </div>

                  <p className="py-3 text-xl font-light">Outsourcing</p>

                  <p className="pb-4 text-xl font-light">Overview</p>

                  <hr />
                </div>
              </div>
            </div>

            {/* Bottom container */}
            <div className="text-xl font-light">
              <hr className="-mr-4" />
              <div className="flex items-center py-2 px-2">
                <Image src={notifications} alt="notifications" />
                <p className="ml-4">Notifications</p>
                <div className="right-[20px] bottom-[2px] w-[11px] h-[11px] rounded-full bg-green-400 border border-white ml-3"></div>
              </div>

              <hr />

              <div className="flex items-center py-2 px-2">
                <Image src={overview} alt="overview icon" />
                <p className="ml-4">Overview</p>
              </div>

              <hr />

              <div className="flex items-center justify-between py-2 px-2">
                <div className="flex items-center">
                  <Image src={members} alt="members icon" />
                  <span className="flex ml-3">
                    <p>Members </p>
                    <p className="ml-1">(3)</p>
                  </span>
                </div>
                <Image src={plus} alt="plus icon" className="cursor-pointer" />
              </div>

              <hr />

              <div className="flex items-center py-2 px-2">
                <Image src={settings} alt="settings icon" />
                <p className="ml-4">Settings</p>
              </div>

              <hr />
            </div>
          </div>
        </div>

        {/* Right container */}
        <div
          className={`flex flex-col h-full rounded-br-[40px] transition-all duration-300 w-full`}
        >
          {/* Right top div */}
          <div className="h-[55px] bg-[rgba(42,45,75,0.5)]">
            <div className="flex items-center h-full px-3 flex-wrap">
              <div className="flex items-center">
                <h1 className="text-white text-xl font-extrabold md:text-2xl">
                  Project name A
                </h1>
              </div>

              <div className="flex items-center px-4 pl-8">
                <Image
                  src={lock}
                  alt="lock icon"
                  className="w-5 h-5 md:w-6 md:h-6"
                />

                <p className="text-white ml-2 text-sm md:text-base">Private</p>
              </div>

              <button className="border border-black rounded-[40px] bg-white w-28 h-[29px] md:w-36">
                <div className="flex items-center justify-center">
                  <Image
                    src={projects}
                    alt="projects button icon"
                    className="w-5 h-5 "
                  />

                  <p className="text-black ml-2 text-sm md:text-base">
                    Projects
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="bg-white flex-1">bottom</div>
        </div>
      </div>
    </div>
  );
}
