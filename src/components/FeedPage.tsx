"use client"

import { useState } from "react"
import PostCard from "./PostCard"

type Post = {
  id: number
  author: string
  handle: string
  content: string
  likes: number
  liked: boolean
  images?: string[]
  avatar: string
  verified: boolean
}

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([
    { 
      id: 1, 
      author: "Prazerdu", 
      handle: "@DevPrazerdu", 
      content: "programming is like", 
      likes: 193, 
      liked: false,
      images: ["https://i.pinimg.com/736x/db/11/83/db118340dd1903ea21289662d09b7d0d.jpg"],
      avatar: "https://i.pinimg.com/736x/d0/d3/ce/d0d3cec63bd51f08075d8894caf56f42.jpg",
      verified: false
    },
    { 
      id: 2,
      author: "shadcn",
      handle: "@shadcn", 
      content: "This is madness. What are we doing!", 
      likes: 494, 
      liked: false, 
      images: ["https://pixeldrain.com/api/file/KMykziap"],
      avatar: "https://i.pinimg.com/736x/c4/d7/0f/c4d70f41f127b3ba52c6818a65c378df.jpg",
      verified: true
    },
    { 
      id: 3,
      author: "dax",
      handle: "@thdxr", 
      content: "we're looking to talk to someone who has experience building autocomplete models like supermaven or cursor tab", 
      likes: 391, 
      liked: false, 
      avatar: "https://pixeldrain.com/api/file/DFBRnssn",
      verified: true
    },
    { 
      id: 4,
      author: "Theo - t3.gg",
      handle: "@theo", 
      content: "Pretty cool having my videos cited in a WSJ article, ty Christopher Mims for reaching out!", 
      likes: 133, 
      liked: false, 
      images: ['https://pixeldrain.com/api/file/J5neea1Q'],
      avatar: "https://pixeldrain.com/api/file/LyCrWJzQ",
      verified: true
    },
  ])

  const handleLike = (id: number) => {
    setPosts(
      posts.reduce<Post[]>((acc, post) => {
        if (post.id === id) {
          acc.push({ ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 })
        } else {
          acc.push(post)
        }
        return acc
      }, [])
    )
  }

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={handleLike} />
      ))}
    </div>
  )
}
