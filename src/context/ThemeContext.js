import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  themeColor: "#4CAF50",
  setThemeColor: () => {},
});



export const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    theme: localStorage.getItem("theme") || "light",
    themeColor: localStorage.getItem("themeColor") || "#4CAF50",
  });

  useEffect(() => {
    localStorage.setItem("theme", themeState.theme);
    localStorage.setItem("themeColor", themeState.themeColor);
  }, [themeState]);

  const toggleTheme = () => {
    setThemeState((prevThemeState) => ({
      ...prevThemeState,
      theme: prevThemeState.theme === "light" ? "dark" : "light",
    }));
  };

  const setThemeColor = (color) => {
    setThemeState((prevThemeState) => ({
      ...prevThemeState,
      themeColor: color,
    }));
  };

  return (
    <ThemeContext.Provider
      value={{ ...themeState, toggleTheme, setThemeColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;