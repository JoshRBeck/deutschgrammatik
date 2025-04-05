export default function Quiz() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 to-pink-50 p-6 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-wide">
        🧠 Grammar Quiz
      </h1>
      <p className="text-gray-600 text-lg max-w-md">
        Ready to test your German grammar skills? Start a quiz and see how much
        you’ve learned!
      </p>

      {/* Placeholder for future quiz start button */}
      <button className="mt-6 bg-violet-500 hover:bg-violet-600 text-white font-medium px-6 py-2 rounded-full transition">
        Start Quiz
      </button>
    </div>
  );
}
