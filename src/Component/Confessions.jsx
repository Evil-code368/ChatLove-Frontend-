import { useEffect, useState } from 'react'
import { socket } from '../Socket'

const Confessions = () => {
  const [posts, setPosts] = useState([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [commentInputs, setCommentInputs] = useState({})
  const [likedPostIds, setLikedPostIds] = useState(new Set())
  const [formError, setFormError] = useState('')

  useEffect(() => {
    const receiveConfessions = (nextPosts) => setPosts(nextPosts)
    socket.on('confessions', receiveConfessions)
    return () => socket.off('confessions', receiveConfessions)
  }, [])

  const submitConfession = (event) => {
    event.preventDefault()
    const trimmedName = name.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedMessage) {
      setFormError('Please add your name and confession before posting.')
      return
    }

    socket.emit('add-confession', { name: trimmedName, message: trimmedMessage })
    setName('')
    setMessage('')
    setFormError('')
  }

  const toggleLike = (postId) => {
    const liked = !likedPostIds.has(postId)
    setLikedPostIds((currentIds) => {
      const nextIds = new Set(currentIds)
      if (liked) nextIds.add(postId)
      else nextIds.delete(postId)
      return nextIds
    })
    socket.emit('like-confession', { confessionId: postId, liked })
  }

  const addComment = (event, postId) => {
    event.preventDefault()
    const comment = (commentInputs[postId] || '').trim()
    if (!comment) return

    socket.emit('comment-confession', { confessionId: postId, text: comment })
    setCommentInputs((currentInputs) => ({ ...currentInputs, [postId]: '' }))
  }

  const formatDate = (date) => new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(date))

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-purple-300">The open journal</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">Confessions</h1>
          <p className="mt-4 text-lg leading-8 text-slate-400">Say the thing you have been carrying. Share honestly, read kindly.</p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <section className="rounded-3xl border border-purple-300/15 bg-gradient-to-br from-purple-950/70 to-slate-900 p-6 shadow-2xl shadow-purple-950/20 sm:p-8 lg:sticky lg:top-8">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Leave a confession</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">Your name appears with your post. Keep it real and respectful.</p>
              </div>
              <span className="shrink-0 rounded-full border border-purple-300/20 bg-purple-300/10 px-3 py-1 text-xs font-bold text-purple-200">{posts.length}/10</span>
            </div>
            <form onSubmit={submitConfession} className="space-y-5">
              <label className="block text-sm font-semibold text-slate-200">
                Your name
                <input value={name} onChange={(event) => setName(event.target.value)} maxLength={40} placeholder="What should we call you?" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400" />
              </label>
              <label className="block text-sm font-semibold text-slate-200">
                Your confession
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} maxLength={500} rows={6} placeholder="Write what is on your mind..." className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400" />
                <span className="mt-2 block text-right text-xs text-slate-500">{message.length}/500</span>
              </label>
              {formError && <p className="text-sm text-rose-300" role="alert">{formError}</p>}
              <button type="submit" className="w-full rounded-2xl bg-purple-500 px-5 py-3.5 font-bold text-white shadow-lg shadow-purple-950/40 transition hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300">Post confession</button>
            </form>
          </section>

          <section aria-label="Community confessions" className="space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold">Recent confessions</h2>
              <span className="text-sm text-slate-500">Newest first</span>
            </div>
            {posts.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-white/15 px-6 py-16 text-center">
                <p className="text-lg font-semibold text-slate-300">The page is quiet for now.</p>
                <p className="mt-2 text-sm text-slate-500">Be the first person to share something honest.</p>
              </div>
            ) : posts.map((post, index) => (
              <article key={post.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-black/10 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-purple-200">{post.name}</h3>
                    <time className="mt-1 block text-xs text-slate-500" dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">#{index + 1}</span>
                </div>
                <p className="mt-5 whitespace-pre-wrap break-words text-base leading-7 text-slate-200">{post.message}</p>
                <div className="mt-6 flex items-center gap-5 border-t border-white/10 pt-4">
                  <button type="button" onClick={() => toggleLike(post.id)} aria-pressed={likedPostIds.has(post.id)} className={`text-sm font-semibold transition ${likedPostIds.has(post.id) ? 'text-pink-300' : 'text-slate-400 hover:text-pink-300'}`}>
                    {likedPostIds.has(post.id) ? 'Liked' : 'Like'} {post.likes > 0 && `(${post.likes})`}
                  </button>
                  <span className="text-sm text-slate-500">{post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}</span>
                </div>
                {post.comments.length > 0 && <div className="mt-4 space-y-3 border-l-2 border-purple-400/20 pl-4">{post.comments.map((comment) => <p key={comment.id} className="text-sm leading-6 text-slate-400">{comment.text}</p>)}</div>}
                <form onSubmit={(event) => addComment(event, post.id)} className="mt-5 flex gap-2">
                  <input value={commentInputs[post.id] || ''} onChange={(event) => setCommentInputs((currentInputs) => ({ ...currentInputs, [post.id]: event.target.value }))} maxLength={240} placeholder="Add a kind comment..." aria-label={`Comment on ${post.name}'s confession`} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-purple-400" />
                  <button type="submit" className="rounded-xl border border-purple-300/30 px-4 py-2 text-sm font-bold text-purple-200 transition hover:bg-purple-400/10">Comment</button>
                </form>
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  )
}

export default Confessions
