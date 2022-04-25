import React from "react";
import Profile from "./images/profile.png";
function Header() {
  const [menu, setMenu] = React.useState(true);

  const hideList = () => {
    setMenu(false);
  };
  const showList = () => {
    setMenu(true);
  };

  return (
    <div className=" w-screen fixed border-b ">
      <ul className="flex  bg-white  justify-between p-2">
        <img
          className="w-10 ml-5  h-10 rounded-full object-cover border "
          src={Profile}
          alt="picture"
        />

        <ul className=" hidden sm:block  sm:flex items-center space-x-4 mr-5  font-bold ">
          <li className="hover:bg-white p-2  hover:rounded-md hover:text-red-500 ">
            Home{" "}
          </li>
          <li className="hover:bg-white p-2  hover:rounded-md hover:text-red-500">
            {" "}
            Skills
          </li>
          <li className="hover:bg-white p-2  hover:rounded-md hover:text-red-500">
            Projects
          </li>
          <li className="hover:bg-white p-2  hover:rounded-md hover:text-red-500">
            Contact
          </li>
        </ul>

        {!menu && (
          <ul className=" mr-5 sm:hidden space-y-2 flex flex-col justify-end">
            <button onClick={showList}>
              <img
                className=" w-10 h-10"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAB/klEQVRoge2Zyy4EURCGP0PcthNbvIOIWDAWPAMhM52wtvAYLvEGJHbegYSdRKzc9qxZug1mLE43rdN9Zk5Vd9NJ/0ltpufU//+nzqVTDSVKlCjxl+hx+O8IsACMAi/ABXAGtJQaeoFpYAIYAu6AI+BBmfcbA8Au8Aa0I3ED1BS554DbmLyvwI7PrcIAcBpDEI4mUBfkrvtjbblPUJrY7UAQxCfQcMjb8Md0k3tbKn4EU8puSFxMuIhvY/ZbVWJgxYEkbMKz5PQcxQexlJSwYiEbtftLzLdPvAnPf2bjTMK4jTAJzwKiIGfUhEY8wFPSgz7LoAshGfyYAHP87iEXD3AuFXGN+3qN7gnJmg/HJQrzNTqf1VlGE5iRig9QRz+L0upJLshYLAHvOYu3Hcf/2kQm4sMmPooqPmsTuYjPykSu4gOkZUIlXnM7FhqFXkKF3sSFPkazFp+pibzEZ2Ki0C9zc/z96/SsVHwv8U0n11nUVu8K4X01k4J4j3T2z7TEwEYK4gNoTawnibSVZrB7r7/QAlaBg9Bvh8Aa8kbwsGTQMvqZj0La2FqUGCh8axFMiztN8RITW1LxYFrbJx0Ism6v92sMgDGxjSlllOASXd9mFnPOxy2bTboQ7/KJqQrMA2OYvXHuh/YTUwWYAiYxk3UPHAOPyrwlSpQokQO+AN9N+IV88rnoAAAAAElFTkSuQmCC"
              />
            </button>

            <li className="hover:bg-white p-2  hover:rounded-md hover:text-red-500 ">
              {" "}
              Home{" "}
            </li>
            <li className="hover:bg-white p-2  hover:rounded-md hover:text-red-500 ">
              {" "}
              Skills
            </li>
            <li className="hover:bg-white p-2  hover:rounded-md hover:text-red-500 ">
              Projects
            </li>
            <li className="hover:bg-white p-2  hover:rounded-md hover:text-red-500 ">
              Contact
            </li>
          </ul>
        )}
        {menu && (
          <button className="mr-5 sm:hidden" onClick={hideList}>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32px"
              height="32px"
            >
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
            </svg>
          </button>
        )}
      </ul>
    </div>
  );
}

export default Header;
