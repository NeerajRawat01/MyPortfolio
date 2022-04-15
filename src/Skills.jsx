import React from "react";
import Card from "./Card"
import css from "./images/css.png"
import html from "./images/html.png"
import javaScript from "./images/javaScript.png"
import tailwind from "./images/tailwind.png"
import react from "./images/react.png"
import bg from "./images/bg.png"
function Skills() {
  return (
    <>
    <h1 className=" mt-2 text-center text-3xl font-bold text-gray-700" > Skills</h1>
    <div   className="flex shrink-0   flex-wrap  p-10 border  space-y-2 mt-2 m-5 flex-col px-6
    sm:flex-row sm:justify-between sm:px-20 items-center "  >
      
        <Card  w="w-60" scale="hover:scale-110 duration-500" hover="hover:bg-gray-400" image={html}>HTML</Card>
        <Card  w="w-60" scale="hover:scale-110 duration-500" hover="hover:bg-gray-400" image={css}>CSS</Card>
        <Card  w="w-60" scale="hover:scale-110 duration-500" hover="hover:bg-gray-400" image={javaScript}>JAVA SCRIPT</Card>
        <Card  w="w-60" scale="hover:scale-110 duration-500" hover="hover:bg-gray-400" image={tailwind}>TAILWIND CSS</Card>
        <Card  w="w-60" scale="hover:scale-110 duration-500" hover="hover:bg-gray-400" image={react}>REACT JS</Card>
      
    </div>
    </>
  );
}

export default Skills;
