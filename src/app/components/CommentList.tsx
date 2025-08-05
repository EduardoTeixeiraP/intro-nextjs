
import Comment, { CommentType } from './Comment'

type CommentListProps = {
  comments: CommentType[]
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return <p className="text-gray-500">Nenhum comentário ainda.</p>
  }

  return (
    <div>
      {comments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  )
}
