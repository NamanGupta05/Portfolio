import { motion } from 'framer-motion';
import { FaUsers, FaStar } from 'react-icons/fa';
import SectionHeader from './SectionHeader.jsx';
import { leadership } from '../data.js';

const icons = [FaUsers, FaStar];

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <SectionHeader kicker="Leadership" title="Position of Responsibility" />
      <div className="space-y-4">
        {leadership.map((role, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-3xl p-7 grid md:grid-cols-[auto_1fr] gap-6 items-start"
            >
              <div className="w-14 h-14 rounded-2xl grid place-items-center bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 border border-white/10 text-xl text-cyan-300 shrink-0">
                <Icon />
              </div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-semibold text-xl">{role.title}</h3>
                  <span className="font-mono text-xs text-cyan-400">{role.period}</span>
                </div>
                <p className="text-indigo-300 mt-1">{role.org}</p>
                <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside marker:text-cyan-400">
                  {role.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
