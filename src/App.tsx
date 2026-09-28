import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import { CVSection } from "./components/CVSection";
import { PublicationsSection } from "./components/PublicationsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { NewsSection } from "./components/NewsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export function App() {
  const [activeTab, setActiveTab] = useState<string>(() => {
    const hash = window.location.hash.replace("#", "");
    if (["about", "cv", "publications", "projects", "news", "contact"].includes(hash)) {
      return hash;
    }
    return "about";
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    window.location.hash = activeTab;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [activeTab]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 selection:bg-teal-500/20 selection:text-teal-900 dark:selection:text-teal-200 font-sans transition-colors duration-200">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} isDark={isDark} toggleTheme={toggleTheme} />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === "about" && <AboutSection onNavigate={setActiveTab} />}
        {activeTab === "cv" && <CVSection />}
        {activeTab === "publications" && <PublicationsSection />}
        {activeTab === "projects" && <ProjectsSection />}
        {activeTab === "news" && <NewsSection />}
        {activeTab === "contact" && <ContactSection />}
      </main>

      <Footer onNavigate={setActiveTab} />
    </div>
  );
}

export default App;
