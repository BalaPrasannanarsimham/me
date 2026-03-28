import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Wrench, Lightbulb } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all hover:bg-white/[0.07] group"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold font-outfit mb-4 text-white">{title}</h3>
    <div className="flex flex-wrap gap-2 text-sm text-gray-400">
      {skills.map((skill) => (
        <span 
          key={skill}
          className="px-3 py-1 bg-white/5 rounded-md border border-white/5 hover:border-white/20 hover:text-white transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    { title: "Programming", icon: Code2, skills: ["Python", "Java", "C"], delay: 0.1 },
    { title: "Data & Analytics", icon: Database, skills: ["SQL (Basics)", "Data Analysis"], delay: 0.2 },
    { title: "Web Technologies", icon: Globe, skills: ["HTML", "CSS"], delay: 0.3 },
    { title: "Tools", icon: Wrench, skills: ["MS Excel", "MS Word", "MS PowerPoint", "AI Tools"], delay: 0.4 },
    { title: "Soft Skills", icon: Lightbulb, skills: ["Leadership", "Problem Solving", "Quick Learner"], delay: 0.5 },
  ];

  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 inline-block">My Arsenal</span>
        <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tight">Technical Expertise</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <SkillCategory key={i} {...cat} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
