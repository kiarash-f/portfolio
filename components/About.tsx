import { personal } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader index="01" title="About Me" />

        <div className="mt-12 grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Summary */}
          <div className="md:col-span-2">
            <p className="text-zinc-300 leading-relaxed text-base">{personal.summary}</p>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Languages */}
            <div>
              <h3 className="text-[10px] font-mono text-zinc-600 tracking-[0.2em] uppercase mb-4">
                Languages
              </h3>
              <div className="space-y-2.5">
                {personal.languages.map((l) => (
                  <div key={l.lang} className="flex items-center justify-between">
                    <span className="text-sm text-zinc-300">{l.lang}</span>
                    <span className="text-xs font-mono text-accent">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-[10px] font-mono text-zinc-600 tracking-[0.2em] uppercase mb-4">
                Certifications
              </h3>
              <div className="space-y-4">
                {personal.certifications.map((c) => (
                  <div key={c.title}>
                    <p className="text-sm text-zinc-300 leading-snug">{c.title}</p>
                    <p className="text-xs text-zinc-600 font-mono mt-1">
                      {c.platform} · {c.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div>
      <p className="text-accent font-mono text-xs mb-2 tracking-widest">{index}</p>
      <h2 className="text-3xl font-bold text-zinc-100">{title}</h2>
      <div className="w-10 h-px bg-accent mt-4" />
    </div>
  )
}
