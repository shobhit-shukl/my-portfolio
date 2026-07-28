import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className={`group relative flex flex-col justify-between gap-8 p-7 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/8 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06] hover:border-white/15 ${project.accent.glow}`}
        >
            <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 min-w-0">
                        <span
                            className={`text-[9px] font-mono tracking-[0.35em] uppercase ${project.accent.text}`}
                        >
                            {project.year} — {project.status}
                        </span>
                        <h3 className="text-2xl sm:text-4xl font-black tracking-tighter text-white uppercase leading-none">
                            {project.name}
                        </h3>
                    </div>
                    <span className="shrink-0 mt-1 text-slate-600 group-hover:text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M7 17 17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                    </span>
                </div>

                <p className="text-sm sm:text-base text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed font-light">
                    {project.tagline} — {project.summary}
                </p>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/[0.06]">
                    {project.metrics.map((m) => (
                        <div key={m.label} className="space-y-1 min-w-0">
                            <p className="text-base sm:text-lg font-black text-white tracking-tight truncate">
                                {m.value}
                            </p>
                            <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em] truncate">
                                {m.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`text-[9px] font-mono tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border ${project.accent.bg} ${project.accent.border} ${project.accent.text}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
