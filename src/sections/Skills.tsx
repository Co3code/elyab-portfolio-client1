import React from "react";
import { motion } from "motion/react";
import { Code2, Cpu, Globe, Layers } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="text-cyan-400" />,
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Backend",
    icon: <Layers className="text-purple-400" />,
    items: ["PHP", "MySQL", "Firebase"],
  },
  {
    category: "Mobile Development",
    icon: <Cpu className="text-emerald-400" />,
    items: ["Android Studio", "Java", "Kotlin", "XML"],
  },
  {
    category: "Tools & Version Control",
    icon: <Code2 className="text-blue-400" />,
    items: ["Git", "GitHub", "Visual Studio Code", "Android SDK"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Technical Skills</h3>
          </div>
          <p className="max-w-md text-zinc-400">
            A growing set of tools and technologies I use to build mobile apps and web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 glass rounded-3xl hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{skill.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-white/5 text-xs text-zinc-400 border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
