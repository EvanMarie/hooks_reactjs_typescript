import React, { useContext } from "react";

interface Theme {
  name: string;
  setTheme: (name: string) => void;
}

function ThemeSwitcher() {
  const theme = useContext(ThemeContext);

  const toggleTheme = () => {
    theme.setTheme(theme.name === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme.name === "dark" ? "light" : "dark"} theme
      </button>
    </div>
  );
}

export const ThemeContext = React.createContext<Theme>({
  name: "light",
  setTheme: () => {},
});

export default ThemeSwitcher;
