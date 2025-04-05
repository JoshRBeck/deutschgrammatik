import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Quiz from "./pages/Quiz";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-violet-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Lessons" element={<Lessons />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
