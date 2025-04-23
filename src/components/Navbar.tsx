import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

export default function Navbar({ isDark, toggleDark }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`${
        isDark
          ? "bg-gradient-to-r from-violet-900 to-pink-900 text-white"
          : "bg-gradient-to-r from-violet-200 to-pink-200 text-gray-800"
      } shadow-md transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide hover:opacity-90"
        >
          🇩🇪 LangLearn
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base items-center">
          <li>
            <Link to="/" className="hover:text-violet-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/lessons"
              className="hover:text-violet-600 transition-colors"
            >
              Lessons
            </Link>
          </li>
          <li>
            <Link
              to="/quiz"
              className="hover:text-violet-600 transition-colors"
            >
              Quiz
            </Link>
          </li>
          <li>
            <Link
              to="/TestPage"
              onClick={toggleMenu}
              className="block hover:text-violet-600 transition-colors"
            >
              Test
            </Link>
          </li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 text-base">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="block hover:text-violet-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/lessons"
                onClick={toggleMenu}
                className="block hover:text-violet-600 transition-colors"
              >
                Lessons
              </Link>
            </li>
            <li>
              <Link
                to="/quiz"
                onClick={toggleMenu}
                className="block hover:text-violet-600 transition-colors"
              >
                Quiz
              </Link>
            </li>
            <li>
              <Link
                to="/TestPage"
                onClick={toggleMenu}
                className="block hover:text-violet-600 transition-colors"
              >
                Test
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
