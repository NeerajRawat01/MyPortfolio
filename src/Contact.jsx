import React from "react";
import Button from "./Button";
import bg from "./images/bg.png"

function Contact() {
  return (
      <div className="text-center  p-10 m-10 border rounded-md border-yellow-400 shadow-lg flex flex-col"style={{ backgroundImage: `url(${bg})` }} >
      <h3 className="mt-2 text-3xl  text-gray-700  font-bold ">Contact</h3>
      <input class="p-2 mt-6 text-gray-900 rounded-md bg-slate-100" placeholder="Name" name="name"></input>
      <input class="p-2 my-2 text-gray-900 rounded-md bg-slate-100" placeholder="E-mail" name="e-mail"></input>
      <textarea class="p-2 text-gray-900 rounded-md bg-slate-100" placeholder="Message" name="message" rows="10"></textarea>
      <div className="mt-3">
      <Button>Submit</Button>
      </div>
    <span className="  text-gray-800 font-semibold">Mail at : rawatneeraj925@gmail.com</span>
    </div>
  );
}

export default Contact;
