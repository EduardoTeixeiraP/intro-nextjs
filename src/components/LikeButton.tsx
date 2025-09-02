import { Heart } from "lucide-react"
import clsx from "clsx"

type Props = {
  liked: boolean
  count: number
  onClick: () => void
}

export function LikeButton({ liked, count, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-1 transition-colors hover:text-red-500"
    >
      <Heart
        className={clsx(
          "h-4 mb-0.5 transition-colors",
          liked
            ? "fill-red-500 stroke-red-500"
            : "stroke-current"
        )}
      />
      <span>{count} curtidas</span>
    </button>
  )
}
