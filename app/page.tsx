import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Publication from "@/components/Publication";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: site.url },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: "Mohammad Haroon",
      url: site.url,
      image: `${site.url}/haroon-portrait.jpg`,
      jobTitle: "MERN Stack Web Developer",
      description: "Full-stack web developer based in Sargodha, Pakistan, building web applications, real-time features and AI-powered products.",
      homeLocation: { "@type": "Place", name: "Sargodha, Pakistan" },
      knowsAbout: ["MongoDB", "Express.js", "React", "Node.js", "Full-stack web development", "Python", "FastAPI", "AI applications"],
      sameAs: ["https://github.com/ImMohammadHaroon", "https://www.linkedin.com/in/devowl/"],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      alternateName: "Haroon Portfolio",
      publisher: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: site.title,
      description: site.description,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Stack />
        <Publication />
        <Contact />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
