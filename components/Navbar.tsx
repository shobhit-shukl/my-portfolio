"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/#expertise", label: "Expertise" },
    { href: "/projects", label: "Projects" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close the mobile sheet whenever the route changes.
    useEffect(() => setOpen(false), [pathname]);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]) && href !== "/";

    return (
        <header className="fixed top-4 sm:top-6 inset-x-0 z-50 px-4 sm:px-6">
            <nav
                className={`mx-auto max-w-3xl rounded-3xl border transition-all duration-500 ${scrolled
                        ? "bg-black/70 border-white/12 backdrop-blur-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)]"
                        : "bg-black/40 border-white/8 backdrop-blur-xl"
                    }`}
            >
                <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-3">
                    <Link
                        href="/"
                        className="text-sm font-black tracking-tighter text-white uppercase shrink-0"
                    >
                        Shobhit<span className="text-blue-500">.</span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden sm:flex items-center gap-7 text-[11px] font-bold tracking-[0.18em] uppercase">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors ${isActive(link.href)
                                        ? "text-white"
                                        : "text-slate-400 hover:text-blue-400"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="text-blue-400 hover:text-blue-300 border-l border-white/15 pl-7 transition-colors"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-label={open ? "Close menu" : "Open menu"}
                        className="sm:hidden flex flex-col justify-center gap-[5px] w-9 h-9 items-center rounded-full border border-white/10 bg-white/5"
                    >
                        <span
                            className={`block h-px w-4 bg-white transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""
                                }`}
                        />
                        <span
                            className={`block h-px w-4 bg-white transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile sheet */}
                <div
                    className={`sm:hidden grid transition-all duration-400 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">
                        <div className="flex flex-col gap-1 px-5 pb-5 pt-1 border-t border-white/8">
                            {[...links, { href: "/contact", label: "Contact" }].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="py-2.5 text-xs font-bold tracking-[0.2em] uppercase text-slate-300 hover:text-blue-400 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
