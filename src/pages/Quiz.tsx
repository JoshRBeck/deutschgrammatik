interface QuizPageProps {
  isDark: boolean;
}

export default function Quiz({ isDark }: QuizPageProps) {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 px-6 text-center
        ${
          isDark
            ? "bg-gradient-to-br from-violet-900 to-pink-900 text-white"
            : "bg-gradient-to-br from-violet-50 to-pink-50 text-gray-800"
        }
      `}
    >
      <div
        className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-xl w-full`}
      >
        <h1 className="text-4xl font-extrabold mb-4 leading-tight tracking-wide">
          🧠 Grammar Quiz
        </h1>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Ready to test your German grammar skills? Start a quiz and see how
          much you’ve learned!
        </p>

        {/* Placeholder for future quiz start button */}
        <button className="mt-4 inline-block bg-violet-600 dark:bg-violet-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-violet-700 dark:hover:bg-violet-600 transition">
          Start Quiz
        </button>
      </div>
    </div>
  );
}
