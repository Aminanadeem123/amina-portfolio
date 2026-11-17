
import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <span className="hero-tag">
            <span className="status-dot"></span>
            OPEN TO JOBS & PROJECT OPPORTUNITIES
          </span>

          <h1>
            Hi, I'm <span>Amina Nadeem.</span>
          </h1>

          <h2>
            Web Developer & 
            <span> Office Support Professional.</span>
          </h2>

          <p>
            I create responsive websites and user-friendly
            web applications. I also work with Microsoft Office,
            documentation, spreadsheets and organized data.
            I'm always learning and improving my skills.
          </p>

          <div className="hero-buttons">
            <a href="#work" className="hero-btn-primary">
              View My Projects ↗
            </a>

            <a href="#contact" className="hero-btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-bottom">
            <a
              href="https://github.com/Aminanadeem123"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <span>Pakistan</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-card-header">
              <div className="window-dots">
                <i></i><i></i><i></i>
              </div>
              <span>amina.js</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span> amina = {"{"}
              </p>

              <p className="code-indent">
                role: <span className="code-green">"Web Developer"</span>,
              </p>

              <p className="code-indent">
                services: [
              </p>

              <p className="code-indent code-indent-more">
                <span className="code-orange">"Web Development"</span>,
              </p>

              <p className="code-indent code-indent-more">
                <span className="code-orange">"Office Support"</span>,
              </p>

              <p className="code-indent code-indent-more">
                <span className="code-orange">"Documentation"</span>
              </p>

              <p className="code-indent">],</p>

              <p className="code-indent">
                backend: <span className="code-green">"PHP & MySQL"</span>,
              </p>

              <p className="code-indent">
                learning: <span className="code-green">"Laravel"</span>
              </p>

              <p>{"};"}</p>

              <p className="code-comment">
                // Learning, creating and growing.
              </p>
            </div>

            <div className="code-card-footer">
              <span>●</span> Ready to build and contribute
            </div>
          </div>

          <div className="floating-badge">
            <span>✦</span> Web & Office Solutions
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
