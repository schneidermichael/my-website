import { useEffect, useState } from "react";

const UseDarkMode = () => {
  const [theme, setTheme] = useState('dark');
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.lang = "en-us";
    root.classList.remove(colorTheme);
    root.classList.add(theme);

  }, [theme]);

  return [colorTheme, setTheme];
}

export default UseDarkMode;