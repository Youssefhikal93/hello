"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Icon imports
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
import leftDarkArrow from "../public/left-dark-icon.svg";
import xIcon from "../public/x-icon.svg";

// Other imports

import initialTasks from "../sampleData/initialTasks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropContainer from "../components/dropContainer/DropContainer";
import { TaskList } from "../components/dropContainer/DropContainer";

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
  const [isLeftDivRetracted, setIsLeftDivRetracted] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskList>(initialTasks);

  // Drag and drop move task function
  const moveTask = (
    id: string,
    currentContainer: keyof TaskList,
    newContainer: keyof TaskList
  ) => {
    setTasks((prevTasks) => {
      const taskToMove = prevTasks[currentContainer].find(
        (task) => task.id === id
      );

      if (!taskToMove) return prevTasks; // Handle case where task is not found

      const updatedFromTasks = prevTasks[currentContainer].filter(
        (task) => task.id !== id
      );
      const updatedToTasks = [...prevTasks[newContainer], taskToMove];

      return {
        ...prevTasks,
        [currentContainer]: updatedFromTasks,
        [newContainer]: updatedToTasks,
      };
    });
  };

  // Toggle retraction
  const toggleLeftDiv = () => {
    setIsLeftDivRetracted(!isLeftDivRetracted);
  };

  // Collapse sidebar when resizing window
  const handleResize = () => {
    if (window.innerWidth < 1400) {
      setIsLeftDivRetracted(true);
    } else {
      setIsLeftDivRetracted(false);
    }
  };

  useEffect(() => {
    // Set initial state based on window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col justify-center items-center lg:px-8 lg:py-5 md:px-8 md:py-5 ">
        <TaskManagementNavbar />

        <div className="w-full h-[85vh] flex">
          {/* LEFT SIDEBAR */}
          <div
            className={`bg-[#171929] h-full rounded-b-[20px] transition-all duration-1300 p-4 ${
              isLeftDivRetracted ? "min-w-0 w-1/20" : "min-w-[240px] w-1/6"
            } relative`}
          >
            {isLeftDivRetracted && (
              <Image
                src={rightArrow}
                alt="right arrow icon"
                className="cursor-pointer absolute -right-5 top-24 transform -translate-y-1/2 z-50 block"
                onClick={toggleLeftDiv}
                style={{ width: "auto", height: "auto" }}
              />
            )}

            <div
              className={`text-white flex flex-col justify-between h-full ${
                isLeftDivRetracted ? "hidden" : "flex"
              }`}
            >
              {/* Top sidebar container */}
              <div>
                <h1 className="font-bold text-xl py-2">Workspaces</h1>

                <div className="flex items-center pb-10 px-1">
                  <Image
                    src={userIcon}
                    alt="user icon"
                    className="w-16 h-16"
                    style={{ width: "auto", height: "auto" }}
                  />

                  <h1 className="font-bold text-2xl ml-2">Workspace name</h1>

                  <Image
                    src={leftArrow}
                    alt="left arrow icon"
                    className="cursor-pointer "
                    onClick={toggleLeftDiv}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>

                {/* Mid sidebar container  */}
                <div>
                  <div className="flex items-center justify-between pb-1 px-1">
                    <h1 className="text-2xl font-bold">BUSINESS SUITE</h1>

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

              {/* Bottom sidebar container */}
              <div className="text-xl font-light">
                <hr className="-mr-4" />
                <div className="flex items-center py-2 px-2">
                  <Image
                    src={notifications}
                    alt="notifications"
                    className="w-5 h-5 md:w-6 md:h-6" // Ensure to set width and height
                    style={{ width: "auto", height: "auto" }} // Add this line
                  />
                  <p className="ml-4">Notifications</p>
                  <div className="right-[20px] bottom-[2px] w-[11px] h-[11px] rounded-full bg-green-400 border border-white ml-3"></div>
                </div>

                <hr />

                <div className="flex items-center py-2 px-2">
                  <Image
                    src={overview}
                    alt="overview icon"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <p className="ml-4">Overview</p>
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
                      <p>Members </p>
                      <p className="ml-1">(3)</p>
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
                  <p className="ml-4">Settings</p>
                </div>

                <hr />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTAINER */}
          <div
            className={`flex flex-col flex-1 h-auto rounded-br-[40px] transition-all duration-300 w-full`}
          >
            {/* RIGHT SIDE TOP CONTAINER */}
            <div className="h-[55px] py-2 bg-[rgba(42,45,75,0.5)]">
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
                    className="w-5 h-5 md:w-6 md:h-6 "
                    style={{ width: "auto", height: "auto" }}
                  />

                  <p className="text-white ml-2 text-sm md:text-base">
                    Private
                  </p>
                </div>

                <button className="border border-black rounded-[40px] bg-white w-28 h-[29px] md:w-36">
                  <div className="flex items-center justify-center">
                    <Image
                      src={projects}
                      alt="projects button icon"
                      className="w-5 h-5 md:w-6 md:h-6" // Ensure to set width and height
                      style={{ width: "auto", height: "auto" }} // Add this line
                    />

                    <p className="text-black ml-2 text-sm md:text-base">
                      Projects
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE BOTTOM CONTAINER */}
            <div className="flex pt-5 pl-5">
              <div className="grid grid-cols-3 gap-4 ">
                {/* To Do container */}
                <div id="todo">
                  <div className="bg-gray-100 rounded-[20px] px-4 py-4 text-xl font-bold shadow-left-heavy ">
                    <div className="flex items-center justify-between">
                      <Image
                        src={leftDarkArrow}
                        alt="left dark arrow icon"
                        style={{ width: "auto", height: "auto" }}
                      />
                      <p>To Do</p>
                      <Image
                        src={xIcon}
                        alt="x icon"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>

                    <div className="py-4">
                      <hr className="bg-gray-300 h-[2px]" />
                    </div>

                    {/* Task cards container  */}
                    <div className="flex flex-col gap-2">
                      <DropContainer
                        tasks={tasks.todo}
                        moveTask={moveTask}
                        containerName="todo"
                      />
                    </div>

                    {/* TO-DO container button */}
                    <div className="flex justify-end mt-4">
                      <button className="flex items-center justify-center rounded-[40px] text-white text-lg font-semibold bg-[#2A2D4B] w-28 h-[29px] md:w-36 py-4">
                        <Image
                          src={plus}
                          alt="plus icon"
                          className="cursor-pointer mr-2"
                          style={{ width: "auto", height: "auto" }}
                        />
                        Add Task
                      </button>
                    </div>
                  </div>
                </div>

                {/* In Progress container */}
                <div id="in-progress">
                  <div className="bg-gray-100 rounded-[20px] px-4 py-4 text-xl font-bold shadow-left-heavy">
                    <div className="flex items-center justify-between">
                      <Image
                        src={leftDarkArrow}
                        alt="left dark arrow icon"
                        style={{ width: "auto", height: "auto" }}
                      />
                      <p>In Progress</p>
                      <Image
                        src={xIcon}
                        alt="x icon"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>

                    <div className="py-4">
                      <hr className="bg-gray-300 h-[2px]" />
                    </div>

                    {/* Task cards container  */}
                    <DropContainer
                      tasks={tasks.inProgress}
                      moveTask={moveTask}
                      containerName="inProgress"
                    />

                    {/* IN PROGRESS container button */}
                    <div className="flex justify-end mt-4">
                      <button className="flex items-center justify-center rounded-[40px] text-white text-lg font-semibold bg-[#2A2D4B] w-28 h-[29px] md:w-36 py-4">
                        <Image
                          src={plus}
                          alt="plus icon"
                          className="cursor-pointer mr-2"
                          style={{ width: "auto", height: "auto" }}
                        />
                        Add Task
                      </button>
                    </div>
                  </div>
                </div>

                {/* Completed container */}
                <div id="completed">
                  <div className="bg-gray-100 h-auto  rounded-[20px] px-4 py-4 text-xl font-bold shadow-left-heavy ">
                    <div className="flex items-center justify-between">
                      <Image
                        src={leftDarkArrow}
                        alt="left dark arrow icon"
                        style={{ width: "auto", height: "auto" }}
                      />
                      <p>Completed</p>
                      <Image
                        src={xIcon}
                        alt="x icon"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>

                    <div className="py-4">
                      <hr className="bg-gray-300 h-[2px]" />
                    </div>

                    {/* Task cards container  */}
                    <div className="flex flex-col gap-2">
                      <DropContainer
                        tasks={tasks.completed}
                        moveTask={moveTask}
                        containerName="completed"
                      />
                    </div>

                    {/* COMPLETED container button */}
                    <div className="flex justify-end mt-4">
                      <button className="flex items-center justify-center rounded-[40px] text-white text-lg font-semibold bg-[#2A2D4B] w-28 h-[29px] md:w-36 py-4">
                        <Image
                          src={plus}
                          alt="plus icon"
                          className="cursor-pointer mr-2"
                          style={{ width: "auto", height: "auto" }}
                        />
                        Add Task
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
