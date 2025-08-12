"use client"

import { Heart } from "lucide-react"
import { useState } from "react"
import clsx from "clsx"

export function LikeButton() {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setLiked(!liked)
    setCount((prev) => prev + (liked ? -1 : 1))
  }

  return (
    <button
      onClick={handleClick}
      className="flex flex-col py-2 bg-white transition-transform duration-200"
    >
      <Heart
        className={clsx(
          "h-5 transition-colors duration-200",
          liked ? "fill-red-500 stroke-red-500" : "stroke-black"
        )}
      />
      <span className="text-black font-semibold text-md">{count} curtidas</span>
    </button>
  )
}
