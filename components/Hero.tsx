export default function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <div className="eyebrow">MERN STACK DEVELOPER · AI APPLICATIONS</div>
          <p className="hello">Hi, I’m Mohammad Haroon.</p>
          <h1 id="hero-title">
            Mohammad Haroon
            <br />
            <span className="built">Web Developer.</span>
          </h1>
          <p className="hero-summary">
            I’m a MERN stack developer with one year of experience building web
            applications for international clients. I work with MongoDB, Express,
            React, Node.js, and FastAPI to create responsive interfaces, real-time
            features, and AI-powered applications.
          </p>
          <p className="hero-summary secondary-summary">
            From the first requirement to the final release, I collaborate with
            clients and remote teams to build practical, reliable web solutions.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="#work">
              Explore my work <span>↘</span>
            </a>
            <a className="hero-resume" href="/Mohammad-Haroon-Resume.pdf" download>
              Download resume ↓
            </a>
          </div>
        </div>
        <figure className="portrait">
          <div className="portrait-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/haroon-portrait.jpg"
              alt="Mohammad Haroon wearing a navy blazer and white shirt"
              width={1086}
              height={1448}
              fetchPriority="high"
            />
            <span className="portrait-label">THE PERSON BEHIND THE CODE</span>
          </div>
          <figcaption>
            <span>MOHAMMAD HAROON</span>
            <span>SARGODHA, PAKISTAN</span>
          </figcaption>
        </figure>
      </div>
      <div className="hero-foot">
        <span>REACT / NODE.JS / PYTHON / AI</span>
        <a href="#publication">PUBLISHED RESEARCHER ↗</a>
      </div>
    </section>
  );
}
