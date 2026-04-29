import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Education", "Contact"];

const SKILLS = {
  Languages: ["Java", "JavaScript", "HTML5", "CSS3", "SQL"],
  "Frameworks & Libraries": ["React", "JUnit"],
  "Mobile Dev": ["Android Studio"],
  "IDEs & Tools": ["IntelliJ IDEA", "VS Code", "Eclipse", "Git / GitHub"],
  Other: ["LibreOffice", "CapCut"],
};

const PROJECTS = [
  {
    title: "Hospital Management System",
    icon: "🏥",
    description:
      "A Java-based system to manage patients, doctors, and appointments with full CRUD operations and a clean data model.",
    skills: ["OOP", "Data Modeling", "Java"],
    accent: "#4F8EF7",
    github: "https://github.com/",
  },
  {
    title: "Android Music Player",
    icon: "🎵",
    description:
      "A mobile application built in Android Studio for playing and managing music files with a sleek, intuitive UI.",
    skills: ["Mobile UI Design", "Android APIs", "Java"],
    accent: "#A259FF",
    github: "https://github.com/Faith001.com",
  },
  {
    title: "JUnit Testing Suite",
    icon: "✅",
    description:
      "A Grade Calculator project with rigorous software quality assurance — zero bugs, 100% test coverage using JUnit.",
    skills: ["Unit Testing", "Debugging", "SQA"],
    accent: "#00C9A7",
    github: "https://github.com/Faith001.com.",
  },
];

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i].toLowerCase());
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(ids[i]);
          return;
        }
      }
      setActive(ids[0]);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);
  return active;
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const active = useScrollSpy(NAV_LINKS);
  const heroRef = useRef(null);

  const theme = dark
    ? {
        bg: "#0D0F1A",
        surface: "#151828",
        card: "#1C2036",
        border: "#2A2F4A",
        text: "#E8EAF6",
        muted: "#8892B0",
        accent: "#4F8EF7",
        accentSoft: "rgba(79,142,247,0.12)",
        toggle: "☀️",
      }
    : {
        bg: "#F4F6FB",
        surface: "#FFFFFF",
        card: "#FFFFFF",
        border: "#DDE3F0",
        text: "#1A1D2E",
        muted: "#5A6380",
        accent: "#2D6FD9",
        accentSoft: "rgba(45,111,217,0.10)",
        toggle: "🌙",
      };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: theme.bg, color: theme.text, fontFamily: "'DM Sans', 'Segoe UI', sans-serif", minHeight: "100vh", transition: "background 0.3s, color 0.3s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #4F8EF7; border-radius: 10px; }
        .nav-link { cursor: pointer; transition: color 0.2s; font-weight: 500; font-size: 0.9rem; letter-spacing: 0.03em; }
        .nav-link:hover { color: #4F8EF7; }
        .card-hover { transition: transform 0.25s, box-shadow 0.25s; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(79,142,247,0.15); }
        .skill-pill { display: inline-flex; align-items: center; border-radius: 999px; padding: 4px 14px; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.04em; }
        .btn-primary { display: inline-block; padding: 12px 28px; background: #4F8EF7; color: #fff; border: none; border-radius: 10px; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: background 0.2s, transform 0.15s; text-decoration: none; }
        .btn-primary:hover { background: #2D6FD9; transform: scale(1.03); }
        .btn-outline { display: inline-block; padding: 11px 26px; background: transparent; border: 2px solid #4F8EF7; color: #4F8EF7; border-radius: 10px; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: background 0.2s; text-decoration: none; }
        .btn-outline:hover { background: rgba(79,142,247,0.12); }
        .input-field { width: 100%; padding: 12px 16px; border-radius: 10px; border: 1.5px solid; font-size: 0.95rem; font-family: inherit; outline: none; transition: border-color 0.2s; }
        .input-field:focus { border-color: #4F8EF7; }
        .section-tag { font-family: 'Space Mono', monospace; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: #4F8EF7; margin-bottom: 10px; display: block; }
        .hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(79,142,247,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.07) 1px, transparent 1px); background-size: 48px 48px; }
        .glow-dot { position: absolute; width: 320px; height: 320px; border-radius: 50%; background: radial-gradient(circle, rgba(79,142,247,0.18) 0%, transparent 70%); pointer-events: none; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.7s 0.15s ease forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.7s 0.3s ease forwards; opacity: 0; }
        .fade-up-4 { animation: fadeUp 0.7s 0.45s ease forwards; opacity: 0; }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .cursor { display: inline-block; width: 2px; height: 1.1em; background: #4F8EF7; margin-left: 3px; vertical-align: middle; animation: blink 0.9s infinite; }
        .progress-bar-bg { height: 6px; border-radius: 99px; background: rgba(79,142,247,0.15); overflow: hidden; }
        .progress-bar-fill { height: 100%; border-radius: 99px; background: linear-gradient(90deg, #4F8EF7, #A259FF); transition: width 1s ease; }
        .timeline-line { position: absolute; left: 19px; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, #4F8EF7, #A259FF); }
        .timeline-dot { width: 14px; height: 14px; border-radius: 50%; background: #4F8EF7; border: 3px solid; flex-shrink: 0; margin-top: 4px; }
        .mobile-menu { position: fixed; inset: 0; z-index: 99; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 28px; }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .hamburger { display: flex !important; } .hero-title { font-size: 2.4rem !important; } }
        @media (min-width: 769px) { .hamburger { display: none !important; } .mobile-menu { display: none !important; } }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backdropFilter: "blur(16px)", background: dark ? "rgba(13,15,26,0.85)" : "rgba(244,246,251,0.88)", borderBottom: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "1.05rem", color: theme.accent }}>
            FW<span style={{ color: theme.text }}>.</span>
          </span>
          <div className="desktop-nav" style={{ display: "flex", gap: 32 }}>
            {NAV_LINKS.map((l) => (
              <span key={l} className="nav-link" style={{ color: active === l ? theme.accent : theme.muted }} onClick={() => scrollTo(l)}>
                {l}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button onClick={() => setDark(!dark)} style={{ background: theme.accentSoft, border: "none", borderRadius: 8, padding: "6px 10px", cursor: "pointer", fontSize: "1rem" }}>
              {theme.toggle}
            </button>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: theme.text, fontSize: "1.4rem", display: "none" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu" style={{ background: theme.bg }}>
          {NAV_LINKS.map((l) => (
            <span key={l} style={{ fontSize: "1.5rem", fontWeight: 600, color: theme.text, cursor: "pointer" }} onClick={() => scrollTo(l)}>{l}</span>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="about" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 80 }}>
        <div className="hero-grid" />
        <div className="glow-dot" style={{ top: "-80px", right: "10%" }} />
        <div className="glow-dot" style={{ bottom: "-60px", left: "5%", background: "radial-gradient(circle, rgba(162,89,255,0.14) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
            <div>
              <span className="section-tag fade-up">// Hello, World</span>
              <h1 className="hero-title fade-up-2" style={{ fontSize: "3.4rem", fontWeight: 700, lineHeight: 1.15, marginBottom: 20 }}>
                Faith<br />
                <span style={{ background: "linear-gradient(135deg, #4F8EF7, #A259FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Woewiyu</span>
                <span className="cursor" />
              </h1>
              <p className="fade-up-3" style={{ fontSize: "1.05rem", color: theme.muted, lineHeight: 1.75, maxWidth: 560, marginBottom: 32 }}>
                Software Engineering Student & Aspiring Full-Stack Developer — based in <strong style={{ color: theme.text }}>Liberia 🇱🇷</strong>. I build functional, high-quality applications with a strong focus on Java, Android, and software quality assurance.
              </p>
              <div className="fade-up-4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => scrollTo("Projects")}>View Projects</button>
                <a className="btn-outline" href="https://github.com/faithwoewiyu3@gmail.com3@gmail.com" target="_blank" rel="noreferrer">GitHub ↗</a>
                <button className="btn-outline" onClick={() => scrollTo("Contact")}>Contact Me</button>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, minWidth: 180 }}>
              {[{ label: "Java", pct: 85 }, { label: "Android", pct: 75 }, { label: "JavaScript", pct: 65 }, { label: "Testing", pct: 80 }].map((s) => (
                <div key={s.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: theme.muted, marginBottom: 5 }}>
                    <span style={{ fontFamily: "'Space Mono', monospace" }}>{s.label}</span>
                    <span>{s.pct}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "100px 24px", background: dark ? theme.surface : "#EEF2FB" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span className="section-tag">// Skills & Tools</span>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 48 }}>Technical Arsenal</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} className="card-hover" style={{ background: theme.card, border: `1px solid ${theme.border}`, borderRadius: 16, padding: 24 }}>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: theme.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>{cat}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map((s) => (
                    <span key={s} className="skill-pill" style={{ background: theme.accentSoft, color: theme.accent }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span className="section-tag">// Projects</span>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 12 }}>What I've Built</h2>
          <p style={{ color: theme.muted, marginBottom: 48, maxWidth: 520 }}>Real-world projects that demonstrate my skills in Java, mobile development, and software testing.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {PROJECTS.map((p) => (
              <div key={p.title} className="card-hover" style={{ background: theme.card, border: `1px solid ${theme.border}`, borderRadius: 20, padding: 28, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
                <div style={{ fontSize: "2.4rem", marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: theme.muted, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 20 }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                  {p.skills.map((s) => (
                    <span key={s} className="skill-pill" style={{ background: `${p.accent}18`, color: p.accent }}>{s}</span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: theme.accent, fontSize: "0.88rem", fontWeight: 600, textDecoration: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ padding: "100px 24px", background: dark ? theme.surface : "#EEF2FB" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span className="section-tag">// Education</span>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 56 }}>Academic Background</h2>
          <div style={{ position: "relative", paddingLeft: 50, maxWidth: 680 }}>
            <div className="timeline-line" />
            {[
              { year: "2024 – 2026", title: "Professional Diploma in Software Engineering", sub: "Bluecrest University College", note: "Expected Graduation: 2026", status: "current" },
              { year: "Focus Areas", title: "Core Competencies", sub: "OOP • Data Structures • Software Testing • Mobile Dev", note: "Java-centric curriculum with real-world projects", status: "done" },
            ].map((e, i) => (
              <div key={i} style={{ position: "relative", marginBottom: 44, display: "flex", gap: 24 }}>
                <div className="timeline-dot" style={{ borderColor: theme.bg }} />
                <div style={{ flex: 1 }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: theme.accent, letterSpacing: "0.08em" }}>{e.year}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginTop: 6, marginBottom: 4 }}>{e.title}</h3>
                  <p style={{ color: theme.muted, fontSize: "0.9rem" }}>{e.sub}</p>
                  <p style={{ color: theme.muted, fontSize: "0.82rem", marginTop: 4, fontStyle: "italic" }}>{e.note}</p>
                  {e.status === "current" && (
                    <span style={{ marginTop: 10, display: "inline-block", background: "rgba(79,142,247,0.15)", color: theme.accent, fontSize: "0.72rem", fontWeight: 700, padding: "3px 12px", borderRadius: 99, letterSpacing: "0.06em" }}>IN PROGRESS</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <span className="section-tag">// Contact</span>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 12 }}>Let's Connect</h2>
          <p style={{ color: theme.muted, marginBottom: 40, lineHeight: 1.7 }}>
            Open to internship opportunities, collaborations, or just a good tech conversation. Drop me a message — I respond promptly.
          </p>
          {sent ? (
            <div style={{ background: "rgba(0,201,167,0.12)", border: "1.5px solid #00C9A7", borderRadius: 16, padding: 32, textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🎉</div>
              <h3 style={{ fontWeight: 700, color: "#00C9A7" }}>Message Sent!</h3>
              <p style={{ color: theme.muted, marginTop: 8 }}>Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: theme.card, border: `1px solid ${theme.border}`, borderRadius: 20, padding: 36 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
                <div>
                  <label style={{ fontSize: "0.82rem", fontWeight: 600, color: theme.muted, display: "block", marginBottom: 8 }}>Name</label>
                  <input className="input-field" required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ background: theme.bg, borderColor: theme.border, color: theme.text }} />
                </div>
                <div>
                  <label style={{ fontSize: "0.82rem", fontWeight: 600, color: theme.muted, display: "block", marginBottom: 8 }}>Email</label>
                  <input className="input-field" required type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ background: theme.bg, borderColor: theme.border, color: theme.text }} />
                </div>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 600, color: theme.muted, display: "block", marginBottom: 8 }}>Message</label>
                <textarea className="input-field" required rows={5} placeholder="Hi Faith, I'd love to chat about..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ background: theme.bg, borderColor: theme.border, color: theme.text, resize: "vertical" }} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", textAlign: "center" }}>Send Message →</button>
            </form>
          )}

          {/* Social links */}
          <div style={{ display: "flex", gap: 20, marginTop: 40, justifyContent: "center" }}>
            {[
              { label: "GitHub", url: "https://github.com/Faith001.com", icon: "⌥" },
              { label: "LinkedIn", url: "https://linkedin.com", icon: "in" },
              { label: "Email", url: "Faith:faithwoewiyu3@gmail.com", icon: "✉" },
            ].map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: theme.muted, textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = theme.accent}
                onMouseLeave={(e) => e.currentTarget.style.color = theme.muted}>
                <span style={{ fontSize: "1.2rem" }}>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${theme.border}`, padding: "28px 24px", textAlign: "center" }}>
        <p style={{ color: theme.muted, fontSize: "0.82rem", fontFamily: "'Space Mono', monospace" }}>
          © 2026 Faith Woewiyu — Built with React & ❤️ in Liberia 🇱🇷
        </p>
      </footer>
    </div>
  );
}
