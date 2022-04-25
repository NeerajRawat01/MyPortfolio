import React from "react";
import Button from "./Button";
import Profile from "./images/profile.png";
import bg from "./images/bg.png";

function Home() {
  return (
    <div
      className="  flex flex-col py-40 bg-gray-200 p-10  border   shadow-md  justify-center space-y-2 items-center 
    sm:flex-row-reverse sm:justify-around "
    >
      <img className="w-60 sm:w-96 rounded-full  " src={Profile} alt="My Picture" />
      <div className=" sm:text-2xl text-center space-y-4">
        <h3 className="text-indigo-700 font-semibold">Hello,My Name is</h3>
        <h3 className="sm:text-7xl text-5xl text-indigo-800 font-bold ">
          Neeraj Singh
        </h3>
        <h3 className="text-indigo-700 font-semibold">
          And I am a Full Stack Developer
        </h3>
        <div className="py-5">
          <Button>Download Resume</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
