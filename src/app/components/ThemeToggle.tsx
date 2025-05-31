'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`px-10 py-4 rounded transition-colors duration-300
        ${isDark ? 'bg-white text-black' : 'bg-black text-white'}
      `}
    >Tema {isDark ? 'claro' : 'escuro'}</button>
  )
}
