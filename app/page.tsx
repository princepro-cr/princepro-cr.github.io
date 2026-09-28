'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData, projectsData } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';

/* --- SVG ICON COMPONENTS --- */
function MailIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GithubIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ArrowUpRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

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
      className="relative overflow-hidden rounded-2xl p-1 sm:p-2 group transition-all"
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(163, 230, 53, 0.25), transparent 80%)`,
        }}
      />
      
      <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black text-zinc-950 uppercase tracking-tight leading-tight sm:leading-none min-h-[1.1em] break-words">
        {displayedText}
        <span className="inline-block w-1 sm:w-1.5 h-7 sm:h-12 bg-lime-400 ml-1 animate-pulse align-middle" />
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
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-lime-400 selection:text-zinc-950 overflow-x-hidden">
      
      {/* STICKY RESPONSIVE NAVIGATION HEADER */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md w-full border-b border-zinc-100">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-4 flex flex-wrap justify-between items-center gap-4">
          <span className="text-lg sm:text-xl font-black text-zinc-900 tracking-tight">
            {profileData.name}
          </span>
          <div className="flex flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-zinc-600">
            <a href="#hero" className="hover:text-zinc-950 transition">About</a>
            <a href="#projects" className="hover:text-zinc-950 transition">Projects</a>
            <a href="#tech-stack" className="hover:text-zinc-950 transition">Tech Stack</a>
            <a href="#certificates" className="hover:text-zinc-950 transition">Certificates</a>
            <a href="#contact" className="hover:text-zinc-950 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-20 py-8 sm:py-12">
        
        {/* HERO SECTION */}
        <section id="hero" className="bg-zinc-100/70 border border-zinc-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg font-medium text-zinc-600 sm:pl-2">
                Hey there. I'm
              </p>
              
              <InteractiveHeader name={profileData.name} />
              
              <div className="space-y-3 sm:pl-2">
                <p className="text-lg sm:text-xl text-zinc-800 font-bold leading-snug">
                  {profileData.heroTagline}
                </p>
                
                <p className="text-zinc-500 leading-relaxed text-sm sm:text-base max-w-xl">
                  {profileData.bio}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2 sm:pl-2">
                <a 
                  href="#projects" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-lime-400 hover:bg-lime-500 text-zinc-950 font-bold rounded-full transition shadow-sm hover:shadow-md text-center flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Let's See Work <ArrowUpRight className="w-4 h-4" />
                </a>
                <a 
                  href={profileData.cvLink} 
                  download 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-900 font-bold rounded-full transition shadow-sm text-center text-sm sm:text-base"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center mt-4 lg:mt-0">
              <div className="relative w-full max-w-xs sm:max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-zinc-300 border border-zinc-200">
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
        <section id="projects" className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">Featured Work ({projectsData.length})</h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-1">Tap any card to view screenshots, features & project impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectsData.map((project, index) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -6 }}
                onClick={() => openProjectModal(project)}
                className="bg-zinc-50 border border-zinc-200/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-200">
                    <Image 
                      src={project.coverImage} 
                      alt={project.title}
                      fill
                      priority={index === 0}
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-md border border-zinc-200 text-zinc-900 text-xs px-2.5 py-1 rounded-full font-bold">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-zinc-700 transition">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {project.purpose}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-zinc-200/80 text-zinc-800 px-2 sm:px-2.5 py-1 rounded-md font-mono font-medium">
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

                <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-zinc-100/60 border-t border-zinc-200/60 flex justify-between items-center text-xs font-bold text-zinc-900">
                  <span>View Details</span>
                  <span className="w-6 h-6 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center font-bold">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECH STACK SECTION */}
        {profileData.techStack && profileData.techStack.length > 0 && (
          <section id="tech-stack" className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">Skills & Technical Expertise</h2>
              <p className="text-zinc-500 text-xs sm:text-sm mt-1">Core technologies, frameworks, infrastructure, and tools I build with</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {profileData.techStack.map((categoryGroup, index) => (
                <div 
                  key={index} 
                  className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-zinc-50 border border-zinc-200/80 space-y-4 shadow-sm"
                >
                  <h3 className="font-extrabold text-zinc-950 text-base sm:text-lg border-b border-zinc-200/80 pb-3">
                    {categoryGroup.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {categoryGroup.skills.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx}
                        className="text-xs sm:text-sm bg-white border border-zinc-200/90 text-zinc-800 font-medium px-3 py-1.5 rounded-xl shadow-2xs hover:border-lime-400/80 transition"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CERTIFICATES SECTION */}
        <section id="certificates" className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">Certifications</h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-1">Industry recognized credentials and qualifications</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {profileData.certificates.map((cert, index) => (
              <div 
                key={index} 
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-zinc-50 border border-zinc-200/80 flex gap-4 sm:gap-5 items-start shadow-sm hover:border-lime-400/80 transition"
              >
                <div className="p-2.5 sm:p-3 bg-white rounded-2xl border border-zinc-200 shadow-sm flex-shrink-0 text-zinc-800">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-xs font-bold text-lime-600 uppercase tracking-wider truncate">{cert.issuer}</span>
                    {cert.date && <span className="text-xs text-zinc-400 font-mono flex-shrink-0">{cert.date}</span>}
                  </div>
                  <h3 className="font-extrabold text-zinc-950 text-sm sm:text-base leading-snug">{cert.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT ME SECTION WITH REAL SVG ICONS */}
        <section id="contact" className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">Get In Touch</h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-1">Reach out for collaborations, software development inquiries, or opportunities</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Email */}
            <a 
              href="mailto:princepromisesemosa@gmail.com" 
              className="p-6 rounded-2xl sm:rounded-3xl bg-zinc-50 border border-zinc-200/80 space-y-3 hover:border-lime-400 transition shadow-sm group"
            >
              <div className="p-3 bg-white border border-zinc-200 w-fit rounded-2xl text-zinc-800 group-hover:text-lime-600 transition">
                <MailIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-950 text-base">Email</h3>
                <p className="text-zinc-500 text-xs sm:text-sm truncate mt-0.5">princepromisesemosa@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:0608341700" 
              className="p-6 rounded-2xl sm:rounded-3xl bg-zinc-50 border border-zinc-200/80 space-y-3 hover:border-lime-400 transition shadow-sm group"
            >
              <div className="p-3 bg-white border border-zinc-200 w-fit rounded-2xl text-zinc-800 group-hover:text-lime-600 transition">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-950 text-base">Phone</h3>
                <p className="text-zinc-500 text-xs sm:text-sm truncate mt-0.5">060 834 1700</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/prince-promise-semosa-abb88832b" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 rounded-2xl sm:rounded-3xl bg-zinc-50 border border-zinc-200/80 space-y-3 hover:border-lime-400 transition shadow-sm group"
            >
              <div className="p-3 bg-white border border-zinc-200 w-fit rounded-2xl text-zinc-800 group-hover:text-lime-600 transition">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-950 text-base flex items-center gap-1">
                  LinkedIn <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm truncate mt-0.5">Prince Promise Semosa</p>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/princepro-cr" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 rounded-2xl sm:rounded-3xl bg-zinc-50 border border-zinc-200/80 space-y-3 hover:border-lime-400 transition shadow-sm group"
            >
              <div className="p-3 bg-white border border-zinc-200 w-fit rounded-2xl text-zinc-800 group-hover:text-lime-600 transition">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-950 text-base flex items-center gap-1">
                  GitHub <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm truncate mt-0.5">princepro-cr</p>
              </div>
            </a>

          </div>
        </section>

        {/* RESUME BANNER */}
        <section id="cv" className="bg-zinc-900 text-white p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black">Looking for a Full-Stack Engineer?</h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Download my CV to learn more about my technical experience, achievements, and educational background.
            </p>
          </div>
          <a 
            href={profileData.cvLink} 
            download 
            className="w-full md:w-auto px-8 py-3.5 sm:py-4 bg-lime-400 hover:bg-lime-500 text-zinc-950 font-bold rounded-full transition text-center text-sm sm:text-base whitespace-nowrap"
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
            className="fixed inset-0 z-50 bg-zinc-900/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl max-w-3xl w-full p-5 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto my-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-zinc-100 text-zinc-600 hover:text-zinc-950 flex items-center justify-center transition font-bold text-sm"
              >
                ✕
              </button>

              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold">
                {selectedProject.category}
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 mt-1 mb-6 pr-8">
                {selectedProject.title}
              </h2>

              {allModalImages.length > 0 && (
                <div className="space-y-3 mb-6 sm:mb-8">
                  <div className="relative h-48 sm:h-72 md:h-80 w-full rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                    <Image 
                      src={allModalImages[activeImageIndex]} 
                      alt={`Screenshot ${activeImageIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {allModalImages.length > 1 && (
                    <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2">
                      {allModalImages.map((img, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative h-12 w-20 sm:h-16 sm:w-24 flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden border-2 transition ${
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

              <div className="space-y-4 text-xs sm:text-sm text-zinc-700">
                <div className="bg-zinc-50 p-4 rounded-xl sm:rounded-2xl border border-zinc-200 space-y-1 sm:space-y-2">
                  <h4 className="font-bold text-zinc-950">Purpose & Overview</h4>
                  <p className="leading-relaxed">{selectedProject.purpose}</p>
                </div>

                {selectedProject.problem && (
                  <div className="bg-amber-50/50 border border-amber-200/60 p-4 rounded-xl sm:rounded-2xl">
                    <h4 className="font-bold text-amber-950 mb-1">Problem Statement</h4>
                    <p className="text-amber-900/80 leading-relaxed">{selectedProject.problem}</p>
                  </div>
                )}

                {selectedProject.impact && (
                  <div className="bg-lime-50/60 border border-lime-200 p-4 rounded-xl sm:rounded-2xl">
                    <h4 className="font-bold text-lime-950 mb-1">Key Impact</h4>
                    <p className="text-lime-900 leading-relaxed">{selectedProject.impact}</p>
                  </div>
                )}

                {selectedProject.beneficiaries && (
                  <div className="bg-zinc-50 p-4 rounded-xl sm:rounded-2xl border border-zinc-200">
                    <h4 className="font-bold text-zinc-950 mb-1">Beneficiaries</h4>
                    <p className="text-zinc-600 leading-relaxed">{selectedProject.beneficiaries}</p>
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-zinc-950 mb-2">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside text-zinc-600">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-950 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded-lg font-mono font-medium border border-zinc-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-zinc-200">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full sm:flex-1 bg-lime-400 hover:bg-lime-500 text-zinc-950 font-bold py-3 sm:py-3.5 rounded-full text-center transition flex items-center justify-center gap-2 text-sm"
                >
                  View GitHub Repository <ArrowUpRight className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-6 py-3 sm:py-3.5 border border-zinc-300 text-zinc-700 hover:bg-zinc-100 rounded-full font-bold transition text-sm"
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