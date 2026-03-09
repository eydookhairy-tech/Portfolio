import React from 'react';
import { motion } from 'motion/react';

interface SkillCardProps {
  title: string;
  points: string[];
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, points, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group p-8 glass-card rounded-2xl hover:border-crimson/50 transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-crimson/0 to-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-crimson transition-colors">
        {title}
      </h3>
      
      <ul className="space-y-2 text-white/60 text-sm">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson mt-1.5 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
