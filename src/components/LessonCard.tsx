import React from "react";

interface LessonProps {
  title: string;
  content: string;
  created_at: string;
}

const LessonCard: React.FC<LessonProps> = ({ title, content, created_at }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
      <h2 className="text-lg font-semibold text-blue-600">{title}</h2>
      <p className="text-gray-700 mt-2">{content.substring(0, 100)}...</p>
      <span className="text-sm text-gray-500">
        Added: {new Date(created_at).toLocaleDateString()}
      </span>
    </div>
  );
};

export default LessonCard;
