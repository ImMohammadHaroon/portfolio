export default function Publication() {
  return (
    <section
      id="publication"
      className="publication wrap"
      aria-labelledby="publication-title"
    >
      <div className="publication-heading">
        <div>
          <span className="kicker">04 / RESEARCH & PUBLICATION</span>
          <h2 id="publication-title">
            Beyond the code.
            <br />
            Into research.
          </h2>
        </div>
        <span className="publication-year">2026</span>
      </div>
      <article className="paper">
        <div className="paper-meta">
          <span>JOURNAL ARTICLE</span>
          <span>ARTIFICIAL INTELLIGENCE / EDUCATION</span>
        </div>
        <h3>
          AI-Driven Intelligent Chatbots for Conversational English Practice: A
          Solution for Speaking Anxiety in Pakistani Students
        </h3>
        <p className="paper-authors">
          Abdul Khaliq, <strong>Muhammad Haroon</strong>, Muhammad Wahaj Sajid
        </p>
        <p className="paper-summary">
          This research explores the use of AI-driven chatbots for conversational
          English practice, with a focus on speaking anxiety among Pakistani
          students. It brings together my interests in artificial intelligence,
          language learning, and practical software applications.
        </p>
        <dl className="paper-details">
          <div>
            <dt>Published in</dt>
            <dd>ACADEMIA International Journal for Social Sciences</dd>
          </div>
          <div>
            <dt>Publication details</dt>
            <dd>Vol. 5, Issue 1(a) · Pages 45–57 · 2026</dd>
          </div>
          <div>
            <dt>DOI</dt>
            <dd>10.63056/academia.5.1(a).2026.1892</dd>
          </div>
        </dl>
        <a
          className="paper-link"
          href="https://doi.org/10.63056/academia.5.1(a).2026.1892"
          target="_blank"
          rel="noreferrer"
        >
          Read the publication <span>↗</span>
        </a>
      </article>
    </section>
  );
}
