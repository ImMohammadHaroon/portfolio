export default function Stack() {
  return (
    <section className="stack wrap">
      <div>
        <span className="kicker">03 / MY TOOLKIT</span>
        <h2>
          The right tools.
          <br />
          Built together.
        </h2>
      </div>
      <div className="stack-list">
        <div>
          <h3>Frontend</h3>
          <p>React.js · JavaScript · HTML & CSS · Tailwind CSS · Vite</p>
        </div>
        <div>
          <h3>Backend & data</h3>
          <p>Node.js · Express.js · MongoDB · Python · FastAPI · Supabase · Socket.IO</p>
        </div>
        <div>
          <h3>AI & integrations</h3>
          <p>LangChain · FAISS · RAG · Whisper · LLMs · Stripe</p>
        </div>
        <div>
          <h3>Beyond the browser</h3>
          <p>Expo · Chrome MV3 · WordPress · Figma</p>
        </div>
      </div>
    </section>
  );
}
