import React, { useState } from "react";
import { cvData } from "../data/portfolioData";
import {
  Download,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Printer,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Check,
  ChevronDown,
  ChevronUp,
  Layers,
  Globe2,
  Users2,
  FileCheck,
  ShieldCheck,
  Terminal,
  ExternalLink,
  Cpu,
  Database,
  LineChart,
} from "lucide-react";

export const CVSection: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [expandedSection, setExpandedSection] = useState<Record<string, boolean>>({
    education: true,
    experience: true,
    artifacts: true,
    certifications: true,
    skills: true,
    languages: true,
    referees: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = "/assets/pdf/example_pdf.pdf";
    link.download = "Mounir_GHARSALLAH_Academic_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto font-sans">
      {/* CV Header Bar */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold mb-2 border border-teal-200/60 dark:border-teal-800/60">
            <Sparkles className="w-3 h-3 text-teal-600 dark:text-teal-400" />
            Curriculum Vitae • Academic Profile
          </div>
          <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif">{cvData.name}</h1>
          <p className="text-sm sm:text-base text-teal-800 dark:text-teal-400 font-medium mt-1">{cvData.label}</p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-stone-600 dark:text-stone-400 mt-3 font-mono">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-stone-400" /> {cvData.location}
            </span>
            <a href={`tel:${cvData.phone}`} className="flex items-center gap-1.5 hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-stone-400" /> {cvData.phone}
            </a>
            <a href={`mailto:${cvData.email}`} className="flex items-center gap-1.5 hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-stone-400" /> {cvData.email}
            </a>
            <a
              href={`https://orcid.org/${cvData.orcid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              <FileCheck className="w-3.5 h-3.5" /> ORCID: {cvData.orcid}
            </a>
            <a
              href={cvData.githubUrl || `https://github.com/${cvData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-stone-100 hover:underline"
            >
              GitHub: {cvData.github}
            </a>
            <a
              href={cvData.linkedinUrl || "https://www.linkedin.com/in/mounir-gharsallah-05791b256/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 text-xs font-semibold hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors border border-stone-300/60 dark:border-stone-700"
            title="Print CV"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
          <button
            onClick={handleDownloadPDF}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-teal-700 dark:bg-teal-600 text-white text-xs font-semibold hover:bg-teal-800 dark:hover:bg-teal-500 transition-all shadow-xs"
          >
            {downloading ? (
              <>
                <Check className="w-4 h-4" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download PDF
              </>
            )}
          </button>
        </div>
      </div>

      {/* Research Profile & Summary Box */}
      <div className="bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-xl p-6 text-sm text-stone-700 dark:text-stone-300 leading-relaxed space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs uppercase tracking-wider font-bold text-stone-500 dark:text-stone-400">Research Profile & Focus</h2>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-medium">
            Seeking PhD Advisor
          </span>
        </div>
        <p>{cvData.summary}</p>
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {cvData.researchInterests.map((interest, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-white dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60 text-xs">
              <div className="font-semibold text-stone-900 dark:text-stone-100 mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />
                {interest.title}
              </div>
              <p className="text-stone-600 dark:text-stone-400 leading-normal">{interest.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Proprietary Research Artifacts & Experimental Assets */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs">
        <button onClick={() => toggleSection("artifacts")} className="w-full flex items-center justify-between text-left group focus:outline-none">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-serif">
                Proprietary Research Artifacts & Experimental Assets
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Datasets, empirical testbeds, simulation frameworks, and analytics suites
              </p>
            </div>
          </div>
          {expandedSection.artifacts ? <ChevronUp className="w-5 h-5 text-stone-400" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
        </button>

        {expandedSection.artifacts && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {cvData.researchArtifacts.map((artifact) => (
              <div
                key={artifact.id}
                className="p-5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300">
                      {artifact.category}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-stone-200/80 dark:bg-stone-700 text-stone-700 dark:text-stone-300">
                      {artifact.accessType}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 mt-1">{artifact.title}</h3>
                  <p className="text-xs text-teal-800 dark:text-teal-400 font-medium mb-2">{artifact.subtitle}</p>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mb-3 leading-relaxed">{artifact.description}</p>
                  <ul className="space-y-1 text-xs text-stone-600 dark:text-stone-400">
                    {artifact.specifications.map((spec, specIdx) => (
                      <li key={specIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {artifact.compliance && (
                  <div className="mt-4 pt-3 border-t border-stone-200/60 dark:border-stone-700/60 flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-mono text-stone-500 uppercase">Compliance:</span>
                    {artifact.compliance.map((comp, compIdx) => (
                      <span
                        key={compIdx}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Academic Service & Editorial Contributions */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs">
        <button onClick={() => toggleSection("experience")} className="w-full flex items-center justify-between text-left group focus:outline-none">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-serif">Academic Service & Research Experience</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Peer review duties, research initiatives, and laboratory leadership</p>
            </div>
          </div>
          {expandedSection.experience ? <ChevronUp className="w-5 h-5 text-stone-400" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
        </button>

        {expandedSection.experience && (
          <div className="mt-6 space-y-6 divide-y divide-stone-100 dark:divide-stone-800">
            {cvData.experience.map((exp, idx) => (
              <div key={idx} className="pt-6 first:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">{exp.position}</h3>
                      {exp.position.includes("Reviewer") && (
                        <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-semibold">
                          <ShieldCheck className="w-3 h-3" />
                          Verified Referee (IEEE T-MM)
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-teal-800 dark:text-teal-400">{exp.organization}</p>
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-stone-500 dark:text-stone-400">
                    {exp.period} • {exp.location}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-2 italic">{exp.summary}</p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                  {exp.highlights.map((hl, hlIdx) => (
                    <li key={hlIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Education Section */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs">
        <button onClick={() => toggleSection("education")} className="w-full flex items-center justify-between text-left group focus:outline-none">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-serif">Education & Academic Formation</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Master's, Maîtrise, and CPGE national engineering preparatory qualifications
              </p>
            </div>
          </div>
          {expandedSection.education ? <ChevronUp className="w-5 h-5 text-stone-400" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
        </button>

        {expandedSection.education && (
          <div className="mt-6 space-y-6 divide-y divide-stone-100 dark:divide-stone-800">
            {cvData.education.map((edu, idx) => (
              <div key={idx} className="pt-6 first:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">{edu.degree}</h3>
                    <p className="text-sm font-medium text-teal-800 dark:text-teal-400">{edu.institution}</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 font-mono">{edu.field}</p>
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-stone-500 dark:text-stone-400">
                    {edu.period} • {edu.location}
                  </div>
                </div>

                {edu.standing && (
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold border border-stone-200 dark:border-stone-700">
                    <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>{edu.standing}</span>
                  </div>
                )}

                {edu.thesisTitle && (
                  <div className="mt-2 p-3 rounded-lg bg-stone-50 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300">
                    <p>
                      <strong>Dissertation / Thesis:</strong> <em>"{edu.thesisTitle}"</em>
                    </p>
                    {edu.thesisGrade && <p className="mt-1 text-teal-800 dark:text-teal-300 font-semibold">Evaluation: {edu.thesisGrade}</p>}
                    {edu.supervisor && <p className="mt-0.5 text-stone-500 dark:text-stone-400 text-[11px]">{edu.supervisor}</p>}
                  </div>
                )}

                <ul className="mt-3 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                  {edu.highlights.map((hl, hlIdx) => (
                    <li key={hlIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Certifications & Academic Badges */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs">
        <button
          onClick={() => toggleSection("certifications")}
          className="w-full flex items-center justify-between text-left group focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-serif">Certifications & Academic Badges</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                International Telecommunication Union (ITU), Celonis, Elsevier, and IBM credentials
              </p>
            </div>
          </div>
          {expandedSection.certifications ? <ChevronUp className="w-5 h-5 text-stone-400" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
        </button>

        {expandedSection.certifications && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {cvData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/80 dark:border-stone-700/60 flex items-start justify-between gap-2"
              >
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm text-stone-900 dark:text-stone-100">{cert.title}</h3>
                  <p className="text-xs text-teal-800 dark:text-teal-400 font-medium mt-0.5">{cert.issuer}</p>
                  <p className="text-[11px] font-mono text-stone-500 dark:text-stone-400 mt-1">{cert.date}</p>
                </div>
                {cert.badge && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 shrink-0">
                    {cert.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Digital & Methodological Skills Matrix */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs">
        <button onClick={() => toggleSection("skills")} className="w-full flex items-center justify-between text-left group focus:outline-none">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-serif">Digital & Methodological Competencies</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Frameworks, telemetry standards, sequential modeling, and process science
              </p>
            </div>
          </div>
          {expandedSection.skills ? <ChevronUp className="w-5 h-5 text-stone-400" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
        </button>

        {expandedSection.skills && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cvData.skills.map((skill, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/60">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">{skill.category}</h3>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-teal-100/70 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 font-medium">
                    {skill.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.keywords.map((kw, kwIdx) => (
                    <span
                      key={kwIdx}
                      className="text-xs px-2 py-1 rounded-md bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700/60"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Language Skills */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs">
        <button onClick={() => toggleSection("languages")} className="w-full flex items-center justify-between text-left group focus:outline-none">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-serif">Language Proficiencies</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Multilingual capabilities evaluated on the CEFR scale</p>
            </div>
          </div>
          {expandedSection.languages ? <ChevronUp className="w-5 h-5 text-stone-400" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
        </button>

        {expandedSection.languages && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {cvData.languages.map((lang, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/80 dark:border-stone-700/60">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">{lang.language}</h3>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300">
                    {lang.cefr}
                  </span>
                </div>
                <p className="text-xs font-medium text-stone-700 dark:text-stone-300 mt-1">{lang.level}</p>
                {lang.subskills && <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1.5 font-mono">{lang.subskills}</p>}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Academic Referees */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs">
        <button onClick={() => toggleSection("referees")} className="w-full flex items-center justify-between text-left group focus:outline-none">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 flex items-center justify-center">
              <Users2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-serif">Academic Referees & Supervisors</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Faculty professors available for doctoral references and recommendations
              </p>
            </div>
          </div>
          {expandedSection.referees ? <ChevronUp className="w-5 h-5 text-stone-400" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
        </button>

        {expandedSection.referees && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cvData.referees.map((ref, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/80 dark:border-stone-700/60 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 inline-block mb-2">
                    {ref.role}
                  </div>
                  <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">{ref.name}</h3>
                  <p className="text-xs text-teal-800 dark:text-teal-400 font-medium mt-0.5">{ref.title}</p>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">{ref.institution}</p>
                  {ref.lab && <p className="text-[11px] text-stone-500 dark:text-stone-500 mt-0.5 italic">Lab: {ref.lab}</p>}
                </div>

                <div className="mt-3 pt-3 border-t border-stone-200/60 dark:border-stone-700/60 space-y-1">
                  {ref.emails.map((em, emIdx) => (
                    <a
                      key={emIdx}
                      href={`mailto:${em}`}
                      className="text-xs text-stone-600 dark:text-stone-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center gap-1 truncate"
                    >
                      <Mail className="w-3 h-3 shrink-0" />
                      <span className="truncate">{em}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
