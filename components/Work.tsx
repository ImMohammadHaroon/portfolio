export default function Work() {
  return (
    <section id="work" className="work wrap">
      <div className="section-heading">
        <div>
          <span className="kicker">01 / MOHAMMAD HAROON PORTFOLIO</span>
          <h2>
            Ideas into
            <br />
            working products.
          </h2>
        </div>
        <p>
          A selection of projects across AI,
          <br />
          full-stack development, and real-time systems.
        </p>
      </div>
      <article className="project featured">
        <div className="project-content">
          <div className="project-top">
            <span>01</span>
            <span>AI RESEARCH PLATFORM</span>
          </div>
          <h3>
            Aperture
            <br />
            Futures
          </h3>
          <p>
            Making 50,000+ UN documents searchable. An AI research platform that
            turns a vast document collection into answers through
            retrieval-augmented generation.
          </p>
          <ul className="tags">
            <li>React</li>
            <li>FastAPI</li>
            <li>LangChain</li>
            <li>FAISS</li>
          </ul>
          <a
            className="project-link"
            href="https://www.aperturefutures.com/"
            target="_blank"
            rel="noreferrer"
          >
            Explore project <span>↗</span>
          </a>
        </div>
        <div
          className="data-panel"
          aria-label="Aperture Futures project technology overview"
        >
          <div className="panel-label">
            APERTURE FUTURES <span>RESEARCH / AI</span>
          </div>
          <div className="big-number">
            50,000<span>+</span>
          </div>
          <p>
            UN documents.
            <br />
            One searchable knowledge base.
          </p>
          <div className="pipeline">
            <div>
              <span>01</span> Document collection
            </div>
            <div>
              <span>02</span> Semantic search
            </div>
            <div>
              <span>03</span> Contextual answers
            </div>
          </div>
          <div className="panel-footer">RETRIEVAL-AUGMENTED GENERATION</div>
        </div>
      </article>
      <div className="project-grid">
        <article className="project secondary">
          <div className="project-top">
            <span>02</span>
            <span>REAL-TIME / AI</span>
          </div>
          <div className="project-title">
            <h3>Meeting AI</h3>
            <span className="index-symbol">↗</span>
          </div>
          <p>
            From conversation to clarity. Live transcription, structured notes,
            and action items across web, mobile, and a Chrome extension.
          </p>
          <ul className="tags">
            <li>React 19</li>
            <li>Whisper</li>
            <li>Socket.IO</li>
            <li>Expo</li>
          </ul>
          <a
            className="project-link"
            href="https://www.meetingai.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Explore project <span>↗</span>
          </a>
        </article>
        <article className="project secondary">
          <div className="project-top">
            <span>03</span>
            <span>MACHINE LEARNING / HEALTHCARE</span>
          </div>
          <div className="project-title">
            <h3>MedMatch AI</h3>
            <span className="index-symbol">↗</span>
          </div>
          <p>
            Connecting machine learning with an accessible web experience for
            heart disease risk prediction and clinical recommendations.
          </p>
          <ul className="tags">
            <li>React</li>
            <li>Python</li>
            <li>FastAPI</li>
            <li>REST APIs</li>
          </ul>
          <a
            className="project-link"
            href="https://github.com/ImMohammadHaroon/MedMatch-ai"
            target="_blank"
            rel="noreferrer"
          >
            View source <span>↗</span>
          </a>
        </article>
      </div>
      <a
        className="github-link"
        href="https://github.com/ImMohammadHaroon"
        target="_blank"
        rel="noreferrer"
      >
        More experiments on GitHub ↗
      </a>
    </section>
  );
}
