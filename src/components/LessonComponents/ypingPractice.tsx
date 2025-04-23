import { useState } from "react";

interface TypingPracticeProps {
  prompt: string;
  answer: string;
  onAnswer: (isCorrect: boolean) => void;
}

export default function TypingPractice({ prompt, answer, onAnswer }: TypingPracticeProps) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = () => {
    const isCorrect = userInput.trim().toLowerCase() === answer.trim().toLowerCase();
    onAnswer(isCorrect);
  };

  return (
    <div>
      <p className="text-lg mb-3 font-medium">{prompt}</p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your answer..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white mb-4 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
      <button
        onClick={handleSubmit}
        className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-full transition"
      >
        Check Answer
      </button>
    </div>
  );
}
