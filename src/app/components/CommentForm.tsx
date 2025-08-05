
import { useState } from 'react'
import { CommentType } from './Comment'
import { Button } from './Button'

type CommentFormProps = {
  onAddComment: (comment: CommentType) => void
}

export default function CommentForm({ onAddComment }: CommentFormProps) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    const newComment: CommentType = {
      id: Date.now(),
      name,
      message,
      timestamp: new Date().toLocaleString(),
    }

    onAddComment(newComment)
    setName('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-neutral-300 rounded"
        required
      />
      <textarea
        placeholder="Sua mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border border-neutral-300 rounded"
        required
      />
      <Button label='Enviar'/>
    </form>
  )
}
