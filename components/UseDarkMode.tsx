import { useEffect, useState } from "react";

const UseDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;

    root.lang = "en-us";
    root.classList.remove(colorTheme);
    root.classList.add(theme);

  }, [theme]);

  return [colorTheme, setTheme];
}

export default UseDarkMode;