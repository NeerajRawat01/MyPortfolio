import React from "react";
import Button from "./Button";
import Profile from "./images/profile.png"
import bg from "./images/bg.png"

function Home() {
  return (
    <div className=" flex flex-col py-20 bg-gray-500 p-2 border   shadow-md  border-yellow-400 justify-center space-y-2 items-center 
    sm:flex-row-reverse sm:justify-around "  >
      <img className="w-60 sm:w-80  " src={Profile} alt="My Picture" />
      <div className=" sm:text-2xl text-center space-y-4">
          <h3 className="text-gray-700  font-semibold">Hello,My Name is</h3>
          <h3 className="sm:text-7xl text-5xl text-indigo-800 font-bold ">Neeraj Singh</h3>
          <h3 className="text-gray-700 font-semibold">And I am a Web Developer</h3>
          <div className="py-5">
          <Button>Download Resume</Button>
          </div>
      </div>
      
    </div>
  );
}

export default Home;
