export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 to-pink-100 px-4">
      <div className="max-w-xl text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
          Welcome to Your German Grammar Journey 🇩🇪
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Learn grammar the fun way — one lesson at a time.
        </p>
        <a
          href="/lessons"
          className="inline-block bg-violet-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-violet-700 transition"
        >
          Start Learning
        </a>
      </div>
    </div>
  );
}
