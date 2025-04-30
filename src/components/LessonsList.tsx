// src/pages/LessonsList.tsx
import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import LessonCard from "../components/LessonCard";

interface LessonSummary {
  id: string;
  title: string;
  description: string;
}

const LessonsList = () => {
  const [lessons, setLessons] = useState<LessonSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLessons = async () => {
      const { data, error } = await supabase
        .from("lessons")
        .select("id, title, description");

      if (error) {
        console.error("Error fetching lessons:", error);
      } else {
        setLessons(data || []);
      }

      setLoading(false);
    };

    fetchLessons();
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-violet-700 mb-8">
        German Grammar Lessons
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading lessons...</p>
      ) : lessons.length === 0 ? (
        <p className="text-center text-gray-600">No lessons found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              id={lesson.id}
              title={lesson.title}
              description={lesson.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonsList;
