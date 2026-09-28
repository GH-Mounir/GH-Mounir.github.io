import React, { useState } from "react";
import { projects, Project } from "../data/portfolioData";
import {
  Briefcase,
  Sparkles,
  X,
  Layers,
  ArrowRight,
  HelpCircle,
  Cpu,
  Workflow,
  Radio,
  BarChart3,
  CheckCircle2,
  Quote,
  Activity,
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Research", "Development", "Cognitive Modeling"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold mb-2 border border-teal-200/60 dark:border-teal-800/60">
            <Briefcase className="w-3 h-3 text-teal-600 dark:text-teal-400" />
            Featured Projects & Systems
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 font-serif tracking-tight">
            Research & Engineering Projects
          </h1>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Event-centric datasets, experimental PWA telemetry, process-aware behavioral modeling, and multimedia analytics.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-stone-100 dark:bg-stone-800/70 rounded-xl self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-white dark:bg-stone-900 text-teal-800 dark:text-teal-300 shadow-xs"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden shadow-xs hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all flex flex-col group"
          >
            {/* Project Image & Category Bar */}
            <div className="h-44 overflow-hidden bg-stone-100 dark:bg-stone-800 relative">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
              
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium flex items-center gap-1.5">
                {proj.category === "Research" && <Workflow className="w-3 h-3 text-teal-400" />}
                {proj.category === "Development" && <Cpu className="w-3 h-3 text-amber-400" />}
                {proj.category === "Cognitive Modeling" && <Activity className="w-3 h-3 text-indigo-400" />}
                {proj.category}
              </div>

              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-stone-200 text-[11px] font-mono">
                {proj.year}
              </div>

              <div className="absolute bottom-3 left-4 right-4">
                <h2 className="font-bold text-lg text-white font-serif tracking-tight drop-shadow-xs">
                  {proj.title}
                </h2>
                <p className="text-xs text-teal-300 font-medium line-clamp-1">
                  {proj.subtitle}
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {proj.description}
                </p>

                {/* Key Metrics / Visual Callouts if available */}
                {proj.metrics && (
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {proj.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="bg-stone-50 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60 rounded-lg p-2 text-center"
                      >
                        <div className="text-xs font-extrabold text-teal-800 dark:text-teal-300 font-mono">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-stone-500 dark:text-stone-400">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Pipeline block if present */}
                {proj.keyIdea && (
                  <div className="bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/70 dark:border-teal-800/60 rounded-xl p-2.5">
                    <div className="text-[10px] font-semibold text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-1">
                      Analytical Pipeline
                    </div>
                    <div className="text-xs font-mono font-medium text-stone-800 dark:text-stone-200">
                      {proj.keyIdea}
                    </div>
                  </div>
                )}

                {/* Core Principle banner if present */}
                {proj.corePrinciple && (
                  <div className="bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/60 rounded-xl p-2.5 text-center">
                    <span className="text-xs font-mono font-bold text-amber-900 dark:text-amber-300">
                      {proj.corePrinciple}
                    </span>
                  </div>
                )}

                {/* Quote if present */}
                {proj.quote && (
                  <div className="flex items-start gap-2 text-xs italic text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-800/40 p-2.5 rounded-lg border-l-2 border-teal-600 dark:border-teal-400">
                    <Quote className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span>&ldquo;{proj.quote}&rdquo;</span>
                  </div>
                )}
              </div>

              {/* Tags & Action Button */}
              <div className="space-y-3 pt-2 border-t border-stone-100 dark:border-stone-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {proj.tags.length > 4 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-400">
                      +{proj.tags.length - 4}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-2.5 px-3 rounded-xl bg-stone-50 dark:bg-stone-800/80 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-stone-200/80 dark:border-stone-700"
                >
                  <Layers className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  View Architecture & Methodology
                  <ArrowRight className="w-3 h-3 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
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
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 font-mono">
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

            {/* Quote / Pipeline in Modal if present */}
            {selectedProject.quote && (
              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border-l-4 border-teal-600 dark:border-teal-400 text-sm italic text-stone-700 dark:text-stone-300">
                &ldquo;{selectedProject.quote}&rdquo;
              </div>
            )}

            {selectedProject.keyIdea && (
              <div className="bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/70 rounded-xl p-3.5">
                <div className="text-xs font-semibold text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-1">
                  Key Pipeline Flow
                </div>
                <div className="text-sm font-mono font-bold text-stone-900 dark:text-stone-100">
                  {selectedProject.keyIdea}
                </div>
              </div>
            )}

            {selectedProject.corePrinciple && (
              <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/70 rounded-xl p-3 text-center">
                <div className="text-sm font-mono font-extrabold text-amber-900 dark:text-amber-300">
                  {selectedProject.corePrinciple}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>{selectedProject.description}</p>

              {/* Research Questions */}
              {selectedProject.researchQuestions && (
                <div className="bg-stone-50 dark:bg-stone-800/40 rounded-xl p-4 border border-stone-200/80 dark:border-stone-700/60">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-2.5 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    Core Research Questions
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                    {selectedProject.researchQuestions.map((q, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dimensions if present */}
              {selectedProject.dimensions && (
                <div className="bg-stone-50 dark:bg-stone-800/40 rounded-xl p-4 border border-stone-200/80 dark:border-stone-700/60">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-2.5 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    Latent Behavioral Dimensions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.dimensions.map((dim, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-800 dark:text-indigo-300 text-xs font-medium"
                      >
                        {dim}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features / Artifacts */}
              {selectedProject.features && (
                <div className="space-y-2">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    System Capabilities & Artifacts
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                    {selectedProject.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Layers if present */}
              {selectedProject.layers && (
                <div className="space-y-2">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-1.5">
                    <Radio className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    Context Observability Layers
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                    {selectedProject.layers.map((l, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech stack */}
              {selectedProject.techStack && (
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 text-xs uppercase tracking-wider text-stone-500 mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div>
                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-2 flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  Key Methodological Highlights
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-stone-600 dark:text-stone-400">
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
