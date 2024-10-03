import React from "react";
import Image from "next/image";

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
  return (
    <div className="flex flex-col justify-center items-center lg:px-8 lg:py-5 md:px-8 md:py-5 ">
      <TaskManagementNavbar />

      <div className="w-full h-[75vh]">
        <div className="grid grid-cols-5 w-full h-full ">
          <div className="col-span-1 bg-amber-100 h-full rounded-bl-[40px]">
            left
          </div>
          {/* Right div */}
          <div className="col-span-4 flex flex-col h-full rounded-br-[40px]">
            <div className="h-[55px] bg-[rgba(42,45,75,0.5)]">top</div>
            <div className="bg-white flex-1">bottom</div>
          </div>
        </div>
      </div>
    </div>
  );
}
