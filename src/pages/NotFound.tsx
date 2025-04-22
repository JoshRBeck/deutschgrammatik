import { Link } from "react-router-dom";

interface NotFoundProps {
  isDark: boolean;
}

export default function NotFound({ isDark }: NotFoundProps) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 px-6 text-center
        ${
          isDark
            ? "bg-gradient-to-br from-violet-900 to-pink-900 text-white"
            : "bg-gradient-to-br from-pink-50 to-violet-100 text-gray-800"
        }
      `}
    >
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl max-w-lg w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 dark:text-red-400 mb-4">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          Oops! Page not found.
        </h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
          The page you’re looking for doesn’t seem to exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-violet-600 dark:bg-violet-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-violet-700 dark:hover:bg-violet-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
