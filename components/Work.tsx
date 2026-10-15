import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function Work() {
  const projects = getAllProjects();

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

      <div className="project-grid">
        {projects.map((project) => (
          // The slot takes the scroll animation so the card keeps its CSS hover transform.
          <div key={project.slug} className="project-card-slot">
            <Link
              href={`/projects/${project.slug}`}
              className="project-card"
              aria-label={`View ${project.title} project details`}
            >
              <div className="project-card-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              </div>
              <div className="project-card-overlay">
                <span className="project-card-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </Link>
          </div>
        ))}
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
