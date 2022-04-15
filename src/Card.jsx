import React from "react";


function Home({image , children ,bg , w ,h,hover,scale,pointer }) {
  return (
    <div className={` ${scale} flex p-2 ${hover}  ${pointer} border border-yellow-400 rounded-md shadow-lg ${bg} ${w} ${h} justify-center items-center flex-col `}>
        <img className="w-44 h-44 object-cover" src={image}  />
        <div className="text-gray-700 font-semibold">{children}</div>
    </div>
  );
}

export default Home;
