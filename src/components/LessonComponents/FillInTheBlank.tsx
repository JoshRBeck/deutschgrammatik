import { useState } from "react";

interface FillInTheBlankProps {
  sentence: string; // e.g., "Ich ___ ein Buch."
  correctAnswer: string; // e.g., "lese"
  onAnswer?: (isCorrect: boolean) => void;
}

export default function FillInTheBlank({
  sentence,
  correctAnswer,
  onAnswer,
}: FillInTheBlankProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<null | boolean>(null);

  const handleCheck = () => {
    const isCorrect =
      userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
    setFeedback(isCorrect);
    if (onAnswer) onAnswer(isCorrect);
  };

  return (
    <div className="text-center">
      <p className="mb-4 text-lg">
        {sentence.split("___").map((part, index) => (
          <span key={index}>
            {part}
            {index === 0 && (
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="mx-2 px-3 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            )}
          </span>
        ))}
      </p>

      <button
        onClick={handleCheck}
        className="bg-violet-600 dark:bg-violet-800 text-white font-semibold px-5 py-2 rounded-full hover:bg-violet-700 dark:hover:bg-violet-600 transition"
      >
        Check Answer
      </button>

      {feedback !== null && (
        <div className="mt-3 text-lg font-semibold">
          {feedback ? (
            <span className="text-green-500">✅ Correct!</span>
          ) : (
            <span className="text-red-500">❌ Try again</span>
          )}
        </div>
      )}
    </div>
  );
}
