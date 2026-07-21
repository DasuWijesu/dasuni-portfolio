import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Brain, Target, Lightbulb, Puzzle, BarChart3, CalendarDays, ShieldCheck, Terminal, Layers } from "lucide-react";

function About() {
  const traits = [
    { icon: BarChart3, label: "Data-driven" },
    { icon: Brain, label: "Analytical" },
    { icon: Sparkles, label: "Curious" },
    { icon: Target, label: "Detail-oriented" },
    { icon: Lightbulb, label: "Fast learner" },
    { icon: Puzzle, label: "Problem solver" },
  ];

  const focusAreas = [
    { icon: Layers, title: "Data & Analytics", description: "Dashboards, reporting, and ML-ready pipelines." },
    { icon: Terminal, title: "Full-Stack", description: "React frontends, API automation, and backend integration." },
    { icon: ShieldCheck, title: "Reliable Systems", description: "Clean data, stable processes, and tested deployments." },
  ];

  return (
    <section className="min-h-screen px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.14),_transparent_35%)]" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-surface/95 via-surface/85 to-background/90 border border-white/10 rounded-[2rem] shadow-[0_0_90px_rgba(99,102,241,0.15)] backdrop-blur-xl overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] p-8 md:p-10 lg:p-12">
            <div>
              <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm tracking-[0.25em] uppercase text-muted mb-4">
                About Me
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Turning data into decisions.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.14 }} className="text-base sm:text-lg text-muted leading-8 max-w-2xl">
                I’m Dasuni Wijesuriya, an IT undergraduate from Sri Lanka building a data-first career across software engineering, analytics, and AI. I combine rigorous mathematics and systems thinking with real-world dashboards, APIs, and research-grade analytics.
              </motion.p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="rounded-3xl border border-border bg-background/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                  <p className="text-sm text-accent-light uppercase tracking-[0.2em] mb-3">Dual degree</p>
                  <p className="text-lg font-semibold">IT + Physical Science</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }} className="rounded-3xl border border-border bg-background/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                  <p className="text-sm text-accent-light uppercase tracking-[0.2em] mb-3">Current focus</p>
                  <p className="text-lg font-semibold">Learning analytics, ML, QA and automation</p>
                </motion.div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-[2rem] bg-background/70 border border-white/10 p-6 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted">Education</p>
                  <h2 className="text-2xl font-semibold mt-3">SLIIT & Ruhuna</h2>
                </div>
                <GraduationCap size={28} className="text-accent-light" />
              </div>
              <div className="space-y-5">
                <div className="rounded-3xl bg-surface border border-border p-4">
                  <p className="text-sm text-accent-light mb-2">BSc (Hons) Information Technology</p>
                  <p className="text-sm text-muted">SLIIT — Specialized in IT</p>
                  <p className="text-xs text-muted mt-2">Expected 2026</p>
                </div>
                <div className="rounded-3xl bg-surface border border-border p-4">
                  <p className="text-sm text-accent-light mb-2">BSc Physical Science</p>
                  <p className="text-sm text-muted">University of Ruhuna — Mathematics, Applied Science, Computer Science</p>
                  <p className="text-xs text-muted mt-2">Expected 2026</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-surface/90 p-8 shadow-[0_0_60px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-muted">Focus Areas</p>
                <h2 className="text-3xl font-semibold mt-3">What I work on</h2>
              </div>
              <CalendarDays size={32} className="text-accent-light" />
            </div>
            <div className="space-y-4">
              {focusAreas.map((area) => (
                <div key={area.title} className="rounded-3xl border border-border bg-background/80 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <area.icon size={20} className="text-accent-light" />
                    <h3 className="text-lg font-semibold">{area.title}</h3>
                  </div>
                  <p className="text-sm text-muted leading-7">{area.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-background/80 p-8 shadow-[0_0_60px_rgba(0,0,0,0.1)]">
            <div className="mb-7 flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-3xl bg-accent/15 text-accent-light">
                <Sparkles size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted">How I work</p>
                <h2 className="text-3xl font-semibold mt-2">My strengths</h2>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {traits.map((trait) => {
                const Icon = trait.icon;
                return (
                  <div key={trait.label} className="rounded-3xl border border-border bg-surface/70 p-5 flex items-start gap-3">
                    <Icon size={20} className="text-accent-light mt-1" />
                    <div>
                      <p className="text-sm font-medium">{trait.label}</p>
                      <p className="text-xs text-muted">Focused, consistent, and results-driven.</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
