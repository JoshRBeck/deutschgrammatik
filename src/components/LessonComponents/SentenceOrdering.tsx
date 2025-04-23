import { useState, useEffect } from "react";

interface SentenceOrderingProps {
  sentence: string;
  onAnswer: (isCorrect: boolean) => void;
}

function shuffle(array: string[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

const SentenceOrdering: React.FC<SentenceOrderingProps> = ({
  sentence,
  onAnswer,
}) => {
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  // useEffect only depends on the sentence prop, no need for correctOrder in deps
  useEffect(() => {
    const correctOrder = sentence.trim().split(" ");
    setShuffledWords(shuffle(correctOrder)); // shuffle new correctOrder
    setSelectedWords([]); // Reset selected words
  }, [sentence]); // Re-run when the sentence prop changes

  const handleWordClick = (word: string) => {
    if (selectedWords.includes(word)) return;
    setSelectedWords([...selectedWords, word]);
  };

  const reset = () => setSelectedWords([]);

  const checkAnswer = () => {
    const correctOrder = sentence.trim().split(" ");
    const isCorrect = selectedWords.join(" ") === correctOrder.join(" ");
    onAnswer(isCorrect);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Arrange the sentence correctly:</h2>

      <div className="flex flex-wrap gap-2">
        {shuffledWords.map((word, idx) => (
          <button
            key={idx}
            onClick={() => handleWordClick(word)}
            disabled={selectedWords.includes(word)}
            className="bg-violet-100 dark:bg-violet-700 text-gray-900 dark:text-white px-3 py-1 rounded-full transition disabled:opacity-50"
          >
            {word}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 bg-white/10 p-3 rounded-xl min-h-[3rem] border dark:border-gray-600">
        {selectedWords.map((word, idx) => (
          <span
            key={idx}
            className="bg-green-100 dark:bg-green-700 text-gray-900 dark:text-white px-3 py-1 rounded-full"
          >
            {word}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={checkAnswer}
          className="bg-green-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-700 transition"
        >
          Check Answer
        </button>
        <button
          onClick={reset}
          className="bg-gray-400 text-white font-semibold px-4 py-2 rounded-full hover:bg-gray-500 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SentenceOrdering;
