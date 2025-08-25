'use client'

import { IoPause, IoPlay } from "react-icons/io5";
import { useState } from "react"

export default function BotaoReproducao() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className="flex items-center text-5xl p-8 bg-neutral-800 text-white rounded-full hover:bg-neutral-900 transition"
    >
      {isPlaying ? <IoPause/> : <IoPlay/>}
    </button>
  )
}
