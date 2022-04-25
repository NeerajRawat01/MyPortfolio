import React from "react";
import github from"./images/github.png"
import linkdin from"./images/linkdin.png"
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
function Footer() {
  return (
    <div className="bg-gray-800  h-96 text-center">
      <h1 className="text-2xl text-gray-500 p-10">Contact</h1>
      <span className="text-xl text-white">Any Type Of Query & Discussion.</span>
      <h3 className="text-red-500 font-semibold mt-3">Mail at --- rawatneeraj925@gmail.com</h3>
      <div className=" mt-6 justify-center space-x-8 p-2 flex  ">
        <a  target="_blank" href="https://github.com/NeerajRawat01/">
          <img
            className="w-10 h-10 "
            src={github}
            alt=""
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/neeraj-singh0/">
          <img
            className="w-10 h-10"
            src={linkdin}
            alt=""
          />
        </a>
        <a target="_blank" href="https://twitter.com">
          <img
            className="w-10 h-10"
            src={twitter}
            alt=""
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/neeraj-singh0/">
          <img
            className="w-10 h-10"
            src={instagram}
            alt=""
          />
        </a>
      </div>
      <span className="text-xl font-semibold   ">Made with ❤️ at CodeYogi</span>
    </div>
  );
}

export default Footer;
