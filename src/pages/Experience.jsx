import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

function Experience() {
  const experience = {
    role: "IT Intern – Data & Digital Systems",
    company: "SriLankan Airlines",
    location: "Sri Lanka",
    duration: "Internship",
    description:
      "Worked within an enterprise environment across multiple business teams, contributing to data systems, reporting, and quality assurance for internal tools.",
    highlights: [
      { category: "Business Intelligence", items: ["Power BI dashboard development", "Reporting automation", "Data visualization"] },
      { category: "Data Engineering", items: ["SQL query writing and optimization", "Data pipelines", "Data integration", "Data validation"] },
      { category: "Quality Assurance", items: ["API testing with Postman", "REST API testing", "Software testing"] },
      { category: "Collaboration", items: ["Requirement gathering", "Technical documentation", "Cross-functional collaboration"] },
    ],
  };

  return (
    <section className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-muted text-sm mb-3 tracking-wide uppercase">
        Experience
      </motion.p>

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
        Where I've worked.
      </motion.h1>

      <div className="relative pl-8 border-l border-border">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative mb-4">
          <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-accent border-4 border-background"></div>

          <div className="bg-surface border border-border rounded-2xl p-8 hover:border-accent transition">
            <div className="flex items-center gap-2 text-accent-light text-sm mb-2">
              <Briefcase size={16} />
              {experience.duration}
            </div>

            <h2 className="text-2xl font-bold mb-1">{experience.role}</h2>
            <h3 className="text-lg text-muted mb-4">{experience.company}</h3>

            <div className="flex flex-wrap gap-4 text-sm text-muted mb-6">
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                {experience.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {experience.duration}
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-8">{experience.description}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {experience.highlights.map((group, index) => (
                <motion.div key={group.category} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                  <h4 className="text-sm font-semibold text-accent-light mb-3">{group.category}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-accent-light mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;