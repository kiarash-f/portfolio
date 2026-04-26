import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kiarash Fayaz — Backend Engineer',
  description:
    'Backend engineer with 2+ years building production REST APIs. Specialized in Node.js, NestJS, TypeScript. Based in Germany, open to remote roles.',
  keywords: ['backend engineer', 'Node.js', 'NestJS', 'TypeScript', 'Germany', 'remote', 'REST API'],
  openGraph: {
    title: 'Kiarash Fayaz — Backend Engineer',
    description:
      'Backend engineer specialized in Node.js, NestJS, TypeScript. Open to remote roles.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-bg text-zinc-100 antialiased">{children}</body>
    </html>
  )
}
