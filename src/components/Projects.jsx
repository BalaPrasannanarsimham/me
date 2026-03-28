import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, metrics, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative h-full flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/40 transition-all hover:bg-white/[0.07]"
  >
    <div className="flex justify-between items-start mb-6">
       <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent font-bold group-hover:scale-110 transition-transform">
        {title[0]}
       </div>
       <div className="flex gap-4">
         <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
         <ExternalLink className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
       </div>
    </div>
    
    <h3 className="text-2xl font-bold font-outfit mb-4 text-white group-hover:text-accent transition-colors">{title}</h3>
    <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
      {description}
    </p>

    {metrics && (
      <div className="pt-6 border-t border-white/5 flex gap-6">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key}>
            <p className="text-white font-bold mb-0.5">{value}</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">{key}</p>
          </div>
        ))}
      </div>
    )}
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "DataLeaf",
      description: "Digital Carbon Footprint Analyzer estimating Gmail and Google Drive emissions. Features a sustainability dashboard with automated email cleanup.",
      metrics: { "Impact": "Automated", "Tech": "n8n / APIs" },
      delay: 0.1
    },
    {
      title: "Food on Wheels",
      description: "A web/mobile app connecting users with street food vendors to improve accessibility and digital presence for small vendors.",
      metrics: { "Type": "Full-Stack", "Focus": "Social" },
      delay: 0.2
    },
    {
      title: "Plant Disease ID",
      description: "Web-based platform helping farmers identify plant diseases through image analysis and suggesting immediate treatments.",
      metrics: { "Accuracy": "89%+", "Field": "Agro-AI" },
      delay: 0.3
    },
    {
      title: "Indoor Navigation",
      description: "Optimized routing system for large indoor environments like hospitals and malls, improving visitor experience through precise mapping.",
      metrics: { "Optim": "Dijkstra", "UI": "Interactive" },
      delay: 0.4
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 inline-block">Portfolio Work</span>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tight">Recent Projects</h2>
        </div>
        <p className="text-gray-500 text-sm italic font-medium">Focused on practical impact and AI integration.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
