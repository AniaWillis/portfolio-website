import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-5 right-3 sm:right-5 z-55 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-100" />
      ) : (
        <Moon className="h-6 w-6 text-blue-950" />
      )}
    </button>
  );
}

export default ThemeToggle;
