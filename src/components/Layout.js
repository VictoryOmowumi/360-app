
import React, { useState, useContext } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ThemeContext from "../context/ThemeContext";
import SettingsPanel from "./SettingsPanel";


function Layout({ children }) {
  const [showSettings, setShowSettings] = useState(false);
  const { theme, themeColor } = useContext(ThemeContext);
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
  <>

      <div className="fixed bottom-10 right-0 z-10">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="w-14 h-14  rounded-l-full flex items-center justify-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          style={{
            backgroundColor: theme === "dark" ? "#1b1c1f" : "#F5f5f5",
          
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M2 12.8804V11.1204C2 10.0804 2.85 9.22043 3.9 9.22043C5.71 9.22043 6.45 7.94042 5.54 6.37042C5.02 5.47042 5.33 4.30042 6.24 3.78042L7.97 2.79042C8.76 2.32042 9.78 2.60042 10.25 3.39042L10.36 3.58042C11.26 5.15042 12.74 5.15042 13.65 3.58042L13.76 3.39042C14.23 2.60042 15.25 2.32042 16.04 2.79042L17.77 3.78042C18.68 4.30042 18.99 5.47042 18.47 6.37042C17.56 7.94042 18.3 9.22043 20.11 9.22043C21.15 9.22043 22.01 10.0704 22.01 11.1204V12.8804C22.01 13.9204 21.16 14.7804 20.11 14.7804C18.3 14.7804 17.56 16.0604 18.47 17.6304C18.99 18.5404 18.68 19.7004 17.77 20.2204L16.04 21.2104C15.25 21.6804 14.23 21.4004 13.76 20.6104L13.65 20.4204C12.75 18.8504 11.27 18.8504 10.36 20.4204L10.25 20.6104C9.78 21.4004 8.76 21.6804 7.97 21.2104L6.24 20.2204C5.33 19.7004 5.02 18.5304 5.54 17.6304C6.45 16.0604 5.71 14.7804 3.9 14.7804C2.85 14.7804 2 13.9204 2 12.8804Z"
              fill={themeColor}
            />
            <path
              d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z"
              fill={themeColor}
            />
          </svg>
        </button>
      </div>
  
        <div className="h-screen flex flex-row">
          {showSettings && <SettingsPanel setShowSettings={setShowSettings} />}
          <Sidebar
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            menuActive={menuActive}
            handleMenuToggle={handleMenuToggle}
          />
          <div className="flex flex-col flex-1 w-full h-full overflow-y-auto transition duration-300 ease-in-out"
            style={{
  
              backgroundColor: theme === "dark" ? "#111113" : "#F5f5f5",
            }}
          >
            <Header
              handleToggleSidebar={handleToggleSidebar}
              handleMenuToggle={handleMenuToggle}
            />
            <main
              className={`flex-1 px-4 `}
              style={{
                color: theme === "light" ? themeColor : "gray-100",
                backgroundColor: theme === "dark" ? "#111113" : "#F3F4F6",
              }}
            >
              {children}
            </main>
          </div>
        </div>
  </>
   
  );
}

export default Layout;
