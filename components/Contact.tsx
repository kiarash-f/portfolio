import { personal } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader index="04" title="Contact" />

        <div className="mt-12 max-w-xl">
          <p className="text-zinc-400 leading-relaxed mb-10">
            I&apos;m currently open to backend engineering roles — remote preferred,
            English-first teams. Feel free to reach out via email or connect on LinkedIn.
          </p>

          <div>
            <ContactRow
              label="Email"
              display={personal.email}
              href={`mailto:${personal.email}`}
            />
            <ContactRow
              label="LinkedIn"
              display="linkedin.com/in/amirmfayaz"
              href={personal.linkedin}
              external
            />
            <ContactRow
              label="GitHub"
              display="github.com/kiarash-f"
              href={personal.github}
              external
            />
            <ContactRow label="Location" display={personal.location} href={null} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  label,
  display,
  href,
  external = false,
}: {
  label: string
  display: string
  href: string | null
  external?: boolean
}) {
  const inner = (
    <div className="flex items-center gap-5 py-4 border-b border-zinc-800/70 group">
      <span className="text-[10px] font-mono text-zinc-600 tracking-[0.15em] uppercase w-20 shrink-0">
        {label}
      </span>
      <span
        className={`text-sm flex-1 truncate ${
          href ? 'text-zinc-300 group-hover:text-accent transition-colors' : 'text-zinc-500'
        }`}
      >
        {display}
      </span>
      {href && (
        <svg
          className="text-zinc-700 group-hover:text-accent transition-colors shrink-0"
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {external ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          )}
        </svg>
      )}
    </div>
  )

  if (!href) return inner

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {inner}
    </a>
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
