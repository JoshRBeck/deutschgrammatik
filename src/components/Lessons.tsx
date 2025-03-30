import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
// import LessonCard from "./LessonCard"; // Optional: Create a LessonCard component

interface Lesson {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

export default function Lessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLessons() {
      const { data, error } = await supabase.from("lessons").select("*");

      if (error) {
        console.error("Error fetching lessons:", error.message);
      } else {
        setLessons(data || []);
      }
      setLoading(false);
    }

    fetchLessons();
  }, []);

  if (loading) return <p>Loading lessons...</p>;

  return (
    <div>
      <h2>Lessons</h2>
      <div>
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
