export const PERSONAL_INFO = {
  name: "Sk Ashadul Hossain",
  roleTitle: "Frontend Developer & Visual Designer",
  bio: "Frontend Developer, UI/UX Designer, Graphic Designer & Video Editor crafting high-performance, aesthetically pleasing web apps and visual stories.",
  location: "Kolkata, India / Remote",
  email: "ashadul.dev@gmail.com",
  phone: "+91 98765 43210",
  whatsapp: "https://wa.me/919876543210",
  github: "https://github.com/sk-ashadul",
  linkedin: "https://linkedin.com/in/sk-ashadul-hossain",
  twitter: "https://twitter.com/ashadul_design",
  behance: "https://behance.net/ashadul",
  calendly: "https://calendly.com",
  experienceYears: "3+",
  projectsCompleted: "25+",
  satisfiedClients: "100%",
  resumeUrl: "#"
};

export const SKILLS_DATA = [
  // Frontend
  { name: "React 19 / Next.js", category: "frontend", level: 95, icon: "Code2", highlight: true },
  { name: "JavaScript / TypeScript", category: "frontend", level: 92, icon: "FileCode", highlight: true },
  { name: "Tailwind CSS v4", category: "frontend", level: 96, icon: "Palette", highlight: true },
  { name: "Framer Motion / Motion", category: "frontend", level: 90, icon: "Sparkles", highlight: true },
  { name: "HTML5 / CSS3 / SCSS", category: "frontend", level: 98, icon: "Layout" },
  { name: "Redux Toolkit / Zustand", category: "frontend", level: 88, icon: "Database" },
  { name: "REST APIs & GraphQL", category: "frontend", level: 85, icon: "Globe" },
  { name: "Three.js / React Three Fiber", category: "frontend", level: 78, icon: "Box" },

  // UI/UX Design
  { name: "Figma (Design Systems)", category: "uiux", level: 94, icon: "Figma", highlight: true },
  { name: "Wireframing & Prototyping", category: "uiux", level: 92, icon: "LayoutTemplate", highlight: true },
  { name: "User Research & Testing", category: "uiux", level: 86, icon: "Search" },
  { name: "Design System Tokens", category: "uiux", level: 90, icon: "Layers" },

  // Graphic Design
  { name: "Adobe Photoshop", category: "graphic", level: 92, icon: "Image", highlight: true },
  { name: "Adobe Illustrator", category: "graphic", level: 90, icon: "PenTool", highlight: true },
  { name: "Brand Identity & Logos", category: "graphic", level: 88, icon: "Sparkle" },
  { name: "Banner & Poster Design", category: "graphic", level: 94, icon: "FileImage" },

  // Video Editing
  { name: "Adobe Premiere Pro", category: "video", level: 90, icon: "Video", highlight: true },
  { name: "Adobe After Effects", category: "video", level: 85, icon: "Film", highlight: true },
  { name: "Color Grading & FX", category: "video", level: 84, icon: "Sliders" },
  { name: "Motion Graphics", category: "video", level: 86, icon: "Clapperboard" },

  // Tools & Cloud
  { name: "Git / GitHub", category: "tools", level: 94, icon: "GitBranch" },
  { name: "Vercel / Netlify", category: "tools", level: 92, icon: "Cloud" },
  { name: "Docker Basic", category: "tools", level: 75, icon: "Container" },
  { name: "Vite / Webpack", category: "tools", level: 90, icon: "Zap" }
];

export const PROJECTS_DATA = [
  {
    id: "project-1",
    title: "NovaCloud — Enterprise SaaS Analytics Dashboard",
    category: "web",
    tag: "Web Application",
    description: "Real-time cloud infrastructure monitoring platform built with React 19, Tailwind CSS, Recharts, and WebSockets.",
    fullDescription: "NovaCloud is an end-to-end cloud monitoring solution providing DevOps teams with real-time cluster metrics, automated alert rules, and interactive graph telemetry. Designed with dark-mode first glassmorphism aesthetics and 60fps animations.",
    techStack: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "Recharts", "Zustand"],
    liveUrl: "https://example.com/novacloud",
    githubUrl: "https://github.com/sk-ashadul/novacloud-dashboard",
    featured: true,
    imageBg: "from-blue-600 to-indigo-900",
    metrics: { speed: "99/100", users: "10k+", latency: "<40ms" }
  },
  {
    id: "project-2",
    title: "Aura Design System & Component Library",
    category: "uiux",
    tag: "UI/UX & Design System",
    description: "Comprehensive Figma design system with 200+ accessible UI components, dark mode variants, and React counterpart tokens.",
    fullDescription: "Created to streamline workflow across product teams, Aura features auto-layout 5.0 components, WCAG AAA compliant color scales, fluid typography scales, and interactive prototyping specs.",
    techStack: ["Figma", "Design Tokens", "React", "Radix UI", "Tailwind CSS"],
    liveUrl: "https://example.com/aura-ui",
    githubUrl: "https://github.com/sk-ashadul/aura-design-system",
    featured: true,
    imageBg: "from-teal-500 to-emerald-900",
    metrics: { components: "200+", adoption: "95%", accessibility: "AAA" }
  },
  {
    id: "project-3",
    title: "CyberPulse 2026 — Gaming League Motion Showreel",
    category: "video",
    tag: "Video Editing & VFX",
    description: "High-octane esports tournament promo video featuring custom 3D text reveals, kinetic typography, and synchronized sound design.",
    fullDescription: "Edited using Adobe Premiere Pro and After Effects for CyberPulse International Tournament. Includes 3D camera tracking, dynamic speed ramps, custom sound effects mixing, and color grading.",
    techStack: ["Adobe Premiere Pro", "After Effects", "Plugins & VFX", "Audition"],
    liveUrl: "https://youtube.com",
    githubUrl: "#",
    featured: true,
    imageBg: "from-amber-500 to-red-900",
    metrics: { views: "250K+", retention: "88%", resolution: "4K 60fps" }
  },
  {
    id: "project-4",
    title: "Verve Market — Modern E-Commerce Platform",
    category: "web",
    tag: "E-Commerce App",
    description: "Fast multi-vendor shopping portal featuring instant product filter search, cart state management, and Stripe checkout integration.",
    fullDescription: "Built for speed and conversion. Features optimistic UI updates, multi-currency support, responsive layout grid, and sub-second page loads.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "Zustand"],
    liveUrl: "https://example.com/verve",
    githubUrl: "https://github.com/sk-ashadul/verve-ecommerce",
    featured: false,
    imageBg: "from-purple-600 to-slate-900",
    metrics: { lighthouse: "100", sales: "+40%" }
  },
  {
    id: "project-5",
    title: "Luminary Brand Identity & Marketing Suite",
    category: "graphic",
    tag: "Graphic & Brand Design",
    description: "Brand identity project including logo vector geometry, social media visual assets, typography guidelines, and packaging mockup.",
    fullDescription: "Complete visual redesign for Luminary Tech Studio, incorporating minimalist typography, vibrant gradient palettes, vector iconography, and marketing collateral.",
    techStack: ["Adobe Illustrator", "Photoshop", "Figma", "InDesign"],
    liveUrl: "https://behance.net",
    githubUrl: "#",
    featured: false,
    imageBg: "from-pink-500 to-purple-900",
    metrics: { assets: "50+", rating: "5.0 ★" }
  },
  {
    id: "project-6",
    title: "Zenith Portfolio & Creative Studio",
    category: "web",
    tag: "3D Portfolio",
    description: "Interactive 3D agency website featuring WebGL floating mesh, page transitions, and smooth Lenis scrolling.",
    fullDescription: "Experimental 3D portfolio exploring WebGL capabilities, smooth scroll physics, custom magnetic cursors, and multilingual URL routing.",
    techStack: ["React 19", "Three.js", "Framer Motion", "GSAP", "Tailwind"],
    liveUrl: "https://example.com/zenith",
    githubUrl: "https://github.com/sk-ashadul/zenith-studio",
    featured: false,
    imageBg: "from-blue-700 to-teal-900",
    metrics: { fps: "60fps", awards: "Nominee" }
  }
];

export const SERVICES_DATA = [
  {
    id: "serv-1",
    title: "Frontend Web Development",
    icon: "Code2",
    description: "Building responsive, ultra-fast, modern single-page applications and Next.js platforms with clean React architecture.",
    features: ["React 19 / Next.js Setup", "Tailwind CSS v4 Styling", "State Management (Zustand/Redux)", "API & Backend Integration", "Sub-second Page Load Speed"]
  },
  {
    id: "serv-2",
    title: "UI/UX & Product Design",
    icon: "Figma",
    description: "Creating wireframes, interactive Figma prototypes, and complete design systems that convert visitors into loyal users.",
    features: ["Figma Interactive Prototypes", "Design System Architecture", "User Journey & Wireframing", "Mobile First & Responsive Layouts", "Accessibility (WCAG Compliant)"]
  },
  {
    id: "serv-3",
    title: "Graphic Design & Branding",
    icon: "Palette",
    description: "Crafting distinct visual identities, logos, social media marketing kits, and high-converting marketing materials.",
    features: ["Logo Geometry & Guidelines", "Social Media Banners & Graphics", "Marketing Pitch Decks", "Vector Asset Illustrations", "Print Ready Designs"]
  },
  {
    id: "serv-4",
    title: "Video Editing & Motion FX",
    icon: "Video",
    description: "Editing promotional reels, YouTube videos, and motion graphics with professional color grading and sound design.",
    features: ["4K Video Editing & Cutting", "Motion Graphics & Kinetic Text", "Color Grading & Cinematic FX", "Audio Noise Clean & Mixing", "Short Form Reel / Shorts Optimization"]
  }
];

export const EXPERIENCE_DATA = [
  {
    type: "work",
    period: "2024 — Present",
    role: "Senior Frontend Developer & UI Designer",
    company: "Apex Digital Solutions",
    location: "Remote",
    description: "Leading frontend architecture for client web applications using React, Next.js, and Tailwind CSS. Designing responsive UI component libraries in Figma.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma", "Zustand"]
  },
  {
    type: "work",
    period: "2023 — 2024",
    role: "Frontend Engineer & Graphic Specialist",
    company: "Vanguard Tech Studio",
    location: "Kolkata, IN",
    description: "Developed interactive customer dashboards, reduced web bundle size by 35%, and edited high-engagement video promotional campaigns.",
    technologies: ["JavaScript", "React", "Framer Motion", "Photoshop", "Premiere Pro"]
  },
  {
    type: "work",
    period: "2022 — 2023",
    role: "UI/UX & Multimedia Developer",
    company: "PixelCraft Media",
    location: "Freelance",
    description: "Delivered 15+ freelance web and design projects for global clients across e-commerce, SaaS, and creative agencies.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "Illustrator"]
  },
  {
    type: "education",
    period: "2019 — 2023",
    role: "Bachelor of Technology in Computer Science & Engineering",
    company: "Maulana Abul Kalam Azad University of Technology",
    location: "West Bengal, India",
    description: "Focused on Software Engineering, Data Structures, Web Technologies, and Human-Computer Interaction.",
    technologies: ["Software Engineering", "Algorithms", "Web Dev", "DBMS"]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: "test-1",
    name: "David Miller",
    role: "CTO at CloudVibe Inc.",
    content: "Ashadul is an extraordinary frontend engineer. He delivered our SaaS dashboard 2 weeks ahead of schedule with flawless 60fps animations and responsive UI.",
    avatar: "DM",
    rating: 5
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    role: "Product Lead at DesignX Agency",
    content: "His ability to bridge the gap between Figma designs and production code is rare. The UI components he created were pixel-perfect and immensely clean.",
    avatar: "SJ",
    rating: 5
  },
  {
    id: "test-3",
    name: "Rahim Al-Mansoor",
    role: "Founder at MediaPulse Dubai",
    content: "We hired Ashadul for both frontend development and video editing for our product launch. His motion graphics and web app quality blew us away!",
    avatar: "RM",
    rating: 5
  }
];

export const CERTIFICATIONS_DATA = [
  {
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Coursera / Meta",
    date: "2024",
    credentialId: "META-FE-98421",
    link: "#"
  },
  {
    title: "Advanced React & Web Performance",
    issuer: "Frontend Masters",
    date: "2023",
    credentialId: "FM-REACT-7741",
    link: "#"
  },
  {
    title: "UI/UX Design Specialization",
    issuer: "California Institute of the Arts",
    date: "2023",
    credentialId: "CALARTS-UX-4410",
    link: "#"
  }
];

export const BLOGS_DATA = [
  {
    id: "blog-1",
    title: "Building Micro-Animations with Framer Motion in React 19",
    category: "Development",
    readTime: "5",
    date: "Aug 2026",
    summary: "Discover how subtle motion and spring physics can elevate your web application user experience without degrading performance.",
    content: "Micro-animations serve as visual cues that orient users, confirm actions, and create delight..."
  },
  {
    id: "blog-2",
    title: "The Art of Design Tokens: Bridging Figma and Tailwind CSS v4",
    category: "Design System",
    readTime: "7",
    date: "Jul 2026",
    summary: "A practical guide to synchronizing color variables, spacing scales, and typography between Figma styles and Tailwind v4 config.",
    content: "Maintaining consistency between product design and engineering codebases has historically been challenging..."
  },
  {
    id: "blog-3",
    title: "10 Pro Tips for High-Converting Video Editing & Motion Graphics",
    category: "Video & Motion",
    readTime: "6",
    date: "Jun 2026",
    summary: "Key pacing techniques, sound design secrets, and typography rules for creating viral short-form and promo videos.",
    content: "In modern visual media, the first 3 seconds dictate user retention..."
  }
];

export const GALLERY_DATA = [
  { id: 1, title: "Abstract Mesh Graphic", type: "graphic", aspect: "square", color: "from-blue-600 to-indigo-900" },
  { id: 2, title: "Cyberpunk UI Design", type: "uiux", aspect: "wide", color: "from-teal-600 to-emerald-900" },
  { id: 3, title: "Esports Video Reel Thumbnail", type: "video", aspect: "wide", color: "from-purple-600 to-pink-900" },
  { id: 4, title: "Minimalist Brand Logo Guidelines", type: "graphic", aspect: "square", color: "from-amber-600 to-red-900" },
  { id: 5, title: "Mobile Banking App Prototype", type: "uiux", aspect: "square", color: "from-blue-500 to-cyan-800" },
  { id: 6, title: "Cinematic Color Grading Still", type: "video", aspect: "wide", color: "from-slate-700 to-slate-950" }
];
