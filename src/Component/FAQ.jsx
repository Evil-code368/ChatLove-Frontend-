import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    id: 1,
    question: 'What is ChatLove?',
    answer:
      'ChatLove is a free anonymous chat website that connects you with random strangers online. No signup, no phone number, and no personal information are required. Just enter your name, click Start Chat, and begin talking instantly.',
  },
  {
    id: 2,
    question:'Why Choose ChatLove?',
    answer:
       'Free stranger chat without registration. Random anonymous text chat worldwide. Fast matching with real people.'
  },
  {
    id: 3,
    question: 'Is it free to use?',
    answer:
      'Yes. ChatLove is completely free for anonymous text chatting. You can enjoy the chat experience without any cost or hidden fees.',
  },
  {
    id: 4,
    question: 'Do I need to create an account?',
    answer:
      'No account is required to use the basic chat experience. You can jump in quickly and start chatting with a random stranger in a few steps.',
  },
  {
    id: 5,
    question: 'Is the chat anonymous?',
    answer:
      'The platform is built around anonymous chat experiences, so you can talk without sharing personal details unless you choose to do so.',
  },
  {
    id: 6,
    question: 'How do I report inappropriate behavior?',
    answer:
      'If someone behaves badly or violates the community rules, you can use the Report page or report the user directly from the chat experience to alert the moderation team.',
  },
  {
    id: 7,
    question: 'Can I chat safely?',
    answer:
      'Yes. We encourage respectful communication and recommend not sharing personal information such as your address, phone number, or financial details during chat.',
  },
  {
    id: 8, 
    question: 'Is ChatLove an Omegle alternative?',
    answer: 
    'yes. ChatLove offers anonymous random text chat similar to Omegle, with a focus on privacy and safety.'
  },
  {
    id: 9,
    question:'Can I use ChatLove on my phone?',
    answer:'Yes. FunChat is fully mobile-friendly and works on all Android and iOS smartphones and tablets through any browser — Chrome, Safari, Firefox. No app download from Play Store or App Store is required.'
  },
  {id: 10,
    question: 'Is ChatLove alternative of ChatBlink, StrangerLine, OpenTalk?',
    answer: 'Yes. ChatLove is an alternative to ChatBlink, StrangerLine, and OpenTalk, providing a similar anonymous chat experience with a focus on user privacy and safety.'
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState([1]);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => setOpenItems(faqData.map((item) => item.id));
  const collapseAll = () => setOpenItems([]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-4 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200">
            FAQs
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Everything you need to know before starting your next anonymous conversation.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={expandAll}
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2.5 text-sm font-semibold text-purple-200 transition hover:bg-purple-500/20"
          >
            Collapse All
          </button>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.includes(item.id);

            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/10 backdrop-blur-xl"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-white">{item.question}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-xl text-purple-200">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 bg-slate-900/60 px-6 py-5 text-base leading-7 text-gray-300">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500"
          >
            Back to Home
          </Link>
          <a
            href="/Contact"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
