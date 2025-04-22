interface LessonCardProps {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-xl font-bold text-violet-700 dark:text-violet-300 tracking-wide mb-3">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default LessonCard;
