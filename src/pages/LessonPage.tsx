// src/pages/LessonPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../supabaseClient";
import MultipleChoice from "../components/LessonComponents/MultipleChoice";
// import FillInTheBlank from "../components/LessonComponents/FillInTheBlank";
// import MatchingPairs from "../components/LessonComponents/MatchingPairs";
// import SentenceOrdering from "../components/LessonComponents/SentenceOrdering";
// import TypingPractice from "../components/LessonComponents/TypingPractice"; // fixed TypingPractice typo

interface LessonPageProps {
  isDark: boolean;
}

interface LessonBase {
  id: string;
  title: string;
  description: string;
  exercise_type: string;
  created_at: string;
  category_id: string;
}

interface MultipleChoiceContent {
  options: { id: string; text: string; isCorrect: boolean }[];
}

type Lesson =
  | (LessonBase & {
      exercise_type: "multiple_choice";
      content: MultipleChoiceContent;
    })
  | (LessonBase & { exercise_type: "fill_in_the_blank"; content: string })
  | (LessonBase & {
      exercise_type: "matching_pairs";
      content: { [key: string]: string };
    })
  | (LessonBase & { exercise_type: "sentence_ordering"; content: string })
  | (LessonBase & { exercise_type: "typing_practice"; content: string });

const LessonPage = ({ isDark }: LessonPageProps) => {
  const { id } = useParams<{ id: string }>();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLesson = async () => {
      const { data, error } = await supabase
        .from("lessons")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching lesson:", error);
      } else {
        const parsedContent =
          typeof data.content === "string"
            ? JSON.parse(data.content)
            : data.content;

        setLesson({
          ...data,
          content: parsedContent,
        });
      }

      setLoading(false);
    };

    fetchLesson();
  }, [id]);

  const renderExerciseComponent = (lesson: Lesson) => {
    switch (lesson.exercise_type) {
      case "multiple_choice":
        return (
          <MultipleChoice
            question={lesson.title}
            options={lesson.content.options}
            onAnswer={(isCorrect) =>
              alert(isCorrect ? "✅ Correct!" : "❌ Try again!")
            }
          />
        );
      // case "fill_in_the_blank":
      //   return (
      //     <FillInTheBlank
      //       sentence={lesson.title}
      //       correctAnswer={lesson.content}
      //       onAnswer={(isCorrect) =>
      //         alert(isCorrect ? "✅ Correct!" : "❌ Try again!")
      //       }
      //     />
      //   );
      // case "matching_pairs":
      //   return (
      //     <MatchingPairs
      //       pairs={lesson.content}
      //       onComplete={(correct) =>
      //         alert(correct ? "✅ All matched!" : "❌ Some were wrong!")
      //       }
      //     />
      //   );
      // case "sentence_ordering":
      //   return (
      //     <SentenceOrdering
      //       sentence={lesson.title}
      //       onAnswer={(isCorrect) =>
      //         alert(isCorrect ? "✅ Correct!" : "❌ Try again!")
      //       }
      //     />
      //   );
      // case "typing_practice":
      //   return (
      //     <TypingPractice
      //       prompt={`Type: "${lesson.content}"`}
      //       answer={lesson.content}
      //       onAnswer={(isCorrect) =>
      //         alert(isCorrect ? "✅ Well done!" : "❌ Try again!")
      //       }
      //     />
      //   );
      default:
        return <p>Unknown lesson type.</p>;
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {loading ? (
        <p className="text-center text-gray-600">Loading lesson...</p>
      ) : lesson ? (
        <>
          <h1
            className={`text-3xl font-bold mb-6 text-center ${
              isDark ? "text-white" : "text-violet-700"
            }`}
          >
            {lesson.title}
          </h1>
          {renderExerciseComponent(lesson)}
        </>
      ) : (
        <p className="text-center text-gray-600">Lesson not found.</p>
      )}
    </div>
  );
};

export default LessonPage;
