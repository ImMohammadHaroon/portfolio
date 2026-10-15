import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDetailMotion from "@/components/ProjectDetailMotion";
import {
  getAllProjects,
  getProject,
  getProjectSlugs,
  type Project,
} from "@/lib/projects";
import { site } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function projectUrl(slug: string) {
  return `${site.url}/projects/${slug}`;
}

function buildStructuredData(project: Project) {
  const url = projectUrl(project.slug);
  const live = project.links.find((link) =>
    link.label.toLowerCase().includes("live")
  );
  const code = project.links.find((link) =>
    link.label.toLowerCase().includes("github")
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: `${project.title} | Mohammad Haroon Portfolio`,
        description: project.seoDescription,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${url}/#project` },
        primaryEntityOfPage: { "@id": `${url}/#project` },
        inLanguage: "en",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}/#project`,
        name: project.title,
        alternateName: project.tagline,
        description: project.about,
        image: `${site.url}${project.image}`,
        applicationCategory: project.category,
        operatingSystem: "Web",
        author: {
          "@type": "Person",
          "@id": `${site.url}/#person`,
          name: "Mohammad Haroon",
          url: site.url,
        },
        creator: { "@id": `${site.url}/#person` },
        keywords: [project.title, project.tagline, ...project.stack, "Mohammad Haroon"].join(", "),
        url: live?.href ?? url,
        sameAs: project.links.map((link) => link.href),
        ...(code ? { codeRepository: code.href } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${site.url}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${site.url}/#work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: url,
          },
        ],
      },
    ],
  };
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: `Project Not Found | ${site.name}` };
  }

  const url = projectUrl(project.slug);
  const title = `${project.title} | Mohammad Haroon Portfolio`;
  const description = project.seoDescription;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: project.image,
          alt: `${project.title} by Mohammad Haroon`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: project.image,
          alt: `${project.title} by Mohammad Haroon`,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const others = getAllProjects().filter((item) => item.slug !== project.slug);
  const structuredData = buildStructuredData(project);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <ProjectDetailMotion />
      <main id="main" className="project-detail">
        <div className="project-detail-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={`${project.title} project preview`} />
          <div className="project-detail-hero-shade" aria-hidden="true" />
          <div className="project-detail-hero-glow" aria-hidden="true" />
        </div>

        <div className="wrap project-detail-body">
          <Link className="project-detail-back" href="/#work">
            ← Back to work
          </Link>

          <div className="project-detail-header project-detail-reveal">
            <div className="project-detail-meta">
              <span className="project-detail-chip project-detail-chip-lime">
                {project.category}
              </span>
              <span className="project-detail-chip project-detail-chip-blue">
                {project.role}
              </span>
            </div>
            <h1>{project.title}</h1>
            <p className="project-detail-tagline">{project.tagline}</p>
            <p className="project-detail-byline">
              Case study from{" "}
              <Link href="/">Mohammad Haroon Portfolio</Link> — full-stack and
              AI product work.
            </p>
          </div>

          <section className="project-detail-section project-detail-reveal tone-lime">
            <div className="project-detail-section-label">
              <span>01</span>
              <h2>About</h2>
            </div>
            <p>{project.about}</p>
          </section>

          <section className="project-detail-section project-detail-reveal tone-blue">
            <div className="project-detail-section-label">
              <span>02</span>
              <h2>Project details</h2>
            </div>
            <ul className="project-detail-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="project-detail-section project-detail-reveal tone-lime">
            <div className="project-detail-section-label">
              <span>03</span>
              <h2>Technologies</h2>
            </div>
            <ul className="tags project-detail-tags">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </section>

          <section className="project-detail-section project-detail-reveal tone-blue">
            <div className="project-detail-section-label">
              <span>04</span>
              <h2>Links</h2>
            </div>
            <div className="project-detail-links">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} <span>↗</span>
                </a>
              ))}
            </div>
          </section>

          {others.length > 0 ? (
            <section className="project-detail-section project-detail-more project-detail-reveal tone-lime">
              <div className="project-detail-section-label">
                <span>05</span>
                <h2>More projects</h2>
              </div>
              <div className="project-detail-more-grid">
                {others.slice(0, 3).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/projects/${item.slug}`}
                    className="project-detail-more-card"
                  >
                    <span className="project-detail-more-copy">
                      <span className="project-detail-more-label">
                        {item.category}
                      </span>
                      <span className="project-detail-more-title">
                        {item.title}
                      </span>
                    </span>
                    <span className="project-detail-more-arrow">→</span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
