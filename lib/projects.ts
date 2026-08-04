export type ProjectStatus = "Live" | "Active Development" | "Archived";

export type Project = {
    slug: string;
    name: string;
    tagline: string;
    /** One-paragraph pitch used on the projects index. */
    summary: string;
    /** Longer narrative shown at the top of the detail page. */
    overview: string;
    year: string;
    role: string;
    status: ProjectStatus;
    featured: boolean;
    liveUrl?: string;
    repoUrl?: string;
    /** Full class strings — never build these dynamically, Tailwind needs them literal. */
    accent: {
        text: string;
        bg: string;
        border: string;
        glow: string;
        gradient: string;
    };
    /** Short chips rendered on cards. */
    tags: string[];
    metrics: { label: string; value: string }[];
    stack: { group: string; items: string[] }[];
    modules: { title: string; desc: string; icon: string }[];
    features: string[];
    engineering: { title: string; desc: string }[];
    screenshots?: { src: string; alt: string }[];
};

export const projects: Project[] = [
    {
        slug: "campusflow",
        name: "CampusFlow",
        tagline: "Multi-campus ERP & operations dashboard",
        summary:
            "A 25-module campus operating system covering admissions, finance, HR, hostel, transport and examinations — built for institutions running several schools under one roof.",
        overview:
            "CampusFlow is the largest system I maintain: a multi-tenant ERP where a single control plane governs many campuses. Every department — admissions, academics, finance, HR, hostel, library, transport — gets a dedicated module, but they share one identity layer, one permission model and one audit trail. Live GPS bus tracking, QR-based campus scanning and transactional email are wired directly into the same data model, so an action taken in one module immediately reflects everywhere else.",
        year: "2026",
        role: "Full-stack engineer — architecture, backend, UI, deployment",
        status: "Active Development",
        featured: true,
        liveUrl: "https://campusflow-dashboard.vercel.app",
        accent: {
            text: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/25",
            glow: "group-hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.45)]",
            gradient: "from-blue-500 to-cyan-400",
        },
        tags: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL", "Docker", "Vercel"],
        metrics: [
            { label: "Modules", value: "25+" },
            { label: "Role tiers", value: "6" },
            { label: "Data layer", value: "Postgres" },
            { label: "Test suites", value: "Vitest + Playwright" },
        ],
        stack: [
            { group: "Frontend", items: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "Radix UI"] },
            { group: "Data", items: ["Supabase", "PostgreSQL", "TanStack Query", "Zod"] },
            { group: "Backend", items: ["Next.js API routes", "JWT auth", "Row-level security", "Resend"] },
            { group: "Platform", items: ["Docker", "Vercel", "GitHub Actions", "Cloudinary"] },
            { group: "Quality", items: ["Playwright", "Vitest", "Testing Library", "ESLint"] },
        ],
        modules: [
            { title: "Admissions", desc: "Application intake, approval chains, document capture and enrolment conversion.", icon: "🎓" },
            { title: "Finance", desc: "Fee structures, invoicing, concessions, receipts, ledgers and revenue reporting.", icon: "💳" },
            { title: "Attendance & Exams", desc: "Daily attendance, QR check-in, exam scheduling, grading and published results.", icon: "📝" },
            { title: "HR & Staff", desc: "Employee records, payroll inputs, leave, workload and role assignment.", icon: "🧑‍🏫" },
            { title: "Hostel & Library", desc: "Room allocation, occupancy, issue/return tracking and inventory.", icon: "🏛️" },
            { title: "Live Transport", desc: "Route planning plus real-time bus tracking on interactive Leaflet maps.", icon: "🚌" },
        ],
        features: [
            "Multi-school tenancy from a single control plane",
            "Granular roles & permissions with audit logging",
            "QR scanning for attendance and campus access",
            "Real-time GPS bus tracking on live maps",
            "Transactional email + in-app notification pipeline",
            "Excel import/export across every data module",
            "Student portal with results, notices and timetable",
            "Dark/light theming across the entire surface",
        ],
        engineering: [
            {
                title: "Containerised builds",
                desc: "A multi-stage Dockerfile produces a lean runtime image, so local, CI and production all execute the exact same artifact.",
            },
            {
                title: "Typed end-to-end",
                desc: "Zod schemas validate at the boundary and feed TypeScript types inward, which keeps API responses and form state provably in sync.",
            },
            {
                title: "Tested before shipping",
                desc: "Vitest covers units and Playwright drives real browser flows, both gated in CI before a Vercel production promotion.",
            },
        ],
    },
    {
        slug: "excel-analytics",
        name: "Excel Analytics",
        tagline: "Upload a spreadsheet, get a BI dashboard",
        summary:
            "A full-stack analytics platform that ingests Excel/CSV files and returns statistics, charts, business scores and exportable reports — Power BI-style output from a drag and drop.",
        overview:
            "Excel Analytics turns an unstructured spreadsheet into a decision-ready dashboard. Upload an .xlsx or .csv, and the backend parses it, profiles every column, detects numeric fields and runs a deterministic statistics engine: distributions, correlations, outliers via IQR, trend regression and data-quality scoring. The result is a chart builder with nine visualisation types, an executive summary, and exports to PDF, Excel, CSV or PNG. The whole stack — MongoDB, API, Nginx-served frontend — comes up with a single docker compose command.",
        year: "2026",
        role: "Full-stack engineer — API, analytics engine, UI, containerisation",
        status: "Live",
        featured: true,
        liveUrl: "https://excel-analytics-neon-tau.vercel.app",
        repoUrl: "https://github.com/shobhit-shukl/Excel-Analytics",
        accent: {
            text: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/25",
            glow: "group-hover:shadow-[0_0_60px_-15px_rgba(34,211,238,0.45)]",
            gradient: "from-cyan-400 to-teal-400",
        },
        tags: ["React", "Express", "MongoDB", "Docker Compose", "Nginx", "JWT"],
        metrics: [
            { label: "Chart types", value: "9" },
            { label: "Rows / file", value: "20k" },
            { label: "Containers", value: "3" },
            { label: "API surface", value: "16 routes" },
        ],
        stack: [
            { group: "Frontend", items: ["React 18", "Vite", "Tailwind CSS", "Recharts", "React Router 7", "Framer Motion"] },
            { group: "Backend", items: ["Node.js", "Express 4", "Mongoose 8", "Multer", "SheetJS"] },
            { group: "Data", items: ["MongoDB", "Cloudinary"] },
            { group: "Platform", items: ["Docker", "docker compose", "Nginx", "Vercel", "Split web/API deploy"] },
            { group: "Security", items: ["JWT", "bcrypt", "Helmet", "Rate limiting", "mongo-sanitize"] },
        ],
        modules: [
            { title: "Ingest & parse", desc: "Drag-and-drop .xlsx/.xls/.csv up to 10MB, streamed to Cloudinary and parsed with SheetJS.", icon: "📥" },
            { title: "Statistics engine", desc: "Mean, median, mode, variance, growth rate, quarterly trends and IQR outlier detection.", icon: "📊" },
            { title: "Chart builder", desc: "Bar, line, area, pie, scatter, radar, histogram, box plot and correlation heat map.", icon: "📈" },
            { title: "Business scoring", desc: "Health, performance and data-quality scores plus linear-regression predictions.", icon: "🎯" },
            { title: "Report export", desc: "PDF via jsPDF, Excel workbooks, CSV extracts and PNG chart snapshots.", icon: "📄" },
            { title: "Admin panel", desc: "User and file governance, storage usage and platform-wide upload analytics.", icon: "🛡️" },
        ],
        features: [
            "JWT auth with bcrypt hashing and 30-day remember-me",
            "Server-driven table: pagination, search, sort, per-column filters",
            "Automatic numeric column detection",
            "Colourblind-validated palette with dark-mode variants",
            "Executive summary, risk factors and growth opportunities",
            "Upload history with rename, favourite and delete",
            "Helmet, rate limiting and CORS allowlist on every route",
            "One-command Docker deployment",
        ],
        engineering: [
            {
                title: "Three-service compose stack",
                desc: "MongoDB, the Express API and an Nginx-served frontend run as separate containers with a health-gated dependency chain and a persistent volume.",
            },
            {
                title: "Deterministic insights",
                desc: "The insight layer is a statistical rules engine rather than an LLM call — instant, free and reproducible for the same input.",
            },
            {
                title: "Document-size discipline",
                desc: "Parsed rows are capped at 20,000 per file to stay under MongoDB's 16MB limit while the original always persists in object storage.",
            },
            {
                title: "Two deploy targets, one repo",
                desc: "The React client and the Express API ship as separate Vercel projects from the same repository, so the API can scale and roll back without touching the frontend.",
            },
        ],
    },
    {
        slug: "slice-meow",
        name: "Slice Meow",
        tagline: "Ad-free anime streaming & discovery",
        summary:
            "A premium anime catalogue with trending rows, genre browsing and command-palette search, backed by an authenticated admin CMS for publishing films and series.",
        overview:
            "Slice Meow is a streaming-style front end for anime — a spotlight hero, trending rails, movie and web-series shelves, seventeen browsable genres and ⌘K search. Behind the public site sits a private admin CMS: an operator signs in against a bcrypt-hashed account, gets a signed session cookie, and can publish titles with poster and banner art uploaded straight to object storage. Content lives across three logical MongoDB databases opened on a single connection, keeping auth records isolated from the movie and web-series catalogues.",
        year: "2026",
        role: "Full-stack engineer — data model, auth, admin CMS, interface",
        status: "Live",
        featured: true,
        liveUrl: "https://anime-store-eosin.vercel.app",
        repoUrl: "https://github.com/shobhit-shukl/anime-store",
        accent: {
            text: "text-fuchsia-400",
            bg: "bg-fuchsia-500/10",
            border: "border-fuchsia-500/25",
            glow: "group-hover:shadow-[0_0_60px_-15px_rgba(232,121,249,0.45)]",
            gradient: "from-fuchsia-500 to-pink-400",
        },
        tags: ["Next.js 16", "React 19", "MongoDB", "Mongoose", "EdgeStore", "JWT"],
        metrics: [
            { label: "Genres", value: "17" },
            { label: "Databases", value: "3" },
            { label: "Content types", value: "2" },
            { label: "Admin", value: "Gated CMS" },
        ],
        stack: [
            { group: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Radix UI", "next-themes"] },
            { group: "Backend", items: ["Route handlers", "Server actions", "Zod v4", "bcryptjs"] },
            { group: "Data", items: ["MongoDB", "Mongoose 9", "EdgeStore"] },
            { group: "Auth", items: ["jose", "HS256 JWT", "HttpOnly cookies", "Route gating"] },
            { group: "Platform", items: ["Vercel", "GitHub", "Remote image allowlist"] },
        ],
        modules: [
            { title: "Spotlight & trending", desc: "Hero feature with watch/info actions, plus a most-watched-this-week rail.", icon: "🔥" },
            { title: "Movies & series", desc: "Separate shelves for feature films and episodic content with ratings, runtime and episode counts.", icon: "🎬" },
            { title: "Genre browsing", desc: "Seventeen categories from Isekai and Mecha to Psychological and Slice of Life.", icon: "🗂️" },
            { title: "Command search", desc: "⌘K palette for jumping straight to a title without leaving the keyboard.", icon: "🔍" },
            { title: "Admin CMS", desc: "Cookie-gated dashboard for creating, editing and removing catalogue entries.", icon: "🛠️" },
            { title: "Media uploads", desc: "Poster and banner art pushed to an EdgeStore bucket with a host-restricted image allowlist.", icon: "🖼️" },
        ],
        features: [
            "Signed HttpOnly session cookie via jose (HS256)",
            "bcrypt-hashed admin credentials",
            "Write routes rejected without a valid session",
            "Three isolated logical databases on one connection",
            "Dark-first theming with next-themes",
            "Accessible Radix primitives throughout",
            "CLI script to bootstrap the first admin account",
            "Remote images restricted to an explicit host allowlist",
        ],
        engineering: [
            {
                title: "Read public, write private",
                desc: "GET routes stay open so the catalogue is crawlable, while every mutating request and the whole /admin tree require a verified session cookie.",
            },
            {
                title: "Separated by concern, not by cluster",
                desc: "Auth, movies and web-series each get their own logical database over a single Mongo connection — isolation without paying for three clusters.",
            },
            {
                title: "Uploads that skip the server",
                desc: "EdgeStore issues scoped upload URLs directly to the browser, so large poster art never passes through a serverless function with a payload limit.",
            },
        ],
    },
    {
        slug: "erp",
        name: "College ERP",
        tagline: "Campus management for schools & colleges",
        summary:
            "A modular administration system centralising admissions, attendance, fees, examinations and reporting behind role-based access and a SuperAdmin control tier.",
        overview:
            "College ERP centralises the administrative workflows a campus runs on. Students, staff, attendance, fees and examinations live in one schema instead of five spreadsheets, and every view is filtered through role-based access. Above the per-institution roles sits SuperAdmin — a governance tier that provisions institutions, toggles modules, manages API keys and reads cross-campus reports. Built on Next.js with a Postgres backend, it scales from a single school to a multi-campus district.",
        year: "2026",
        role: "Full-stack engineer — schema, auth, dashboards, deployment",
        status: "Live",
        featured: true,
        liveUrl: "https://college-eight-jade.vercel.app",
        repoUrl: "https://github.com/shobhit-shukl/College",
        accent: {
            text: "text-indigo-400",
            bg: "bg-indigo-500/10",
            border: "border-indigo-500/25",
            glow: "group-hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.45)]",
            gradient: "from-indigo-500 to-violet-400",
        },
        tags: ["Next.js 16", "React 19", "Supabase", "PostgreSQL", "Chart.js", "Vercel"],
        metrics: [
            { label: "Core modules", value: "5" },
            { label: "Access tiers", value: "SuperAdmin" },
            { label: "Database", value: "PostgreSQL" },
            { label: "Deploy", value: "Vercel" },
        ],
        stack: [
            { group: "Frontend", items: ["Next.js 16", "React 19", "Tailwind CSS", "Framer Motion", "Chart.js"] },
            { group: "Backend", items: ["Next.js API routes", "Middleware auth", "JWT", "bcryptjs", "Resend"] },
            { group: "Data", items: ["Supabase", "PostgreSQL", "SheetJS"] },
            { group: "Platform", items: ["Vercel", "GitHub", "Edge middleware"] },
        ],
        modules: [
            { title: "Student Management", desc: "Enrollment, profiles, academic history, document storage and guardian contacts.", icon: "🎓" },
            { title: "Teacher Management", desc: "Staff profiles, timetables, workload tracking and role-based permissions.", icon: "🧑‍🏫" },
            { title: "Attendance", desc: "Daily attendance, bulk uploads, automated alerts and analytics.", icon: "✅" },
            { title: "Fees & Finance", desc: "Invoicing, payment tracking, concessions, receipts and financial reports.", icon: "💳" },
            { title: "Exams & Assessments", desc: "Exam scheduling, grade entry, automated report cards and transcripts.", icon: "📝" },
            { title: "SuperAdmin", desc: "Institution provisioning, global module toggles, API keys, backups and audit logs.", icon: "🛡️" },
        ],
        features: [
            "Unified dashboard with live KPIs",
            "Role-based access & SuperAdmin control",
            "Automated notifications and workflows",
            "CSV bulk import/export",
            "Customizable grading & fee structures",
            "Secure audit logs and backups",
            "Multi-campus reporting",
            "Edge middleware route protection",
        ],
        engineering: [
            {
                title: "Governance above tenancy",
                desc: "SuperAdmin sits above institution roles so a district administrator gets single-pane control without weakening per-campus isolation.",
            },
            {
                title: "Auth at the edge",
                desc: "Next.js middleware validates sessions before a protected route renders, so unauthorised requests never reach page logic.",
            },
            {
                title: "One source of truth",
                desc: "Consolidating five departmental spreadsheets into one relational schema removed duplication and made reporting instant instead of manual.",
            },
        ],
        screenshots: [
            { src: "/erp-screenshot.png", alt: "College ERP dashboard overview" },
            { src: "/erp-screenshot2.png", alt: "College ERP management interface" },
            { src: "/erp-screenshot3.png", alt: "College ERP reporting view" },
        ],
    },
    {
        slug: "portfolio",
        name: "This Portfolio",
        tagline: "The site you're reading right now",
        summary:
            "A statically-rendered Next.js site on the App Router with a data-driven project system, zero client-side JavaScript on content pages, and continuous deployment from main.",
        overview:
            "Everything you're looking at is a Next.js 15 App Router build styled with Tailwind CSS v4. Project pages are generated from a single typed data source rather than hand-written markup, so adding a project means adding an object — routes, cards, metadata and detail pages all follow. Content pages ship as server components with no client-side JavaScript, and every push to main triggers a Vercel production deployment.",
        year: "2026",
        role: "Designer & engineer",
        status: "Live",
        featured: false,
        liveUrl: "https://my-portfolio-zeta-blond-52.vercel.app",
        repoUrl: "https://github.com/shobhit-shukl/my-portfolio",
        accent: {
            text: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/25",
            glow: "group-hover:shadow-[0_0_60px_-15px_rgba(52,211,153,0.45)]",
            gradient: "from-emerald-400 to-teal-300",
        },
        tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind v4", "Vercel"],
        metrics: [
            { label: "Framework", value: "Next 15" },
            { label: "Rendering", value: "Static" },
            { label: "Client JS", value: "Minimal" },
            { label: "Deploys", value: "On push" },
        ],
        stack: [
            { group: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4"] },
            { group: "Platform", items: ["Vercel", "GitHub", "Continuous deployment"] },
        ],
        modules: [
            { title: "Typed data layer", desc: "Projects are a single typed array; pages, cards and routes derive from it.", icon: "🗂️" },
            { title: "Static generation", desc: "Detail routes are pre-rendered at build time via generateStaticParams.", icon: "⚡" },
            { title: "Server components", desc: "Content pages ship no client bundle — interactivity is opt-in per component.", icon: "🧩" },
        ],
        features: [
            "Data-driven project routes",
            "Per-page SEO metadata generation",
            "Responsive layout down to 360px",
            "CSS-only animations, no animation library",
            "Accessible focus states and reduced-motion support",
            "Continuous deployment from main",
        ],
        engineering: [
            {
                title: "Add a project, get a page",
                desc: "generateStaticParams walks the project array, so a new entry produces its own statically rendered route with no extra wiring.",
            },
            {
                title: "Ship less JavaScript",
                desc: "Only the navbar is a client component. Everything else renders on the server, which keeps the payload small and the paint fast.",
            },
        ],
    },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
