'use client'

// import { ThemeProvider } from 'next-themes'
import './globals.css'

import { GoogleOAuthProvider } from  '@react-oauth/google'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=''>
        <GoogleOAuthProvider clientId='process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID! || ""'>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  )
}