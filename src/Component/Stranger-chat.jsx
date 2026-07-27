import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import previewImage from "../assets/image.webp";
const StrangerChat = () => {
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const howItWorksRef = useRef(null);

  const handleHowItWorks = () => {
    if (showHowItWorks) {
      setShowHowItWorks(false);
      return;
    }

    setShowHowItWorks(true);
    setTimeout(() => {
      howItWorksRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="text-2xl font-bold text-white">
            Chat<span className="text-purple-400">Love</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="/stranger-chat" className="font-medium text-gray-300 transition hover:text-white">
              Home
            </a>
            <a href="/About" className="font-medium text-gray-300 transition hover:text-white">
              About
            </a>
            <a href="/Report" className="font-medium text-gray-300 transition hover:text-white">
              Report
            </a>
          </div>

          <button className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-500">
            Login
          </button>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.22),_transparent_30%)]" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <span className="mb-6 inline-block rounded-full border border-purple-400/30 bg-purple-500/15 px-4 py-2 text-sm font-medium text-purple-200">
              🌎 Connect with  random people worldwide
            </span>

            <h1 className="mb-6 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Meet New
              <span className="block text-purple-300">Strangers Instantly</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-gray-300">
              Start anonymous conversations, make new friends, and enjoy real-time chats in a fun and simple space.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/random-chat" className="inline-block">
                <button className="w-full rounded-2xl bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-500 sm:w-auto">
                  Start Chatting
                </button>
              </Link>

              <button
                onClick={handleHowItWorks}
                className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/20"
              >
                {showHowItWorks ? "Hide How It Works" : "How It Works"}
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <h3 className="text-2xl font-bold">10K+</h3>
                <p className="text-sm text-gray-400">Daily Users</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <h3 className="text-2xl font-bold">150+</h3>
                <p className="text-sm text-gray-400">Countries</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-sm text-gray-400">Online</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
                <span className="text-sm font-medium text-gray-200">5,231 users online</span>
              </div>

              <img
                src={previewImage}
                alt="Chat Preview"
                className="h-56 w-full rounded-2xl object-cover"
              />

              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                <p className="font-semibold">Instant matching</p>
                <p className="mt-1 text-emerald-200">Meet someone new in seconds.</p>
              </div>

              <Link to="/random-chat" className="mt-6 inline-block w-full">
                <button className="w-full rounded-2xl bg-emerald-500 px-5 py-4 text-lg font-bold text-white transition hover:bg-emerald-400">
                  Start Random Chat →
                </button>
              </Link>
            </div>

            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/30 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>
        </div>
      </section>

      {showHowItWorks && (
        <section ref={howItWorksRef} className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center lg:text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                Simple steps
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/15 to-slate-800 p-7 shadow-lg shadow-purple-900/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-xl font-bold text-purple-200">
                  
                </div>
                <h3 className="mb-2 text-xl font-semibold">Join</h3>
                <p className="text-gray-300">Click Start Chatting and enter your name and age.</p>
              </div>

              <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-slate-800 p-7 shadow-lg shadow-cyan-900/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-xl font-bold text-cyan-200">
                  
                </div>
                <h3 className="mb-2 text-xl font-semibold">Connect</h3>
                <p className="text-gray-300">We match you with another person quickly and safely.</p>
              </div>

              <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 to-slate-800 p-7 shadow-lg shadow-emerald-900/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-xl font-bold text-emerald-200">
                  
                </div>
                <h3 className="mb-2 text-xl font-semibold">Chat</h3>
                <p className="text-gray-300">Start a conversation and enjoy meeting new people instantly.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">
                Chat<span className="text-purple-400">Love</span>
              </h3>
              <p className="text-sm text-gray-400">
                Connect with strangers and make new friends instantly.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/" className="transition hover:text-white">
                    Random Chat
                  </a>
                </li>
                <li>
                  <a href="/About" className="transition hover:text-white">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/safety" className="transition hover:text-white">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="/Contact" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/privacypolicy" className="transition hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="./Termscondition" className="transition hover:text-white">
                    Terms & Condition
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 ChatLove. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default StrangerChat;
