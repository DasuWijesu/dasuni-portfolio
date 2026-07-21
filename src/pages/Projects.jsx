import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

function Projects() {
  const featuredProject = {
    title: "AI-Powered Learning Analytics Platform",
    description:
      "My final-year research project, an AI-driven platform that turns raw learning data into personalized recommendations, giving caregivers a clear view of a learner's progress through predictive models and interactive dashboards.",
    tech: ["Flutter", "Firebase", "Python", "Machine Learning", "Power BI"],
    features: [
      "AI-based performance prediction",
      "Caregiver dashboard with real-time analytics",
      "Personalized learning recommendations",
      "Firebase-backed data sync",
    ],
    github: "https://github.com/DasuWijesu",
    demo: "",
  };

  const projects = [
    {
      title: "Online Garbage Management System",
      description:
        "A full-stack MERN application for scheduling and tracking garbage collection, built with a REST API backend and tested end-to-end with Postman.",
      tech: ["React", "Express", "MongoDB", "REST API"],
      features: ["CRUD operations", "Collection scheduling", "Postman-tested endpoints"],
      github: "https://github.com/DasuWijesu",
      demo: "",
    },
    {
      title: "Android Note Application",
      description:
        "A lightweight, Material Design note-taking app for Android with full offline CRUD support and local storage.",
      tech: ["Kotlin", "Android Studio"],
      features: ["Create, edit, delete notes", "Material Design UI", "Local storage"],
      github: "https://github.com/DasuWijesu/fileShareDW.git",
      demo: "",
    },
    {
      title: "Online Teacher Training System",
      description:
        "A web platform for managing teacher training programs, covering user authentication, course management, and administrative CRUD workflows.",
      tech: ["PHP", "MySQL"],
      features: ["User authentication", "Course management", "Admin CRUD dashboard"],
      github: "https://github.com/DasuWijesu",
      demo: "",
    },
  ];

  return (
    <section className="min-h-screen px-6 py-24 max-w-5xl mx-auto">
      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-muted text-sm mb-3 tracking-wide uppercase">
        Projects
      </motion.p>

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
        Things I've built.
      </motion.h1>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-surface border border-accent/40 rounded-2xl p-8 mb-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex items-center gap-2 mb-4 text-accent-light text-sm font-medium">
          <Sparkles size={16} />
          Featured Project
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredProject.title}</h2>
        <p className="text-muted leading-relaxed mb-6 max-w-2xl">{featuredProject.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {featuredProject.tech.map((t) => (
            <span key={t} className="text-xs bg-background border border-border rounded-full px-3 py-1 text-muted">
              {t}
            </span>
          ))}
        </div>

        <ul className="grid sm:grid-cols-2 gap-2 mb-8">
          {featuredProject.features.map((f) => (
            <li key={f} className="text-sm text-muted flex items-start gap-2">
              <span className="text-accent-light mt-1">•</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a href={featuredProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-accent hover:bg-accent-light transition px-5 py-2.5 rounded-full text-sm font-medium">
            <ExternalLink size={16} /> GitHub
          </a>
          {featuredProject.demo && (
            <a href={featuredProject.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-border hover:border-accent transition px-5 py-2.5 rounded-full text-sm font-medium">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-surface border border-border rounded-2xl p-6 hover:border-accent transition flex flex-col">
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-xs bg-background border border-border rounded-full px-3 py-1 text-muted">
                  {t}
                </span>
              ))}
            </div>

            <ul className="mb-6">
              {project.features.map((f) => (
                <li key={f} className="text-sm text-muted flex items-start gap-2 mb-1">
                  <span className="text-accent-light mt-1">•</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex gap-3 mt-auto">
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-accent-light transition">
                <ExternalLink size={16} /> Code
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-accent-light transition">
                  <ExternalLink size={16} /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;