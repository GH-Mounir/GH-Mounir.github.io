import React, { useState } from 'react';
import { projects, Project } from '../data/portfolioData';
import { Briefcase, Sparkles, X, Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold mb-2 border border-teal-200/60 dark:border-teal-800/60">
          <Briefcase className="w-3 h-3 text-teal-600 dark:text-teal-400" />
          Research & Systems
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif">
          Selected Projects & Research Initiatives
        </h1>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-1">
          Theoretical investigations, edge prototypes, and algorithmic implementations.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden shadow-xs hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all flex flex-col group"
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden bg-stone-100 dark:bg-stone-800 relative">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium">
                {proj.category}
              </div>
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-stone-200 text-[11px] font-mono">
                {proj.year}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h2 className="font-bold text-lg text-stone-900 dark:text-stone-100 font-serif group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                  {proj.title}
                </h2>
                <p className="text-xs text-teal-800 dark:text-teal-400 font-medium">
                  {proj.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-2 px-3 rounded-lg bg-stone-50 dark:bg-stone-800/80 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-stone-200/80 dark:border-stone-700"
                >
                  <Layers className="w-3.5 h-3.5" />
                  View Details & Highlights
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 font-mono">
                  {selectedProject.category} • {selectedProject.year}
                </span>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-serif mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-teal-800 dark:text-teal-400 font-medium">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-56 rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>{selectedProject.description}</p>

              <div>
                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  Key Methodological Highlights
                </h4>
                <ul className="space-y-2 list-disc list-inside text-stone-600 dark:text-stone-400">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-xs font-semibold hover:bg-stone-800 dark:hover:bg-stone-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
