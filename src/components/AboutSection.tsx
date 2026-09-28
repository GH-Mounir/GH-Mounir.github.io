import React, { useState, useEffect } from "react";
import { authorData, newsItems, cvData } from "../data/portfolioData";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Award,
  Sparkles,
  BookOpen,
  FileText,
  ChevronRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Database,
  LineChart,
  Cpu,
} from "lucide-react";

interface AboutSectionProps {
  onNavigate: (tab: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const [currentAvatar, setCurrentAvatar] = useState<string>(authorData.avatar);

  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem("mounir_custom_avatar");
      if (savedPhoto) {
        setCurrentAvatar(savedPhoto);
      }
    } catch {
      // Ignore
    }
  }, []);

  return (
    <div className="space-y-12 animate-fadeIn font-sans">
      {/* Hero / Profile Section */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-teal-500/5 dark:bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main Info (Left on desktop) */}
          <div className="md:col-span-8 space-y-5 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider border border-teal-200/60 dark:border-teal-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 animate-pulse" />
              {authorData.role} • Seeking PhD Advisor
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight font-serif">{authorData.name}</h1>
              <p className="text-base sm:text-lg text-teal-800 dark:text-teal-400 font-medium mt-1">{authorData.tagline}</p>
            </div>

            {/* Quick contact / location info */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-stone-600 dark:text-stone-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-stone-400" />
                <span>{authorData.institution}</span>
              </div>
              <a
                href={`tel:${authorData.phone}`}
                className="flex items-center gap-1.5 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-stone-400" />
                <span>{authorData.phone}</span>
              </a>
              <a
                href={`mailto:${authorData.email}`}
                className="flex items-center gap-1.5 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-stone-400" />
                <span>{authorData.email}</span>
              </a>
              <a
                href={authorData.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 hover:underline font-mono"
              >
                <span>ORCID</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={authorData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:underline"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={authorData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 hover:underline"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-3.5 text-stone-700 dark:text-stone-300 text-base leading-relaxed pt-2">
              {authorData.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <button
                onClick={() => onNavigate("publications")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium text-sm hover:bg-stone-800 dark:hover:bg-stone-200 transition-all shadow-xs"
              >
                <BookOpen className="w-4 h-4" />
                View Publications
              </button>
              <button
                onClick={() => onNavigate("cv")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-medium text-sm hover:bg-stone-200 dark:hover:bg-stone-700 transition-all border border-stone-300/70 dark:border-stone-700"
              >
                <FileText className="w-4 h-4" />
                Curriculum Vitae
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 font-medium text-sm hover:bg-teal-100 dark:hover:bg-teal-900/60 transition-all border border-teal-200 dark:border-teal-800/60"
              >
                <Mail className="w-4 h-4" />
                Research Inquiries
              </button>
            </div>
          </div>

          {/* Profile Image & Academic Badges (Right on desktop) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end order-1 md:order-2">
            <div className="relative group">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-md border-4 border-stone-100 dark:border-stone-800 bg-stone-200 dark:bg-stone-800">
                <img
                  src={currentAvatar}
                  alt={authorData.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>

              <div className="absolute -bottom-2 -right-2 bg-teal-700 dark:bg-teal-600 text-white p-2 rounded-xl shadow-lg">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* Quick Academic Affiliations Card */}
            <div className="mt-4 w-full bg-stone-50 dark:bg-stone-800/50 border border-stone-200/80 dark:border-stone-700/60 rounded-xl p-4 text-xs space-y-2.5">
              <div className="font-semibold text-stone-900 dark:text-stone-200 uppercase tracking-wider text-[11px] text-stone-500 dark:text-stone-400">
                Academic Standing & Roles
              </div>
              <div className="flex items-start gap-2 text-stone-700 dark:text-stone-300">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Verified Peer Reviewer:</strong> IEEE Transactions on Multimedia (TMM)
                </span>
              </div>
              <div className="flex items-start gap-2 text-stone-700 dark:text-stone-300">
                <Award className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>MSc in Data Science & Mobiquity:</strong> ENICarthage & INNOV'COM (Grade A: 15.81/20, Thesis: 17/20)
                </span>
              </div>
              <div className="flex items-start gap-2 text-stone-700 dark:text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>National Engineering Prep (CPGE):</strong> IPEIM Ranked 8 / 130
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Research Artifacts & Testbeds Banner */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-serif">Proprietary Experimental Assets & Datasets</h2>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Empirical testbeds and data platforms constructed under ITU-T P.910 and P.1204 protocols
            </p>
          </div>
          <button
            onClick={() => onNavigate("cv")}
            className="text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline inline-flex items-center gap-1 shrink-0"
          >
            View in CV <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cvData.researchArtifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-5 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all hover:shadow-xs group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800/50">
                    {artifact.category}
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono">{artifact.accessType}</span>
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                  {artifact.title}
                </h3>
                <p className="text-xs text-teal-800 dark:text-teal-400 font-medium mb-2">{artifact.subtitle}</p>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-3">{artifact.description}</p>
              </div>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex flex-wrap gap-1.5">
                {artifact.specifications.slice(0, 2).map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] px-2 py-0.5 rounded bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-stone-700/60"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Pillars */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-serif">Core Research Pillars</h2>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Key domains combining mathematical foundations with practical edge computing architectures
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {authorData.researchHighlights.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-5 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all hover:shadow-xs group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs mb-3 border border-teal-200/50 dark:border-teal-800/50 group-hover:scale-105 transition-transform">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base mb-2 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Announcements / News Section */}
      <section className="bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif">Latest News & Updates</h2>
          </div>
          <button
            onClick={() => onNavigate("news")}
            className="text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
          >
            All Updates <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="divide-y divide-stone-200 dark:divide-stone-800">
          {newsItems.slice(0, 2).map((item) => (
            <div key={item.id} className="py-3 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <span className="text-xs font-mono font-medium text-stone-500 dark:text-stone-400 shrink-0 w-20">{item.date}</span>
              <div>
                <span className="font-semibold text-sm text-stone-900 dark:text-stone-100 mr-2">{item.title}</span>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-0.5">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
