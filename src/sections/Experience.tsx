import React from "react";
import { motion } from "motion/react";

const experiences = [
  {
    role: "IT Student",
    company: "Christ the king college",
    period: "2026 - Present",
    description:
      "Studying Information Technology with a focus on Android Development and learning modern web technologies. Actively working on personal projects to improve coding skills.",
    achievements: ["Learning Android Development", "Participating in University Coding Workshops"],
  },
  {
    role: "Self-Taught Developer",
    company: "Online Platforms",
    period: "2021 - 2022",
    description:
      "Completed online courses in Android Development, Java, and basic web development. Currently working on personal projects to build hands-on experience.",
    achievements: [ "Worked on small Android apps as personal projects"],
  },
  {
    role: "High School Graduate",
    company: "Science High School",
    period: "2019 - 2021",
    description:
      "Worked as a visual designer during my high school years, creating digital designs, posters, and web layouts. I learned the fundamentals of design tools like Adobe Photoshop, Illustrator, and Sketch, and helped with school projects and events.",
    achievements: [ "Participated promotional materials for school events"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Education & Learning</h3>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col md:flex-row gap-8 md:gap-0",
                i % 2 === 0 ? "md:flex-row-reverse" : "",
              )}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-cyan-500 -translate-x-1/2 z-10 hidden md:block" />

              <div className="md:w-1/2 md:px-12">
                <div className={cn("p-8 glass rounded-3xl", i % 2 === 0 ? "md:text-left" : "md:text-right")}>
                  <span className="text-xs font-mono text-cyan-400 mb-2 block">{exp.period}</span>
                  <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                  <p className="text-zinc-400 font-medium mb-4">{exp.company}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{exp.description}</p>
                  <ul className={cn("flex flex-wrap gap-2", i % 2 === 0 ? "md:justify-start" : "md:justify-end")}>
                    {exp.achievements.map((ach) => (
                      <li
                        key={ach}
                        className="text-[10px] px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/5"
                      >
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function for conditional classes
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
