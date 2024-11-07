"use client";

import React, { useState } from "react";
import Image from "next/image";

// Icon imports
import assigneesIcon from "@/app/public/assigneesIcon.svg";
import deadlineIcon from "@/app/public/deadlineIcon.svg";
import priorityIcon from "@/app/public/priorityIcon.svg";
import bellIcon from "@/app/public/bell-icon.svg";
import editIcon from "@/app/public/editIcon.svg";

// Define props interface
interface AddTaskCardProps {
  listName: string; // Define the type for listName as a string
}

export default function AddTaskCard({ listName }: AddTaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("My first task");
  // Handle title change
  const handleChange = (event: any) => {
    setTitle(event.target.value);
  };

  // Handle title click to enter edit mode
  const handleTitleClick = () => {
    setIsEditing(true);
  };

  // Handle input blur to exit edit mode
  const handleBlur = () => {
    setIsEditing(false);
  };
  return (
    <div
      className={`cursor-pointer flex flex-col bg-gray-50 sm:w-[330px] 
     rounded-[20px] py-2 gap-3 shadow-left-heavy px-4 mb-3 `}
    >
      {/* Label container */}
      <div className="flex gap-1"></div>

      {/* Task name & icons container  */}
      <div>
        <div className="flex justify-between items-center">
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
              className="font-bold text-xl max-w-[200px] border-b"
            />
          ) : (
            <h1
              className="font-bold text-xl max-w-[200px] cursor-pointer relative hover:text-gray-400"
              onClick={handleTitleClick}
            >
              {title}
              <span className="absolute left-full ml-2 opacity-0 hover:opacity-100 transition-opacity">
                <Image src={editIcon} alt="edit icon" width={20} height={20} />
              </span>
            </h1>
          )}
          <Image src={bellIcon} alt="bell icon" width={20} height={20} />
        </div>

        <div className="flex gap-1 items-center text-sm font-light mb-1">
          <span>in list</span>

          <span className="italic underline hover:font-bold hover:text-[#BD71D4]">
            {listName}
          </span>
        </div>

        <hr className="border-t-2 mt-2" />
      </div>

      {/* Add task buttons */}
      <div className="flex flex-col text-[#827E79] text-sm font-semibold -mt-2">
        <button className="flex items-center hover:bg-[#dddcdb] hover:rounded-lg py-1 px-2 max-w-[200px]">
          <Image
            src={assigneesIcon}
            alt="assignees icon"
            width={20}
            height={20}
          />
          <span className="ml-[8px]"> Add assignees</span>
        </button>

        <button className="flex items-center hover:bg-[#dddcdb] hover:rounded-lg py-1 px-2 max-w-[200px]">
          <Image
            src={deadlineIcon}
            alt="deadline icon"
            width={20}
            height={20}
          />
          <span className="ml-[8px]">Add a deadline</span>
        </button>

        <div className="flex justify-between">
          <button className="flex items-center hover:bg-[#dddcdb] hover:rounded-lg py-1 px-2 max-w-[200px]">
            <Image
              src={priorityIcon}
              alt="priority icon"
              width={20}
              height={20}
            />
            <span className="ml-2"> Add a priority</span>
          </button>

          <button className="border border-black hover:bg-[#dddcdb] rounded-xl py-1 px-4 max-w-[200px]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
