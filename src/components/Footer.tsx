export default function Footer() {
  return (
    <footer className="bg-violet-200 text-gray-700 py-6">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Language Learning App</span>. All
          rights reserved.
        </p>
        <div className="mt-2 text-xs text-gray-600">
          Built with ❤️ using Supabase & React
        </div>
      </div>
    </footer>
  );
}
