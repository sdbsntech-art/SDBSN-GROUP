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
          className="group relative p-5 sm:p-7 rounded-2xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] shadow-sm transition-all flex flex-col justify-between"
        >
          {/* Top indicator */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono tracking-wider text-[#6EE7B7] font-bold uppercase px-2.5 py-0.5 rounded bg-[#0E1B17] border border-[#24403A]">
              {item.theme}
            </span>
            <Quote className="w-5 h-5 text-[#24403A] group-hover:text-[#10B981] transition-colors" />
          </div>

          <p className="text-base sm:text-lg font-medium text-[#F4F1EA] leading-relaxed italic">
            &ldquo;{item.text}&rdquo;
          </p>

          <div className="mt-5 pt-3 border-t border-[#24403A] flex items-center justify-between text-xs text-[#9DB2A8]">
            <span className="font-mono text-[11px] text-[#9DB2A8] font-semibold">Principe #{String(item.id).padStart(2, '0')}</span>
            <span className="text-[#9DB2A8] font-semibold group-hover:text-[#6EE7B7] transition-colors font-mono text-[10px] uppercase">
              THE STANDARD WE LIVE BY
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
