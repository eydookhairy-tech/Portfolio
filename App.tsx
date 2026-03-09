import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Facebook, MessageCircle, ArrowUpRight } from 'lucide-react';
import { VideoModal } from './components/VideoModal';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';

const PROJECTS = [
  {
    id: 'bfit',
    title: 'Bfit Social Media Campaign',
    videoUrl: 'https://player.vimeo.com/video/1170268183',
    thumbnail: 'https://vumbnail.com/1170268183.jpg'
  },
  {
    id: 'gemini',
    title: 'Gemini Unofficial Edit',
    videoUrl: 'https://player.vimeo.com/video/1171700340',
    thumbnail: 'https://vumbnail.com/1171700340.jpg'
  },
  {
    id: 'dental1',
    title: 'Dental Castle Campaign #1',
    videoUrl: 'https://www.youtube.com/embed/xdSAVuzbrpM',
    thumbnail: 'https://i.ytimg.com/vi/xdSAVuzbrpM/maxresdefault.jpg'
  },
  {
    id: 'dental2',
    title: 'Dental Castle Campaign #2',
    videoUrl: 'https://www.youtube.com/embed/b0S_3mA8bbU',
    thumbnail: 'https://i.ytimg.com/vi/b0S_3mA8bbU/maxresdefault.jpg'
  },
  {
    id: 'mortada',
    title: 'Mortada Social Media Campaign',
    videoUrl: 'https://www.youtube.com/embed/Vysnb94itg0',
    thumbnail: 'https://i.ytimg.com/vi/Vysnb94itg0/maxresdefault.jpg'
  }
];

const SKILLS = [
  {
    title: 'Video Editing',
    points: [
      'Narrative & Cinematic Storytelling',
      'Social Media Content Optimization',
      'Advanced Multi-cam Editing',
      'Dynamic Transitions & Pacing'
    ]
  },
  {
    title: 'Color Grading',
    points: [
      'Cinematic Color Correction',
      'Mood & Atmosphere Enhancement',
      'Skin Tone Optimization',
      'HDR & Log Workflow'
    ]
  },
  {
    title: 'Sound Design',
    points: [
      'Immersive Audio Landscapes',
      'SFX Layering & Mixing',
      'Dialogue Enhancement',
      'Music Synchronization'
    ]
  },
  {
    title: 'Content Creation',
    points: [
      'Creative Direction',
      'Marketing Strategy Integration',
      'Platform-Specific Formatting',
      'Visual Identity Development'
    ]
  }
];

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <div className="min-h-screen selection:bg-crimson">
      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-[0.2em] uppercase opacity-50 font-medium">EGYPT // CAIRO</span>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-[10px] tracking-[0.2em] uppercase opacity-50 font-medium">/// 2026</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-crimson/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-teal-accent/5 blur-[100px] rounded-full" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-xl md:text-2xl font-display font-light tracking-widest text-white/80">
                EYAD <span className="text-crimson font-bold">/</span> VIDEO EDITOR
              </h2>
            </motion.div>

            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.175, 0.885, 0.32, 1.1], // Soft bounce ease
                  delay: 0.2
                }}
                className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.85] tracking-tighter text-white uppercase"
              >
                PORTFOLIO
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-8 flex gap-4"
              >
                <div className="h-[1px] w-20 bg-crimson mt-3" />
                <p className="text-sm md:text-base text-white/60 max-w-xs uppercase tracking-widest leading-relaxed">
                  Crafting visual narratives that command attention.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="hidden lg:block relative aspect-[4/5] max-w-md ml-auto group"
          >
            <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <div className="absolute inset-0 bg-red-gradient opacity-20" />
            <img
              src="https://picsum.photos/seed/eyad-portrait/800/1000"
              alt="EYAD Portrait"
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 flex items-center gap-6">
              About Me <span className="h-[2px] flex-grow bg-crimson/30" />
            </h2>
            <div className="space-y-6 text-xl md:text-2xl text-white/70 font-light leading-relaxed">
              <p className="text-white font-medium italic">
                "Great videos don’t happen by accident they’re crafted with intention."
              </p>
              <p>
                I’m <span className="text-white font-medium">EYAD</span>, a video editor with 3+ years of experience creating engaging content for brands and creators. I’ve produced 500+ videos, focusing on storytelling, pacing, and visuals that keep audiences watching.
              </p>
              <p>
                Known for being reliable, creative, and deadline-driven, I treat every project like it matters because it does.
              </p>
            </div>
          </motion.div>

          <div className="flex items-end justify-end">
             <div className="text-right">
                <p className="text-[10vw] font-display font-black text-white/5 leading-none uppercase select-none">
                  CREATIVE<br />DIRECTOR
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className="py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <h2 className="text-5xl md:text-7xl font-display font-bold">Core Skills</h2>
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs font-medium">Expertise & Tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skill, index) => (
              <SkillCard key={skill.title} {...skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-32 px-6 md:px-20 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-bold">Selected Work</h2>
            <div className="hidden md:flex gap-2">
              <div className="w-12 h-[1px] bg-crimson" />
              <div className="w-4 h-[1px] bg-white/20" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                thumbnail={project.thumbnail}
                onClick={() => setSelectedVideo({ url: project.videoUrl, title: project.title })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-gradient opacity-5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display font-bold mb-12"
          >
            Let's Work Together
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:eydookhairy@gmail.com"
              className="flex items-center justify-between p-6 glass-card rounded-xl hover:bg-crimson transition-all group"
            >
              <div className="flex items-center gap-4">
                <Mail size={20} />
                <span className="font-medium">Send Email</span>
              </div>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="https://wa.me/201004567328"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 glass-card rounded-xl hover:bg-crimson transition-all group"
            >
              <div className="flex items-center gap-4">
                <MessageCircle size={20} />
                <span className="font-medium">WhatsApp</span>
              </div>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="https://www.instagram.com/khairy_ve/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 glass-card rounded-xl hover:bg-crimson transition-all group"
            >
              <div className="flex items-center gap-4">
                <Instagram size={20} />
                <span className="font-medium">Instagram</span>
              </div>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="https://www.facebook.com/eyad.khairy.92"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 glass-card rounded-xl hover:bg-crimson transition-all group"
            >
              <div className="flex items-center gap-4">
                <Facebook size={20} />
                <span className="font-medium">Facebook</span>
              </div>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold tracking-tighter">EYAD</h3>
            <p className="text-white/40 text-sm uppercase tracking-widest mt-1">Video Editor Portfolio</p>
          </div>
          
          <div className="text-white/20 text-xs tracking-widest uppercase">
            © 2026 All Rights Reserved
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ''}
        title={selectedVideo?.title || ''}
      />
    </div>
  );
}
