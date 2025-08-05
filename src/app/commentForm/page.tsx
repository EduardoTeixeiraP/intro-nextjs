'use client'

import { useState } from 'react'
import CommentForm from '../components/CommentForm'
import CommentList from '../components/CommentList'
import { CommentType } from '../components/Comment'

export default function App() {
  const [comments, setComments] = useState<CommentType[]>([])

  const addComment = (comment: CommentType) => {
    setComments((prev) => [comment, ...prev])
  }

  return (
    <div className="flex justify-center items-center min-w-screen min-h-screen bg-neutral-50">
        <div className="min-w-[33rem] px-6 py-8 bg-white rounded border border-neutral-200">
            <h1 className="text-2xl font-bold mb-6">Sistema de Comentários</h1>
            <CommentForm onAddComment={addComment} />
            <CommentList comments={comments} />
        </div>
    </div>
  )
}
