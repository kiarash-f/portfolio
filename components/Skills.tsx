import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader index="03" title="Skills" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-[10px] font-mono text-zinc-600 tracking-[0.2em] uppercase mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 bg-card border border-zinc-800 text-zinc-400 rounded-sm hover:border-accent/40 hover:text-zinc-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
