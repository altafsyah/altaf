"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  if (!mounted)
    return (
      <Button className="w-[220px] mt-4 text-xl font-bold hover:bg-red-700 bg-red-500 text-white hover:scale-95 transition-all duration-150">
        Turn off the light!
      </Button>
    );

  return (
    <Button
      className="w-[220px] mt-4 text-xl font-bold hover:bg-red-700 bg-red-500 text-white hover:scale-95 transition-all duration-150"
      onClick={handleToggleTheme}
    >
      {theme === "dark" ? "I want the sun!" : "Turn off the light!"}
    </Button>
  );
}
