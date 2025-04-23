// components/LessonComponents/MatchingPairs.tsx
import { useState } from "react";

interface Pair {
  id: string;
  left: string;
  right: string;
}

interface MatchingPairsProps {
  pairs: Pair[];
  onComplete?: (correct: boolean) => void;
}

export default function MatchingPairs({
  pairs,
  onComplete,
}: MatchingPairsProps) {
  const shuffledRight = [...pairs].sort(() => Math.random() - 0.5);

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ [key: string]: string }>({});

  const handleMatch = (right: string) => {
    if (!selectedLeft) return;
    setMatches((prev) => ({ ...prev, [selectedLeft]: right }));
    setSelectedLeft(null);

    if (Object.keys(matches).length + 1 === pairs.length) {
      const correct = pairs.every(
        (pair) =>
          matches[pair.id] === pair.right ||
          (pair.id === selectedLeft && right === pair.right)
      );
      onComplete?.(correct);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-violet-700 dark:text-violet-300">
        Match the pairs
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="space-y-3">
          {pairs.map((pair) => (
            <button
              key={pair.id}
              className={`block w-full p-3 rounded-xl border ${
                selectedLeft === pair.id
                  ? "bg-violet-200 dark:bg-violet-600 border-violet-500"
                  : "bg-white/80 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              }`}
              onClick={() => setSelectedLeft(pair.id)}
            >
              {pair.left}
            </button>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-3">
          {shuffledRight.map((pair) => (
            <button
              key={pair.right}
              className={`block w-full p-3 rounded-xl border ${
                Object.values(matches).includes(pair.right)
                  ? "bg-green-200 dark:bg-green-700 text-green-900"
                  : "bg-white/80 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              }`}
              onClick={() => handleMatch(pair.right)}
              disabled={Object.values(matches).includes(pair.right)}
            >
              {pair.right}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
