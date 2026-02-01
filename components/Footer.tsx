"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-[#020617] pt-32 pb-12 overflow-hidden">
            {/* Decorative Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            {/* Giant Background Text */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap text-[20vw] font-black tracking-tighter uppercase italic">
                SHOBHIT
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">

                    {/* Brand Column */}
                    <div className="md:col-span-8 space-y-8">
                        <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase group">
                            Shobhit<span className="text-blue-500 group-hover:animate-pulse">.</span>
                        </Link>
                        <p className="text-slate-400 text-lg font-light leading-relaxed max-w-sm">
                            Building the future of the web with precision, passion, and premium design.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            </div>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Open for opportunities</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-4 grid grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h4 className="text-xs font-black text-white uppercase tracking-widest">Navigation</h4>
                            <ul className="space-y-4">
                                <li><Link href="/" className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium">Home</Link></li>
                                <li><Link href="/#expertise" className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium">Expertise</Link></li>
                                <li><Link href="/contact" className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xs font-black text-white uppercase tracking-widest">Connect</h4>
                            <ul className="space-y-4">
                                <li><a href="https://github.com/shobhit-shukl/my-portfolio" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium">GitHub</a></li>
                                <li><a href="mailto:shobhitshukl2006@gmail.com" className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium">Email</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold text-slate-600 tracking-[0.3em] uppercase">
                        © 2026 Shobhit Shukla. Crafting digital excellence.
                    </p>
                </div>
            </div>
        </footer>
    );
}
