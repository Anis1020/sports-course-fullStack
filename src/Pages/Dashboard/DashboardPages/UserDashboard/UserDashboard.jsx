import React from "react";

import { Fade, Slide } from "react-awesome-reveal";

const UserDashboard = () => {
  return (
    <div className="">
      <div className="grid lg:grid-cols-4 gap-28 mr-4">
        <Slide className="bg-red-700 w-44 h-32 rounded">Users</Slide>
        <Slide className="bg-blue-700 w-44 h-32 rounded">Instructors</Slide>
        <Slide className="bg-yellow-600 w-44 h-32 rounded">Crouse</Slide>
        <Slide className="bg-green-700 w-44 h-32 rounded">Visitors</Slide>
      </div>
      <div className="flex flex-1 mt-8  ">
        <div className="grid lg:grid-cols-2 w-8/12 gap-4">
          <Slide className="bg-white text-black w-52 h-44 rounded ">
            Cricket
          </Slide>
          <Slide className="bg-white text-black w-52 h-44 rounded ">
            Football
          </Slide>
          <Slide className="bg-white text-black w-52 h-44 rounded ">
            Racing
          </Slide>
          <Slide className="bg-white text-black w-52 h-44 rounded ">
            All Sports
          </Slide>
        </div>
        <div className="bg-white text-black w-5/12  h-[368px]  -mr-24 rounded">
          All Activity
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
