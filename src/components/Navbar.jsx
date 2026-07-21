import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const getLinkClass = (link) => {
    const isActive = location.pathname === link.path;
    if (link.name === "Skills") {
      return `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${isActive ? "border-accent bg-accent/10 text-text" : "border-accent/70 text-accent-light hover:bg-accent/10 hover:text-text"}`;
    }

    return isActive ? "text-text hover:text-text transition" : "text-muted hover:text-text transition";
  };

  return (
    <nav className="flex justify-between items-center px-6 sm:px-8 py-5 sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Link to="/" className="text-lg font-semibold tracking-tight">
        Dasuni<span className="text-accent-light">.</span>
      </Link>
      
      <ul className="hidden md:flex gap-6 items-center">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className={getLinkClass(link)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-muted hover:text-text transition"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-border md:hidden">
          <ul className="flex flex-col gap-3 px-6 py-4">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={getLinkClass(link)}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;