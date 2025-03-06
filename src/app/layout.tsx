import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ProjectContextProvider } from '@/lib/ProjectContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio website built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ProjectContextProvider>
          {children}
        </ProjectContextProvider>
      </body>
    </html>
  )
}
