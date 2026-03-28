import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative aspect-square max-w-md mx-auto md:mx-0 bg-white/5 rounded-3xl overflow-hidden glass border border-white/10"
        >
          {/* Use a placeholder image or a generated image if the user provides one */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-outfit text-xl italic font-semibold p-8 text-center">
            "Innovation through Data, Intelligence through AI."
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 inline-block">Introduction</span>
          <h2 className="text-4xl font-bold font-outfit mb-8 tracking-tight">
            Passionate About 
            <span className="text-gradient"> Solving Real-World Problems</span>
          </h2>
          
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              I am an innovative Data Science student at Andhra Loyola Institute of Engineering and Technology, interested in applying AI, data analytics, and web technologies to create impactful solutions.
            </p>
            <p>
              My experience spans developing practical projects, from sustainability platforms like <b>DataLeaf</b> to intelligent <b>Indoor Navigation Systems</b>. I thrive on learning emerging technologies and building scalable applications that matter.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold font-outfit text-3xl mb-1">2027</h4>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Expected Graduation</p>
            </div>
            <div>
              <h4 className="text-white font-bold font-outfit text-3xl mb-1">4+</h4>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Flagship Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
