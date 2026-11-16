
import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <span className="hero-tag">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </span>

          <h1>
            Hi, I'm <span>Amina Nadeem.</span>
          </h1>

          <h2>
            I build digital experiences
            <span> for the web.</span>
          </h2>

          <p>
            I'm a web developer focused on creating
            responsive websites and user-friendly
            web applications using modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#work" className="hero-btn-primary">
              Explore My Work ↗
            </a>

            <a href="#contact" className="hero-btn-outline">
              Let's Talk
            </a>
          </div>

          <div className="hero-bottom">
            <a href="https://github.com/aminanadeem123"
              target="_blank"
              rel="noopener noreferrer">
              GitHub ↗
            </a>
            <span>Based in Pakistan</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-card-header">
              <div className="window-dots">
                <i></i><i></i><i></i>
              </div>
              <span>developer.js</span>
            </div>

            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {"{"}</p>
              <p className="code-indent">
                name: <span className="code-green">"Amina Nadeem"</span>,
              </p>
              <p className="code-indent">
                role: <span className="code-green">"Web Developer"</span>,
              </p>
              <p className="code-indent">
                skills: [
              </p>
              <p className="code-indent code-indent-more">
                <span className="code-orange">"HTML"</span>,
                <span className="code-orange">" CSS"</span>,
              </p>
              <p className="code-indent code-indent-more">
                <span className="code-orange">"JavaScript"</span>,
              </p>
              <p className="code-indent code-indent-more">
                <span className="code-orange">"PHP"</span>,
                <span className="code-orange">" React"</span>
              </p>
              <p className="code-indent">],</p>
              <p className="code-indent">
                learning: <span className="code-green">"Laravel"</span>
              </p>
              <p>{"};"}</p>
              <p className="code-comment">
                // Always learning. Always building.
              </p>
            </div>

            <div className="code-card-footer">
              <span>●</span> Building something meaningful
            </div>
          </div>

          <div className="floating-badge">
            <span>✦</span> Creative Development
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
