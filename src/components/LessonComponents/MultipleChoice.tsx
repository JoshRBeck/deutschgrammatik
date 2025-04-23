import { useState } from "react";

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface MultipleChoiceProps {
  question: string;
  options: Option[];
  onAnswer: (isCorrect: boolean) => void;
}

export default function MultipleChoice({
  question,
  options,
  onAnswer,
}: MultipleChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (option: Option) => {
    if (answered) return;
    setSelected(option.id);
    setAnswered(true);
    onAnswer(option.isCorrect);
  };

  return (
    <div className="w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-4">{question}</h2>
      <ul className="space-y-3">
        {options.map((option) => {
          const isSelected = selected === option.id;
          const isCorrect = option.isCorrect;
          const status =
            answered && isSelected
              ? isCorrect
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
              : "bg-white dark:bg-gray-800";

          return (
            <li
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`cursor-pointer px-4 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition duration-200 hover:bg-violet-100 dark:hover:bg-violet-700 ${
                isSelected ? status : ""
              }`}
            >
              {option.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
