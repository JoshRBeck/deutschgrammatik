import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Lessons from "./pages/Lessons";
import LessonPage from "./pages/LessonPage";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
// import TestPage from "./pages/TestPage";

function App() {
  // Load theme preference from localStorage or use system preference as fallback
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      return stored === "dark"; // Use stored preference
    }
    // fallback to system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark;
  });

  // Effect to apply or remove 'dark' class on <html> tag based on isDark state
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the current theme to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Toggle function to switch between light and dark modes
  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <main className="transition-colors duration-500">
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/lessons" element={<Lessons isDark={isDark} />} />
          <Route path="/lessons/:id" element={<LessonPage isDark={isDark} />} />
          <Route path="/Quiz" element={<Quiz isDark={isDark} />} />
          {/* <Route path="/TestPage" element={<TestPage isDark={isDark} />} /> */}
          <Route path="*" element={<NotFound isDark={isDark} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
