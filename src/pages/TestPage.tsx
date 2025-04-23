import MultipleChoice from "../components/LessonComponents/MultipleChoice";

interface TestPageProps {
  isDark: boolean;
}

export default function TestPage({ isDark }: TestPageProps) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        isDark
          ? "bg-gradient-to-br from-violet-900 to-pink-900"
          : "bg-gradient-to-br from-violet-100 to-pink-100"
      }`}
    >
      <div
        className={`max-w-lg p-6 rounded-2xl shadow-xl backdrop-blur-sm ${
          isDark ? "bg-gray-800/80 text-white" : "bg-white/80 text-gray-800"
        }`}
      >
        <MultipleChoice
          question="Which article matches the noun 'Auto'?"
          options={[
            { id: "a", text: "Der", isCorrect: false },
            { id: "b", text: "Die", isCorrect: false },
            { id: "c", text: "Das", isCorrect: true },
          ]}
          onAnswer={(isCorrect) =>
            alert(isCorrect ? "✅ Correct!" : "❌ Nope, try again!")
          }
        />
      </div>
    </div>
  );
}
