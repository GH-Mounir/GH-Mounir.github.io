import React from 'react';
import { newsItems } from '../data/portfolioData';
import { Bell, Calendar, Tag } from 'lucide-react';

export const NewsSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold mb-2 border border-teal-200/60 dark:border-teal-800/60">
          <Bell className="w-3 h-3 text-teal-600 dark:text-teal-400" />
          Announcements & Milestones
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif">
          Academic News & Timeline
        </h1>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-1">
          Recent research updates, scholarly invitations, paper submissions, and opportunities.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-stone-200 dark:border-stone-800 ml-4 pl-6 sm:pl-8 space-y-8">
        {newsItems.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-teal-600 dark:bg-teal-400 border-4 border-stone-50 dark:border-stone-950 group-hover:scale-125 transition-transform" />

            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-xs group-hover:border-stone-300 dark:group-hover:border-stone-700 transition-all space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-stone-500 dark:text-stone-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
                {item.tag && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 text-xs font-medium">
                    <Tag className="w-3 h-3" />
                    {item.tag}
                  </span>
                )}
              </div>

              <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif">
                {item.title}
              </h2>

              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
