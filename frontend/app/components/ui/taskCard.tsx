/**
 * TaskCard Component
 *
 * A component that displays a task card with labels, task name, members, date, and checklist.
 *
 * Props:
 * - labelNames: Array of labels associated with the task.
 * - taskName: Name of the task.
 * - position: Count of attachments.
 * - members: Array of member objects with IDs.
 * - date: Date of the task.
 * - checklist: Count of checklist items.
 *
 * Usage:
 * <TaskCard
 *   labelNames={['Urgent', 'Important']}
 *   taskName="Finish Documentation"
 *   position={3}
 *   members={[{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]}
 *   date={new Date()}
 *   checklist={5}
 * />
 */

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useDrag } from "react-dnd";

import attachementsIcon from "../../public/attachments-icon.svg";
import bellIcon from "../../public/bell-icon.svg";

type Member = {
  id: number;
  name: string;
};

type TaskCardProps = {
  labelNames: string[]; // Array of labels associated with the task
  taskName: string; // Name of the task
  position: number; // Count of attachments
  members: Member[]; // Array of member objects with IDs
  date: Date; // Date of the task
  checklist: number; // Count of checklist items
  id: string; // Unique identifier for the task
  currentContainer: string; // Current container of the task
};

const TaskCard: React.FC<TaskCardProps> = ({
  labelNames,
  taskName,
  position,
  members,
  date,
  checklist,
  id,
  currentContainer,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id, currentContainer },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  // Members icons colors
  const colors = [
    "bg-rose-600",
    "bg-blue-600",
    "bg-green-600",
    "bg-yellow-600",
    "bg-purple-600",
    "bg-teal-600",
    "bg-orange-600",
    "bg-indigo-600",
    "bg-pink-600",
    "bg-gray-600",
  ];

  // Label colors
  const labelColors = [
    "#C6EDFB", // Light Blue
    "#68BCD8", // Blue
    "#4DC693", // Green
    "#FFD700", // Gold
    "#FF6347", // Tomato
    "#6A5ACD", // Slate Blue
    "#FF69B4", // Hot Pink
    "#20B2AA", // Light Sea Green
    "#FF4500", // Orange Red
    "#9370DB", // Medium Purple
  ];

  // Create a ref with useRef
  const ref = useRef<HTMLDivElement>(null);
  drag(ref);

  return (
    <div
      ref={ref}
      className={`cursor-pointer flex flex-col bg-gray-50 sm:w-[330px] sm:h-[205px] rounded-[20px] py-5 gap-3 shadow-left-heavy px-4 mb-3 ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {/* Label container */}
      <div className="flex gap-1">
        {labelNames.map((label, index) => (
          <div
            key={index}
            className={`w-[51px] h-[6px] rounded-[20px]`}
            style={{ backgroundColor: labelColors[index % labelColors.length] }} // Cycle through colors
          ></div>
        ))}
      </div>

      {/* Task name & icons container  */}
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">{taskName}</h1>
          <Image src={bellIcon} alt="bell icon" />
        </div>

        <div className="flex">
          <Image src={attachementsIcon} alt="attachments icon" />
          <span className="pl-1">{position}</span>
        </div>
      </div>

      {/* Members container  */}
      <div className="flex -mt-1">
        <h1 className="font-bold text-lg sm:text-xl">Members: </h1>

        <div className="flex gap-1 items-center ml-2 relative">
          {members.map((member, index) => (
            <div
              key={member.id}
              className={`w-5 h-5 rounded-full ${
                colors[index % colors.length]
              } flex items-center justify-center p-3`}
            >
              <span className="text-white font-bold text-[9px]">
                {member.name
                  .split(" ")
                  .map((name) => name.charAt(0).toUpperCase())
                  .join("")}
              </span>
            </div>
          ))}
          <div className="absolute -right-[2px] bottom-[2px] w-[6px] h-[6px] rounded-full bg-green-400 border border-black"></div>
        </div>
      </div>

      {/* Date container */}
      <div className="flex -mt-1">
        <h1 className="font-bold text-lg sm:text-xl">Date: </h1>
        <span className="flex ml-2 text-sm items-center">
          1.{" "}
          <p className="ml-1">
            {`${date.getDate()} ${date.toLocaleString("default", {
              month: "short",
            })} ${date
              .getFullYear()
              .toString()
              .slice(-2)} at ${date.getHours()}:${date
              .getMinutes()
              .toString()
              .padStart(2, "0")}`}
          </p>
        </span>
      </div>

      {/* Checklist container  */}
      <div className="flex items-center gap-1 -mt-3">
        <h1 className="font-bold text-lg sm:text-xl">Checklist:</h1>
        <div className="flex gap-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={`h-[12px] w-[8px] sm:h-4 sm:w-4 ${
                index < Number(checklist) ? "bg-[#2A2D4B]" : "bg-gray-300"
              } ${
                index === 0
                  ? "rounded-l-full"
                  : index === 9
                  ? "rounded-r-full"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
