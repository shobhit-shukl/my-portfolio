import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const techStack = [
    {
      name: "Frontend Mastery",
      skills: "Next.js, React, TypeScript",
      desc: "Architecting high-performance web apps with seamless UI/UX.",
      icon: "⚡",
      colSpan: "md:col-span-2"
    },
    {
      name: "Modern UI",
      skills: "Tailwind, Framer Motion",
      desc: "Pixel-perfect designs.",
      icon: "🎨",
      colSpan: "md:col-span-1"
    },
    {
      name: "Backend Logic",
      skills: "Node.js, Express, REST",
      desc: "Secure & scalable server systems.",
      icon: "⚙️",
      colSpan: "md:col-span-1"
    },
    {
      name: "Cloud & Data",
      skills: "MongoDB, Supabase, SQL",
      desc: "Reliable database management and cloud-native solutions.",
      icon: "☁️",
      colSpan: "md:col-span-2"
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative pt-64 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
        {/* Profile Avatar */}
        <div className="relative mb-12 animate-float">
          <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition duration-700" />
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 backdrop-blur-3xl">
              <Image
                src="/Shobhit.png"
                alt="Shobhit Portfolio"
                width={180}
                height={180}
                className="relative rounded-full border border-white/10 object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-4 animate-reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
              Full Stack Developer
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-[100px] lg:text-[120px] font-black tracking-tighter text-white leading-[0.8] animate-reveal px-4">
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400">
              POSSIBILITIES.
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-2xl font-light max-w-2xl mx-auto leading-relaxed animate-reveal delay-100 px-6">
            Architecting <span className="text-white">scalable systems</span> and crafting premium digital experiences with a focus on precision and performance.
          </p>
        </div>
      </section>

      {/* --- Featured Statement --- */}
      <section className="max-w-4xl mx-auto px-6 py-32 border-y border-white/5">
        <h2 className="text-3xl md:text-5xl text-center font-light leading-snug text-slate-300 italic">
          &quot;I bridge the gap between complex <span className="text-blue-400 font-bold not-italic px-2">backend systems</span> and elegant <span className="text-cyan-400 font-bold not-italic px-2">user interfaces</span>.&quot;
        </h2>
      </section>

      {/* --- Bento Grid (Expertise) --- */}
      <section id="expertise" className="max-w-7xl mx-auto px-6 py-48">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 px-4">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-blue-500 font-mono text-xs tracking-[0.6em] uppercase">Core Skills</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">Technical <br className="hidden md:block" />Prowess</h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm font-medium leading-relaxed">Turning complex requirements into simple, elegant, and highly performant solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {techStack.map((item, index) => (
            <div
              key={index}
              className={`tech-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] group animate-reveal ${item.colSpan} border border-white/10 bg-white/5 backdrop-blur-3xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full justify-between gap-8 md:gap-12">
                <div>
                  <div className="text-5xl md:text-6xl mb-8 md:mb-12 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                    {item.skills.split(", ").map((skill, si) => (
                      <span key={si} className="text-blue-400 font-mono text-[8px] md:text-[9px] tracking-widest uppercase bg-blue-500/10 px-2 md:px-3 py-1 rounded-full border border-blue-500/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed text-base md:text-lg font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}