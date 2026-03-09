import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Achievements } from "./sections/Achievements";
import { AppShowcase } from "./sections/AppShowcase";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[2.5rem] blur-2xl opacity-20" />
              <img
                src="/assets/elyab.jpg"
                alt="Elyab Ville Rosel"
                className="relative rounded-[2rem] w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
            <div>
              <h2 className="text-sm font-mono text-purple-500 uppercase tracking-widest mb-4">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
                I'm <span className="text-gradient">Elyab Ville Rosel</span>, an aspiring developer.
              </h3>
              <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                <p>
                  I am currently a 3rd-year IT student at **Christ the King College**, with a strong focus on mobile app
                  development, especially Android. I am passionate about learning new technologies and building personal
                  projects in my free time.
                </p>
                <p>
                  While I am still early in my professional journey, I have completed various school projects and
                  personal applications that show my drive to learn and build functional software. I’m excited about
                  expanding my skillset and tackling new challenges in the tech field.
                </p>
                <div className="pt-4 flex gap-8">
                  <div>
                    <p className="text-3xl font-bold text-white">3rd</p>
                    <p className="text-xs uppercase tracking-widest text-zinc-500">Year Student</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">2+</p>
                    <p className="text-xs uppercase tracking-widest text-zinc-500">Projects</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <Skills />
        <AppShowcase />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
