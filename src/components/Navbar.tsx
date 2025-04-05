import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-violet-200 to-pink-200 text-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide hover:opacity-90"
        >
          🇩🇪 LangLearn
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm md:text-base">
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
        </ul>
      </div>
    </nav>
  );
}
