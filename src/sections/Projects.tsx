import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Personal Blog",
    description: "A simple blog site built with HTML, CSS, and PHP. Users can create, edit, and delete posts.",
    image: "/assets/personalblgo.jpg", // Updated to use the local image
    tags: ["HTML", "CSS", "PHP"],
    github: "#", // Replace with your GitHub link
    live: "#", // Replace with your live project link
  },
  {
    title: "Task Manager",
    description:
      "A web-based task management system to keep track of daily tasks and goals, developed using HTML, CSS, and PHP.",
    image: "/assets/task.jpg", // Updated to use the local image
    tags: ["HTML", "CSS", "PHP"],
    github: "#", // Replace with your GitHub link
    live: "#", // Replace with your live project link
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-sm font-mono text-purple-500 uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">School & Personal Projects</h3>
          </div>
          <a href="#" className="text-zinc-400 hover:text-white underline underline-offset-8 transition-colors">
            View all projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-[2rem] overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                <p className="text-zinc-400 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
