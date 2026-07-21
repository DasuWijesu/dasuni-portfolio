import { motion } from "framer-motion";
import { Code2, Database, Layers, Cpu, Sparkles, Terminal, ShieldCheck, BarChart3 } from "lucide-react";

function Skills() {
  const categories = [
    {
      icon: Code2,
      title: "Languages",
      items: ["Python", "JavaScript", "Java", "Kotlin", "SQL", "PHP"],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      items: ["Power BI", "SQL", "Data Visualization", "ETL", "Analytics Modeling"],
    },
    {
      icon: Layers,
      title: "Frontend",
      items: ["React", "Tailwind CSS", "Responsive UI", "Component Design"],
    },
    {
      icon: Terminal,
      title: "Backend",
      items: ["Node.js", "Express", "API Testing", "REST / CRUD"],
    },
    {
      icon: Cpu,
      title: "AI & ML",
      items: ["Machine Learning", "Model Evaluation", "Python Libraries", "Prompt Engineering"],
    },
    {
      icon: ShieldCheck,
      title: "Professional Workflow",
      items: ["Git / GitHub", "Documentation", "Testing", "Collaboration"],
    },
  ];

  return (
    <section className="min-h-screen px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.16),_transparent_20%),radial-gradient(circle_at_bottom_left,_rgba(129,140,248,0.12),_transparent_30%)]" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative rounded-[2rem] border border-white/10 bg-surface/95 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.2)] backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(99,102,241,0.08),transparent_40%)]" />
          <div className="relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted mb-3">Skills & strengths</p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Quality skills for modern data work.</h1>
              </div>
              <div className="rounded-3xl border border-border bg-background/80 px-5 py-4 text-sm text-muted max-w-sm">
                <p className="font-semibold text-text mb-1">Specialized in:</p>
                <p>Data analytics, full-stack engineering, AI foundations, and polished delivery.</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.06 }} className="group rounded-[1.75rem] border border-border bg-background/80 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:border-accent/30 transition-transform">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-accent/10 text-accent-light mb-5">
                      <Icon size={22} />
                    </div>
                    <h2 className="text-xl font-semibold mb-4 text-text">{category.title}</h2>
                    <ul className="space-y-3 text-sm text-muted">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-accent-light shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-16 rounded-[2rem] border border-border bg-background/80 p-8 sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-muted mb-3">Skills philosophy</p>
                  <h2 className="text-3xl font-semibold text-text">Crafting connection between tools, data, and results.</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-border bg-surface/80 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 size={20} className="text-accent-light" />
                      <p className="font-semibold">Data-first delivery</p>
                    </div>
                    <p className="text-sm text-muted leading-6">I build dashboards, analyses, and applications that make insights reliable and repeatable.</p>
                  </div>
                  <div className="rounded-3xl border border-border bg-surface/80 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles size={20} className="text-accent-light" />
                      <p className="font-semibold">Polished execution</p>
                    </div>
                    <p className="text-sm text-muted leading-6">Every feature and report is styled, tested, and delivered with clear communication in mind.</p>
                  </div>
                  <div className="rounded-3xl border border-border bg-surface/80 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <ShieldCheck size={20} className="text-accent-light" />
                      <p className="font-semibold">Trustworthy systems</p>
                    </div>
                    <p className="text-sm text-muted leading-6">I focus on stable setups and reusable workflows so projects stay maintainable over time.</p>
                  </div>
                  <div className="rounded-3xl border border-border bg-surface/80 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Terminal size={20} className="text-accent-light" />
                      <p className="font-semibold">Modern tooling</p>
                    </div>
                    <p className="text-sm text-muted leading-6">I use current web, data, and automation tools to keep development productive and scalable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
