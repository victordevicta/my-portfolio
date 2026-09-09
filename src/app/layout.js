import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Victor de Victa | Software Engineer",
  description:
    'Portfolio of Victor de Victa, a full-stack Software Engineer building web applications, backend services and integrations across React, Next.js, Node.js and more.',
  keywords: [
    'Victor de Victa',
    'Software Engineer',
    'Full-stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'Portfolio',
  ],
  authors: [{ name: 'Victor de Victa' }],
  openGraph: {
    title: 'Victor de Victa | Software Engineer',
    description:
      'Full-stack Software Engineer building web applications, backend services and integrations.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
