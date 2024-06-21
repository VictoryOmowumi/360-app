import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
const Header = ({ handleMenuToggle }) => {
  const { theme, toggleTheme, themeColor } = useContext(ThemeContext);
  const [toggleMode, setToggleMode] = useState(false);
  const userName = "Victory Balogun";

  const userInitials = userName
    .split(" ")
    .map((n) => n[0])
    .join("");

  const handleToggleMode = () => {
    toggleTheme();
    setToggleMode(!toggleMode);
  };

  return (
    <header
      className={`flex items-center justify-between p-4 `}
      style={{
        backgroundColor: theme === "dark" ? "#1b1c1f" : "#f5f5f5",
        color: themeColor,
        borderBottom: theme === "dark" ? "1px solid #474E55" : "1px solid #D1D5DB",
      }}
    >
      <button
        onClick={handleMenuToggle}
        className="w-10 h-10 flex items-center justify-center rounded-md "
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // style={{
          //   background: themeColor,
          // }}
        >
          <path
            d="M21 5.25H14C13.59 5.25 13.25 4.91 13.25 4.5C13.25 4.09 13.59 3.75 14 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z"
            fill={themeColor}
          />
          <path
            opacity="0.4"
            d="M21 10.25H14C13.59 10.25 13.25 9.91 13.25 9.5C13.25 9.09 13.59 8.75 14 8.75H21C21.41 8.75 21.75 9.09 21.75 9.5C21.75 9.91 21.41 10.25 21 10.25Z"
            fill={themeColor}
          />
          <path
            d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z"
            fill={themeColor}
          />
          <path
            opacity="0.4"
            d="M21 20.25H3C2.59 20.25 2.25 19.91 2.25 19.5C2.25 19.09 2.59 18.75 3 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z"
            fill={themeColor}
          />
          <path
            opacity="0.4"
            d="M7.92 3.5H5.08C3.68 3.5 3 4.18 3 5.58V8.43C3 9.83 3.68 10.51 5.08 10.51H7.93C9.33 10.51 10.01 9.83 10.01 8.43V5.58C10 4.18 9.32 3.5 7.92 3.5Z"
            fill={themeColor}
          />
        </svg>
      </button>
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white"
          style={{
            backgroundColor: theme === "dark" ? "#4B5563" : "#D1D5DB",
          }}
        >
          {userInitials}
        </div>

        <div
          role="checkbox"
          aria-checked={toggleMode ? "true" : "false"}
          tabIndex={0}
          onClick={handleToggleMode}
          className={`cursor-pointer w-16 h-8  rounded-full relative px-1.5 flex items-center  shadow-inner shadow-neutral-300 ${
            toggleMode ? "" : " justify-end"
          }`}
          style={{
            backgroundColor: theme === "dark" ? "#4B5563" : "#D1D5DB",
          }}
        >
          <div
            className={`w-6 h-6 rounded-full absolute transform duration-200 ease-out bg-white left-0.5 ${
              toggleMode ? "translate-x-8" : "translate-x-0"
            }`}
          />
          {toggleMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill={themeColor}
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill={themeColor}
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
