import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-zinc-800/60 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-accent text-sm font-semibold tracking-wider">KF</span>
          <p className="text-xs text-zinc-500 font-mono">
            Kiarash Fayaz · Backend Engineer · {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kiarash-f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-mono"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/amirmfayaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-mono"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
