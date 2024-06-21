import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut
} from "lucide-react";
import { SiTestcafe } from "react-icons/si";
import { BsQuestionSquare } from "react-icons/bs";
import { RiQuestionAnswerLine } from "react-icons/ri";
import ThemeContext from "../context/ThemeContext";
import logoBig from "../assets/images/logo2.png";
const Sidebar = ({ menuActive, handleMenuToggle }) => {
  const location = useLocation();
  const { theme, themeColor } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(location.pathname);

  const menuItems = [
    {
      color: "#f44336",
      icon: <LayoutDashboard />,
      text: "Dashboard",
      path: "/",
    },
    {
      color: "#f4e736",
      icon: <SiTestcafe />,
      text: "Assessments",
      path: "/assessments",
    },
    {
      color: "#5ead04",
      icon: <BsQuestionSquare />,
      text: "Questionnaires",
      path: "/questionnaires",
    },
    {
      color: "#04a396",
      icon: <RiQuestionAnswerLine />,
      text: "Responses",
      path: "/responses",
    },
    {
      color: "#f436cb",
      icon: <Settings />,
      text: "Settings",
      path: "/settings",
    },

    {
      color: "#f436cb",
      icon: <LogOut />,
      text: "Logout",
      path: "/logout",
    },
  ];

  useEffect(() => {
    setActiveIndex(location.pathname);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };
// #1b1c1f - #111113
  return (
    <div
      className={`navigation  ${menuActive ? "active" : ""}`}
      style={{
        backgroundColor: theme === "dark" ? "#1b1c1f" : "#f5f5f5",
        color: themeColor,
        borderRight: theme === "dark" ? "1px solid #474E55" : "",
        boxShadow:
          theme === "dark"
            ? "0 0 10px 0 #1d2630"
            : "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="menuToggle text-center text-2xl font-bold py-2 "
        style={{
          color: themeColor,
        }}
      >
        {menuActive ? (
          <div className="flex gap-2 items-center">
            <img
              src={logoBig}
              alt="Content Cooler"
              className="w-[50px] h-[50px] p-2 rounded-md"
              style={{
                background: themeColor,
              }}
            />
            <span className="text-2xl font-bold">Assessment</span>
          </div>
        ) : (
          <img
            src={logoBig}
            alt="Content Cooler"
            className="w-10 h-10 p-2 rounded-md"
            style={{
              background: themeColor,
            }}
          />
        )}
      </div>

      <ul className="mt-8">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`list ${isActive(item.path) ? "active" : ""}`}
            style={{
              background:
                isActive(item.path) && theme === "dark"
                  ? "#111113"
                  : isActive(item.path)
                  ? "#F5F5f5"
                  : "none",
            }}
          >
            <Link
              to={item.path}
              onClick={() => setActiveIndex(item.path)}
              style={{ "--clr": themeColor }}
              className="link"
            >
              <span
                className="icon"
                style={{
                  color:
                    theme === "dark" && isActive(item.path)
                      ? "#f8f9fa"
                      : isActive(item.path)
                      ? "#f5f5f5"
                      : "#a5a5a5",
                }}
              >
                {item.icon}
              </span>
              <span
                className="text"
                style={{
                  "--clr": themeColor,
                  color:
                    theme === "dark" && isActive(item.path)
                      ? "#f8f9fa"
                      : isActive(item.path)
                      ? "#131920"
                      : "#a5a5a5",
                }}
              >
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
