import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface QuoteItem {
  id: number;
  text: string;
  theme: string;
}

const PHILOSOPHY_QUOTES: QuoteItem[] = [
  { id: 1, text: "Integrity is doing the right thing, even when no one is watching.", theme: "Integrity" },
  { id: 2, text: "Discipline creates consistency. Consistency creates excellence.", theme: "Discipline" },
  { id: 3, text: "Service is not a weakness. It is a responsibility.", theme: "Service" },
  { id: 4, text: "Excellence is not an act, but a standard.", theme: "Excellence" },
  { id: 5, text: "Trust is built through actions, not promises.", theme: "Trust" },
  { id: 6, text: "Technology must serve humanity.", theme: "Human-centric" },
  { id: 7, text: "Think responsibly. Build intelligently. Serve with integrity.", theme: "Commitment" },
  { id: 8, text: "Great solutions begin with great responsibility.", theme: "Accountability" },
  { id: 9, text: "Quality is never an accident.", theme: "Quality" },
  { id: 10, text: "Build with purpose. Lead with integrity.", theme: "Leadership" },
];

export const PhilosophyQuotes: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {PHILOSOPHY_QUOTES.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.04 }}
          className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#10B981] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          {/* Top indicator */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono tracking-wider text-[#059669] font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
              {item.theme}
            </span>
            <Quote className="w-5 h-5 text-slate-300 group-hover:text-[#10B981] transition-colors" />
          </div>

          <p className="text-base sm:text-lg font-medium text-[#0B1B3D] leading-relaxed italic">
            &ldquo;{item.text}&rdquo;
          </p>

          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="font-mono text-[11px] font-semibold text-slate-400">Principe #{String(item.id).padStart(2, '0')}</span>
            <span className="text-slate-500 font-semibold group-hover:text-[#10B981] transition-colors font-mono text-[10px] uppercase">
              THE STANDARD WE LIVE BY
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
