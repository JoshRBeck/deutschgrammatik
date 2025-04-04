export default function Footer() {
  return (
    <footer className="bg-violet-100 text-white p-4 text-center mt-8">
      <p className="text-gray-800">
        © {new Date().getFullYear()} Language Learning App. All Rights Reserved.
      </p>
    </footer>
  );
}
