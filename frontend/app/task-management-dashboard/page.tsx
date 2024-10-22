/**
 * TaskManagementDashboard Component
 *
 * This component serves as the main dashboard for managing tasks within the application.
 * It provides a drag-and-drop interface for organizing tasks into different categories:
 * - To Do
 * - In Progress
 * - Completed
 *
 * The component utilizes the react-dnd library for drag-and-drop functionality and
 * displays task cards for each task in the respective categories.
 *
 * It also includes a responsive sidebar for navigation and workspace management.
 *
 * Usage:
 * <TaskManagementDashboard />
 */

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import mockTasks from "../sampleData/mockTasks";
import DropTaskContainer from "../components/drag-drop/DropTaskContainer";
import { TaskList } from "../components/drag-drop/DropTaskContainer";
import TaskContainer from "../components/ui/taskContainer";

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
import bellIcon from "../public/bell-icon.svg";
import collapseIcon from "../public/collapseIcon.svg";
import dotsIcon from "../public/dotsIcon.svg";

const TaskManagementNavbar = () => {
  return (
    <div className="flex w-full h-[60px] justify-between items-center bg-[#2A2D4B] lg:gap-2 px-2">
      <div className="flex px-4 gap-4">
        <h1 className="text-3xl font-bold">
          <span className="text-white">Flow</span>
          <span className="bg-gradient-to-r from-white to-[#FFD700] bg-clip-text text-transparent">
            erWork
          </span>
        </h1>
      </div>
    </div>
  );
};

export default function TaskManagementDashboard() {
  const [isLeftDivRetracted, setIsLeftDivRetracted] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskList>(mockTasks);
  const [projectProgressBar, setProjectProgressBar] = useState(5);

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

      // Check if moving to the same container
      if (currentContainer === newContainer) {
        return prevTasks; // No changes needed
      }

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

  // Toggle left sidebar retraction
  const toggleLeftDiv = () => {
    setIsLeftDivRetracted(!isLeftDivRetracted);
  };

  // Collapse left sidebar when resizing window
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
      <div className="flex flex-col justify-center items-center">
        <TaskManagementNavbar />

        <div className="w-full h-[85vh] flex">
          {/* LEFT SIDEBAR */}
          <div
            className={`bg-[#171929] h-full rounded-b-[20px] transition-all duration-1300 p-4 z-50 ${
              isLeftDivRetracted
                ? "min-w-0 w-1/20"
                : "min-w-full sm:min-w-[260px] w-1/6"
            } absolute sm:relative`}
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
                    className="cursor-pointer ml-auto"
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
                    className="w-5 h-5 md:w-6 md:h-6"
                    style={{ width: "auto", height: "auto" }}
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
          <div className="w-full h-full mx-10 sm:mx-4 z-0 ">
            <div className="flex flex-col rounded-[20px] w-full px-4 bg-gray-100 mt-2 shadow-lg shadow-neutral-400">
              {/* RIGHT SIDE TOP CONTAINER */}
              <div className="py-2 flex justify-between flex-wrap">
                <div className="flex-col flex sm:flex-row items-center w-full sm:w-auto">
                  <div className="flex items-center h-full px-3 ">
                    <div className="flex items-center">
                      <h1 className="text-black text-xl md:text-2xl font-extrabold">
                        Project name
                      </h1>
                    </div>
                  </div>

                  {/* Project progress bar */}
                  <div className="flex gap-1 pl-5 pt-1 sm:pt-0 items-center">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div
                        key={index}
                        className={`h-4 w-4 md:h-5 md:w-10 ${
                          index < Number(projectProgressBar)
                            ? index === 0
                              ? "bg-yellow-200"
                              : index === 1
                              ? "bg-yellow-300"
                              : index === 2
                              ? "bg-lime-200"
                              : index === 3
                              ? "bg-lime-300"
                              : index === 4
                              ? "bg-lime-400"
                              : "bg-lime-500"
                            : "bg-gray-300"
                        } ${
                          index === 0
                            ? "rounded-l-full"
                            : index === 5
                            ? "rounded-r-full"
                            : ""
                        }`}
                      />
                    ))}

                    {/* Bell icon */}
                    <div className="relative pl-2 sm:pl-5">
                      <Image
                        src={bellIcon}
                        alt="bell icon"
                        className="w-5 h-5"
                      />
                      <div className="absolute left-[20px] sm:left-[30px] top-[1px] w-[9px] h-[9px] rounded-full bg-green-400 border border-black"></div>
                    </div>
                  </div>
                </div>

                {/* User Icons */}
                <div className="flex sm:px-4 items-center flex-wrap w-full sm:w-auto">
                  <div className="flex items-center px-4 pl-8">
                    <Image
                      src={lock}
                      alt="lock icon"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <p className="text-black ml-2 text-sm md:text-base">
                      Private
                    </p>
                  </div>

                  <button className="border border-black rounded-[40px] bg-[#171929] w-44 h-[27px] mt-2 sm:mt-0">
                    <div className="flex items-center justify-center">
                      <Image
                        src={projects}
                        alt="projects button icon"
                        style={{ width: "17px", height: "auto" }}
                      />
                      <p className="text-white ml-2 font-semibold text-sm md:text-base">
                        All My Projects
                      </p>
                    </div>
                  </button>

                  {/* User Circles */}
                  <div className="flex items-center h-[30px] space-x-[-20px] ml-10 relative mt-2 sm:mt-0">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">BIO</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">OM</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">MP</span>
                    </div>
                    <div className="absolute -right-[1px] top-[25px] w-[8px] h-[8px] rounded-full bg-green-400 border border-black"></div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE BOTTOM CONTAINER */}
              <div className="flex py-5 flex-wrap">
                <div className="flex flex-wrap gap-4 ">
                  {/* To Do container */}
                  <div id="todo">
                    <TaskContainer
                      title="To Do"
                      tasks={tasks.todo}
                      moveTask={moveTask}
                      containerName="todo"
                      onAddTask={() => console.log("TODO")}
                      buttonText="Add Task" // Custom button text
                      buttonIcon={plus} // Custom button icon
                    />
                  </div>

                  {/* In Progress container */}
                  <div id="inProgress">
                    <TaskContainer
                      title="In Progress"
                      tasks={tasks.inProgress}
                      moveTask={moveTask}
                      containerName="inProgress"
                      onAddTask={() => console.log("In Progress")}
                      buttonText="Add Task" // Custom button text
                      buttonIcon={plus} // Custom button icon
                    />
                  </div>

                  {/* Completed container  */}
                  <div id="completed">
                    <TaskContainer
                      title="Completed"
                      tasks={tasks.completed}
                      moveTask={moveTask}
                      containerName="completed"
                      onAddTask={() => console.log("Completed")}
                      buttonText="Add Task" // Custom button text
                      buttonIcon={plus} // Custom button icon
                    />
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
