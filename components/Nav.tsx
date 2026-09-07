"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Expertise" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      });
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    };
    const media = window.matchMedia("(min-width: 768px)");
    const onResize = () => { if (media.matches) setOpen(false); };
    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onResize);
    return () => { window.removeEventListener("keydown", onKey); media.removeEventListener("change", onResize); };
  }, [open]);

  return (
    <header className="site-header">
      <Container>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#top" className="wordmark" onClick={() => setOpen(false)} aria-label="Chaitanya Raj, back to top"><span className="brand-mark">cr<span>.</span></span><span>Chaitanya Raj<span className="brand-dot">.</span></span></a>
          <ul className="desktop-links">
            {links.map((link) => <li key={link.href}><a href={link.href} aria-current={active === link.href ? "location" : undefined}>{link.label}</a></li>)}
          </ul>
          <div className="nav-actions"><ThemeToggle /><a href="#contact" className="nav-contact">Let’s talk <ArrowUpRight size={15} /></a><button ref={menuButton} type="button" className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
        </nav>
        {open && <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">{[...links, { href: "#education", label: "Education" }, { href: "#contact", label: "Contact" }].map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={active === link.href ? "location" : undefined}>{link.label}<ArrowUpRight size={16} /></a>)}</nav>}
      </Container>
    </header>
  );
}
