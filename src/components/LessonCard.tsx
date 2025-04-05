interface LessonCardProps {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default LessonCard;
