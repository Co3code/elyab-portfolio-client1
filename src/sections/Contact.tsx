import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[180px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Contact</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8">Let's build something <span className="text-gradient">extraordinary</span> together.</h3>
            <p className="text-lg text-zinc-400 mb-12 max-w-md">
              Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Email Me</p>
                  <p className="text-lg font-medium">Rosel@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <MessageSquare className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Socials</p>
                  <div className="flex gap-4 mt-1">
                    <a href="https://github.com/elyabvillerosel" className="text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    <a href="https://linkedin.com/in/elyabvillerosel" className="text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                    <a href="https://twitter.com/elyab_vrosel" className="text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2.5rem]"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    placeholder="rosel"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    placeholder="rosel@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>
              <button className="w-full py-4 bg-white text-black rounded-full font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};