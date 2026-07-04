const skills = [
  'React',
  'TypeScript',
  'Azure',
  'Node.js',
  'UI Systems',
  'Accessibility',
];

const projects = [
  {
    name: 'Insight Dashboard',
    description:
      'A data-rich interface that turns noisy operational metrics into clear, action-oriented views.',
    tags: ['React', 'Charts', 'Design Systems'],
  },
  {
    name: 'Client Portal',
    description:
      'A polished account experience with secure onboarding, document workflows, and status tracking.',
    tags: ['Azure', 'Auth', 'UX'],
  },
  {
    name: 'Launch Site',
    description:
      'A fast marketing site focused on performance, conversion, and an editorial content layout.',
    tags: ['Vite', 'SEO', 'Responsive'],
  },
];

const experience = [
  {
    role: 'Frontend Engineer',
    period: '2024 - Present',
    text: 'Built product experiences with strong visual hierarchy, accessibility, and production reliability.',
  },
  {
    role: 'UI Developer',
    period: '2022 - 2024',
    text: 'Translated design systems into reusable components and smoother collaboration between design and engineering.',
  },
];

function App() {
  return (
    <div className="page-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="topbar">
        <a className="brand" href="#home">
          Your Name
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio for Azure deployment</p>
            <h1>
              I build thoughtful web experiences with strong design and clean execution.
            </h1>
            <p className="lede">
              Replace the placeholders with your name and work history, then deploy this site to Azure Static Web Apps.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Work
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <dl className="hero-stats">
              <div>
                <dt>Focus</dt>
                <dd>UI, product, performance</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>React, TypeScript, Azure</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Remote / Your City</dd>
              </div>
            </dl>
          </div>

          <aside className="hero-panel" aria-label="Profile summary">
            <div className="profile-card">
              <span className="status">Available for new work</span>
              <h2>Your Name</h2>
              <p>Frontend developer creating clean, modern, conversion-friendly experiences.</p>
              <div className="profile-meta">
                <span>5+ years of experience</span>
                <span>Azure-ready deployment</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section grid-two" id="about">
          <div>
            <p className="section-label">About</p>
            <h2>A concise story helps recruiters understand your value fast.</h2>
          </div>
          <p className="body-copy">
            Use this space to explain what you do best, the kind of problems you solve, and the products you like building.
            Keep it concrete: mention the teams, business outcomes, or technical challenges you’ve handled.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="section-label">Skills</p>
          <div className="chips">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-label">Projects</p>
              <h2>Selected work</h2>
            </div>
            <p className="body-copy narrow">
              Swap in your real projects, screenshots, and live links when you are ready.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="chip-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip chip-soft">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section grid-two" id="experience">
          <div>
            <p className="section-label">Experience</p>
            <h2>A short timeline builds credibility.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-head">
                  <h3>{item.role}</h3>
                  <span>{item.period}</span>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-card" id="contact">
          <p className="section-label">Contact</p>
          <h2>Let’s build something useful.</h2>
          <p className="body-copy narrow">
            Replace the email and links below with your own contact details before publishing.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:you@example.com">
              you@example.com
            </a>
            <a className="button button-secondary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;