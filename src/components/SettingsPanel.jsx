
import React, { useState, useContext } from "react";
import { themeColors } from "../data/themeColors";
import ThemeContext from "../context/ThemeContext";
import darkModeImg from "../assets/images/dark-mode.png";
import lightModeImg from "../assets/images/light-mode.png";
import { BsCheck } from "react-icons/bs";

const SettingsPanel = ({ setShowSettings }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { theme, toggleTheme, setThemeColor, themeColor } =
    useContext(ThemeContext);

  const closeSettings = () => {
    setIsOpen(false);
    setTimeout(() => {
      setShowSettings(false);
    }, 500); // Delay for the duration of the slide-out animation (0.5s)
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
            isOpen ? "animate-slide-in-right" : "animate-slide-out-right"
          }
          
         `}
          aria-hidden="true"
        ></div>
        <section
          className={`absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none ${
            isOpen ? "animate-slide-in-right" : "animate-slide-out-right"
          }`}
          aria-labelledby="slide-over-heading"
        >
          <div className="flex flex-col w-96 bg-white shadow-xl"
            style={{
              backgroundColor: theme === "dark" ? "#1d2630" : "#f5f5f5",
              color: theme === "dark" ? "#f5f5f5" : "#444",
            }}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2
                id="slide-over-heading"
                className="text-lg font-medium"
              >
                Settings
              </h2>
              <button
                onClick={closeSettings}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/*  theme toggle */}
            <div className="p-4">
              <h3 className="text-lg font-medium ">Theme</h3>
              <div className="mt-4 flex items-center justify-around gap-2">
                <button
                  onClick={toggleTheme}
                  className="flex flex-col gap-2 transition duration-200 ease-in-out rounded-full"
                  role="checkbox"
                  aria-checked="false"
                >
                  <span className=" ">Dark</span>
                  <img
                    src={darkModeImg}
                    width={200}
                    height={250}
                    style={{
                      border: theme === "dark" ? "2px solid #1A97F5" : "none",
                      padding: theme === "dark" ? "2px" : "none",
                    }}
                    alt="Dark Mode"
                  />
                </button>
                <button
                  onClick={toggleTheme}
                  className="flex flex-col gap-2  transition duration-200 ease-in-out rounded-full"
                  role="checkbox"
                  aria-checked="false"
                >
                  <span className=" ">Light</span>
                  <img
                    src={lightModeImg}
                    width={200}
                    height={250}
                    style={{
                      border: theme === "light" ? "2px solid #1A97F5" : "none",
                      padding: theme === "light" ? "2px" : "none",
                    }}
                    alt="Light Mode"
                  />
                </button>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium">Theme Color</h3>
              <div className="mt-4 grid grid-cols-6 gap-4">
                {themeColors.map((theme, index) => (
                  <button
                    type="button"
                    className="h-10 w-10 rounded-md cursor-pointer"
                    style={{ backgroundColor: theme.color }}
                    onClick={() => setThemeColor(theme.color)}
                    key={index}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        theme.color === themeColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsPanel;
