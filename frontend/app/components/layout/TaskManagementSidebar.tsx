"use client";

import React from "react";
import Image from "next/image";
import userIcon from "@/app/public/user-icon.png";
import leftArrow from "@/app/public/left-arrow.svg";
import rightArrow from "@/app/public/right-arrow.svg";
import upArrow from "@/app/public/up-arrow.svg";
import notifications from "@/app/public/notifications.svg";
import overview from "@/app/public/overview.svg";
import members from "@/app/public/members.svg";
import settings from "@/app/public/settings.svg";
import plus from "@/app/public/plus-icon.svg";

interface SidebarProps {
  isLeftDivRetracted: boolean; // State to determine if the sidebar is retracted
  toggleLeftDiv: () => void; // Function to toggle the sidebar
}

const TaskManagementSidebar: React.FC<SidebarProps> = ({
  isLeftDivRetracted,
  toggleLeftDiv,
}) => {
  return (
    <div
      className={`bg-[#282624] h-[685px] rounded-b-[20px] transition-all duration-1300 p-4 z-10 sm:z-0  ${
        isLeftDivRetracted
          ? "min-w-0 w-1/20"
          : "min-w-full sm:min-w-[260px] w-1/6"
      } absolute sm:relative`}
    >
      {isLeftDivRetracted && (
        <Image
          src={rightArrow}
          alt="right arrow icon"
          className="cursor-pointer absolute -right-5 top-24 transform -translate-y-1/2  block"
          onClick={toggleLeftDiv}
          style={{ width: "auto", height: "auto" }}
        />
      )}

      <div
        className={`text-white flex flex-col justify-between h-[650px] ${
          isLeftDivRetracted ? "hidden" : "flex"
        }`}
      >
        {/* Top sidebar container */}
        <div>
          <div className="flex items-center pb-10 px-1">
            <Image
              src={userIcon}
              alt="user icon"
              className="w-10 h-10"
              style={{ width: "auto", height: "auto" }}
            />
            <h1 className="font-bold text-xl ml-2">Workspace name</h1>
            <Image
              src={leftArrow}
              alt="left arrow icon"
              className="cursor-pointer ml-auto"
              onClick={toggleLeftDiv}
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          {/* Mid sidebar container */}
          <div>
            <div className="flex items-center justify-between pb-1 px-1">
              <h1 className="text-xl font-bold">BUSINESS SUITE</h1>
              <Image
                src={upArrow}
                alt="up arrow"
                className="cursor-pointer"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <hr />
            <div className="pl-5">
              <div className="flex flex-col items-end">
                <h1 className="font-bold text-lg py-2">
                  Project planning and management
                  <span className="text-xs font-light ml-1">
                    (Trello, ClickUp)
                  </span>
                </h1>
                <p className="text-sm font-light">Task creation & management</p>
              </div>
              <p className="py-3 text-lg font-light">Outsourcing</p>
              <p className="pb-4 text-lg font-light">Overview</p>
              <hr />
            </div>
          </div>
        </div>

        {/* Bottom sidebar container */}
        <div className="text-xl font-light">
          <hr className="-mr-4" />
          <div className="flex items-center py-2 px-2">
            <Image
              src={notifications}
              alt="notifications"
              className="w-5 h-5 md:w-6 md:h-6"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="ml-4 text-lg">Notifications</p>
            <div className="right-[20px] bottom-[2px] w-[11px] h-[11px] rounded-full bg-green-400 border border-white ml-3"></div>
          </div>
          <hr />
          <div className="flex items-center py-2 px-2">
            <Image
              src={overview}
              alt="overview icon"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="ml-4 text-lg">Overview</p>
          </div>
          <hr />
          <div className="flex items-center justify-between py-2 px-2">
            <div className="flex items-center">
              <Image
                src={members}
                alt="members icon"
                style={{ width: "auto", height: "auto" }}
              />
              <span className="flex ml-3">
                <p className="text-lg">Members </p>
                <span className="ml-1">(3)</span>
              </span>
            </div>
            <Image
              src={plus}
              alt="plus icon"
              className="cursor-pointer"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <hr />
          <div className="flex items-center py-2 px-2">
            <Image
              src={settings}
              alt="settings icon"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="ml-4 text-lg">Settings</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default TaskManagementSidebar;
