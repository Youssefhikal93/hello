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

export default TaskManagementNavbar;
