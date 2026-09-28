'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData, projectsData } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';

function InteractiveHeader({ name }: { name: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(name.slice(0, index + 1));
      index++;
      if (index >= name.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [name]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-2xl p-2 group transition-all"
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(163, 230, 53, 0.25), transparent 80%)`,
        }}
      />
      
      <h1 className="text-5xl sm:text-7xl font-black text-zinc-950 uppercase tracking-tight leading-none min-h-[1.1em]">
        {displayedText}
        <span className="inline-block w-1.5 h-10 sm:h-14 bg-lime-400 ml-1 animate-pulse align-middle" />
      </h1>
    </div>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const allModalImages = selectedProject 
    ? [selectedProject.coverImage, ...selectedProject.galleryImages] 
    : [];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-lime-400 selection:text-zinc-950">
      
      {/* WIDER & BORDERLESS STICKY NAVIGATION HEADER */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md w-full border-none border-0">
        <div className="w-full max-w-full px-8 md:px-12 py-5 flex justify-between items-center">
          <span className="text-xl font-black text-zinc-900 tracking-tight">
            {profileData.name}
          </span>
          <div className="flex gap-8 text-sm font-semibold text-zinc-600">
            <a href="#hero" className="hover:text-zinc-950 transition">About</a>
            <a href="#projects" className="hover:text-zinc-950 transition">Projects</a>
            <a href="#certificates" className="hover:text-zinc-950 transition">Certificates</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 space-y-20 py-12">
        
        {/* HERO SECTION */}
        <section id="hero" className="bg-zinc-100/70 border border-zinc-200/80 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg font-medium text-zinc-600 pl-2">
                Hey there. I'm
              </p>
              
              <InteractiveHeader name={profileData.name} />
              
              <div className="space-y-3 pl-2">
                <p className="text-xl text-zinc-800 font-bold leading-snug">
                  {profileData.heroTagline}
                </p>
                
                <p className="text-zinc-500 leading-relaxed text-sm sm:text-base max-w-xl">
                  {profileData.bio}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2 pl-2">
                <a 
                  href="#projects" 
                  className="px-8 py-3.5 bg-lime-400 hover:bg-lime-500 text-zinc-950 font-bold rounded-full transition shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  Let's See Work <span className="text-lg">↗</span>
                </a>
                <a 
                  href={profileData.cvLink} 
                  download 
                  className="px-8 py-3.5 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-900 font-bold rounded-full transition shadow-sm"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/5] max-w-md rounded-2xl overflow-hidden shadow-md bg-zinc-300 border border-zinc-200">
                <Image 
                  src={profileData.heroImage} 
                  alt={profileData.name}
                  fill
                  priority
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>

          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="space-y-8">
          <div>
            <h2 className="text-3xl font-black text-zinc-950 tracking-tight">Featured Work ({projectsData.length})</h2>
            <p className="text-zinc-500 text-sm mt-1">Tap any card to view screenshots, features & project impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -6 }}
                onClick={() => openProjectModal(project)}
                className="bg-zinc-50 border border-zinc-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-zinc-200">
                    <Image 
                      src={project.coverImage} 
                      alt={project.title}
                      fill
                      priority={index === 0}
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-zinc-200 text-zinc-900 text-xs px-3 py-1 rounded-full font-bold">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-zinc-950 group-hover:text-zinc-700 transition">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 text-sm line-clamp-2 leading-relaxed">
                      {project.purpose}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-zinc-200/80 text-zinc-800 px-2.5 py-1 rounded-md font-mono font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-zinc-100 text-zinc-500 px-2 py-1 rounded-md font-mono">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-zinc-100/60 border-t border-zinc-200/60 flex justify-between items-center text-xs font-bold text-zinc-900">
                  <span>View Details</span>
                  <span className="w-6 h-6 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center font-bold">↗</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATES SECTION */}
        <section id="certificates" className="space-y-6">
          <div>
            <h2 className="text-3xl font-black text-zinc-950 tracking-tight">Certifications</h2>
            <p className="text-zinc-500 text-sm mt-1">Industry recognized credentials and qualifications</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {profileData.certificates.map((cert, index) => (
              <div 
                key={index} 
                className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200/80 flex gap-5 items-start shadow-sm hover:border-lime-400/80 transition"
              >
                <span className="text-4xl p-3 bg-white rounded-2xl border border-zinc-200 shadow-sm">{cert.icon}</span>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-lime-600 uppercase tracking-wider">{cert.issuer}</span>
                    {cert.date && <span className="text-xs text-zinc-400 font-mono">{cert.date}</span>}
                  </div>
                  <h3 className="font-extrabold text-zinc-950 text-base">{cert.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESUME BANNER */}
        <section id="cv" className="bg-zinc-900 text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-3xl font-black">Looking for a Full-Stack Engineer?</h2>
            <p className="text-sm text-zinc-400 max-w-xl">
              Download my CV to learn more about my technical experience, achievements, and educational background.
            </p>
          </div>
          <a 
            href={profileData.cvLink} 
            download 
            className="px-8 py-4 bg-lime-400 hover:bg-lime-500 text-zinc-950 font-bold rounded-full transition whitespace-nowrap"
          >
            Download PDF Resume
          </a>
        </section>

      </main>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-900/40 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white border border-zinc-200 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 h-9 w-9 rounded-full bg-zinc-100 text-zinc-600 hover:text-zinc-950 flex items-center justify-center transition font-bold"
              >
                ✕
              </button>

              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold">
                {selectedProject.category}
              </span>

              <h2 className="text-3xl font-black text-zinc-950 mt-1 mb-6">
                {selectedProject.title}
              </h2>

              {allModalImages.length > 0 && (
                <div className="space-y-3 mb-8">
                  <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                    <Image 
                      src={allModalImages[activeImageIndex]} 
                      alt={`Screenshot ${activeImageIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {allModalImages.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {allModalImages.map((img, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative h-16 w-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition ${
                            activeImageIndex === idx ? 'border-lime-500 scale-105' : 'border-zinc-200 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <Image src={img} alt="Thumbnail" fill className="object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-4 text-sm text-zinc-700">
                <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200 space-y-2">
                  <h4 className="font-bold text-zinc-950">Purpose & Overview</h4>
                  <p>{selectedProject.purpose}</p>
                </div>

                {selectedProject.problem && (
                  <div className="bg-amber-50/50 border border-amber-200/60 p-4 rounded-2xl">
                    <h4 className="font-bold text-amber-950 mb-1">Problem Statement</h4>
                    <p className="text-amber-900/80">{selectedProject.problem}</p>
                  </div>
                )}

                {selectedProject.impact && (
                  <div className="bg-lime-50/60 border border-lime-200 p-4 rounded-2xl">
                    <h4 className="font-bold text-lime-950 mb-1">Key Impact</h4>
                    <p className="text-lime-900">{selectedProject.impact}</p>
                  </div>
                )}

                {selectedProject.beneficiaries && (
                  <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
                    <h4 className="font-bold text-zinc-950 mb-1">Beneficiaries</h4>
                    <p className="text-zinc-600">{selectedProject.beneficiaries}</p>
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-zinc-950 mb-2">Key Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside text-zinc-600">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-950 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-zinc-100 text-zinc-800 px-3 py-1 rounded-lg font-mono font-medium border border-zinc-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-6 border-t border-zinc-200">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 bg-lime-400 hover:bg-lime-500 text-zinc-950 font-bold py-3.5 rounded-full text-center transition flex items-center justify-center gap-2"
                >
                  View GitHub Repository ↗
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3.5 border border-zinc-300 text-zinc-700 hover:bg-zinc-100 rounded-full font-bold transition"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}