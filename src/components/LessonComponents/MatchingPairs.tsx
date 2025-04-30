import { useState, useEffect } from "react";

export interface Pair {
  left: string;
  right: string;
}

interface MatchingPairsProps {
  pairs: Pair[];
  onComplete: (isCorrect: boolean) => void;
}

export default function MatchingPairs({
  pairs,
  onComplete,
}: MatchingPairsProps) {
  // Initialize shuffledRight as state to ensure it's only shuffled once when the component mounts
  const [shuffledRight, setShuffledRight] = useState<Pair[]>([]);

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ [key: string]: string }>({});
  const [matchResults, setMatchResults] = useState<{ [key: string]: boolean }>({}); // Correct or incorrect matches

  // Shuffle right column only once on component mount
  useEffect(() => {
    const shuffled = [...pairs].sort(() => Math.random() - 0.5);
    setShuffledRight(shuffled);
  }, [pairs]); // Runs only once when the component is first mounted

  const handleMatch = (right: string) => {
    if (!selectedLeft) return;

    const isCorrect = pairs.some(
      (pair) => pair.left === selectedLeft && pair.right === right
    );

    // Update the matches
    const newMatches = { ...matches, [selectedLeft]: right };
    setMatches(newMatches);

    // Store whether the match is correct
    setMatchResults({ ...matchResults, [selectedLeft]: isCorrect });

    // Reset the selected left button
    setSelectedLeft(null);

    // After 2 seconds, reset match results to normal state
    setTimeout(() => {
      setMatchResults((prev) => {
        const newResults = { ...prev };
        Object.keys(prev).forEach((key) => {
          delete newResults[key]; // Clear out the results after 2 seconds
        });
        return newResults;
      });
    }, 2000);

    // Check if all matches are done correctly
    if (Object.keys(newMatches).length === pairs.length) {
      const correct = pairs.every(
        (pair) => newMatches[pair.left] === pair.right
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
              key={pair.left}
              className={`block w-full p-3 rounded-xl border ${
                selectedLeft === pair.left
                  ? "bg-violet-200 dark:bg-violet-600 border-violet-500"
                  : "bg-white/80 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              } hover:bg-violet-100 dark:hover:bg-violet-700`}
              onClick={() => setSelectedLeft(pair.left)}
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
                // Add match results and button selection feedback
                selectedLeft &&
                (matchResults[selectedLeft] === false
                  ? "bg-red-200 dark:bg-red-700 text-red-900"
                  : matchResults[selectedLeft] === true
                  ? "bg-green-200 dark:bg-green-700 text-green-900"
                  : "bg-white/80 dark:bg-gray-700 border-gray-300 dark:border-gray-600")
              } hover:bg-violet-100 dark:hover:bg-violet-700`}
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
