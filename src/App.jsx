import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import "./App.css";
import budgetbasicsImage from "./assets/projects/budgetbasics.png";
import fureverImage from "./assets/projects/furever.png";
import petbotImage from "./assets/projects/petbot.png";
import mindcareImage from "./assets/projects/mindcare.png";
import pccenterImage from "./assets/projects/pccenter.png";

const projects = [
  {
    number: "01",
    title: "BudgetBasics",
    category: "Budget Management Platform",
    image: budgetbasicsImage,
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
    image: fureverImage,
    description:
      "A responsive pet care platform created to provide useful information and resources for pet owners, veterinarians, and animal shelters.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://aminanadeem123.github.io/FurEVER-Care/",
  },
  {
    number: "03",
    title: "PetBOT Website",
    category: "Plastic & Manufacturing Website",
    image: petbotImage,
    description:
      "A responsive business website designed for the plastic manufacturing industry, showcasing company products, services, and business information through a clean and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://aminanadeem123.github.io/PetBot-Website/",
  },
  {
    number: "04",
    title: "MindCare Hub",
    category: "Mental Wellness Platform",
    image: mindcareImage,
    description:
      "A mental wellness website featuring interactive sections and tools designed around everyday well-being.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://aminanadeem123.github.io/mindcare/",
  },
  {
    number: "05",
    title: "PC Center",
    category: "PC Components & E-Commerce Website",
    image: pccenterImage,
    description:
      "A responsive PC components website featuring product catalogues, categories, shopping cart, checkout, and a PC builder interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://aminanadeem123.github.io/PC-Center/",
  },
];



const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive and user-friendly websites built with HTML, CSS, Bootstrap, JavaScript and React fundamentals.",
    items: ["Website Development", "Front-End Applications", "UI Design Implementation"],
  },
  {
    number: "02",
    title: "Office & Administrative Support",
    description:
      "Organized office tasks, document preparation and spreadsheet management with attention to detail.",
    items: ["Microsoft Word", "Microsoft Excel", "PowerPoint Presentations"],
  },
  {
    number: "03",
    title: "Documentation & Freelance Support",
    description:
      "Professional project documentation, formatted reports and digital support for individual and business needs.",
    items: ["Project Documentation", "Assignments & Reports", "Document Formatting"],
  },
];



const skillGroups = [
  {
    number: "01",
    title: "Technical Expertise",
    description: "Web development technologies and tools.",
    skills: [
      { name: "HTML5 & CSS3", detail: "Website structure, styling and responsive layouts." },
      { name: "Bootstrap 5", detail: "Responsive interface development." },
      { name: "JavaScript", detail: "Interactive website functionality." },
      { name: "React", detail: "Basic component-based development." },
      { name: "PHP & MySQL", detail: "Server-side development and database fundamentals." },
      { name: "Laravel", detail: "Currently learning the framework." },
      { name: "Git & GitHub", detail: "Version control and project collaboration." },
    ],
  },
  {
    number: "02",
    title: "Digital & Business Knowledge",
    description: "Understanding of digital platforms and online business.",
    skills: [
      { name: "SEO Fundamentals", detail: "Basic search engine optimization concepts." },
      { name: "Website Optimization", detail: "Understanding website usability and performance." },
      { name: "Entrepreneurship", detail: "Fundamental business and entrepreneurial concepts." },
    ],
  },
  {
    number: "03",
    title: "Professional & Office Skills",
    description: "Workplace, communication and productivity skills.",
    skills: [
      { name: "Microsoft Office", detail: "Word, Excel and PowerPoint." },
      { name: "Teamwork", detail: "Collaboration and working towards shared goals." },
      { name: "Communication", detail: "Clear and professional communication." },
      { name: "Time Management", detail: "Organizing tasks and meeting deadlines." },
      { name: "Problem Solving", detail: "Identifying issues and finding practical solutions." },
      { name: "Adaptability", detail: "Willingness to learn and adapt to new tools." },
    ],
  },
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
     
{/* SERVICES */}
<section className="section services-section" id="services">
  <div className="section-label">02 / WHAT I OFFER</div>

  <div className="services-heading">
    <h2 className="section-title">
      How I can help you.
    </h2>
    <p>
      Practical digital, development and administrative
      support for projects and businesses.
    </p>
  </div>

  <div className="services-grid">
    {services.map((service) => (
      <article className="service-card" key={service.number}>
        <span className="service-number">{service.number}</span>

        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <ul>
          {service.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
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
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} website preview`}
            className="project-image"
          />
        )}
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
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
               Live Demo ↗
            </a>
          )}

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
  <div className="section-label">04 / MY EXPERTISE</div>

  <div className="skills-heading">
    <h2 className="section-title">
      Skills & expertise.
    </h2>

    <p>
      A combination of technical knowledge and
      practical office productivity skills.
    </p>
  </div>

  <div className="skill-groups">
    {skillGroups.map((group) => (
      <div className="skill-group" key={group.number}>
        <div className="skill-group-info">
          <span className="skill-number">{group.number}</span>
          <h3>{group.title}</h3>
          <p>{group.description}</p>
        </div>

        <div className="skill-details">
          {group.skills.map((skill) => (
            <div className="skill-detail" key={skill.name}>
              <h4>{skill.name}</h4>
              <p>{skill.detail}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


      
{/* CONTACT */}
<section className="section contact-section" id="contact">
  <div className="section-label">05 / LET'S WORK TOGETHER</div>

  <h2>
    Have a project <span>in mind?</span>
  </h2>

  <p>
    Looking for a responsive website, front-end development,
    or reliable digital and administrative support?
    Let's discuss how I can help with your next project.
  </p>

  <div className="contact-actions">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=aminanadeem712@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
    >
      Contact Me ↗
    </a>

    <a
      href="https://github.com/Aminanadeem123"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline"
    >
      View GitHub ↗
    </a>
  </div>

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
