import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, GitBranch, Link2, Download, Send, CheckCircle, Sparkles } from "lucide-react";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!FORMSPREE_ENDPOINT) {
      setError("Contact form is not configured yet. Set VITE_FORMSPREE_ENDPOINT in your .env file.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(err.message || "Unable to send message right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { href: "mailto:wijesuriyadasuni@gmail.com", label: "Email", value: "wijesuriyadasuni@gmail.com", icon: Mail },
    { href: "https://github.com/DasuWijesu", label: "GitHub", value: "@DasuWijesu", icon: GitBranch },
    { href: "https://www.linkedin.com/in/dasuni-wijesuriya-843a692a2/", label: "LinkedIn", value: "Connect with me", icon: Link2 },
    { href: "/cv.pdf", label: "Resume", value: "Download CV", icon: Download },
  ];

  return (
    <section className="min-h-screen px-6 py-20 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.14),_transparent_35%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-br from-surface/90 via-surface/70 to-background/80 p-8 md:p-10 lg:p-12 shadow-[0_0_90px_rgba(99,102,241,0.16)] backdrop-blur-xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-sm text-accent-light mb-5">
            <Sparkles size={14} />
            Let’s collaborate
          </div>
          <motion.p initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-muted text-sm mb-3 tracking-[0.25em] uppercase">
            Contact
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Let’s build something meaningful.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-muted text-base sm:text-lg max-w-2xl leading-8">
            Whether it’s an opportunity, a project, or a quick conversation, I’d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {submitted ? (
              <div className="rounded-[1.5rem] border border-accent/30 bg-background/70 p-8 md:p-10 flex flex-col items-center text-center gap-4 shadow-[0_0_50px_rgba(99,102,241,0.12)]">
                <div className="rounded-full bg-accent/15 p-3">
                  <CheckCircle size={30} className="text-accent-light" />
                </div>
                <h3 className="text-xl font-semibold">Message received.</h3>
                <p className="text-muted text-sm leading-7">Thanks for reaching out. I’ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-white/10 bg-background/70 p-6 md:p-8 flex flex-col gap-5 shadow-[0_0_50px_rgba(0,0,0,0.2)]">
                <div>
                  <label className="text-sm text-muted block mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-surface/70 border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted/70 focus:outline-none focus:border-accent transition" placeholder="Your name" />
                </div>

                <div>
                  <label className="text-sm text-muted block mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-surface/70 border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted/70 focus:outline-none focus:border-accent transition" placeholder="you@example.com" />
                </div>

                <div>
                  <label className="text-sm text-muted block mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-surface/70 border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted/70 focus:outline-none focus:border-accent transition resize-none" placeholder="What would you like to talk about?"></textarea>
                </div>

                {error ? <p className="text-sm text-red-400">{error}</p> : null}

                <button type="submit" disabled={isSubmitting} className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-light transition px-6 py-3 rounded-full font-medium text-sm mt-2 shadow-[0_0_30px_rgba(99,102,241,0.2)] disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-4">
            {contactMethods.map(({ href, label, value, icon: Icon }, index) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                download={label === "Resume" ? true : undefined}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.06 }}
                className="rounded-[1.25rem] border border-border bg-surface/70 p-5 flex items-center gap-4 hover:border-accent transition shadow-[0_0_30px_rgba(0,0,0,0.15)]"
              >
                <div className="bg-background rounded-full p-3 border border-white/10">
                  <Icon size={18} className="text-accent-light" />
                </div>
                <div>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-muted">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;