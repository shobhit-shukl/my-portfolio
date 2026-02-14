"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ERPProject() {
  const modules = [
    { title: "Student Management", desc: "Enrollment, profiles, academic history, document storage, and guardian contacts.", icon: "🎓" },
    { title: "Teacher Management", desc: "Staff profiles, timetables, workload tracking and role-based permissions.", icon: "🧑‍🏫" },
    { title: "Attendance", desc: "Daily attendance, bulk uploads, automated alerts and analytics.", icon: "✅" },
    { title: "Fees & Finance", desc: "Invoicing, payment tracking, concessions, receipts and financial reports.", icon: "💳" },
    { title: "Exams & Assessments", desc: "Exam scheduling, grade entry, automated report cards and transcripts.", icon: "📝" },
  ];

  const features = [
    "Unified dashboard with KPIs",
    "Role-based access & SuperAdmin control",
    "Automated notifications and workflows",
    "CSV bulk import/export",
    "Customizable grading & fee structures",
    "Secure audit logs and backups",
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      {/* BACKGROUND BLURS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-8%] left-[-6%] w-[46%] h-[46%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-8%] right-[-6%] w-[46%] h-[46%] bg-indigo-600/12 blur-[120px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative z-10 pt-40 sm:pt-48 pb-12 px-6 max-w-6xl mx-auto text-center animate-reveal">
        <span className="text-blue-400 font-mono text-[10px] tracking-[0.4em] uppercase">Project</span>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none mt-6">
          ERP for Schools & Colleges
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg md:text-xl">
          A modular, secure, and scalable campus management system that centralizes administrative workflows — from admissions to examinations.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="https://college-a6wjcic21-shobhitshuklas-projects.vercel.app" target="_blank" rel="noreferrer" className="btn-premium px-6 py-3 rounded-full font-bold">Live Demo</a>
          <Link href="/" className="px-6 py-3 rounded-full border border-white/10 hover:border-white/20 transition">Back to Portfolio</Link>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-black mb-4">Screenshots</h3>
        <p className="text-slate-400 mb-6">Interface highlights from the deployed instance. Click to open full size.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/erp-screenshot.png" target="_blank" rel="noreferrer" className="block p-4 rounded-2xl bg-white/3 border border-white/8 hover:scale-[1.01] transition-transform">
            <Image src="/erp-screenshot.png" alt="ERP screenshot 1" width={1200} height={600} className="rounded-lg object-cover shadow-md" />
          </a>

          <a href="/erp-screenshot2.png" target="_blank" rel="noreferrer" className="block p-4 rounded-2xl bg-white/3 border border-white/8 hover:scale-[1.01] transition-transform">
            <Image src="/erp-screenshot2.png" alt="ERP screenshot 2" width={1200} height={600} className="rounded-lg object-cover shadow-md" />
          </a>

          <a href="/erp-screenshot3.png" target="_blank" rel="noreferrer" className="block p-4 rounded-2xl bg-white/3 border border-white/8 hover:scale-[1.01] transition-transform">
            <Image src="/erp-screenshot3.png" alt="ERP screenshot 3" width={1200} height={600} className="rounded-lg object-cover shadow-md" />
          </a>
        </div>
      </section>

      {/* MODULES */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div key={i} className="contact-card p-6 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-xl hover:scale-[1.02] transform transition-all duration-400" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">{m.icon}</div>
                <div>
                  <h3 className="font-bold text-white text-lg">{m.title}</h3>
                  <p className="text-slate-400 mt-2 text-sm">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUPERADMIN */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-y border-white/6">
        <div className="md:flex md:items-center md:justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black">SuperAdmin — Master Control</h2>
            <p className="text-slate-400 mt-4">The SuperAdmin role provides complete system governance: create institutions, manage roles and permissions, configure academic years, set fee structures, oversee integrations, and access cross-campus reports and audit logs.</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li className="text-slate-300">• Create/Manage institutions & campuses</li>
              <li className="text-slate-300">• Global module toggles & settings</li>
              <li className="text-slate-300">• Bulk imports/exports & data migration</li>
              <li className="text-slate-300">• API keys, SSO, backups & security controls</li>
            </ul>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="p-6 rounded-2xl bg-white/3 border border-white/8 backdrop-blur-xl">
              <h4 className="text-sm font-mono text-blue-400 tracking-[0.28em] uppercase">Why SuperAdmin</h4>
              <p className="text-slate-300 mt-4">SuperAdmin centralizes policy and security — ideal for district administrators or product owners who need single-pane control across multiple institutions.</p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <span className="px-3 py-1 text-xs bg-blue-500/10 border border-blue-500/20 rounded-full">Audit Logs</span>
                <span className="px-3 py-1 text-xs bg-indigo-500/10 border border-indigo-500/20 rounded-full">SSO</span>
                <span className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/20 rounded-full">API Keys</span>
                <span className="px-3 py-1 text-xs bg-rose-500/10 border border-rose-500/20 rounded-full">Backups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS & FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="md:flex md:gap-12 items-start">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-black">Why institutions love it</h3>
            <p className="text-slate-400 mt-4">Centralized data, automated workflows, and role-based access reduce admin overhead and speed up decision-making — freeing educators to focus on teaching.</p>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Reduce duplication and human error with a single source of truth</li>
              <li>• Faster reporting: instant dashboards and exportable reports</li>
              <li>• Scales from single schools to multi-campus districts</li>
              <li>• Improves parent/pupil engagement through timely notifications</li>
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-mono text-blue-400 tracking-[0.28em] uppercase">Quick Features</h4>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {features.map((f, i) => (
                  <div key={i} className="text-slate-300 text-sm">• {f}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
            <div className="p-8 rounded-3xl bg-white/3 border border-white/8 backdrop-blur-xl animate-float">
              <Image src="/erp-screenshot.png" alt="ERP screenshot" width={720} height={420} className="rounded-lg object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/6 text-center">
        <h3 className="text-3xl font-black">See it in action</h3>
        <p className="text-slate-400 mt-4">Try the live demo for a walkthrough of core flows — admissions, fees, attendance and results.</p>
        <div className="mt-8">
          <a href="https://college-a6wjcic21-shobhitshuklas-projects.vercel.app" target="_blank" rel="noreferrer" className="btn-premium px-8 py-4 rounded-full font-bold">Open Live Demo</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
