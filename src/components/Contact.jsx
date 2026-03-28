import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-outfit mb-6 text-gradient inline-block">Bala Prasanna</h2>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Open for collaboration and exciting opportunities in Data Science and AI. Let's build something intelligent together.
            </p>
            <div className="flex gap-4">
               {[
                 { icon: Github, href: "https://github.com/BalaPrasannanarsimham" },
                 { icon: Linkedin, href: "https://www.linkedin.com/in/bala-prasanna-narasimham-veeramsetty-44b9852b5/" },
                 { icon: Mail, href: "mailto:balaprasannanarasimham.v@gmail.com" }
               ].map((social, i) => {
                 const Icon = social.icon;
                 return (
                 <a 
                   key={i} 
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all text-gray-400 hover:text-primary"
                 >
                   <Icon className="w-5 h-5" />
                 </a>
                 );
               })}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold font-outfit mb-6 uppercase tracking-widest text-xs">Reach Out</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>balaprasannanarasimham.v@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 8019243798</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-outfit mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              {['Hero', 'About', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
          © 2026 V. Bala Prasanna Narasimham • Portfolio Project
        </div>
      </div>
    </footer>
  );
};

export default Contact;
