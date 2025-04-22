import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import LessonCard from "./LessonCard";

interface Lesson {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

const LessonsList = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLessons = async () => {
      const { data, error } = await supabase.from("lessons").select("*");

      if (error) console.error("Error fetching lessons:", error);
      else setLessons(data || []);

      setLoading(false);
    };

    fetchLessons();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-violet-800 tracking-tight mb-6 text-center">
        German Grammar Lessons
      </h1>

      {loading ? (
        <p className="text-center text-gray-600 text-lg sm:text-xl">
          Loading lessons...
        </p>
      ) : lessons.length === 0 ? (
        <p className="text-center text-gray-600 text-lg sm:text-xl">
          No lessons found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} {...lesson} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonsList;
