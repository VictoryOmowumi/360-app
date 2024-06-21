import React from "react";

const DashboardSkeleton = () => {
  return (
    <ul>
      <li class="animate-pulse opacity-5">
        <div class="px-4 sm:px-6 lg:px-8 h-full py-4">
          <div class="w-full relative h-72 rounded-md bg-gray-400"></div>
          <div class="w-full flex gap-4 h-48 mt-4 relative top-0 ">
            <div className="w-1/4 h-full bg-gray-400 rounded-md"></div>
            <div className="w-1/4 h-full bg-gray-400 rounded-md"></div>
            <div className="w-1/4 h-full bg-gray-400 rounded-md"></div>
            <div className="w-1/4 h-full bg-gray-400 rounded-md"></div>
          </div>
          <div className="flex gap-4 mt-4 w-full h-72">
            <div class=" bg-gray-400 rounded-md w-full h-full"></div>
            <div class=" bg-gray-400 rounded-md w-full h-full"></div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default DashboardSkeleton;
