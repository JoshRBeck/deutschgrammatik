interface LessonCardProps {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-xl font-bold text-violet-700 tracking-wide mb-3">
        {title}
      </h2>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};

export default LessonCard;
