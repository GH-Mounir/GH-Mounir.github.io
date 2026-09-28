import React, { useState, useMemo } from "react";
import { publications, Publication } from "../data/portfolioData";
import { Search, BookOpen, Copy, Check, ChevronDown, ChevronUp, FileText, ExternalLink, Filter } from "lucide-react";

export const PublicationsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedBibtex, setExpandedBibtex] = useState<Record<string, boolean>>({});
  const [expandedAbstract, setExpandedAbstract] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["All", "AI & Inference", "Multimedia QoE", "Foundations & Physics"];

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.badges?.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === "All" || pub.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold mb-2 border border-teal-200/60 dark:border-teal-800/60">
          <BookOpen className="w-3 h-3 text-teal-600 dark:text-teal-400" />
          Academic Bibliography
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif">Publications & Preprints</h1>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-1">
          Working papers, preprints, manuscripts, and foundational references in reverse chronological order.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by title, author, venue, keyword, or year..."
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

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-stone-100 dark:border-stone-800/80">
          <div className="flex items-center gap-1 text-xs font-semibold text-stone-500 dark:text-stone-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold shadow-xs"
                  : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-4">
        {filteredPublications.length === 0 ? (
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-12 text-center text-stone-500 dark:text-stone-400">
            <p className="font-medium text-base">No publications found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-3 text-xs text-teal-700 dark:text-teal-400 font-semibold hover:underline"
            >
              Reset all filters
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
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 hover:border-stone-300 dark:hover:border-stone-700 transition-all shadow-xs space-y-3"
              >
                {/* Badges & Year */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {pub.abbr && (
                      <span className="px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 font-mono text-[11px] font-bold border border-teal-200/60 dark:border-teal-800/60">
                        {pub.abbr}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 text-[11px] font-medium">
                      {pub.category}
                    </span>
                    {pub.badges?.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2 py-0.5 rounded bg-stone-100/60 dark:bg-stone-800/60 text-stone-500 dark:text-stone-400 text-[11px]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-mono font-semibold text-stone-500 dark:text-stone-400">{pub.year}</span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif leading-snug">{pub.title}</h2>

                {/* Authors */}
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                  {pub.authors.map((author, aIdx) => {
                    const isMounir = author.toLowerCase().includes("gharsallah");
                    return (
                      <span key={aIdx}>
                        {isMounir ? (
                          <strong className="text-teal-800 dark:text-teal-300 underline underline-offset-2 font-semibold">{author}</strong>
                        ) : (
                          author
                        )}
                        {aIdx < pub.authors.length - 1 ? ", " : ""}
                      </span>
                    );
                  })}
                </p>

                {/* Venue */}
                <p className="text-xs font-medium text-stone-500 dark:text-stone-400 italic">{pub.venue}</p>

                {/* Action buttons (Abstract, BibTeX, DOI, PDF) */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100 dark:border-stone-800/80">
                  {pub.abstract && (
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                    >
                      <span>Abstract</span>
                      {isAbstractOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                  )}

                  {hasBibtex && (
                    <button
                      onClick={() => toggleBibtex(pub.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                    >
                      <FileText className="w-3 h-3 text-stone-400" />
                      <span>BibTeX</span>
                      {isBibtexOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                  )}

                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-medium hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors"
                    >
                      <span>DOI</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href="/assets/pdf/example_pdf.pdf"
                    download
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                  >
                    <span>PDF</span>
                  </a>
                </div>

                {/* Expandable Abstract Box */}
                {isAbstractOpen && pub.abstract && (
                  <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed animate-fadeIn">
                    <p className="font-semibold text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">Abstract</p>
                    {pub.abstract}
                  </div>
                )}

                {/* Expandable BibTeX Box */}
                {isBibtexOpen && pub.bibtex && (
                  <div className="relative p-3.5 rounded-xl bg-stone-900 dark:bg-black text-stone-100 text-xs font-mono border border-stone-800 animate-fadeIn">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-stone-400">
                      <span>BibTeX Entry</span>
                      <button
                        onClick={() => copyBibtex(pub.id, pub.bibtex)}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 text-[11px] transition-colors"
                        title="Copy BibTeX"
                      >
                        {copiedId === pub.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="overflow-x-auto whitespace-pre-wrap">{pub.bibtex}</pre>
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
