import React, { useContext, useState } from "react";
import { themeColors } from "../../data/themeColors";
import ThemeContext from "../../context/ThemeContext";
import darkModeImg from "../../assets/images/dark-mode.png";
import lightModeImg from "../../assets/images/light-mode.png";
import { BsCheck } from "react-icons/bs";

const Page = () => {
  const { theme, toggleTheme, setThemeColor, themeColor } =
    useContext(ThemeContext);
    const [emailNotifications, setEmailNotifications] = useState(true);
    
  return (
    <div className="flex flex-col min-h-screen "
      style={{
        backgroundColor: theme === "dark" ? "#111113" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#444",
      }}
    >
      <div className="w-full  shadow-xl rounded-lg p-6"
        style={{
          backgroundColor: theme === "dark" ? "#1b1c1f" : "#f5f5f5",
          color: theme === "dark" ? "#f5f5f5" : "#444",
        }}
      >
        <h2 className="text-2xl font-bold mb-6">Settings</h2>

        {/* Theme toggle */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">Theme</h3>
          <div className="flex items-center gap-5">
            <button
              onClick={toggleTheme}
              className="flex flex-col items-center gap-2 transition duration-200 ease-in-out rounded-full"
              role="checkbox"
              aria-checked={theme === "dark"}
            >
              <span>Dark</span>
              <img
                src={darkModeImg}
                alt="Dark Mode"
                width={300}
                height={125}
                style={{
                  border: theme === "dark" ? "2px solid #1A97F5" : "none",
                  padding: theme === "dark" ? "2px" : "none",
                }}
              />
            </button>
            <button
              onClick={toggleTheme}
              className="flex flex-col items-center gap-2 transition duration-200 ease-in-out rounded-full"
              role="checkbox"
              aria-checked={theme === "light"}
            >
              <span>Light</span>
              <img
                src={lightModeImg}
                alt="Light Mode"
                width={300}
                height={125}
                style={{
                  border: theme === "light" ? "2px solid #1A97F5" : "none",
                  padding: theme === "light" ? "2px" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Theme color selection */}
        <div className=" flex gap-2 flex-col mb-6">
          <h3 className="text-lg font-medium mb-4">Theme Color</h3>
          <div className="flex flex-wrap gap-4">
            {themeColors.map((colorTheme, index) => (
              <button
                key={index}
                type="button"
                className="h-14 w-14 rounded-md cursor-pointer"
                style={{ backgroundColor: colorTheme.color }}
                onClick={() => setThemeColor(colorTheme.color)}
              >
                {colorTheme.color === themeColor && (
                  <BsCheck className="text-2xl text-white mx-auto" />
                )}
              </button>
            ))}
          </div>
        </div>
      
        {/* Notification settings */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">Notifications</h3>
          <label className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="mr-2"
              style={{
                "--clr": themeColor,
              }}
            />
            Email Notifications
          </label>
        </div>
      </div>
    </div>
  );
};
export default Page;
