import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-violet-200 to-pink-200 flex justify-around text-gray-800 p-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/lessons" className="hover:underline">
            Lessons
          </Link>
        </li>
        <li>
          <Link to="/quiz" className="hover:underline">
            Quiz
          </Link>
        </li>
      </ul>
    </nav>
  );
}
