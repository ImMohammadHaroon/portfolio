export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  category: string;
  stack: string[];
  summary: string;
  about: string;
  highlights: string[];
  links: ProjectLink[];
  image: string;
  /** Meta description for search / social; keep under ~160 chars when possible */
  seoDescription: string;
};

export const projects: Project[] = [
  {
    slug: "meeting-ai",
    title: "Meeting AI",
    tagline: "AI-Powered Audio Intelligence Platform",
    role: "Full Stack Developer",
    category: "AI / Full Stack",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Supabase",
      "Groq AI",
      "WebRTC",
    ],
    summary:
      "Transforms audio recordings into accurate transcripts, intelligent summaries, and searchable conversations.",
    about:
      "A full-stack AI platform that transforms audio recordings into accurate transcripts, intelligent summaries, actionable insights, and searchable conversations. Built for teams that need clarity from every meeting.",
    highlights: [
      "Speaker identification across multi-person recordings",
      "AI chatbot over meeting context",
      "Task extraction from conversations",
      "Real-time audio communication with WebRTC",
      "Organization management for teams",
    ],
    links: [{ label: "Live Website", href: "https://meetingai.dev" }],
    image: "/projects/meeting-ai.webp",
    seoDescription:
      "Meeting AI by Mohammad Haroon: full-stack audio intelligence with transcripts, summaries, speaker ID, WebRTC, and Groq AI.",
  },
  {
    slug: "projectsphere",
    title: "ProjectSphere",
    tagline: "Multi-Tenant Project Management SaaS",
    role: "Full Stack Developer",
    category: "SaaS / Real-time",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Stripe",
    ],
    summary:
      "Multi-tenant project management with real-time Kanban boards, collaboration tools, and Stripe subscriptions.",
    about:
      "A comprehensive SaaS project management platform featuring real-time Kanban boards, drag-and-drop task management, team collaboration, audio/video/screen recording, and Stripe-powered subscription plans.",
    highlights: [
      "Real-time Kanban boards with Socket.io sync",
      "Drag-and-drop task management",
      "Team collaboration workflows",
      "Audio, video, and screen recording",
      "Stripe-powered subscription plans",
    ],
    links: [{ label: "Live Website", href: "https://ml-sphere.vercel.app" }],
    image: "/projects/projectsphere.png",
    seoDescription:
      "ProjectSphere by Mohammad Haroon: multi-tenant MERN project management with real-time Kanban, Socket.io, and Stripe.",
  },
  {
    slug: "medmatch-ai",
    title: "MedMatch AI",
    tagline: "Heart Disease Risk Prediction System",
    role: "Full Stack & ML Developer",
    category: "ML / Healthcare",
    stack: [
      "React.js",
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Random Forest",
    ],
    summary:
      "AI-powered healthcare app that predicts heart disease risk and generates personalized recommendations.",
    about:
      "An AI-powered healthcare application that analyzes patient health indicators to predict heart disease risk and generate personalized recommendations. The machine learning model achieved 81.5% accuracy and 0.914 ROC-AUC.",
    highlights: [
      "Patient health indicator analysis",
      "Heart disease risk prediction",
      "Personalized clinical recommendations",
      "81.5% model accuracy",
      "0.914 ROC-AUC performance",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ImMohammadHaroon/MedMatch-ai",
      },
    ],
    image: "/projects/medmatch-ai.png",
    seoDescription:
      "MedMatch AI by Mohammad Haroon: heart disease risk prediction with React, FastAPI, and Random Forest (81.5% accuracy).",
  },
  {
    slug: "owlance-ai",
    title: "Owlance AI",
    tagline: "AI-Powered Freelancing Assistant",
    role: "Full Stack Developer",
    category: "AI / SaaS",
    stack: ["Next.js", "Supabase", "AI APIs"],
    summary:
      "SaaS assistant that helps freelancers manage and grow their Fiverr businesses with AI.",
    about:
      "An AI-powered SaaS platform designed to help freelancers manage and grow their Fiverr businesses. Features include intelligent client reply generation, professional message rewriting, client requirement analysis, Fiverr brief analysis, proposal writing, and SEO-optimized gig creation.",
    highlights: [
      "Intelligent client reply generation",
      "Professional message rewriting",
      "Client requirement and brief analysis",
      "Proposal writing assistance",
      "SEO-optimized gig creation",
    ],
    links: [{ label: "Live Website", href: "https://owlance-ai.vercel.app/" }],
    image: "/projects/owlance-ai.png",
    seoDescription:
      "Owlance AI by Mohammad Haroon: Next.js freelancing assistant for Fiverr replies, proposals, briefs, and gig SEO.",
  },
  {
    slug: "foncentra",
    title: "Foncentra",
    tagline: "E-commerce eBook Store",
    role: "WordPress Developer",
    category: "E-commerce / WordPress",
    stack: ["WordPress", "Elementor", "WooCommerce", "SEO"],
    summary:
      "Fully responsive, SEO-optimized e-commerce store for selling digital books.",
    about:
      "A fully responsive, SEO-optimized e-commerce website developed for selling digital books. Focused on intuitive navigation, optimized performance, mobile responsiveness, and a seamless shopping experience.",
    highlights: [
      "WooCommerce digital product checkout",
      "Elementor-built responsive layouts",
      "SEO-focused structure and content",
      "Mobile-first shopping experience",
      "Performance-minded WordPress build",
    ],
    links: [{ label: "Live Website", href: "https://foncentra.com" }],
    image: "/projects/foncentra.webp",
    seoDescription:
      "Foncentra by Mohammad Haroon: WordPress and WooCommerce eBook store with Elementor, SEO, and mobile-first checkout.",
  },
  {
    slug: "aperture-futures",
    title: "Aperture Futures",
    tagline: "Web Application Frontend Development",
    role: "Frontend Developer",
    category: "Frontend",
    stack: ["React.js", "Responsive UI", "Component Design"],
    summary:
      "Frontend contribution focused on responsive interfaces, reusable components, and UX polish.",
    about:
      "Contributed to the frontend development of Aperture Futures, focusing on building responsive user interfaces, reusable frontend components, modern layouts, and improving the overall user experience across different screen sizes.",
    highlights: [
      "Responsive user interface development",
      "Reusable frontend components",
      "Modern layout systems",
      "Cross-device experience improvements",
    ],
    links: [
      { label: "Live Website", href: "https://www.aperturefutures.com/" },
    ],
    image: "/projects/aperture-futures.webp",
    seoDescription:
      "Aperture Futures frontend work by Mohammad Haroon: responsive React UI, reusable components, and cross-device UX.",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
