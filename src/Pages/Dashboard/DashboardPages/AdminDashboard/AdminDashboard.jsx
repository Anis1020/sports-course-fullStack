import React from "react";

const AdminDashboard = () => {
  return (
    <div className="">
      <div className="grid lg:grid-cols-4 gap-28 mr-4">
        <div className="bg-red-700 w-44 h-32 rounded">Cricket</div>
        <div className="bg-blue-700 w-44 h-32 rounded">Cricket</div>
        <div className="bg-yellow-600 w-44 h-32 rounded">Cricket</div>
        <div className="bg-green-700 w-44 h-32 rounded">Cricket</div>
      </div>
      <div className="flex flex-1 mt-8  ">
        <div className="grid lg:grid-cols-2 w-8/12 gap-4">
          <div className="bg-white text-black w-52 h-44 rounded ">
            Cricket 1
          </div>
          <div className="bg-white text-black w-52 h-44 rounded ">
            Cricket 2
          </div>
          <div className="bg-white text-black w-52 h-44 rounded ">
            Cricket 3
          </div>
          <div className="bg-white text-black w-52 h-44 rounded ">
            Cricket 4
          </div>
        </div>
        <div className="bg-white text-black w-5/12  h-[368px]  -mr-24 rounded"></div>
      </div>
    </div>
  );
};

export default AdminDashboard;
