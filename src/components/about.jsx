
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">

        <div className="about-left">
          <span className="about-eyebrow">01 — ABOUT ME</span>

          <h2>
            Turning ideas into
            <span> digital experiences.</span>
          </h2>

          <p className="about-intro">
            I'm Amina Nadeem, a web developer focused on
            building responsive, user-friendly and practical
            web experiences.
          </p>

          <a
            href="https://github.com/aminanadeem123"
            target="_blank"
            rel="noreferrer"
            className="about-link"
          >
            Explore my GitHub <span>↗</span>
          </a>
        </div>

        <div className="about-right">
          <div className="about-description">
            <span className="about-number">01</span>
            <div>
              <h3>What I do</h3>
              <p>
                I build websites using HTML, CSS, Bootstrap
                and JavaScript, with an interest in creating
                clean layouts and smooth user experiences.
              </p>
            </div>
          </div>

          <div className="about-description">
            <span className="about-number">02</span>
            <div>
              <h3>What I work with</h3>
              <p>
                I have completed PHP and I'm currently
                learning Laravel. I also work with React,
                MySQL, Git and GitHub.
              </p>
            </div>
          </div>

          <div className="about-description">
            <span className="about-number">03</span>
            <div>
              <h3>My approach</h3>
              <p>
                I enjoy learning by building real projects,
                improving my coding skills and exploring
                better ways to solve problems.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
