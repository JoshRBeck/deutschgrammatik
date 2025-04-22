interface HomeProps {
  isDark: boolean;
}

export default function Home({ isDark }: HomeProps) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        isDark
          ? "bg-gradient-to-br from-violet-900 to-pink-900"
          : "bg-gradient-to-br from-violet-100 to-pink-100"
      }`}
    >
      <div
        className={`w-full max-w-xl text-center ${
          isDark
            ? "dark:bg-gray-800/80 bg-gray-800/80"
            : "bg-white/80 backdrop-blur-sm"
        } p-6 sm:p-8 rounded-2xl shadow-xl`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight">
          Welcome to Your German Grammar Journey 🇩🇪
        </h1>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
          Learn grammar the fun way — one lesson at a time.
        </p>
        <a
          href="/lessons"
          className="inline-block bg-violet-600 dark:bg-violet-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-violet-700 dark:hover:bg-violet-600 transition"
        >
          Start Learning
        </a>
      </div>
    </div>
  );
}
