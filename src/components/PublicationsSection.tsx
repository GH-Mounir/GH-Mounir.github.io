import React, { useState, useMemo } from "react";
import { publications, Publication } from "../data/portfolioData";
import { Search, BookOpen, Copy, Check, ChevronDown, ChevronUp, FileText, Filter, Tag, Send } from "lucide-react";

export const PublicationsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [expandedBibtex, setExpandedBibtex] = useState<Record<string, boolean>>({});
  const [expandedAbstract, setExpandedAbstract] = useState<Record<string, boolean>>({
    "iob-qoe-suite": true, // open first by default for quick reading
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Extract unique topics for filter
  const topicsList = useMemo(() => {
    const allTopics = new Set<string>();
    publications.forEach((p) => {
      p.topics.forEach((t) => allTopics.add(t));
    });
    return ["All", ...Array.from(allTopics)];
  }, []);

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.paperType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (pub.abstract && pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTopic = selectedTopic === "All" || pub.topics.includes(selectedTopic);

      return matchesSearch && matchesTopic;
    });
  }, [searchQuery, selectedTopic]);

  const toggleBibtex = (id: string) => {
    setExpandedBibtex((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAbstract = (id: string) => {
    setExpandedAbstract((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyBibtex = (id: string, text?: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getPaperTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "dataset paper":
        return "bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border-teal-200/80 dark:border-teal-800/80";
      case "research paper":
        return "bg-sky-50 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border-sky-200/80 dark:border-sky-800/80";
      case "concept paper":
        return "bg-amber-50 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/80";
      default:
        return "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700";
    }
  };

  const getStatusBadge = (status: string) => {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/70 dark:border-stone-700/60">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto font-sans">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold mb-2 border border-teal-200/60 dark:border-teal-800/60">
          <BookOpen className="w-3 h-3 text-teal-600 dark:text-teal-400" />
          Under Preparation • Working Papers
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif">Publications</h1>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-1">
          Manuscripts in preparation, ongoing empirical research, and conceptual frameworks.
        </p>
      </div>

      {/* Search & Topic Filter Bar */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search papers by title, topic, status, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Topic Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-stone-100 dark:border-stone-800/80">
          <div className="flex items-center gap-1 text-xs font-semibold text-stone-500 dark:text-stone-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Topic:</span>
          </div>
          {topicsList.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedTopic === topic
                  ? "bg-teal-700 dark:bg-teal-600 text-white font-semibold shadow-xs"
                  : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-5">
        {filteredPublications.length === 0 ? (
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-12 text-center text-stone-500 dark:text-stone-400">
            <p className="font-medium text-base">No papers found matching your query.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTopic("All");
              }}
              className="mt-3 text-xs text-teal-700 dark:text-teal-400 font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredPublications.map((pub: Publication) => {
            const hasBibtex = !!pub.bibtex;
            const isBibtexOpen = !!expandedBibtex[pub.id];
            const isAbstractOpen = !!expandedAbstract[pub.id];

            return (
              <div
                key={pub.id}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-7 hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-all shadow-xs space-y-4"
              >
                {/* Top Badges: Paper Type + Status */}
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full font-semibold text-xs border ${getPaperTypeColor(pub.paperType)}`}>
                      {pub.paperType}
                    </span>
                    {getStatusBadge(pub.status)}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 font-serif leading-snug">
                  {pub.title}
                </h2>

                {/* Authors */}
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                  {pub.authors.map((author, aIdx) => (
                    <span key={aIdx}>
                      <strong className="text-teal-800 dark:text-teal-300 underline underline-offset-2 font-semibold">{author}</strong>
                      {aIdx < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>

                {/* Topics Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] font-semibold text-stone-400 dark:text-stone-500 mr-1 flex items-center gap-1">
                    <Tag className="w-3 h-3" /> Topics:
                  </span>
                  {pub.topics.map((topic, tIdx) => (
                    <button
                      key={tIdx}
                      onClick={() => setSelectedTopic(topic)}
                      className="px-2 py-0.5 rounded-md bg-stone-50 dark:bg-stone-800/80 text-stone-600 dark:text-stone-300 text-[11px] hover:bg-teal-50 dark:hover:bg-teal-950 hover:text-teal-700 dark:hover:text-teal-300 border border-stone-200/70 dark:border-stone-700/60 transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>

                {/* Action buttons (Abstract, BibTeX, Inquire / Contact) */}
                <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-stone-100 dark:border-stone-800/80">
                  {pub.abstract && (
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                    >
                      <span>Abstract</span>
                      {isAbstractOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  )}

                  {hasBibtex && (
                    <button
                      onClick={() => toggleBibtex(pub.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-stone-400" />
                      <span>BibTeX</span>
                      {isBibtexOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  )}

                  <a
                    href={`mailto:mounir.gharsallah@enicar.ucar.tn?subject=${encodeURIComponent(`Inquiry regarding paper: ${pub.title}`)}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold hover:bg-teal-100 dark:hover:bg-teal-900/80 transition-colors ml-auto border border-teal-200/60 dark:border-teal-800/60"
                  >
                    <Send className="w-3 h-3" />
                    <span>Request Draft / Collaborate</span>
                  </a>
                </div>

                {/* Expandable Abstract Box */}
                {isAbstractOpen && pub.abstract && (
                  <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/70 dark:border-stone-700/60 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed animate-fadeIn">
                    <p className="font-semibold text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1.5">Abstract</p>
                    {pub.abstract}
                  </div>
                )}

                {/* Expandable BibTeX Box */}
                {isBibtexOpen && pub.bibtex && (
                  <div className="relative p-4 rounded-xl bg-stone-900 dark:bg-black text-stone-100 text-xs font-mono border border-stone-800 animate-fadeIn">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-stone-400">
                      <span>BibTeX Citation</span>
                      <button
                        onClick={() => copyBibtex(pub.id, pub.bibtex)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs transition-colors"
                        title="Copy BibTeX"
                      >
                        {copiedId === pub.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed">{pub.bibtex}</pre>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
