import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProject, projects } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) return { title: "Project not found" };

    return {
        title: `${project.name} | Shobhit Shukla`,
        description: project.summary,
    };
}

export default async function ProjectDetail({ params }: Params) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) notFound();

    const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
                <div className="absolute top-[-12%] left-[-8%] w-[48%] h-[48%] bg-blue-600/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-[-12%] right-[-8%] w-[48%] h-[48%] bg-indigo-600/10 blur-[130px] rounded-full" />
                <div className="absolute inset-0 grid-overlay" />
            </div>

            {/* --- Hero --- */}
            <section className="relative z-10 pt-36 sm:pt-48 pb-14 px-6 max-w-5xl mx-auto animate-reveal">
                <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 hover:text-white transition-colors mb-10"
                >
                    <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
                    All projects
                </Link>

                <div className="space-y-7">
                    <div className="flex flex-wrap items-center gap-3">
                        <span
                            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[9px] font-mono tracking-[0.25em] uppercase ${project.accent.bg} ${project.accent.border} ${project.accent.text}`}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            {project.status}
                        </span>
                        <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-slate-600">
                            {project.year}
                        </span>
                    </div>

                    <h1 className="text-[3rem] leading-[0.85] sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase">
                        {project.name}
                    </h1>

                    <p
                        className={`text-lg sm:text-2xl font-light ${project.accent.text}`}
                    >
                        {project.tagline}
                    </p>

                    <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
                        {project.overview}
                    </p>

                    <p className="text-xs font-medium text-slate-600 uppercase tracking-[0.15em]">
                        {project.role}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-premium px-8 py-3.5 rounded-full font-bold text-sm text-center tracking-wide"
                            >
                                Open Live Site
                            </a>
                        )}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 rounded-full border border-white/12 text-sm font-bold text-center tracking-wide text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                            >
                                View Source
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* --- Metrics --- */}
            <section className="relative z-10 max-w-5xl mx-auto px-6 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-white/8 bg-white/[0.04]">
                    {project.metrics.map((m) => (
                        <div
                            key={m.label}
                            className="bg-[#040b1d]/60 backdrop-blur-xl px-5 py-7 text-center space-y-1.5"
                        >
                            <p className="text-lg sm:text-2xl font-black text-white tracking-tighter">
                                {m.value}
                            </p>
                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                                {m.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Screenshots --- */}
            {project.screenshots && project.screenshots.length > 0 && (
                <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                    <SectionHeading kicker="Interface" title="Screenshots" accent={project.accent.text} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                        {project.screenshots.map((shot) => (
                            <a
                                key={shot.src}
                                href={shot.src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-3 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-white/20 hover:scale-[1.02] transition-all duration-500"
                            >
                                <Image
                                    src={shot.src}
                                    alt={shot.alt}
                                    width={1200}
                                    height={600}
                                    className="rounded-xl object-cover shadow-lg"
                                />
                            </a>
                        ))}
                    </div>
                </section>
            )}

            {/* --- Modules --- */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                <SectionHeading
                    kicker="What's inside"
                    title="Core Modules"
                    accent={project.accent.text}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    {project.modules.map((m) => (
                        <div
                            key={m.title}
                            className="group p-7 rounded-[1.75rem] border border-white/8 bg-white/[0.03] backdrop-blur-xl hover:border-white/18 hover:bg-white/[0.05] transition-all duration-500"
                        >
                            <div
                                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl border ${project.accent.bg} ${project.accent.border} transition-transform duration-500 group-hover:scale-110`}
                            >
                                {m.icon}
                            </div>
                            <h3 className="font-black text-white text-base uppercase tracking-tight mt-5">
                                {m.title}
                            </h3>
                            <p className="text-slate-500 group-hover:text-slate-400 transition-colors mt-3 text-sm leading-relaxed font-light">
                                {m.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Stack --- */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                <SectionHeading kicker="Under the hood" title="Tech Stack" accent={project.accent.text} />
                <div className="mt-10 space-y-px rounded-3xl overflow-hidden border border-white/8">
                    {project.stack.map((layer) => (
                        <div
                            key={layer.group}
                            className="bg-white/[0.03] backdrop-blur-xl px-6 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 sm:w-40 shrink-0">
                                {layer.group}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {layer.items.map((item) => (
                                    <span
                                        key={item}
                                        className="text-[10px] font-mono tracking-[0.1em] uppercase px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Engineering notes + features --- */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                        <SectionHeading
                            kicker="Decisions"
                            title="Engineering Notes"
                            accent={project.accent.text}
                        />
                        <div className="mt-10 space-y-8">
                            {project.engineering.map((note, i) => (
                                <div key={note.title} className="flex gap-5">
                                    <span
                                        className={`shrink-0 font-mono text-[10px] tracking-widest pt-1 ${project.accent.text}`}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div className="space-y-2">
                                        <h3 className="font-black text-white text-base uppercase tracking-tight">
                                            {note.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed font-light">
                                            {note.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <SectionHeading
                            kicker="Capabilities"
                            title="Feature Set"
                            accent={project.accent.text}
                        />
                        <ul className="mt-10 space-y-3">
                            {project.features.map((f) => (
                                <li key={f} className="flex items-start gap-3">
                                    <span className={`mt-[7px] w-1 h-1 rounded-full shrink-0 bg-current ${project.accent.text}`} />
                                    <span className="text-slate-400 text-sm font-light leading-relaxed">{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-28 border-t border-white/5 text-center space-y-7">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                    See it running
                </h2>
                <p className="text-slate-400 font-light max-w-lg mx-auto leading-relaxed">
                    {project.liveUrl
                        ? "The deployment is public — walk through the real flows yourself."
                        : "This one is private, but I'm happy to walk you through it live."}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                    {project.liveUrl ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-premium px-8 py-4 rounded-full font-bold text-sm tracking-wide"
                        >
                            Open {project.name}
                        </a>
                    ) : null}
                    <Link
                        href="/contact"
                        className="px-8 py-4 rounded-full border border-white/12 text-sm font-bold tracking-wide text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                    >
                        Request a Walkthrough
                    </Link>
                </div>
            </section>

            {/* --- Next projects --- */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
                <SectionHeading kicker="Keep going" title="More Work" accent="text-slate-500" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                    {others.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/projects/${p.slug}`}
                            className="group p-8 rounded-[1.75rem] border border-white/8 bg-white/[0.03] backdrop-blur-xl hover:border-white/18 hover:-translate-y-1 transition-all duration-500"
                        >
                            <span className={`text-[9px] font-mono tracking-[0.3em] uppercase ${p.accent.text}`}>
                                {p.status}
                            </span>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mt-3">
                                {p.name}
                            </h3>
                            <p className="text-slate-500 text-sm font-light mt-3 leading-relaxed">
                                {p.tagline}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

function SectionHeading({
    kicker,
    title,
    accent,
}: {
    kicker: string;
    title: string;
    accent: string;
}) {
    return (
        <div className="space-y-3">
            <span className={`font-mono text-[10px] tracking-[0.45em] uppercase ${accent}`}>
                {kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase">
                {title}
            </h2>
        </div>
    );
}
