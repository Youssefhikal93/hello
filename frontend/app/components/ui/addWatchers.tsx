"use client";

import React, { useState } from "react";
import Image from "next/image";
import closeIcon from "@/app/public/x-icon.svg";

interface WatcherProps {
  fullName: string;
  username: string;
  backgroundColor?: string;
}

function Watchers({
  fullName,
  username,
  backgroundColor = "bg-green-400",
}: WatcherProps) {
  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="flex flex-col bg-[#FFFFFF] w-[324px] min-h-[237px] sm:w-[371px] 
                 rounded-[20px] py-5 gap-3 px-4 mb-3 border border-black relative"
    >
      {/* Top part  */}
      <div className="flex items-center justify-between bg-[#E2E2E2] rounded-t-[20px] -mx-4 -mt-5 px-4 pb-10">
        <div
          className={`sm:w-28 sm:h-28 w-[100px] h-[100px] rounded-full ${backgroundColor} flex items-center
         justify-center absolute bottom-28 left-8 `}
        >
          <span className="text-white font-bold text-[47px]">{initials}</span>
        </div>

        <div className="ml-32 sm:ml-[150px] mt-8 -mb-8 flex-grow">
          <p className="text-lg sm:text-xl font-bold break-words">{fullName}</p>
          <p className="text-[#171929] truncate">@{username}</p>
        </div>

        <button className="ml-2 flex-shrink-0">
          <Image src={closeIcon} alt="Close" />
        </button>
      </div>

      {/* Bottom part  */}
      <div className="flex flex-col flex-1 justify-start gap-3 mt-10">
        <button className="font-bold flex items-start text-left">
          Edit profile info
        </button>

        <hr />
        <button className="font-bold flex items-start text-left">
          Remove from task
        </button>
      </div>
    </div>
  );
}

export default function AddWatchers() {
  const [selectedWatcher, setSelectedWatcher] = useState<WatcherProps | null>(
    null
  );

  // Members icons colors
  const iconColors = [
    "bg-[#E15252]", // Rose
    "bg-[#5294E1]", // Blue
    "bg-[#52E194]", // Green
    "bg-[#E1C952]", // Yellow
    "bg-[#9452E1]", // Purple
    "bg-[#52E1E1]", // Teal
    "bg-[#E17652]", // Orange
    "bg-[#7652E1]", // Indigo
    "bg-[#E194E1]", // Pink
    "bg-[#A0A0A0]", // Gray
  ];

  // Member names
  const names = [
    "Berta Fernandez",
    "Ohiana Lopez",
    "Carlos Mendoza",
    "Elena Rodríguez",
    "Javier Morales",
    "Sofía Navarro",
    "Miguel Ángel Torres",
    "Isabel Gómez",
    "Alejandro Ruiz",
  ];

  const handleWatcherClick = (name: string, index: number) => {
    setSelectedWatcher({
      fullName: name,
      username: name.toLowerCase().replace(" ", ""),
      backgroundColor: iconColors[index % iconColors.length],
    });
  };

  return (
    <div
      className="flex flex-col bg-[#FFFFFF] sm:w-[360px] sm:h-[514px]
                rounded-[20px] py-5 gap-3 shadow-left-heavy px-4 mb-3 ml-10"
    >
      <div className="absolute z-50 -ml-7 mt-15 sm:ml-0 sm:mt-0">
        {selectedWatcher && (
          <Watchers
            fullName={selectedWatcher.fullName}
            username={selectedWatcher.username}
            backgroundColor={selectedWatcher.backgroundColor}
          />
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="w-2" />
        <p className="text-2xl font-bold">Add watchers</p>
        <Image src={closeIcon} alt="Close" />
      </div>

      {/* Search watchers input */}
      <div className="flex justify-center mt-5">
        <input
          placeholder="Search watchers..."
          className="border-2 rounded-full border-blue-300 pl-3 h-[40px] w-[270px] sm:w-[320px]"
          type="text"
        />
      </div>

      {/* Task watchers list */}
      <div className="flex flex-col gap-1 max-h-[350px]">
        <p className="text-xl font-bold sticky top-0 bg-white z-10 py-2">
          Task watchers:
        </p>

        <div className="flex flex-col gap-1 -mt-1 px-2 sm:px-1 overflow-y-auto">
          {names.map((name, index) => {
            const initials = name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <div
                key={name}
                className="flex items-center justify-between border border-black
                 p-1 px-2 rounded-[20px] cursor-pointer hover:bg-[#E2E2E2]"
                onClick={() => handleWatcherClick(name, index)}
              >
                <div className="flex items-center">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${
                      iconColors[index % iconColors.length]
                    } flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-sm">
                      {initials}
                    </span>
                  </div>
                  <p className="text-lg font-semibold pl-3">{name}</p>
                </div>

                <button>
                  <Image src={closeIcon} alt="Close" className="ml-2" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
