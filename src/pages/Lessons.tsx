import LessonsList from "../components/LessonsList";

export default function LessonsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800">Lessons</h1>
      <p className="text-gray-800">Select a topic to start learning.</p>
      <LessonsList />
    </div>
  );
}
