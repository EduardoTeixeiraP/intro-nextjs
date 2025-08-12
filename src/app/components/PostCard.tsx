"use client"

import Image from "next/image"
import { LikeButton } from "./LikeButton"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Verified } from "lucide-react"

type PostProps = {
  username: string
  avatarUrl: string
  images: string[]
  caption: string
  verified?: boolean
}

export function PostCard({ username, avatarUrl, images, caption, verified = false }: PostProps) {
  const [current, setCurrent] = useState(0)
  const total = images.length

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % total)
  }

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }

  return (
    <div className="bg-white w-full max-w-md mx-auto">
      {/* User */}
      <div className="flex items-center p-4">
        <Image
          src={avatarUrl}
          alt={username}
          width={40}
          height={40}
          className="w-9 h-9 rounded-full object-cover"
        />
        <div className="ml-3 flex items-center space-x-1">
          <span className="font-semibold text-gray-800">{username}</span>
          {verified && (
            <Verified size={16} className="text-blue-500"/>
          )}
        </div>
      </div>

      {/* Imagens */}
      <div className="relative w-full min-h-[600px] overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        ))}

        {total > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full text-white hover:bg-black/70"
            >
              <ChevronLeft size={24} className=""/>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full text-white hover:bg-black/70"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      <div className="p-4 space-y-2 border-b border-neutral-300">
        <LikeButton />
        <p className="text-black text-sm">
          <span className="font-semibold">{username}</span>{" "}
          {caption}
        </p>
      </div>
    </div>
  )
}
