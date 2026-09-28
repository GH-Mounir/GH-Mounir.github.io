import React, { useState } from "react";
import { authorData } from "../data/portfolioData";
import { Mail, Copy, Check, Send, Sparkles, MapPin, ArrowUpRight, MessageSquare } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [inquiryType, setInquiryType] = useState("Research Collaboration");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;

    // Create mailto link for direct sending
    const subject = encodeURIComponent(`[${inquiryType}] From ${senderName}`);
    const body = encodeURIComponent(`Name: ${senderName}\nEmail: ${senderEmail}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${authorData.email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  const templates: Record<string, string> = {
    "Research Collaboration":
      "Dear Mounir,\n\nI would like to discuss potential research collaborations regarding ordinal modeling and distributed edge intelligence...",
    "General Inquiry": "Dear Mounir,\n\nI am reaching out regarding...",
  };

  const handleTemplateSelect = (type: string) => {
    setInquiryType(type);
    setMessage(templates[type] || "");
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold mb-2 border border-teal-200/60 dark:border-teal-800/60">
          <Mail className="w-3 h-3 text-teal-600 dark:text-teal-400" />
          Get in Touch
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif">Contact & Collaboration</h1>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-1">
          Open for research collaborations, academic discussions, paper feedback, and peer review inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Channels (Left) */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-xs space-y-5">
            <h2 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif">Direct Contact</h2>

            {/* Single Email Address */}
            <div className="space-y-1.5">
              <span className="text-xs font-medium text-stone-500 dark:text-stone-400">Email Address</span>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/60 text-xs sm:text-sm font-mono text-stone-800 dark:text-stone-200">
                <span className="truncate mr-2">{authorData.email}</span>
                <button
                  onClick={() => copyToClipboard(authorData.email)}
                  className="p-1 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-700 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail === authorData.email ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
              <MapPin className="w-4 h-4 text-stone-400" />
              <span>Tunis, Tunisia (UTC+1)</span>
            </div>
          </div>

          {/* Academic Profiles & Socials */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-xs space-y-3">
            <h2 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif">Scholarly Profiles</h2>

            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={authorData.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-stone-200/80 dark:border-stone-700/60 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">iD</div>
                  <span className="font-medium text-stone-800 dark:text-stone-200">ORCID Record</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 transition-colors" />
              </a>

              <a
                href={authorData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200/80 dark:border-stone-700/60 transition-colors group"
              >
                <span className="font-medium text-stone-800 dark:text-stone-200">GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors" />
              </a>

              <a
                href={authorData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/30 border border-stone-200/80 dark:border-stone-700/60 transition-colors group"
              >
                <span className="font-medium text-stone-800 dark:text-stone-200">LinkedIn Network</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Inquiry Composer (Right) */}
        <div className="md:col-span-7 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
          <div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              Send a Message
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">Select an inquiry type to draft an email directly to Mounir.</p>
          </div>

          {/* Inquiry templates - Only Research Collaboration and General Inquiry */}
          <div className="flex flex-wrap gap-2">
            {["Research Collaboration", "General Inquiry"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => handleTemplateSelect(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  inquiryType === type
                    ? "bg-teal-700 dark:bg-teal-600 text-white font-semibold shadow-xs"
                    : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name / Institution"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@institution.edu"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">Message Content</label>
              <textarea
                rows={5}
                required
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 focus:outline-none font-sans leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm font-semibold hover:bg-stone-800 dark:hover:bg-stone-200 transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <Send className="w-4 h-4" />
              Open Email Client & Send
            </button>

            {sentSuccess && (
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Preparing email in your default client... Thank you for reaching out!</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
