"use client";

import React from "react";
import Image from "next/image";

// Icon imports
import xIcon from "@/app/public/x-icon.svg";
import downArrowDark from "@/app/public/downArrowDark.svg";
import copyIcon from "@/app/public/copyIcon.svg";
import moveIcon from "@/app/public/moveIcon.svg";
import watchDarkIcon from "@/app/public/watchDarkIcon.svg";
import upArrowIcon from "@/app/public/upArrowDark.svg";

export default function ListActionsCard() {
  return (
    <div
      className="flex flex-col bg-gray-50 max-w-[294px]  h-[266px]
 rounded-[20px] gap-3 shadow-left-heavy px-6 py-6 mb-3 "
    >
      <div className="flex justify-center items-center ">
        <h1 className="mx-auto text-lg font-bold">List Actions</h1>
        <Image src={xIcon} alt="x icon" className="cursor-pointer" />
      </div>

      {/* List actions buttons */}
      <div className="flex flex-col gap-1 text-[#181615] text-md font-semibold -ml-4">
        <button className="flex items-center hover:bg-[#E9E7E5] hover:rounded-lg max-w-[260px] ml-1 px-4 py-1">
          <Image src={downArrowDark} alt="down arrow dark icon" />
          <Image src={upArrowIcon} alt="up arrow dark icon" />
          <span className="ml-[17px]"> Add a task</span>
        </button>

        <div className="font-normal mx-auto">
          <ul className="list-disc ">
            <li>Create on my own</li>
            <li>Create with AI</li>
            <li>Create from template</li>
          </ul>
        </div>

        <button className="flex items-center hover:bg-[#E9E7E5] hover:rounded-lg   max-w-[260px] px-4 py-1">
          <Image src={copyIcon} alt="copy icon" />
          <span className="ml-2">Copy list</span>
        </button>
        <button className="flex items-center hover:bg-[#E9E7E5] hover:rounded-lg  max-w-[260px] ml-1 px-4 py-1">
          <Image src={moveIcon} alt="move icon" />
          <span className="ml-2">Move list to...</span>
        </button>
        <button className="flex items-center hover:bg-[#E9E7E5] hover:rounded-lg  max-w-[260px] px-4 py-1">
          <Image src={watchDarkIcon} alt="watch dark icon" />
          <span className="ml-2">Watch task</span>
        </button>
      </div>

      <hr className="border" />

      <button className="font-semibold hover:bg-[#E9E7E5] hover:rounded-lg">
        Archieve this list
      </button>
    </div>
  );
}
