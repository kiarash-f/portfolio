import { personal } from '@/lib/data'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#2a2a3a 1px, transparent 1px), linear-gradient(90deg, #2a2a3a 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Radial glow — accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 10% 60%, rgba(34,211,165,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative w-full max-w-5xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — content */}
        <div className="space-y-7">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-accent text-xs font-mono tracking-wide">
              Open to remote opportunities
            </span>
          </div>

          {/* Name */}
          <div>
            <p className="text-zinc-500 font-mono text-sm mb-2 tracking-wide">Hi, I&apos;m</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-100 leading-[1.1]">
              Kiarash Fayaz
            </h1>
          </div>

          {/* Title */}
          <div>
            <p className="text-xl md:text-2xl font-semibold text-accent">
              {personal.title}
            </p>
            <p className="text-zinc-400 text-base mt-1 font-mono">{personal.titleStack}</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <svg
              width="13"
              height="13"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{personal.location}</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#projects"
              className="px-6 py-2.5 bg-accent text-bg text-sm font-semibold rounded-sm hover:bg-accent-dim transition-colors"
            >
              View Projects
            </a>
            <a
              href="/Kiarash_Fayaz_Resume.pdf"
              download
              className="px-6 py-2.5 border border-zinc-700 text-zinc-300 text-sm font-semibold rounded-sm hover:border-accent/50 hover:text-accent transition-colors flex items-center gap-2"
            >
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 border border-zinc-700 text-zinc-300 text-sm font-semibold rounded-sm hover:border-zinc-500 hover:text-zinc-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right — decorative code snippet */}
        <div className="hidden lg:block">
          <div className="bg-card border border-zinc-800 rounded-md overflow-hidden">
            {/* Faux title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/60 border-b border-zinc-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-zinc-500 text-xs font-mono">engineer.ts</span>
            </div>
            {/* Code */}
            <div className="p-5 font-mono text-sm leading-relaxed space-y-0.5">
              <div>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-zinc-200">engineer</span>{' '}
                <span className="text-zinc-500">=</span>{' '}
                <span className="text-zinc-500">{'{'}</span>
              </div>
              <div className="pl-5">
                <span className="text-blue-300">name</span>
                <span className="text-zinc-500">: </span>
                <span className="text-green-400">&quot;Kiarash Fayaz&quot;</span>
                <span className="text-zinc-600">,</span>
              </div>
              <div className="pl-5">
                <span className="text-blue-300">location</span>
                <span className="text-zinc-500">: </span>
                <span className="text-green-400">&quot;Niederkassel, DE&quot;</span>
                <span className="text-zinc-600">,</span>
              </div>
              <div className="pl-5">
                <span className="text-blue-300">stack</span>
                <span className="text-zinc-500">: </span>
                <span className="text-zinc-500">[</span>
                <span className="text-yellow-300">&quot;NestJS&quot;</span>
                <span className="text-zinc-600">, </span>
                <span className="text-yellow-300">&quot;Node.js&quot;</span>
                <span className="text-zinc-600">, </span>
                <span className="text-yellow-300">&quot;TypeScript&quot;</span>
                <span className="text-zinc-500">]</span>
                <span className="text-zinc-600">,</span>
              </div>
              <div className="pl-5">
                <span className="text-blue-300">databases</span>
                <span className="text-zinc-500">: </span>
                <span className="text-zinc-500">[</span>
                <span className="text-yellow-300">&quot;PostgreSQL&quot;</span>
                <span className="text-zinc-600">, </span>
                <span className="text-yellow-300">&quot;MongoDB&quot;</span>
                <span className="text-zinc-600">, </span>
                <span className="text-yellow-300">&quot;Redis&quot;</span>
                <span className="text-zinc-500">]</span>
                <span className="text-zinc-600">,</span>
              </div>
              <div className="pl-5">
                <span className="text-blue-300">available</span>
                <span className="text-zinc-500">: </span>
                <span className="text-teal-400">true</span>
                <span className="text-zinc-600">,</span>
              </div>
              <div>
                <span className="text-zinc-500">{'}'}</span>
              </div>
              <div className="pt-2 text-zinc-600">
                <span className="text-zinc-500">// </span>
                open to remote · English-first teams
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600 opacity-70">
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <svg
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
