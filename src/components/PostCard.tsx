import Image from "next/image"
import { LikeButton } from "./LikeButton"
import { Share, MessageCircle, Verified } from "lucide-react"

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

type Props = {
  post: Post
  onLike: (id: number) => void
}

export default function PostCard({ post, onLike }: Props) {
  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-3">
        <Image
          width={1000}
          height={1000}
          src={post.avatar}
          alt={`${post.author} avatar`}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex items-center gap-0.5">
            <span className="font-bold">{post.author}</span>
            {post.verified && (
              <Verified className="h-5 w-5 fill-blue-500 text-white" />
            )}
            <span className="text-gray-500">{post.handle}</span>
            <span className="text-gray-400 text-xs ml-1">· 1h</span>
          </div>

          <p className="text-gray-800 my-2">{post.content}</p>

          {post.images && post.images.length > 0 && (
            <div
              className="grid gap-2 mb-3"
              style={{ gridTemplateColumns: post.images.length === 1 ? "1fr" : "1fr 1fr" }}
            >
              {post.images.map((img, index) => (
                <Image
                  width={1000}
                  height={1000}
                  key={index}
                  src={img}
                  alt={`Post image ${index + 1}`}
                  className="w-full h-auto rounded-lg object-cover"
                />
              ))}
            </div>
          )}

          <div className="flex items-center justify-between text-gray-500 text-sm">
            <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>Comentar</span>
            </button>
            <LikeButton
              liked={post.liked}
              count={post.likes}
              onClick={() => onLike(post.id)}
            />
            <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
              <Share className="h-4 w-4" />
              <span>Compartilhar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
