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

function absoluteAsset(path: string) {
  if (path.startsWith("http")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

function buildStructuredData(project: Project) {
  const url = projectUrl(project.slug);
  const live = project.links.find((link) =>
    link.label.toLowerCase().includes("live")
  );
  const code = project.links.find((link) =>
    link.label.toLowerCase().includes("github")
  );
  const image = absoluteAsset(project.image);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: project.seoTitle,
        description: project.seoDescription,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${url}/#project` },
        primaryEntityOfPage: { "@id": `${url}/#project` },
        inLanguage: "en",
        dateModified: "2026-10-31",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}/#project`,
        name: project.title,
        alternateName: project.tagline,
        description: project.overview,
        image,
        applicationCategory: project.category,
        operatingSystem: "Web",
        author: {
          "@type": "Person",
          "@id": `${site.url}/#person`,
          name: "Mohammad Haroon",
          url: site.url,
        },
        creator: { "@id": `${site.url}/#person` },
        keywords: [
          ...project.seoKeywords,
          project.title,
          project.tagline,
          ...project.stack,
          "Mohammad Haroon",
        ].join(", "),
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
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: project.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
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
  const title = project.seoTitle;
  const description = project.seoDescription;
  const image = absoluteAsset(project.image);

  return {
    title,
    description,
    keywords: project.seoKeywords,
    authors: [{ name: "Mohammad Haroon", url: site.url }],
    creator: "Mohammad Haroon",
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "article",
      url,
      siteName: site.name,
      title,
      description,
      locale: "en_US",
      images: [
        {
          url: image,
          alt: `${project.title} by Mohammad Haroon — ${project.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: image,
          alt: `${project.title} by Mohammad Haroon — ${project.tagline}`,
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
          <img
            src={project.image}
            alt={`${project.title} project preview by Mohammad Haroon`}
          />
          <div className="project-detail-hero-shade" aria-hidden="true" />
          <div className="project-detail-hero-glow" aria-hidden="true" />
        </div>

        <div className="wrap project-detail-body">
          <nav className="project-detail-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#work">Work</Link>
            <span aria-hidden="true">/</span>
            <span>{project.title}</span>
          </nav>

          <Link className="project-detail-back" href="/#work">
            ← Back to work
          </Link>

          <header className="project-detail-header project-detail-reveal">
            <div className="project-detail-meta">
              <span className="project-detail-chip project-detail-chip-lime">
                {project.category}
              </span>
              <span className="project-detail-chip project-detail-chip-blue">
                {project.role}
              </span>
            </div>
            <p className="project-detail-kicker">
              Mohammad Haroon Portfolio · Case study
            </p>
            <h1>{project.title}</h1>
            <p className="project-detail-tagline">{project.tagline}</p>
            <p className="project-detail-answer">{project.summary}</p>
            <p className="project-detail-byline">
              Built by{" "}
              <Link href="/">Mohammad Haroon</Link>, MERN stack and full-stack
              web developer.
            </p>
            <div className="project-detail-cta">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    link.label.toLowerCase().includes("live")
                      ? "project-detail-cta-primary"
                      : "project-detail-cta-secondary"
                  }
                >
                  {link.label} <span>↗</span>
                </a>
              ))}
              <Link href="/#contact" className="project-detail-cta-ghost">
                Hire Mohammad Haroon
              </Link>
            </div>
          </header>

          <section
            className="project-detail-section project-detail-reveal tone-lime"
            aria-labelledby="overview-heading"
          >
            <div className="project-detail-section-label">
              <span>01</span>
              <h2 id="overview-heading">Overview</h2>
            </div>
            <p>{project.overview}</p>
          </section>

          <section
            className="project-detail-section project-detail-reveal tone-blue"
            aria-labelledby="about-heading"
          >
            <div className="project-detail-section-label">
              <span>02</span>
              <h2 id="about-heading">About the project</h2>
            </div>
            <p>{project.about}</p>
          </section>

          <section
            className="project-detail-section project-detail-reveal tone-lime"
            aria-labelledby="role-heading"
          >
            <div className="project-detail-section-label">
              <span>03</span>
              <h2 id="role-heading">Role & contribution</h2>
            </div>
            <p>{project.contribution}</p>
          </section>

          <section
            className="project-detail-section project-detail-reveal tone-blue"
            aria-labelledby="stack-heading"
          >
            <div className="project-detail-section-label">
              <span>04</span>
              <h2 id="stack-heading">Frontend & backend</h2>
            </div>
            <div className="project-detail-stack-grid">
              <div className="project-detail-stack-panel tone-frontend">
                <h3>Frontend technologies</h3>
                <ul className="tags project-detail-tags">
                  {project.frontend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="project-detail-stack-panel tone-backend">
                <h3>Backend technologies</h3>
                <ul className="tags project-detail-tags">
                  {project.backend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section
            className="project-detail-section project-detail-reveal tone-lime"
            aria-labelledby="challenges-heading"
          >
            <div className="project-detail-section-label">
              <span>05</span>
              <h2 id="challenges-heading">Challenges & solutions</h2>
            </div>
            <ul className="project-detail-challenges">
              {project.challenges.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>
                    <span className="project-detail-challenge-label">
                      Problem
                    </span>
                    {item.problem}
                  </p>
                  <p>
                    <span className="project-detail-challenge-label">
                      Solution
                    </span>
                    {item.solution}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="project-detail-section project-detail-reveal tone-blue"
            aria-labelledby="details-heading"
          >
            <div className="project-detail-section-label">
              <span>06</span>
              <h2 id="details-heading">Project details</h2>
            </div>
            <ul className="project-detail-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section
            className="project-detail-section project-detail-reveal tone-lime"
            aria-labelledby="tech-heading"
          >
            <div className="project-detail-section-label">
              <span>07</span>
              <h2 id="tech-heading">Full technology stack</h2>
            </div>
            <ul className="tags project-detail-tags">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </section>

          <section
            className="project-detail-section project-detail-reveal tone-blue"
            aria-labelledby="faq-heading"
          >
            <div className="project-detail-section-label">
              <span>08</span>
              <h2 id="faq-heading">Frequently asked questions</h2>
            </div>
            <div className="project-detail-faq">
              {project.faqs.map((faq) => (
                <details key={faq.question} className="project-detail-faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section
            className="project-detail-section project-detail-reveal tone-lime"
            aria-labelledby="links-heading"
          >
            <div className="project-detail-section-label">
              <span>09</span>
              <h2 id="links-heading">Links</h2>
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
              <Link href="/#contact">Contact Mohammad Haroon</Link>
            </div>
          </section>

          {others.length > 0 ? (
            <section
              className="project-detail-section project-detail-more project-detail-reveal tone-blue"
              aria-labelledby="more-heading"
            >
              <div className="project-detail-section-label">
                <span>10</span>
                <h2 id="more-heading">More projects</h2>
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
