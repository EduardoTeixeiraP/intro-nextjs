'use client'

import Products from '@/app/products/page'
import { useEffect, useState } from 'react'

export default function LiveClock() {
  const [dateTime, setDateTime] = useState(getFormattedDateTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getFormattedDateTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
        <h1 className="flex justify-center text-2xl font-bold mb-4">Data e Hora do servidor</h1>
        <p className="flex justify-center text-2xl font-medium">{dateTime}</p>
        <div className="grid justify-center text-x2 mt-10">
            <h1 className="flex justify-center text-2xl font-bold mb-4">Lista de produtos</h1>
            <Products/>
        </div>
    </div>
  )
}

function getFormattedDateTime() {
  const now = new Date()
  const date = now.toLocaleDateString('pt-BR') // formato: dd/mm/yyyy
  const time = now.toLocaleTimeString('pt-BR') // formato: hh:mm:ss
  return `${date} - ${time}`
}
