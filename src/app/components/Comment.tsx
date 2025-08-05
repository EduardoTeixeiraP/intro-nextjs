
export type CommentType = {
  id: number
  name: string
  message: string
  timestamp: string
}

export default function Comment({ comment }: { comment: CommentType }) {
  return (
    <div className="border rounded p-4 shadow mb-4">
      <h3 className="font-bold">{comment.name}</h3>
      <p className="text-gray-700">{comment.message}</p>
      <small className="text-gray-500">{comment.timestamp}</small>
    </div>
  )
}
