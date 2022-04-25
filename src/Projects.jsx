import React from "react";
import todo from "./images/todo.png";
import askJude from "./images/askJude.png";
import codeYogi from "./images/code.png";
import bg from "./images/bg.png";
import Button from "./Button";
function Projects() {
  return (
    <>
      <h1 className=" text-center mt-10 m-10  text-3xl font-bold text-gray-700">
        Projects
      </h1>

      <div className="px-10 py-3 space-y-2 ">
        <div className="flex flex-col  sm:flex-row space-x-20 hover:bg-red-400 rounded-md shadow-md border p-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:hover:transition-all hover:bg-red-400 duration-300 ">
          <img className="w-80 rounded-md" src={askJude} alt="" />
          <div className="self-center">
            <h1 className="font-bold text-xl">Ask Jude clone</h1>
            <p className="mb-5 mt-5 text-xl font-semibold">
              <span className="text-gray-500"> A clone of Ask Jude.</span> Do
              you need to ask a question? Are you looking for answers? Jud
              offers you a space to ask anything you want. However, before each
              question you must write a petition. If the answer is not what you
              expected, at least you make catharsis and ask again.
            </p>
            <a
              className="bg-red-500 px-5 py-3 text-white  rounded-md mt-5"
              href="https://assignment-34-create-ask-jud-clone-change-usename.codeyogiteam.repl.co/"
              target="_blank"
            >
              See Project
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-x-20 hover:bg-red-400 rounded-md shadow-md border p-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:hover:transition-all hover:bg-red-400 duration-300 ">
          <img className="w-80 rounded-md" src={codeYogi} alt="" />
          <div className="self-center">
            <h1 className="font-bold text-xl ">Code Yogi App clone</h1>
            <p className="mb-5 mt-5 text-xl font-semibold">
              A Code Yogi Clone. Code Yogi is a learning Platform. Who teaches
              Coding to students. Code Yogi App is a Web application who manages
              the data of Code Yogi Students. to Know more about{" "}
              <a className=" text-blue-700" href="https://codeyogi.io/">
                click Here.
              </a>
            </p>
            <a
              target="_blank"
              className="bg-red-500 px-5 py-3 text-white  rounded-md mt-5"
              href="https://assignment-35-build-clone-of-student-view-o-change-usename.codeyogiteam.repl.co/"
            >
              See Project
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-x-20 hover:bg-red-400 rounded-md shadow-md border p-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:hover:transition-all hover:bg-red-400 duration-300">
          <img className="w-80 rounded-md" src={todo} alt="" />
          <div className="self-center  ">
            <h1 className="font-bold text-xl">Todo App</h1>
            <p className="mb-5 mt-5 text-xl font-semibold">
              A Web based todo apploication. Which generally manages day to day
              task.
            </p>
            <a
              target="_blank"
              className="bg-red-500 px-5 py-3 text-white  rounded-md mt-5"
              href="https://assignment-33-create-a-todo-app-change-usename.codeyogiteam.repl.co/"
            >
              See Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
