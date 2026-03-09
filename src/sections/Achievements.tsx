import React from "react";
import { motion } from "motion/react";
import { Trophy, Award, Zap } from "lucide-react";

const achievements = [
  {
    title: "Custom Web System",
    rank: "Project Build",
    icon: <Trophy className="text-yellow-400" />,
    description: "Developed a responsive web application with modern UI and smooth user experience.",
  },
  {
    title: "Responsive Design",
    rank: "Mobile Ready",
    icon: <Zap className="text-cyan-400" />,
    description: "Optimized the interface to work seamlessly across desktop, tablet, and mobile devices.",
  },
  {
    title: "Clean Code Structure",
    rank: "Best Practice",
    icon: <Award className="text-purple-400" />,
    description: "Organized components and code structure to make the project easy to maintain and extend.",
  },
];

export const Achievements = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-yellow-500 uppercase tracking-widest mb-4">Project Highlights</h2>
          <h3 className="text-4xl font-display font-bold">Key Features</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-3xl text-center group hover:border-yellow-500/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 block">{item.rank}</span>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
