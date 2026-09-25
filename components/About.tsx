export default function About() {
  return (
    <section id="about" className="about wrap">
      <div className="about-intro">
        <span className="kicker">02 / THE PERSON BEHIND THE CODE</span>
        <h2>
          Curious by nature.
          <br />
          Developer by craft.
        </h2>
        <div className="about-copy">
          <p>
            I’m Mohammad Haroon, a full-stack web developer based in Sargodha, Pakistan. I
            build web applications that connect considered interfaces with
            reliable backend systems.
          </p>
          <p>
            My experience spans client projects, real-time messaging, payment
            integrations, and AI-powered products. I enjoy turning a complicated
            requirement into something people can simply use.
          </p>
          <a className="text-link" href="/Mohammad-Haroon-Resume.pdf" download>
            Download my resume ↓
          </a>
        </div>
      </div>
      <div className="journey-grid">
        <article className="journey-card career-card" aria-labelledby="career-title">
          <div className="journey-top">
            <span className="journey-label">EXPERIENCE</span>
            <span className="journey-date">JUN 2025 – JUN 2026</span>
          </div>
          <h3 id="career-title">Web Developer</h3>
          <p className="journey-place">Arkidu Development</p>
          <p className="journey-description">
            Building full-stack applications for clients, from responsive
            interfaces to the systems behind them.
          </p>
          <ul className="journey-highlights">
            <li>Real-time features with Socket.IO</li>
            <li>Stripe payment integrations</li>
            <li>React, Node.js & FastAPI development</li>
          </ul>
          <div className="journey-bottom">
            <span>FULL-STACK DEVELOPMENT</span>
            <span className="journey-mark">01</span>
          </div>
        </article>
        <article
          className="journey-card education-card"
          aria-labelledby="education-title"
        >
          <div className="journey-top">
            <span className="journey-label">EDUCATION</span>
            <span className="journey-date">2022 – 2026</span>
          </div>
          <h3 id="education-title">BS Computer Science</h3>
          <p className="journey-place">CUVAS, Bahawalpur</p>
          <p className="journey-description">
            Cholistan University of Veterinary and Animal Sciences
          </p>
          <div className="academic-result">
            <div>
              <span className="score">
                3.62<span> / 4.00</span>
              </span>
              <span className="score-label">CUMULATIVE GPA</span>
            </div>
            <span className="degree-label">
              Bachelor’s
              <br />
              degree
            </span>
          </div>
          <div className="journey-bottom">
            <span>COMPUTER SCIENCE</span>
            <span className="journey-mark">02</span>
          </div>
        </article>
      </div>
    </section>
  );
}
