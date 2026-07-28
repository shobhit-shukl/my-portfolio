import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#020617] pt-24 sm:pt-32 pb-12 overflow-hidden z-10">
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            {/* Giant background wordmark */}
            <div
                className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap text-[20vw] font-black tracking-tighter uppercase italic"
                aria-hidden="true"
            >
                SHOBHIT
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-8 items-start">
                    {/* Brand */}
                    <div className="md:col-span-5 space-y-7">
                        <Link
                            href="/"
                            className="inline-block text-3xl font-black tracking-tighter text-white uppercase group"
                        >
                            Shobhit<span className="text-blue-500 group-hover:animate-pulse">.</span>
                        </Link>
                        <p className="text-slate-400 text-base font-light leading-relaxed max-w-sm">
                            Full-stack engineer building production systems — typed frontends, hardened
                            APIs, containers and the pipelines that ship them.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                                Open for opportunities
                            </span>
                        </div>
                    </div>

                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div className="space-y-5">
                            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.25em]">
                                Navigation
                            </h4>
                            <ul className="space-y-3.5">
                                <FooterLink href="/">Home</FooterLink>
                                <FooterLink href="/#expertise">Expertise</FooterLink>
                                <FooterLink href="/projects">Projects</FooterLink>
                                <FooterLink href="/contact">Contact</FooterLink>
                            </ul>
                        </div>

                        <div className="space-y-5">
                            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.25em]">
                                Work
                            </h4>
                            <ul className="space-y-3.5">
                                {projects.map((p) => (
                                    <FooterLink key={p.slug} href={`/projects/${p.slug}`}>
                                        {p.name}
                                    </FooterLink>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-5 col-span-2 sm:col-span-1">
                            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.25em]">
                                Connect
                            </h4>
                            <ul className="space-y-3.5">
                                <FooterLink href="https://github.com/shobhit-shukl" external>
                                    GitHub
                                </FooterLink>
                                <FooterLink href="mailto:shobhitshukl2006@gmail.com" external>
                                    Email
                                </FooterLink>
                                <FooterLink href="tel:6394401950" external>
                                    Phone
                                </FooterLink>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-20 sm:mt-28 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-bold text-slate-600 tracking-[0.3em] uppercase text-center">
                        © {year} Shobhit Shukla. Crafting digital excellence.
                    </p>
                    <p className="text-[10px] font-bold text-slate-700 tracking-[0.3em] uppercase">
                        Next.js · Tailwind · Vercel
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({
    href,
    children,
    external,
}: {
    href: string;
    children: React.ReactNode;
    external?: boolean;
}) {
    const className =
        "text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium";

    return (
        <li>
            {external ? (
                <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={className}
                >
                    {children}
                </a>
            ) : (
                <Link href={href} className={className}>
                    {children}
                </Link>
            )}
        </li>
    );
}
