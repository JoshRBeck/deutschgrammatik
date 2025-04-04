import LessonsList from "../components/LessonsList";

export default function LessonsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Lessons</h1>
      <p>Select a topic to start learning.</p>

      {/* Insert the LessonsList component here */}
      <LessonsList />
    </div>
  );
}
