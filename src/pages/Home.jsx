import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TypingText from "../components/TypingText";

function Home() {
  const quickFacts = [
    { label: "AI & Data", value: "Research + Product" },
    { label: "Frontend", value: "React + Tailwind" },
    { label: "Backend", value: "APIs + Automation" },
  ];

  const socialLinks = [
    { href: "https://github.com/DasuWijesu", label: "GitHub", icon: GitBranch },
    { href: "https://www.linkedin.com/in/dasuni-wijesuriya-843a692a2/", label: "LinkedIn", icon: Link2 },
    { href: "mailto:wijesuriyadasuni@gmail.com", label: "Email", icon: Mail },
  ];

  return (
    <section className="min-h-[90vh] px-6 py-20 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.14),_transparent_35%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-br from-surface/90 via-surface/70 to-background/80 p-8 md:p-10 lg:p-12 shadow-[0_0_90px_rgba(99,102,241,0.16)] backdrop-blur-xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-sm text-accent-light mb-6">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              Open to impactful opportunities
            </div>

            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-muted text-sm mb-4 tracking-[0.25em] uppercase">
              IT Undergraduate · Data Scientist · Software Engineer
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Dasuni Wijesuriya
            </motion.h1>

            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg sm:text-xl lg:text-2xl text-muted mb-6 min-h-8">
              Building <TypingText words={["data-driven products.", "intelligent software.", "AI-powered analytics.", "smart automation systems."]} />
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }} className="max-w-2xl text-base sm:text-lg text-muted leading-8 mb-6">
              A curious, detail-oriented developer and data scientist working across full-stack engineering, AI, analytics, and automation to turn complex data into practical, impactful software.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.27 }} className="rounded-3xl border border-border bg-surface/80 px-5 py-4 mb-8 max-w-2xl text-sm text-muted">
              <p className="font-semibold text-text mb-2">Skills spotlight</p>
              I focus on analytics, AI, frontend design, and reliable backend workflows that turn business questions into working systems.
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4 mb-8">
              <Link to="/projects" className="bg-accent hover:bg-accent-light transition px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link to="/skills" className="border border-accent hover:bg-accent/10 transition px-6 py-3 rounded-full font-medium flex items-center gap-2">
                View Skills
              </Link>
              <a href="/cv.pdf" download className="border border-border hover:border-accent transition px-6 py-3 rounded-full font-medium flex items-center gap-2 bg-background/40">
                Download CV <Download size={16} />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-2 text-sm text-muted transition hover:border-accent hover:text-accent-light">
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="rounded-[1.75rem] border border-white/10 bg-background/70 p-6 shadow-[0_0_50px_rgba(0,0,0,0.25)]">
              <div className="relative flex justify-center mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-3xl" />
                <motion.img
                  src="/profile.jpeg"
                  alt="Dasuni Wijesuriya"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="relative w-32 h-32 rounded-full object-cover border border-accent/40 shadow-[0_0_40px_rgba(99,102,241,0.25)]"
                />
              </div>

              <div className="grid gap-3">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-border bg-surface/70 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted mb-1">{fact.label}</p>
                    <p className="text-sm font-medium text-text">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;