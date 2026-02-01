"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
    const contactInfo = [
        {
            label: "Email Me",
            value: "shobhitshukl2006@gmail.com",
            href: "mailto:shobhitshukl2006@gmail.com",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            ),
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20"
        },
        {
            label: "Call Me",
            value: "6394401950",
            href: "tel:6394401950",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            ),
            color: "text-indigo-400",
            bgColor: "bg-indigo-500/10",
            borderColor: "border-indigo-500/20"
        },
        {
            label: "GitHub",
            value: "shobhit-shukl",
            href: "https://github.com/shobhit-shukl",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            ),
            color: "text-cyan-400",
            bgColor: "bg-cyan-500/10",
            borderColor: "border-cyan-500/20"
        },
        {
            label: "Location",
            value: "Dehradun, Uttarakhand",
            href: "#",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            ),
            color: "text-rose-400",
            bgColor: "bg-rose-500/10",
            borderColor: "border-rose-500/20"
        }
    ];

    return (
        <main className="min-h-screen bg-[#020617] text-white">
            <Navbar />

            {/* --- Background Blur Elements --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[130px] rounded-full" />
            </div>

            <section className="relative z-10 pt-48 sm:pt-56 pb-24 sm:pb-32 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-10 sm:space-y-12 animate-reveal">
                    <div className="space-y-4 sm:space-y-6">
                        <span className="text-blue-500 font-mono text-[10px] sm:text-xs tracking-[0.4em] uppercase">Ready to talk?</span>
                        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none px-4">
                            LET&apos;S <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400">
                                CONNECT.
                            </span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl mt-12 px-2 sm:px-4">
                        {contactInfo.map((info, idx) => (
                            <a
                                key={idx}
                                href={info.href}
                                target={info.href.startsWith("http") ? "_blank" : undefined}
                                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className={`group p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.08] hover:border-white/20`}
                            >
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${info.bgColor} border ${info.borderColor} flex items-center justify-center ${info.color} transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shrink-0`}>
                                        {info.icon}
                                    </div>
                                    <div className="text-center sm:text-left flex-1 min-w-0 w-full text-ellipsis overflow-hidden">
                                        <p className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">{info.label}</p>
                                        <p className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight truncate">
                                            {info.value}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="pt-24 max-w-2xl">
                        <h2 className="text-2xl md:text-4xl font-light text-slate-300 leading-relaxed italic">
                            &quot;Ideas are easy. <span className="text-white font-bold not-italic">Execution</span> is everything. Let&apos;s build something that makes a difference.&quot;
                        </h2>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}