import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, Search, ShieldCheck, Trophy, Sparkles, BookOpen } from 'lucide-react';

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'AI & Data Science', 'Programming', 'Tools & Design'];

  const certificates = [
    {
      title: "Generative AI by Google Cloud",
      issuer: "L4G / Google Skills Platform",
      date: "April 2026",
      category: "AI & Data Science",
      icon: Sparkles,
      description: "Completed a 45-hour course on Generative AI by Google Cloud with 22 Skill Badges covering Beginner, Advanced & Generative AI Leader (GAIL) Pathways.",
      credentialId: "Google Skills Profile",
      credentialUrl: "https://verify.onwingspan.com", // Placeholder verify link
      skills: ["Generative AI", "Google Cloud", "GAIL Pathways", "LLMs", "AI Leadership"],
      color: "from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30"
    },
    {
      title: "Hands-On Data Visualization with Microsoft Power BI",
      issuer: "Infosys Springboard",
      date: "April 14, 2026",
      category: "Tools & Design",
      icon: Trophy,
      description: "Hands-on implementation of data visualization techniques, dashboards, reports, and data transformation using Microsoft Power BI.",
      credentialId: "Infosys Springboard Verified",
      credentialUrl: "https://verify.onwingspan.com",
      skills: ["Power BI", "Data Visualization", "Dashboards", "DAX", "Data Modeling"],
      color: "from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30"
    },
    {
      title: "Fundamentals of R Programming and Statistical Analysis",
      issuer: "Infosys Springboard",
      date: "March 23, 2026",
      category: "Programming",
      icon: BookOpen,
      description: "Comprehensive study of R programming language fundamentals, data frames, statistical analysis methods, and plotting libraries.",
      credentialId: "Infosys Springboard Verified",
      credentialUrl: "https://verify.onwingspan.com",
      skills: ["R Programming", "Statistical Analysis", "Data Frames", "ggplot2"],
      color: "from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30"
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP LIFE (HP Foundation)",
      date: "January 27, 2026",
      category: "AI & Data Science",
      icon: Award,
      description: "Learned leading data science and analytics practices, methodologies, tools, and examined the benefits and challenges of data-driven business approaches.",
      credentialId: "d4772a25-0beb-42a4-a8e3-9bc2c5552f38",
      credentialUrl: "#",
      skills: ["Data Science", "Business Analytics", "Data-driven Decision Making"],
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30"
    },
    {
      title: "Introduction to Animation Fundamentals",
      issuer: "Simplilearn SkillUp",
      date: "June 10, 2025",
      category: "Tools & Design",
      icon: Award,
      description: "Acquired core concepts of animation, 2D/3D design principles, timeline mechanics, keyframing, and visual storytelling.",
      credentialId: "8449363",
      credentialUrl: "https://www.simplilearn.com",
      skills: ["Animation", "Visual Storytelling", "2D/3D Principles", "Creative Design"],
      color: "from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30"
    },
    {
      title: "Web Development Internship",
      issuer: "APSCHE",
      date: "July 2026",
      category: "Programming",
      icon: ShieldCheck,
      description: "Completed a structured virtual web development internship under the Andhra Pradesh State Council of Higher Education (APSCHE) building modern web applications.",
      credentialId: "DV-bc202ed3",
      credentialUrl: "/certificates/apsche-internship.pdf",
      skills: ["Frontend Web Development", "HTML5 & CSS3", "JavaScript", "Responsive Design"],
      color: "from-sky-500/20 to-blue-500/20 text-sky-400 border-sky-500/30",
      pdf: "/certificates/apsche-internship.pdf"
    },
    {
      title: "Technical Achievement Certification",
      issuer: "Technical Education Board",
      date: "April 2026",
      category: "Programming",
      icon: ShieldCheck,
      description: "Evaluated and verified course completion covering fundamental technical subjects and programming principles.",
      credentialId: "Verified",
      credentialUrl: "/certificates/technical-certificate.pdf",
      skills: ["Computer Science", "Problem Solving", "Technical Core"],
      color: "from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/30",
      pdf: "/certificates/technical-certificate.pdf"
    }
  ];

  const filteredCertificates = certificates.filter(cert => {
    const matchesFilter = activeFilter === 'All' || cert.category === activeFilter;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="certificates" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 inline-block">Credentials & Awards</span>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tight">Certifications</h2>
        </div>
        <p className="text-gray-500 text-sm italic font-medium">Verified technical courses and internships.</p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search credentials, skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
      </div>

      {/* Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredCertificates.map((cert) => {
            const Icon = cert.icon;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={cert.title}
                className="group flex flex-col justify-between p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all hover:bg-white/[0.07] relative overflow-hidden"
              >
                {/* Accent Background Glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} rounded-bl-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity`} />
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:scale-115 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {cert.credentialUrl && cert.credentialUrl !== '#' && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-gray-400 hover:text-white transition-all"
                        title="Verify Credential"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-outfit text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-semibold text-gray-300">{cert.issuer}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                <div>
                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-white/5 text-[11px] text-gray-400 rounded-md border border-white/5 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                      ID: <span className="text-gray-400 font-mono select-all">{cert.credentialId}</span>
                    </div>
                    {cert.pdf && (
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-primary hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        View Document
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Certificates;
