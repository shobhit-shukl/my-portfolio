"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-6 w-full z-50 flex justify-center px-6">
            <div className="flex items-center gap-6 md:gap-10 px-8 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-xs md:text-sm font-medium tracking-wide">
                <Link href="/" className="hover:text-blue-400 transition-colors uppercase">HOME</Link>
                <Link href="/#expertise" className="hover:text-blue-400 transition-colors uppercase">EXPERTISE</Link>
                <Link href="/projects/erp" className="hover:text-blue-400 transition-colors uppercase">PROJECTS</Link>
                <Link href="/contact" className="text-blue-400 border-l border-white/20 pl-6 md:pl-10 uppercase font-bold tracking-widest">CONTACT</Link>
            </div>
        </nav>
    );
}
