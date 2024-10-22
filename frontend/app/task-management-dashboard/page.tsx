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
 * @component
 */

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import mockTasks from "../sampleData/mockTasks";
import { TaskList } from "../components/drag-drop/DropTaskContainer";
import TaskContainer from "../components/ui/taskContainer";
import TaskManagementNavbar from "../components/ui/taskManagementNavbar";
import TaskManagementSidebar from "../components/ui/taskManagementSidebar";

// Icon imports
import lock from "../public/lock-icon.svg";
import projects from "../public/projects-icon.svg";
import plus from "../public/plus-icon.svg";
import bellIcon from "../public/bell-icon.svg";

export default function TaskManagementDashboard() {
  // State declarations
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isLeftDivRetracted, setIsLeftDivRetracted] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskList>(mockTasks);
  const [projectProgressBar, setProjectProgressBar] = useState<number>(6);

  /**
   * Effect to initialize client-side state and set up event listeners
   */
  useEffect(() => {
    setIsClient(true);
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Effect to save tasks to localStorage when they change
   */
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isClient]);

  /**
   * Moves a task from one container to another
   * @param {string} id - The ID of the task to move
   * @param {keyof TaskList} currentContainer - The current container of the task
   * @param {keyof TaskList} newContainer - The new container for the task
   */
  const moveTask = (
    id: string,
    currentContainer: keyof TaskList,
    newContainer: keyof TaskList
  ) => {
    setTasks((prevTasks) => {
      const taskToMove = prevTasks[currentContainer].find(
        (task) => task.id === id
      );

      if (!taskToMove) return prevTasks;

      if (currentContainer === newContainer) {
        return prevTasks;
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

  /**
   * Toggles the retraction state of the left sidebar
   */
  const toggleLeftDiv = () => {
    setIsLeftDivRetracted(!isLeftDivRetracted);
  };

  /**
   * Handles the window resize event to adjust the sidebar state
   */
  const handleResize = () => {
    if (window.innerWidth < 1400) {
      setIsLeftDivRetracted(true);
    } else {
      setIsLeftDivRetracted(false);
    }
  };

  // Return null if not on client-side to prevent hydration issues
  if (!isClient) {
    return null;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col justify-center items-center">
        <TaskManagementNavbar />

        <div className="w-full h-[85vh] flex">
          <TaskManagementSidebar
            isLeftDivRetracted={isLeftDivRetracted}
            toggleLeftDiv={toggleLeftDiv}
          />

          <div className="w-full h-full mx-10 sm:mx-4 z-0 ">
            <div className="flex flex-col rounded-[20px] w-full px-4 bg-gray-100 mt-2 shadow-lg shadow-neutral-400">
              {/* Project header section */}
              <div className="py-2 flex justify-between flex-wrap">
                {/* Project name and progress bar */}
                <div className="flex-col flex sm:flex-row items-center w-full sm:w-auto">
                  <div className="flex items-center h-full px-3 ">
                    <div className="flex items-center">
                      <h1 className="text-black text-xl md:text-2xl font-extrabold">
                        Project name
                      </h1>
                    </div>
                  </div>

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

                {/* Project settings and user icons */}
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

              {/* Task containers section */}
              <div className="flex py-5 flex-wrap">
                <div className="flex flex-wrap gap-4 ">
                  {/* To Do container */}
                  <div id="todo">
                    <TaskContainer
                      title="To Do"
                      tasks={tasks.todo}
                      moveTask={moveTask}
                      containerName="todo"
                      onAddTask={() => console.log("Add Task TODO button")}
                      buttonText="Add Task"
                      buttonIcon={plus}
                      onCollapseClick={() => console.log("Collapse button")}
                      onDotsClick={() => console.log("Dots button")}
                    />
                  </div>

                  {/* In Progress container */}
                  <div id="inProgress">
                    <TaskContainer
                      title="In Progress"
                      tasks={tasks.inProgress}
                      moveTask={moveTask}
                      containerName="inProgress"
                      onAddTask={() =>
                        console.log("Add task button In Progress")
                      }
                      buttonText="Add Task"
                      buttonIcon={plus}
                      onCollapseClick={() => console.log("Collapse button")}
                      onDotsClick={() => console.log("Dots button")}
                    />
                  </div>

                  {/* Completed container */}
                  <div id="completed">
                    <TaskContainer
                      title="Completed"
                      tasks={tasks.completed}
                      moveTask={moveTask}
                      containerName="completed"
                      onAddTask={() => console.log("Add Task button Completed")}
                      buttonText="Add Task"
                      buttonIcon={plus}
                      onCollapseClick={() => console.log("Collapse button")}
                      onDotsClick={() => console.log("Dots button")}
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
