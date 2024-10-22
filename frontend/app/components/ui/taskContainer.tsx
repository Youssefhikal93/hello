import React from "react";
import Image from "next/image";
import DropTaskContainer from "../drag-drop/DropTaskContainer";

import collapseIcon from "@/app/public/collapseIcon.svg";
import dotsIcon from "@/app/public/dotsIcon.svg";
import plusIcon from "@/app/public/plus-icon.svg";
import { TaskList } from "../drag-drop/DropTaskContainer";
import { Member } from "../drag-drop/DropTaskContainer";

// Interface defining the properties for the TaskContainer component
interface TaskContainerProps {
  title: string; // Title of the task container
  tasks: Array<{
    id: string; // Unique identifier for the task
    labelNames: string[]; // Labels associated with the task
    name: string; // Name of the task
    members: Member[]; // List of members assigned to the task
    date: string; // Date associated with the task
    checklist: number; // Number of checklist items
    position: number; // Position of the task in the list
  }>;
  moveTask: (
    id: string,
    currentContainer: keyof TaskList,
    newContainer: keyof TaskList
  ) => void; // Function to move a task between containers
  containerName: keyof TaskList; // Name of the container
  onAddTask?: () => void; // Optional function to handle adding a new task
  buttonText?: string; // Optional text for the button
  buttonIcon?: string | React.ReactNode; // Optional icon for the button
  onCollapseClick?: () => void; // Optional function for collapse button click
  onDotsClick?: () => void; // Optional function for dots button click
}

// Functional component for rendering a task container
const TaskContainer: React.FC<TaskContainerProps> = ({
  title,
  tasks,
  moveTask,
  containerName,
  onAddTask,
  buttonText,
  buttonIcon,
  onCollapseClick,
  onDotsClick,
}) => {
  return (
    <div className="bg-gray-200 min-w-[275px] sm:w-[360px] rounded-[20px] px-4 py-4 text-xl font-bold shadow-left-heavy">
      <div className="flex items-center justify-between">
        <p className="text-gray-500">{title}</p>
        <div className="flex gap-3">
          {/* Icons for collapsing and additional options */}
          <button onClick={onCollapseClick}>
            <Image
              src={collapseIcon}
              alt="collapse icon"
              style={{ width: "auto", height: "auto" }}
            />
          </button>

          <button onClick={onDotsClick}>
            <Image
              src={dotsIcon}
              alt="dots icon"
              style={{ width: "auto", height: "auto" }}
            />
          </button>
        </div>
      </div>

      <div className="pt-4 pb-2">
        <hr className="bg-gray-300 h-[2px]" />
      </div>

      {/* Task cards container */}
      <div className="h-auto">
        <DropTaskContainer
          tasks={tasks}
          moveTask={moveTask}
          containerName={containerName}
        />
      </div>

      {/* Container button for adding a new task */}
      <div className="flex justify-end">
        <button
          className="flex items-center justify-center rounded-[40px]
         text-white text-base sm:text-lg font-semibold bg-[#2A2D4B] w-28 h-[29px] md:w-36 py-4"
          onClick={onAddTask}
        >
          <Image
            src={buttonIcon || plusIcon} // Use buttonIcon or fallback to plusIcon
            alt="plus icon"
            className="cursor-pointer mr-2"
            style={{ width: "auto", height: "auto" }}
          />
          {buttonText} {/* Display button text */}
        </button>
      </div>
    </div>
  );
};

export default TaskContainer;
