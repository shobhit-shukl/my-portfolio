import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/lib/projects";
import { skillGroups, techMarquee, stats, capabilities } from "@/lib/skills";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[55%] h-[55%] bg-indigo-600/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 grid-overlay" />
      </div>

      {/* --- Hero --- */}
      <section className="relative z-10 pt-36 sm:pt-48 md:pt-56 pb-20 sm:pb-28 px-6 max-w-7xl mx-auto flex flex-col items-center">
        <div className="relative mb-10 sm:mb-12 animate-float">
          <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur-xl opacity-25 group-hover:opacity-60 transition duration-700" />
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 backdrop-blur-3xl">
              <Image
                src="/Shobhit.png"
                alt="Portrait of Shobhit Shukla"
                width={160}
                height={160}
                priority
                className="relative rounded-full border border-white/10 object-cover w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 rounded-full border border-white/10 animate-reveal">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
              Full Stack &amp; DevOps Engineer
            </span>
          </div>

          <h1 className="text-[3.25rem] leading-[0.85] sm:text-7xl md:text-[100px] lg:text-[124px] font-black tracking-tighter text-white animate-reveal px-2">
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400">
              POSSIBILITIES.
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed animate-reveal delay-100 px-2">
            I design and ship <span className="text-white">production systems end to end</span> —
            typed frontends, hardened APIs, containerised infrastructure and the CI/CD that gets
            them live.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 animate-reveal delay-200">
            <Link
              href="/projects"
              className="btn-premium w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm tracking-wide"
            >
              View Live Projects
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/12 text-sm font-bold tracking-wide text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 sm:mt-28 w-full max-w-4xl rounded-3xl overflow-hidden border border-white/8 bg-white/[0.04] animate-reveal delay-300">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#040b1d]/60 backdrop-blur-xl px-5 py-7 text-center space-y-1.5"
            >
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
                {s.value}
              </p>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.22em]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Tech marquee --- */}
      <section
        className="relative z-10 py-6 border-y border-white/5 bg-white/[0.015] overflow-hidden"
        aria-label="Technologies"
      >
        <div className="marquee">
          <div className="marquee-track">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-[0.25em] whitespace-nowrap"
                aria-hidden={i >= techMarquee.length}
              >
                {tech}
                <span className="text-blue-500/40 mx-6 sm:mx-8">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- Statement --- */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 sm:py-32">
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-center font-light leading-snug text-slate-300 italic">
          &quot;I bridge the gap between complex{" "}
          <span className="text-blue-400 font-bold not-italic">backend systems</span> and elegant{" "}
          <span className="text-cyan-400 font-bold not-italic">user interfaces</span> — then I make
          sure they deploy themselves.&quot;
        </h2>
      </section>

      {/* --- Expertise bento --- */}
      <section id="expertise" className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-28 scroll-mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 sm:mb-20 gap-6">
          <div className="space-y-4">
            <span className="text-blue-500 font-mono text-[10px] sm:text-xs tracking-[0.5em] uppercase">
              Core Skills
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Technical <br className="hidden md:block" />
              Prowess
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm font-medium leading-relaxed">
            From the database migration to the production URL — the full path, owned end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.name}
              className={`tech-card p-7 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] group animate-reveal ${group.colSpan}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex flex-col h-full justify-between gap-8">
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-4xl sm:text-5xl transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6">
                      {group.icon}
                    </div>
                    <span
                      className={`text-[9px] font-mono tracking-[0.3em] uppercase ${group.accent.text}`}
                    >
                      {group.kicker}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tighter uppercase">
                    {group.name}
                  </h3>

                  <div
                    className={`h-px w-full bg-gradient-to-r ${group.accent.gradient} opacity-25 group-hover:opacity-70 transition-opacity duration-500`}
                  />

                  <p className="text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed text-sm font-light">
                    {group.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`text-[9px] font-mono tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border ${group.accent.bg} ${group.accent.border} ${group.accent.text}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Featured work --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 sm:mb-20 gap-6">
          <div className="space-y-4">
            <span className="text-cyan-400 font-mono text-[10px] sm:text-xs tracking-[0.5em] uppercase">
              Selected Work
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Live <br className="hidden md:block" />
              Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
          >
            All projects
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* --- How I work --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-28 border-t border-white/5">
        <span className="text-indigo-400 font-mono text-[10px] sm:text-xs tracking-[0.5em] uppercase">
          How I Work
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-12">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="p-8 rounded-[2rem] border border-white/8 bg-white/[0.03] backdrop-blur-xl space-y-4 animate-reveal hover:border-white/15 transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl">{cap.icon}</div>
              <h3 className="text-lg font-black text-white tracking-tight uppercase">
                {cap.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 sm:py-32 text-center space-y-8">
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
          Have something <br />
          worth building?
        </h2>
        <p className="text-slate-400 font-light max-w-lg mx-auto leading-relaxed">
          I&apos;m open to full-stack and platform work. Send over the problem — I&apos;ll tell you
          how I&apos;d ship it.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="btn-premium inline-block px-10 py-4 rounded-full font-bold text-sm tracking-wide"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
