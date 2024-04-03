// components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <div>
      <button className="block p-1 rounded-full" onClick={handleSetTheme}>
        {theme === "light" ? (
          <BsMoon className="w-5 h-5" />
        ) : (
          <BsSun className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
