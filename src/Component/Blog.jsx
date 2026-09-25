import { Link } from 'react-router-dom';

const blogPosts = [
  {
    keyword: 'free stranger chat without registration',
    path: '/free-stranger-chat',
    title: 'Free Stranger Chat Without Registration',
    description: 'Learn how to start a private conversation with someone new without creating an account, and how to chat responsibly online.',
    status: 'Featured guide',
  },
  {
    keyword: 'anonymous text chat online',
    path: '/anonymous-text-chat',
    title: 'Anonymous Text Chat Online',
    description: 'A practical guide to meeting new people through anonymous text conversations while protecting your privacy.',
    status: 'Published',
  },
  {
    keyword: 'chat with strangers online free',
    path: '/chat-with-strangers-online',
    title: 'Chat With Strangers Online Free',
    description: 'Explore simple ways to start free online conversations and make a first message feel natural.',
    status: 'Published',
  },
  {
    keyword: 'random text chat with strangers',
    path: '/random-text-chat',
    title: 'Random Text Chat With Strangers',
    description: 'What to expect from random text matching, how to find common ground, and when to leave a chat.',
    status: 'Published',
  },
  {
    keyword: 'safe stranger chat website',
    path: '/safe-stranger-chat',
    title: 'How to Choose a Safe Stranger Chat Website',
    description: 'Use this safety checklist to evaluate chat rules, privacy choices, reporting tools, and healthy boundaries.',
    status: 'Published',
  },
  {
    keyword: 'omegle alternative text chat',
    path: '/omegle-alternative',
    title: 'Omegle Alternative for Text Chat',
    description: 'Compare the features that matter when choosing a modern text-only alternative for meeting strangers online.',
    status: 'Published',
  },
  {
    keyword: 'online chat without signup',
    path: '/online-chat-no-signup',
    title: 'Online Chat Without Signup',
    description: 'Understand how no-signup chat works and what you should know before starting a conversation.',
    status: 'Published',
  },
  {
    keyword: 'meet strangers anonymously',
    path: '/meet-strangers-anonymously',
    title: 'How to Meet Strangers Anonymously',
    description: 'Simple conversation ideas and privacy habits for making new online connections without oversharing.',
    status: 'Published',
  },
  {
    keyword: 'anonymous chat room',
    path: '/anonymous-chat-room',
    title: 'What Is an Anonymous Chat Room?',
    description: 'A beginner-friendly explanation of anonymous chat rooms, etiquette, moderation, and personal safety.',
    status: 'Published',
  },
  {
    keyword: 'random chat room free',
    path: '/random-chat-room',
    title: 'Free Random Chat Room Guide',
    description: 'Find out how free random chat rooms work and how to make casual conversations more enjoyable.',
    status: 'Published',
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="relative overflow-hidden border-b border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),_transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <Link to="/" className="text-sm font-semibold text-purple-200 hover:text-white">ChatLove home</Link>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">ChatLove guides</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">Better conversations start with better questions.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
            Practical guides to anonymous chat, meeting new people online, and staying in control of your privacy.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-20" aria-labelledby="all-guides">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">Browse the library</p>
            <h2 id="all-guides" className="mt-3 text-3xl font-bold text-white sm:text-4xl">Guides for meeting people online</h2>
          </div>
          <p className="text-sm text-gray-400">{blogPosts.length} published guides</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article key={post.path} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/[0.07]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-cyan-300">Guide {String(index + 1).padStart(2, '0')}</span>
                <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                  {post.status}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">{post.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-gray-300">{post.description}</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Target keyword</p>
                <p className="mt-2 text-sm text-gray-300">{post.keyword}</p>
                <p className="mt-2 break-all font-mono text-xs text-gray-500">chatlove.pro{post.path}</p>
                <Link to={post.path} className="mt-5 inline-flex font-semibold text-purple-200 hover:text-white">Read guide <span aria-hidden="true" className="ml-2">-&gt;</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
