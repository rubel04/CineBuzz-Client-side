import { useEffect, useState } from "react";

export const useTheme = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  function changeTheme() {
    const html = document.documentElement;
    const newMode = mode === "light" ? "dark" : "light";

    html.classList.replace(mode, newMode);
    setMode(newMode);
    localStorage.setItem("mode", newMode);
    console.log("HTML classList:", document.documentElement.classList);

  }

  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    setMode(currentMode);
    document.documentElement.classList.add(currentMode);
  }, []);

  return { changeTheme, mode };
};
