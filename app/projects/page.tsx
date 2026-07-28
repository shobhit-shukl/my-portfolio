import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
    title: "Projects | Shobhit Shukla",
    description:
        "Live full-stack products by Shobhit Shukla — campus ERP systems, analytics platforms and the infrastructure behind them.",
};

export default function ProjectsIndex() {
    const liveCount = projects.filter((p) => p.liveUrl).length;

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
                <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/8 blur-[130px] rounded-full" />
                <div className="absolute inset-0 grid-overlay" />
            </div>

            <section className="relative z-10 pt-36 sm:pt-48 pb-16 px-6 max-w-7xl mx-auto">
                <div className="space-y-6 animate-reveal">
                    <span className="text-blue-500 font-mono text-[10px] sm:text-xs tracking-[0.5em] uppercase">
                        {liveCount} deployed products
                    </span>
                    <h1 className="text-[3.25rem] leading-[0.85] sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase">
                        The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400">
                            Work.
                        </span>
                    </h1>
                    <p className="text-slate-400 text-base sm:text-xl font-light max-w-2xl leading-relaxed">
                        Real systems with real users — not tutorials. Each one runs in production, and
                        each page below covers the architecture, the stack and the decisions behind it.
                    </p>
                </div>
            </section>

            <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24 sm:pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                    {projects.map((project, i) => (
                        <div
                            key={project.slug}
                            className="animate-reveal"
                            style={{ animationDelay: `${i * 0.08}s` }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
