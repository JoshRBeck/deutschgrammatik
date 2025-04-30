// src/components/LessonCard.tsx
import { Link } from "react-router-dom";

interface LessonCardProps {
  id: string;
  title: string;
  description: string;
}

const LessonCard = ({ id, title, description }: LessonCardProps) => {
  return (
    <Link to={`/lessons/${id}`}>
      <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
        <h2 className="text-xl font-bold text-violet-800 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default LessonCard;
