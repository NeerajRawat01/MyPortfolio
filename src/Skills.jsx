import React from "react";
import css from "./images/css.png";
import html from "./images/html.png";
import javaScript from "./images/javaScript.png";
import tailwind from "./images/tailwind.png";
import react from "./images/react.png";

function Skills() {
  return (
    <>
      <h1 className=" p-10 mt-10 text-center text-3xl  font-bold text-gray-700">
        My Skills
      </h1>
      <div className="flex flex-wrap px-5 py-3 space-y-5  justify-between  lg:space-y-2 lg:space-x-10 lg:justify-start m-10">
        <span className="w-52 hidden md:block lg:hidden"></span>
        <span className="w-52 hidden md:block lg:hidden"></span>
        <span className="w-52 hidden md:block lg:hidden"></span>
        <div className="flex flex-col   px-5 py-3 items-center rounded-md shadow-md border w-full sm:w-52  ">
          <img className="w-36 h-28" src={html} alt="" />
          <span>Html</span>
        </div>

        <div className="flex flex-col px-5 py-3 items-center rounded-md shadow-md border w-full sm:w-52   ">
          <img className="w-36 h-28" src={css} alt="" />
          <span>css</span>
        </div>

        <div className="flex flex-col px-5 py-3  items-center rounded-md shadow-md  border w-full sm:w-52  ">
          <img className="w-36 h-28" src={javaScript} alt="" />
          <span>javaScript</span>
        </div>

        <div className="flex flex-col px-5 py-3 items-center rounded-md shadow-md border w-full sm:w-52   ">
          <img className="w-36 h-28" src={tailwind} alt="" />
          <span>Tailwind css</span>
        </div>

        <div className="flex flex-col px-5 py-3 items-center rounded-md shadow-md border w-full sm:w-52   ">
          <img className="w-36 h-28" src={react} alt="" />
          <span>react Js</span>
        </div>

        <span className="w-48 hidden md:block lg:hidden"></span>
      </div>
    </>
  );
}

export default Skills;
