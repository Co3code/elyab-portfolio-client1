import React from "react";
import { motion } from "motion/react";
import { Download, Smartphone, ShieldCheck, Zap } from "lucide-react";

export const AppShowcase = () => {
  return (
    <section id="app-showcase" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-500/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-4">Featured App</h2>
                <h3 className="text-4xl md:text-6xl font-display font-bold mb-6">
                  Experience my <span className="text-gradient">BMI Calculator App</span>
                </h3>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  A simple and easy-to-use <b>BMI Calculator app</b> that helps users quickly check their Body Mass
                  Index. Enter your height and weight to instantly see your BMI result and health category.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-cyan-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Accurate Calculation</h4>
                      <p className="text-xs text-zinc-500">Instant BMI results</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                      <Zap className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Fast & Simple</h4>
                      <p className="text-xs text-zinc-500">Quick health check anytime</p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="https://github.com/Co3code/Myhealthapp/releases/download/v1.0.0/AC-BMI-V1.00.apk"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <Download size={24} />
                  Download APK
                </motion.a>
              </motion.div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, rotate: 10, y: 40 }}
                whileInView={{ opacity: 1, rotate: -5, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative w-64 md:w-80 aspect-[9/19] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden"
              >
                {/* Phone Mockup Content */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-800 rounded-b-2xl z-20" />
                <img
                  src="/assets/bmiph.jpg"
                  alt="App Screenshot"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <Smartphone className="text-white mb-2" size={32} />
                  <p className="text-white font-bold text-xl">BMI Calculator</p>
                  <p className="text-white/60 text-xs">v1.0.0</p>
                </div>
              </motion.div>

              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
