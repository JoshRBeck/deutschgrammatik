import LessonsList from "../components/LessonsList";

interface LessonsPageProps {
  isDark: boolean;
}

export default function LessonsPage({ isDark }: LessonsPageProps) {
  return (
    <div
      className={`${
        isDark
          ? "bg-gradient-to-br from-violet-900 to-pink-900"
          : "bg-gradient-to-br from-violet-100 to-pink-100"
      } p-4 min-h-screen`}
    >
      <div
        className={`max-w-6xl mx-auto p-6 sm:p-8 rounded-2xl shadow-xl ${
          isDark
            ? "bg-gray-800/80 text-white"
            : "bg-white/80 backdrop-blur-sm text-gray-800"
        }`}
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center">
          Lessons
        </h1>
        <p className="text-base sm:text-lg mb-6 text-center">
          Select a topic to start learning.
        </p>
        <LessonsList />
      </div>
    </div>
  );
}
