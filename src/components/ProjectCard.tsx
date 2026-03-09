import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, thumbnail, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-white/5"
      onClick={onClick}
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
        referrerPolicy="no-referrer"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-crimson flex items-center justify-center shadow-xl shadow-crimson/20">
          <Play fill="white" size={24} />
        </div>
      </div>
      
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-xl font-display font-bold text-white group-hover:text-crimson transition-colors">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};
