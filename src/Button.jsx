import React from "react";

function Button({children}) {
  return (
    <button className='bg-yellow-400 hover:bg-gray-400 hover:border hover:border-yellow-400 px-5 py-3 text-gray-700 font-semibold rounded-md'>{children}</button>
  );
}

export default Button;
