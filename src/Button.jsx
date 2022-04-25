import React from "react";

function Button({ children }) {
  return (
    <button className="bg-red-500 px-5 py-3 text-white  rounded-md">
      {children}
    </button>
  );
}

export default Button;
