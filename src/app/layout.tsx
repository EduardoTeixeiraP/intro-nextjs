'use client'

import { ThemeProvider } from 'next-themes'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=''>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}