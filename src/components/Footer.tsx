export default function Footer() {
  return (
    <footer className="bg-violet-200 dark:bg-violet-800 text-gray-700 dark:text-gray-300 py-6 shadow-inner">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800 dark:text-white">
            Language Learning App
          </span>
          . All rights reserved.
        </p>
        <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
          Built with ❤️ using Supabase & React
        </div>
      </div>
    </footer>
  );
}
