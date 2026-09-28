import React from "react";
import { ArrowUp, Brain } from "lucide-react";
import { authorData } from "../data/portfolioData";

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/40 text-stone-600 dark:text-stone-400 py-10 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-teal-600/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center text-xs font-bold">
              <Brain className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200">
              © {new Date().getFullYear()} {authorData.name} • Academic Portfolio
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button onClick={() => onNavigate("about")} className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
              About
            </button>
            <button onClick={() => onNavigate("cv")} className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
              CV
            </button>
            <button onClick={() => onNavigate("publications")} className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
              Publications
            </button>
            <button onClick={() => onNavigate("contact")} className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
              Contact
            </button>
            <span className="text-stone-300 dark:text-stone-700">|</span>
            <a
              href={authorData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href={authorData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={authorData.orcidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              ORCID
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors shadow-2xs"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Top
          </button>
        </div>

        <div className="mt-6 text-center text-[11px] text-stone-500 dark:text-stone-400">
          Built with React & Tailwind CSS • Powered by Google AI Studio
        </div>
      </div>
    </footer>
  );
};
