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
      console.log("Fetching Lessons...");
      const { data, error } = await supabase.from("lessons").select("*");

      if (error) console.error("Error fetching lessons:", error);
      else setLessons(data || []);

      setLoading(false);
    };

    fetchLessons();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">German Grammar Lessons</h1>
      {loading ? (
        <p>Loading lessons...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} {...lesson} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonsList;
