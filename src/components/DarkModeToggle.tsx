import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

interface DarkModeToggleProps {
  isDark: boolean;
  toggleDark: () => void;
}

const DarkModeToggle = ({ isDark, toggleDark }: DarkModeToggleProps) => {
  return (
    <button
      onClick={toggleDark}
      className={clsx(
        "flex items-center gap-2 px-4 py-2 rounded-full shadow-md transition",
        "backdrop-blur-sm focus:outline-none",
        "text-gray-800 dark:text-white",
        "bg-white/80 dark:bg-gray-800/80 hover:shadow-xl"
      )}
      aria-label="Toggle dark mode"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
};

export default DarkModeToggle;
