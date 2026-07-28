export type SkillGroup = {
    name: string;
    kicker: string;
    desc: string;
    icon: string;
    items: string[];
    /** Full class strings — Tailwind needs them literal, never templated. */
    accent: {
        text: string;
        bg: string;
        border: string;
        gradient: string;
    };
    /** Layout weight in the bento grid. */
    colSpan: string;
};

export const skillGroups: SkillGroup[] = [
    {
        name: "Frontend",
        kicker: "Interface",
        desc: "Server-rendered React applications with typed data flow, accessible components and layouts that hold from 360px to ultrawide.",
        icon: "⚡",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
        accent: {
            text: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/25",
            gradient: "from-blue-500 to-cyan-400",
        },
        colSpan: "lg:col-span-2",
    },
    {
        name: "Backend",
        kicker: "Services",
        desc: "REST APIs with validation at the boundary, token auth, rate limiting and hardened headers by default.",
        icon: "⚙️",
        items: ["Node.js", "Express", "REST APIs", "JWT & bcrypt", "Zod", "Server Actions"],
        accent: {
            text: "text-indigo-400",
            bg: "bg-indigo-500/10",
            border: "border-indigo-500/25",
            gradient: "from-indigo-500 to-violet-400",
        },
        colSpan: "lg:col-span-1",
    },
    {
        name: "Databases & Caching",
        kicker: "Persistence",
        desc: "Relational and document stores, with Redis in front for sessions, hot reads and rate-limit counters.",
        icon: "🗄️",
        items: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "Mongoose", "SQL"],
        accent: {
            text: "text-rose-400",
            bg: "bg-rose-500/10",
            border: "border-rose-500/25",
            gradient: "from-rose-500 to-orange-400",
        },
        colSpan: "lg:col-span-1",
    },
    {
        name: "Containers & Orchestration",
        kicker: "Runtime",
        desc: "Multi-stage Docker images and compose stacks locally; Kubernetes deployments, services and config for scaled-out workloads.",
        icon: "🐳",
        items: ["Docker", "docker compose", "Kubernetes", "Nginx", "Multi-stage builds", "Health checks"],
        accent: {
            text: "text-sky-400",
            bg: "bg-sky-500/10",
            border: "border-sky-500/25",
            gradient: "from-sky-400 to-blue-500",
        },
        colSpan: "lg:col-span-2",
    },
    {
        name: "CI/CD & Deployment",
        kicker: "Delivery",
        desc: "GitHub Actions pipelines that lint, test and build on every push, with Vercel handling preview and production promotion.",
        icon: "🚀",
        items: ["GitHub Actions", "Vercel", "Preview deploys", "Environment secrets", "Automated builds"],
        accent: {
            text: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/25",
            gradient: "from-emerald-400 to-teal-300",
        },
        colSpan: "lg:col-span-2",
    },
    {
        name: "Testing & Quality",
        kicker: "Confidence",
        desc: "Unit coverage plus real-browser end-to-end runs, gated in CI so regressions stop before production.",
        icon: "🧪",
        items: ["Playwright", "Vitest", "Testing Library", "ESLint", "Type safety"],
        accent: {
            text: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "border-amber-500/25",
            gradient: "from-amber-400 to-orange-400",
        },
        colSpan: "lg:col-span-1",
    },
];

/** Flat marquee list — short labels only. */
export const techMarquee = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Supabase",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Vercel",
    "Nginx",
    "Tailwind CSS",
    "Playwright",
];

export const stats = [
    { value: "4", label: "Live products" },
    { value: "25+", label: "Shipped modules" },
    { value: "Full", label: "Stack coverage" },
    { value: "CI/CD", label: "On every push" },
];

export const capabilities = [
    {
        title: "Ship the whole slice",
        desc: "Schema, API, interface and pipeline — I take a feature from migration to production URL without handing it off.",
        icon: "🧭",
    },
    {
        title: "Build for the second year",
        desc: "Typed boundaries, seeded environments and tests exist so the codebase is still workable long after the first release.",
        icon: "🧱",
    },
    {
        title: "Automate the boring part",
        desc: "Containerised builds and GitHub Actions mean deploys are a push, not a checklist someone has to remember.",
        icon: "🤖",
    },
];
