import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold tracking-wider uppercase mb-6 inline-block">
          Open for Internships
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6">
          Hi, I'm <span className="text-gradient">Bala Prasanna</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Data Science Student | AI & Machine Learning Enthusiast
          <br/>
          <span className="text-sm italic opacity-75">Transforming data into intelligent solutions.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download="V_Bala_Prasanna_Resume.pdf"
            className="px-8 py-3 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
          
          <div className="flex gap-4 items-center ml-2">
              {[
              { icon: Github, href: "https://github.com/BalaPrasannanarsimham" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/bala-prasanna-narasimham-veeramsetty-44b9852b5/" },
              { icon: Mail, href: "mailto:balaprasannanarasimham.v@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
