import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "BudgetBasics",
    category: "Budget Management Platform",
    description:
      "A budgeting platform designed to help users organize expenses, plan savings, and understand their spending through interactive features.",
    tech: ["React", "JavaScript", "CSS", "Bootstrap"],
    live: "https://thebudgetbasics.netlify.app/",
    figma:
      "https://www.figma.com/design/2u03Vhbj9a6f1aQdF8sZqa/design?node-id=0-1&t=jXxM4QH5SRJRSFWT-1",
  },
  {
    number: "02",
    title: "FurEVER Care",
    category: "Pet Care Website",
    description:
      "A responsive pet care platform created to provide useful information and resources for pet owners, veterinarians, and animal shelters.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://aminanadeem123.github.io/FurEVER-Care/",
  },

{
  number: "03",
  title: "PetBOT Website",
  category: "Plastic & Manufacturing Website",
  description:
    "A responsive business website designed for the plastic manufacturing industry, showcasing company products, services, and business information through a clean and user-friendly interface.",
  tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  live: "https://aminanadeem123.github.io/PetBot-Website/",
},

  {
    number: "04",
    title: "MindCare Hub",
    category: "Mental Wellness Platform",
    description:
      "A mental wellness website featuring interactive sections and tools designed around everyday well-being.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://aminanadeem123.github.io/mindcare/",
  },
];

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Responsive and user-friendly websites using HTML, CSS, Bootstrap and JavaScript.",
  },
  {
    number: "02",
    title: "UI Design Implementation",
    description:
      "Converting Figma designs and visual concepts into clean, responsive web interfaces.",
  },
  {
    number: "03",
    title: "Front-End Applications",
    description:
      "Interactive web interfaces using JavaScript and React fundamentals.",
  },
  {
    number: "04",
    title: "Microsoft Word",
    description:
      "Document formatting, assignments, reports, professional layouts and page styling.",
  },
  {
    number: "05",
    title: "Microsoft Excel",
    description:
      "Spreadsheet formatting, data organization, tables and basic formulas.",
  },
  {
    number: "06",
    title: "PowerPoint Presentations",
    description:
      "Clean, organized and visually structured academic and general presentations.",
  },
  {
    number: "07",
    title: "Assignments & Documentation",
    description:
      "Structured academic assignments, project documentation and well-formatted reports.",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "Bootstrap 5",
  "JavaScript",
  "React Basics",
  "PHP ",
  "Laravel (Learning)",
  "MySQL",
  "XML",
  "JSON",
  "Git & GitHub",
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
];

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          AN<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#work">WORK</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* HERO */}
        <Hero />
       {/* ABOUT */}
      <About />

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="section-label">02 / WHAT I OFFER</div>

        <h2 className="section-title">
          Services I can help with.
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <span>{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="work">
        <div className="section-label">03 / SELECTED WORK</div>

        <div className="projects-heading">
          <h2 className="section-title">
            Projects I've worked on.
          </h2>

          <p>
            A collection of websites and development
            projects that reflect my learning and work.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>

                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Figma Design ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-label">04 / MY TOOLKIT</div>

        <h2 className="section-title">
          Tools & technologies I use.
        </h2>

        <p className="skills-description">
          My current technical and productivity toolkit.
        </p>

        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-label">05 / GET IN TOUCH</div>

        <h2>
          Have a project
          <span> in mind?</span>
        </h2>

        <p>
          Whether you need a responsive website,
          a presentation, a formatted document or
          help with project documentation, I'd be
          happy to discuss your requirements.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=aminanadeem712@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Let's Talk ↗
        </a>

        <div className="contact-email">
          aminanadeem712@gmail.com
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          AN<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Amina Nadeem.
          Built with care.
        </p>

        <a
          href="https://github.com/aminanadeem123"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </footer>

    </div>
  );
}

export default App;
