import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-violet-100 text-center p-6">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Page not found.
      </h2>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t seem to exist.
      </p>
      <Link
        to="/"
        className="bg-violet-500 hover:bg-violet-600 text-white font-medium px-6 py-2 rounded-full transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
