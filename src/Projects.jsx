import React from "react";
import Card from "./Card"
import todo from "./images/todo.png"
import askJude from "./images/askJude.png"
import codeYogi from "./images/code.png"
import bg from "./images/bg.png"
function Projects() {
  return (
    <>
    <h1 className=" text-center mt-2 m-10  text-3xl font-bold text-gray-700">Projects</h1>
    <div className="flex space-y-2 shrink-0 p-10 flex-wrap rounded-md  m-10 mt-2 border shadow-lg  border-yellow-400  flex-col  items-center px-6
    sm:flex-row sm:justify-between sm:px-20  " style={{ backgroundImage: `url(${bg})` }} >
       
        <Card image={askJude} w="w-60"  bg="bg-red-300" hover="hover:bg-green-400" pointer="cursor-pointer">Ask Jude Clone</Card>
        <Card image={todo} w="w-60"  bg="bg-red-300"  hover="hover:bg-green-400" pointer="cursor-pointer" >Todo App</Card>
        <Card image={codeYogi} w="w-60"  bg="bg-red-300"  hover="hover:bg-green-400" pointer="cursor-pointer" >CodeYogi Clone</Card>
       
    </div>
    </>
  );
}

export default Projects;
