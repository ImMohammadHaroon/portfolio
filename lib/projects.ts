export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectChallenge = {
  title: string;
  problem: string;
  solution: string;
};

export type ProjectFaq = {
  question: string;
  answer: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  category: string;
  stack: string[];
  frontend: string[];
  backend: string[];
  summary: string;
  overview: string;
  about: string;
  contribution: string;
  highlights: string[];
  challenges: ProjectChallenge[];
  faqs: ProjectFaq[];
  links: ProjectLink[];
  image: string;
  /** Browser tab / SERP title; keep unique and under ~60 chars when possible */
  seoTitle: string;
  /** Meta description for search / social; keep under ~160 chars when possible */
  seoDescription: string;
  seoKeywords: string[];
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
      "Vite",
      "Node.js",
      "Express.js",
      "Supabase",
      "OpenAI Whisper",
      "GPT-4o mini",
      "WebRTC",
      "Socket.io",
    ],
    frontend: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Socket.io Client",
      "RecordRTC",
      "Framer Motion",
      "Chrome MV3 extension",
    ],
    backend: [
      "Node.js",
      "Express 5",
      "Socket.io",
      "OpenAI Whisper",
      "GPT-4o mini",
      "Supabase Auth + PostgreSQL RLS",
      "Supabase Storage",
      "Vercel + Render",
    ],
    summary:
      "Transforms audio recordings into accurate transcripts, intelligent summaries, and searchable conversations.",
    overview:
      "Meeting AI is a production-grade full-stack platform that automates the end-to-end meeting workflow for remote and hybrid teams. It combines live WebRTC conferencing, audio recording, OpenAI Whisper transcription with English translation, GPT-powered notes, automated task assignment, and a contextual AI chatbot behind organization-based access control.",
    about:
      "A full-stack AI platform that turns live meetings, uploaded recordings, and Google Meet captures into searchable transcripts, structured notes, assigned tasks, and grounded chatbot answers. Built for teams that need clarity from every conversation without manual note-taking.",
    contribution:
      "As Full Stack Developer, Mohammad Haroon built the React frontend, Node.js/Express APIs, WebRTC signaling, Chrome extension capture flow, Supabase multi-tenancy, and the Whisper/GPT processing pipeline.",
    highlights: [
      "Live WebRTC rooms with Socket.io signaling",
      "Whisper transcription and GPT meeting notes",
      "Automated task extraction for participants",
      "Contextual AI chatbot grounded in meeting data",
      "Chrome extension for Google Meet capture",
      "Organization-scoped collaboration with Supabase RLS",
    ],
    challenges: [
      {
        title: "WebRTC peer connections",
        problem:
          "Reliable peer-to-peer audio across NATs and multi-participant rooms is fragile under real network conditions.",
        solution:
          "Built room-based Socket.io signaling with SDP/ICE routing, RNNoise noise suppression, and a Web Audio mixer for host-side recording.",
      },
      {
        title: "Chrome MV3 recording limits",
        problem:
          "Manifest V3 service workers cannot capture Google Meet tab audio directly.",
        solution:
          "Orchestrated tab capture via getMediaStreamId and an offscreen RecordRTC document that uploads the recording for processing.",
      },
      {
        title: "Multi-language meetings",
        problem:
          "Mixed-language conversations need accurate English transcripts teams can actually search.",
        solution:
          "Used Whisper translations for English output, then GPT-4o mini sentence correction for clarity without losing meaning.",
      },
      {
        title: "Grounded meeting chat",
        problem:
          "Generic LLM answers can invent details that never happened in the meeting.",
        solution:
          "Ground every reply in transcript, notes, tasks, and prior chat history before calling the model.",
      },
    ],
    faqs: [
      {
        question: "What is Meeting AI by Mohammad Haroon?",
        answer:
          "Meeting AI is a full-stack WebRTC and AI meeting platform that turns live calls and recordings into transcripts, GPT notes, tasks, and searchable conversation context.",
      },
      {
        question: "Which technologies power Meeting AI?",
        answer:
          "The stack includes React, Vite, Node.js, Express, Socket.io, Supabase, OpenAI Whisper, GPT-4o mini, and a Chrome MV3 extension for Google Meet capture.",
      },
      {
        question: "How does Meeting AI keep chatbot answers accurate?",
        answer:
          "Chat replies are grounded in the meeting transcript, generated notes, extracted tasks, and prior chat history before the model responds.",
      },
    ],
    links: [{ label: "Live Website", href: "https://meetingai.dev" }],
    image: "/projects/meeting-ai.webp",
    seoTitle: "Meeting AI Case Study | Mohammad Haroon",
    seoDescription:
      "Meeting AI by Mohammad Haroon: WebRTC meetings, Whisper transcription, GPT notes, task extraction, and org-scoped collaboration with React, Node.js, and Supabase.",
    seoKeywords: [
      "Meeting AI",
      "Mohammad Haroon",
      "AI meeting transcription",
      "WebRTC meeting app",
      "Whisper transcription",
      "Socket.io signaling",
    ],
  },
  {
    slug: "projectsphere",
    title: "ProjectSphere",
    tagline: "Multi-Tenant Project Management SaaS",
    role: "Full Stack Developer",
    category: "SaaS / Real-time",
    stack: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Stripe",
    ],
    frontend: [
      "React.js",
      "Vite",
      "@dnd-kit drag-and-drop",
      "Socket.io Client",
      "Role-based dashboards",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Stripe subscriptions",
      "Multi-tenant RBAC",
    ],
    summary:
      "Multi-tenant project management with real-time Kanban boards, collaboration tools, and Stripe subscriptions.",
    overview:
      "ProjectSphere is multi-tenant project management for organizations that each run work differently. Teams design custom Kanban columns, sync boards in real time with Socket.io, and use role-based dashboards for admins, managers, members, and clients — with Stripe plans that scale from starter teams to larger orgs.",
    about:
      "A comprehensive SaaS project management platform featuring custom Kanban templates, drag-and-drop task management, live board collaboration, five distinct role experiences, tenant isolation, and Stripe-powered subscription plans with trial flows.",
    contribution:
      "As Full Stack Developer, Mohammad Haroon delivered the MERN application structure, real-time Kanban collaboration, multi-tenant data model, role-based dashboards, and Stripe subscription flows.",
    highlights: [
      "Custom Kanban column templates per project",
      "Real-time board sync with Socket.io",
      "Drag-and-drop tasks with @dnd-kit",
      "Role-based dashboards and client portal",
      "Stripe subscription plans with free trials",
      "Organization-scoped tenant isolation",
    ],
    challenges: [
      {
        title: "Fixed workflows vs real teams",
        problem:
          "Generic To Do / In Progress / Done boards force teams to work around the tool.",
        solution:
          "Custom column templates let each project name stages, pick colors, and define its own done state.",
      },
      {
        title: "Live multi-user boards",
        problem:
          "Concurrent task moves and status changes break when clients refresh independently.",
        solution:
          "Socket.io broadcasts task moves, status updates, and presence so everyone stays on the same board.",
      },
      {
        title: "Multi-tenant isolation",
        problem:
          "SaaS data must never leak across organizations or overexposed client views.",
        solution:
          "Server-side organization scoping plus five-role RBAC, including a limited client portal.",
      },
      {
        title: "Subscription without friction",
        problem:
          "Teams need to evaluate the product before committing to paid plans.",
        solution:
          "Stripe Starter, Professional, and Business plans with 14-day trials and card capture before billing starts.",
      },
    ],
    faqs: [
      {
        question: "What is ProjectSphere?",
        answer:
          "ProjectSphere is a multi-tenant project management SaaS with custom Kanban boards, Socket.io real-time sync, role-based dashboards, and Stripe subscriptions.",
      },
      {
        question: "Who built ProjectSphere?",
        answer:
          "ProjectSphere was built by Mohammad Haroon as a full-stack MERN product with React, Node.js, Express, MongoDB, Socket.io, and Stripe.",
      },
      {
        question: "How does ProjectSphere handle multiple organizations?",
        answer:
          "Queries are scoped by organization on the server, with five roles and a limited client portal so tenant data stays isolated.",
      },
    ],
    links: [{ label: "Live Website", href: "https://ml-sphere.vercel.app" }],
    image: "/projects/projectsphere.png",
    seoTitle: "ProjectSphere SaaS Case Study | Mohammad Haroon",
    seoDescription:
      "ProjectSphere by Mohammad Haroon: multi-tenant MERN project management with custom Kanban boards, Socket.io real-time sync, and Stripe subscriptions.",
    seoKeywords: [
      "ProjectSphere",
      "Mohammad Haroon",
      "multi-tenant project management",
      "real-time Kanban",
      "Socket.io",
      "Stripe SaaS",
    ],
  },
  {
    slug: "medmatch-ai",
    title: "MedMatch AI",
    tagline: "Heart Disease Risk Prediction System",
    role: "Full Stack & ML Developer",
    category: "ML / Healthcare",
    stack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Random Forest",
    ],
    frontend: ["React 18", "Vite", "Tailwind CSS", "Axios", "Patient intake UI"],
    backend: [
      "FastAPI",
      "Uvicorn",
      "Pydantic",
      "Pandas",
      "scikit-learn Random Forest",
      "joblib model artifacts",
      "Rule-based recommend.py",
    ],
    summary:
      "AI-powered healthcare app that predicts heart disease risk and generates personalized recommendations.",
    overview:
      "MedMatch AI is an educational heart disease risk assessment app. Users submit clinical features in a React form; a FastAPI backend scores risk with a Random Forest model and returns urgency, doctor advice, and lifestyle tips from rule-based logic. It demonstrates ML serving end to end and is not a medical device for real clinical decisions.",
    about:
      "An AI-powered healthcare demo that analyzes patient health indicators to predict heart disease risk and generate personalized recommendations. The Random Forest pipeline and FastAPI inference layer report strong held-out performance (about 81.5% accuracy and 0.914 ROC-AUC in project documentation). Educational use only — not for clinical diagnosis.",
    contribution:
      "As Full Stack & ML Developer, Mohammad Haroon built the React intake UI, FastAPI inference API, Random Forest training pipeline, and rule-based recommendation layer.",
    highlights: [
      "Patient health indicator intake form",
      "Random Forest risk prediction API",
      "Urgency, doctor advice, and lifestyle tips",
      "Train/export/load model artifact workflow",
      "81.5% accuracy and 0.914 ROC-AUC (project-reported)",
      "Clear educational / non-clinical disclaimer",
    ],
    challenges: [
      {
        title: "Feature alignment at inference",
        problem:
          "One-hot encoded columns must match the exact training schema or predictions break.",
        solution:
          "Persist feature_columns.pkl and align request features before scaling and scoring.",
      },
      {
        title: "Explainable recommendations",
        problem:
          "A raw probability alone does not tell a user what to do next.",
        solution:
          "Keep recommendations rule-based so each tip maps to concrete inputs such as cholesterol or blood pressure thresholds.",
      },
      {
        title: "Local full-stack DX",
        problem:
          "Vite and FastAPI run on different ports and need safe cross-origin calls.",
        solution:
          "CORS-enabled FastAPI endpoints for local Vite development with /health and /predict.",
      },
      {
        title: "Educational safety",
        problem:
          "Health demos can be mistaken for clinical tools.",
        solution:
          "Ship an explicit disclaimer that MedMatch AI is educational and not a medical device.",
      },
    ],
    faqs: [
      {
        question: "What is MedMatch AI?",
        answer:
          "MedMatch AI is an educational React and FastAPI app that scores heart disease risk with a Random Forest model and returns urgency plus lifestyle guidance.",
      },
      {
        question: "Is MedMatch AI a medical device?",
        answer:
          "No. MedMatch AI is an educational demo by Mohammad Haroon and must not be used for real clinical decisions.",
      },
      {
        question: "What stack does MedMatch AI use?",
        answer:
          "React, Vite, Tailwind CSS, FastAPI, scikit-learn Random Forest, and joblib model artifacts trained on UCI/Kaggle heart-disease data.",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ImMohammadHaroon/MedMatch-ai",
      },
    ],
    image: "/projects/medmatch-ai.png",
    seoTitle: "MedMatch AI ML Case Study | Mohammad Haroon",
    seoDescription:
      "MedMatch AI by Mohammad Haroon: React + FastAPI heart disease risk classifier with Random Forest scoring and rule-based clinical guidance.",
    seoKeywords: [
      "MedMatch AI",
      "Mohammad Haroon",
      "heart disease risk prediction",
      "Random Forest FastAPI",
      "scikit-learn",
      "React Vite Tailwind",
    ],
  },
  {
    slug: "owlance-ai",
    title: "Owlance AI",
    tagline: "AI-Powered Freelancing Assistant",
    role: "Full Stack Developer",
    category: "AI / SaaS",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "OpenAI",
    ],
    frontend: [
      "Next.js 15 App Router",
      "React 19",
      "Tailwind CSS 4",
      "react-markdown",
      "lucide-react",
    ],
    backend: [
      "Next.js server/API layer",
      "Supabase Postgres",
      "OpenAI SDK",
      "Project Memory catalog",
      "Vercel hosting",
    ],
    summary:
      "SaaS assistant that helps freelancers manage and grow their Fiverr businesses with AI.",
    overview:
      "Owlance AI is a Fiverr business and growth assistant with five playbook-backed modules for replies, rewriting, requirement analysis, proposals, and gig creation. Project Memory imports verified work so assistants can draft from real project evidence instead of generic claims.",
    about:
      "An AI-powered SaaS platform designed to help freelancers manage and grow their Fiverr businesses. Features include intelligent client reply generation, professional message rewriting, client requirement analysis, Fiverr brief analysis, proposal writing, SEO-oriented gig creation, and a Project Memory layer backed by Supabase.",
    contribution:
      "As Full Stack Developer, Mohammad Haroon built the Next.js App Router product, Supabase data layer, OpenAI assistant modules, and Project Memory workflow for verified portfolio context.",
    highlights: [
      "Five specialized freelance assistants",
      "Per-module chat history",
      "Project Memory for verified portfolio context",
      "Proposal and gig drafting workflows",
      "Supabase-backed persistence",
      "Markdown-rendered assistant output",
    ],
    challenges: [
      {
        title: "Scattered freelance workflows",
        problem:
          "Replies, briefs, proposals, and gigs usually live in disconnected docs and chats.",
        solution:
          "Five module assistants with saved chats per workflow inside one product shell.",
      },
      {
        title: "Generic AI proposals",
        problem:
          "Model output without project proof sounds hollow to clients.",
        solution:
          "Project Memory imports a verified catalog assistants can reference while drafting.",
      },
      {
        title: "Durable SaaS data",
        problem:
          "Chats and projects need reliable storage across sessions.",
        solution:
          "Supabase Postgres with SSR-friendly client packages for auth and persistence.",
      },
      {
        title: "Readable long-form answers",
        problem:
          "Proposal and gig drafts need structure, not plain walls of text.",
        solution:
          "Render assistant output with react-markdown and GFM support.",
      },
    ],
    faqs: [
      {
        question: "What is Owlance AI?",
        answer:
          "Owlance AI is a Next.js Fiverr growth assistant by Mohammad Haroon with modules for replies, rewriting, briefs, proposals, and gig creation.",
      },
      {
        question: "How does Project Memory help freelancers?",
        answer:
          "Project Memory stores verified projects so assistants can draft proposals and gigs from real work instead of generic claims.",
      },
      {
        question: "What technologies does Owlance AI use?",
        answer:
          "Next.js 15, React 19, Tailwind CSS, Supabase Postgres, and the OpenAI SDK, deployed on Vercel.",
      },
    ],
    links: [
      { label: "Live Website", href: "https://owlance-ai.vercel.app/" },
      {
        label: "GitHub",
        href: "https://github.com/ImMohammadHaroon/Owlance-AI",
      },
    ],
    image: "/projects/owlance-ai.png",
    seoTitle: "Owlance AI Case Study | Mohammad Haroon",
    seoDescription:
      "Owlance AI by Mohammad Haroon: Next.js Fiverr growth assistant with client replies, proposals, gig SEO, Project Memory, Supabase, and OpenAI.",
    seoKeywords: [
      "Owlance AI",
      "Mohammad Haroon",
      "Fiverr AI assistant",
      "freelance growth SaaS",
      "Next.js Supabase OpenAI",
    ],
  },
  {
    slug: "foncentra",
    title: "Foncentra",
    tagline: "E-Learning & Digital Publishing Platform",
    role: "WordPress Developer",
    category: "E-commerce / WordPress",
    stack: [
      "WordPress",
      "PHP",
      "Custom Theme",
      "GSAP",
      "MySQL",
      "SEO",
    ],
    frontend: [
      "WordPress custom theme",
      "GSAP + ScrollTrigger",
      "HTML5 / CSS3 / JavaScript",
      "Mobile-first responsive UI",
      "Reading UX + dark mode",
    ],
    backend: [
      "WordPress / PHP",
      "MySQL",
      "Advanced Custom Fields",
      "Custom post types",
      "WP Rocket + Cloudflare",
    ],
    summary:
      "Fully responsive, SEO-minded digital reading platform for blogs, articles, and eBooks.",
    overview:
      "Foncentra is a WordPress digital reading and e-learning platform for blogs, articles, and eBooks. A custom theme and GSAP motion create a polished, mobile-first reading experience focused on productivity and personal growth content discovery.",
    about:
      "A responsive, SEO-minded digital publishing website built for blogs, articles, and eBooks. The custom WordPress theme emphasizes intuitive navigation, comfortable reading layouts, GSAP-powered motion, and performance-conscious delivery across devices.",
    contribution:
      "As WordPress Developer, Mohammad Haroon built the custom theme experience, content architecture for blogs/articles/eBooks, GSAP motion, and SEO-minded publishing structure.",
    highlights: [
      "Custom WordPress theme for publishing workflows",
      "GSAP scroll and page-transition motion",
      "Custom post types for blogs, articles, and eBooks",
      "Mobile-first reading experience",
      "SEO-focused structure and content architecture",
      "Caching and CDN-minded performance stack",
    ],
    challenges: [
      {
        title: "Engagement without overwhelm",
        problem:
          "Educational sites often feel dense and hard to stay with.",
        solution:
          "Progressive GSAP reveals, clear hierarchy, and distraction-light reading layouts.",
      },
      {
        title: "Mixed content discovery",
        problem:
          "Blogs, articles, and eBooks need different browsing patterns.",
        solution:
          "Custom post types, categories/tags, and a dedicated eBook library experience.",
      },
      {
        title: "Cross-device reading comfort",
        problem:
          "Long-form content breaks down on small screens and bright themes.",
        solution:
          "Fluid typography, adaptive layouts, touch-friendly navigation, and optional dark mode.",
      },
      {
        title: "Performance with motion and media",
        problem:
          "Animation and large files can hurt load times and interaction quality.",
        solution:
          "Caching, CDN delivery, lazy loading, and device-aware animation choices.",
      },
    ],
    faqs: [
      {
        question: "What is Foncentra?",
        answer:
          "Foncentra is a WordPress digital reading and e-learning platform for blogs, articles, and eBooks, built by Mohammad Haroon with a custom theme and GSAP motion.",
      },
      {
        question: "Which technologies does Foncentra use?",
        answer:
          "WordPress, PHP, MySQL, a custom theme, Advanced Custom Fields, GSAP/ScrollTrigger, plus caching and CDN-minded performance tooling.",
      },
      {
        question: "Is Foncentra mobile-friendly?",
        answer:
          "Yes. The reading experience was designed mobile-first with fluid typography, adaptive layouts, and touch-friendly navigation.",
      },
    ],
    links: [{ label: "Live Website", href: "https://foncentra.com" }],
    image: "/projects/foncentra.webp",
    seoTitle: "Foncentra WordPress Case Study | Mohammad Haroon",
    seoDescription:
      "Foncentra by Mohammad Haroon: WordPress e-learning and digital publishing with a custom theme, GSAP motion, and mobile-first reading UX.",
    seoKeywords: [
      "Foncentra",
      "Mohammad Haroon",
      "WordPress e-learning",
      "digital eBook store",
      "GSAP WordPress theme",
    ],
  },
  {
    slug: "aperture-futures",
    title: "Aperture Futures",
    tagline: "UN Security Council Intelligence Platform",
    role: "Frontend Developer",
    category: "Frontend / AI Product",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Responsive UI",
      "Component Design",
      "Vite",
    ],
    frontend: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Axios / React Query",
      "Reusable component system",
    ],
    backend: [
      "Python Flask (product context)",
      "LangChain + OpenAI RAG (product context)",
      "Vector database (product context)",
      "PostgreSQL + Redis (product context)",
    ],
    summary:
      "Frontend contribution focused on responsive interfaces, reusable components, and UX polish for an AI diplomacy platform.",
    overview:
      "Aperture Futures is an AI platform for UN Security Council intelligence with BlueLines, LiveLines, and CrossLines product surfaces. This portfolio case study focuses on frontend contribution: responsive React interfaces, reusable components, and UX polish for professionals who need fast, trustworthy access to dense diplomatic information.",
    about:
      "Contributed to the frontend of Aperture Futures, building responsive user interfaces, reusable components, and modern layouts across product surfaces for resolution research, meeting intelligence, and negotiation workflows. The broader product uses a RAG architecture; the highlighted ownership here is the React frontend experience.",
    contribution:
      "As Frontend Developer, Mohammad Haroon focused on responsive React interfaces, reusable components, modern layouts, and cross-device UX polish across BlueLines, LiveLines, and CrossLines product surfaces.",
    highlights: [
      "Responsive React interfaces across product surfaces",
      "Reusable frontend components and layout systems",
      "UX polish for dense diplomatic information",
      "Cross-device experience improvements",
      "UI patterns aligned with source-attributed AI answers",
    ],
    challenges: [
      {
        title: "Dense intelligence UX",
        problem:
          "Diplomatic users need speed and clarity without interface clutter.",
        solution:
          "Clean professional layouts, strong visual hierarchy, and reusable components for search and document viewing.",
      },
      {
        title: "Cross-device access",
        problem:
          "Stakeholders work from offices, conferences, and field locations.",
        solution:
          "Responsive breakpoints and touch-friendly navigation across screen sizes.",
      },
      {
        title: "Trust in AI surfaces",
        problem:
          "Users need to verify sources, not accept opaque generated answers.",
        solution:
          "Frontend patterns that support citations, references, and verification-friendly reading.",
      },
      {
        title: "One system, three products",
        problem:
          "BlueLines, LiveLines, and CrossLines must feel like one product family.",
        solution:
          "Shared component language and consistent navigation/layout patterns.",
      },
    ],
    faqs: [
      {
        question: "What is Aperture Futures?",
        answer:
          "Aperture Futures is an AI platform for UN Security Council intelligence with BlueLines, LiveLines, and CrossLines product surfaces.",
      },
      {
        question: "What did Mohammad Haroon contribute?",
        answer:
          "Frontend development: responsive React UI, reusable components, modern layouts, and cross-device UX polish.",
      },
      {
        question: "Which frontend technologies were used?",
        answer:
          "React, Vite, Tailwind CSS, React Router, and Axios/React Query patterns for product navigation and data views.",
      },
    ],
    links: [
      { label: "Live Website", href: "https://www.aperturefutures.com/" },
    ],
    image: "/projects/aperture-futures.webp",
    seoTitle: "Aperture Futures Frontend Case Study | Mohammad Haroon",
    seoDescription:
      "Aperture Futures frontend work by Mohammad Haroon: responsive React UI for a UNSC intelligence platform with reusable components and cross-device UX.",
    seoKeywords: [
      "Aperture Futures",
      "Mohammad Haroon",
      "React frontend developer",
      "UN Security Council AI",
      "responsive React components",
    ],
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
