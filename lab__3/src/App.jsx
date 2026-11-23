import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    const hours = new Date().getHours();
    return hours >= 7 && hours < 21 ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300">
      {/* Кнопка перемикання теми */}
      <div className="fixed top-4 right-6 z-40">
        <button
          onClick={toggleTheme}
          className="cursor-pointer rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-emerald-400 shadow-lg transition hover:border-emerald-500"
        >
          {theme === "light" ? "🌙 Нічний режим" : "☀️ Денний режим"}
        </button>
      </div>

      <Header />
      <main className="mx-auto max-w-6xl space-y-10 px-6 py-12">
        <About />
        <div className="grid gap-6 md:grid-cols-2">
          <Education />
          <Skills />
        </div>
        <Experience />
        <Reviews />
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;