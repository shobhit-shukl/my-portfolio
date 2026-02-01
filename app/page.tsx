import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

      {/* Profile Image */}
      <div className="mb-6">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full border-4 border-gray-300"
        />
      </div>

      {/* Intro */}
      <h1 className="text-4xl font-bold mb-2">
        Hi, I&apos;m a <span className="text-blue-600">Full Stack Web Developer</span> 👋
      </h1>

      <p className="max-w-2xl text-gray-600 mb-4">
        I am a <b>Full Stack Web Developer</b> with hands-on experience in building
        real-world applications, including frontend interfaces and backend APIs.
        Currently working at <b>Vasu Travellers</b> as a <b>Frontend Developer</b>
        for the last <b>3 months</b>, while actively building backend systems and APIs.
      </p>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tech Stack & Skills ⚙️</h2>
        <p className="text-gray-700">
          HTML • CSS • JavaScript • React.js • Next.js • Tailwind CSS • Bootstrap •
          Node.js • Express.js • MongoDB • Supabase • REST APIs • Git • GitHub
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/about"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          About Me
        </Link>

        <Link
          href="/contact"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
        >
          Contact
        </Link>

        <a
          href="https://github.com/your-github-username"
          target="_blank"
          className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
        >
          GitHub
        </a>

        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
}
