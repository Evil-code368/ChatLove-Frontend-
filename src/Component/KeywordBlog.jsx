import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const blogData = {
  'free-stranger-chat': {
    keyword: 'free stranger chat without registration',
    title: 'Free Stranger Chat Without Registration: A Safer Way to Meet People Online',
    description: 'Learn how free stranger chat without registration works, what to talk about, how to protect your privacy, and how to start a respectful anonymous conversation on ChatLove.',
    answer: 'Free stranger chat without registration lets you begin a text conversation with a new person without creating a full account. You can choose a simple display name, start matching, and decide how much you want to share. No registration does not mean no responsibility: protect your identity, follow the rules, and leave whenever a conversation feels uncomfortable.',
    sections: [
      ['Why people choose chat without registration', 'Traditional social platforms ask you to create a profile, confirm an email address, choose a photo, and connect your activity to a lasting identity. That can be useful for a public network, but it feels like too much work for a short conversation. Anonymous chat puts the conversation before the profile. People use it to take a break, practice talking with someone from another country, explore a new perspective, or simply meet someone outside their usual routine. Removing registration also lowers social pressure because you do not need to write a perfect bio before saying hello.'],
      ['How free stranger chat works', 'Open the chat page in a current browser, choose a nickname that does not identify you, and start matching. The service looks for another available person who wants to chat. Begin with a simple question, then choose whether to continue, skip, or leave. Matching time can change with traffic and availability, so a short wait does not necessarily mean anything is wrong. The experience is designed to be quick, but speed should never replace judgment. Check that you are on the correct website and do not download files sent by strangers.'],
      ['Anonymous does not mean invisible', 'Anonymous chat reduces the personal information you volunteer, but no online service should be treated as a magic cloak. Your browser, device, network, and the service itself may process technical information. Other people can also take screenshots or remember details you share. Keep your full name, address, phone number, workplace, school, passwords, payment details, exact location, and verification codes private. Photos can reveal more than expected through backgrounds, uniforms, landmarks, or usernames.'],
      ['Seven habits for safer conversations', 'Use a nickname, trust discomfort early, never send money, avoid suspicious links and files, keep private conversations private, use the report option, and take breaks. You do not need to prove that someone is dangerous before ending a chat. Pressure, insults, threats, repeated requests for personal details, and attempts to move you somewhere less protected are enough reason to leave. Younger users should follow the service age requirements and speak with a trusted adult about online interactions.'],
      ['What to say when a stranger says hello', 'The first message does not need to be clever. Ask what kind of music someone has been listening to, what they are watching, what hobby they would like to learn, which food they recommend, or what place they hope to visit. Answer the question yourself so the exchange feels balanced. Follow the detail in the reply instead of sending a list of unrelated prompts. Avoid opening with questions about exact location, income, school, or relationship status.'],
      ['Using stranger chat on a phone', 'ChatLove works in a mobile browser, so there is no app installation step. Use an updated browser, a private setting where others cannot read your screen, and a reliable connection. Think about your surroundings before starting. Do not reveal a private conversation on a shared screen, and never chat while driving or walking through traffic. Text chat is often a discreet option, but your immediate safety still comes first.'],
      ['Why try ChatLove?', 'ChatLove is designed for people who want to start a real-time text conversation without the weight of a large public profile. The service focuses on quick matching, simple access, and the freedom to remain private while you decide whether a conversation is worth continuing. You control what you reveal, how long you stay, and whether you report behavior that breaks the rules. Start with a nickname, keep personal details private, and treat the person on the other side with respect.'],
      ['A better way to start', 'The value of free stranger chat without registration is that it makes a first conversation easy. The strongest experience is not about collecting the most matches or sharing the most information. It is about finding a respectful exchange, staying aware of your boundaries, and leaving with a good memory rather than a privacy problem. Keep your opening friendly, your personal details limited, and your exit available at all times.'],
    ],
    faq: 'Can I use free stranger chat without registration? Yes. ChatLove lets you start an anonymous text conversation without creating an account. Is it completely private? No online service should be treated as invisible, so never share passwords, payment details, private images, or your exact location.',
  },
  'anonymous-text-chat': {
    keyword: 'anonymous text chat online',
    title: 'Anonymous Text Chat Online: A Practical Guide to Private Conversations',
    description: 'Learn how anonymous text chat online works, how to start a genuine conversation, and how to protect your privacy while meeting new people.',
    answer: 'Anonymous text chat online lets you talk with a new person through written messages without building a public profile first. You can use a nickname, choose what to reveal, and leave when the conversation no longer feels useful or comfortable.',
    sections: [
      ['Why text chat feels easier', 'Text removes some of the pressure that comes with a profile photo, live video, or a carefully written bio. You have a moment to read a message and decide how to respond. That makes it useful for people who enjoy thoughtful conversation, want to practice a language, or simply want a low-pressure break from their usual social circle. The format also puts attention on what someone says rather than on appearance. A good exchange can begin with a shared interest, a curious question, or an unexpected point of view.'],
      ['What to share and what to keep private', 'Being anonymous does not require being distant. You can talk about music, books, films, food, games, travel, study, or creative projects without giving away information that identifies you. Keep your full name, address, phone number, passwords, school, workplace, financial details, and live location private. Be careful with photos and links because backgrounds, usernames, and metadata can reveal more than you intend. A useful rule is to share only details you would be comfortable making public later.'],
      ['How to start a better conversation', 'A specific opening works better than a single hello. Ask what someone has been listening to lately, what skill they would like to learn, or which place they would recommend visiting. Answer your own question too, so the exchange feels balanced. Follow the details in the reply instead of firing off a list of questions. If the conversation becomes repetitive, suggest a light topic such as unusual food, a favorite fictional world, or a small goal for the week.'],
      ['When to end the chat', 'You never owe a stranger a continued conversation. Leave if the person pressures you for private information, sends suspicious links, becomes abusive, or ignores a clear boundary. Report serious or repeated misconduct through the platform tools, then close the conversation. Anonymous chat works best when privacy and kindness operate together: protect your identity, respect the other person, and remember that a quick exit is always an acceptable choice.'],
    ],
    faq: 'Is anonymous text chat really private? It can reduce the personal information you share, but no online service should be treated as completely invisible. Protect your details and follow the platform rules.',
  },
  'chat-with-strangers-online': {
    keyword: 'chat with strangers online free',
    title: 'Chat With Strangers Online Free: How to Make It Worth Your Time',
    description: 'Find out how to chat with strangers online for free, choose good conversation topics, and keep the experience respectful and secure.',
    answer: 'Free online stranger chat is a quick way to meet someone outside your normal routine. The best conversations start with a clear boundary, a friendly question, and the freedom to leave when the match is not a good fit.',
    sections: [
      ['Why people talk to strangers', 'A new conversation can offer something a familiar social feed cannot: surprise. You may hear a story from another country, discover a hobby you have never tried, or practice explaining an idea to someone with a different perspective. Free chat also removes a financial barrier, which makes casual conversation available from a phone or computer. The goal does not need to be a lasting friendship. A short, respectful exchange can still be meaningful.'],
      ['Start with low-pressure topics', 'Good first topics give the other person room to answer without revealing private information. Try music, films, food, games, weekend plans, interesting facts, books, or places they would like to visit. Avoid demanding exact location, income, relationship, or school details. If the person gives a brief response, offer your own answer and ask one related follow-up. Conversation feels natural when both people contribute rather than one person conducting an interview.'],
      ['Make free chat safer', 'Use a nickname and avoid reusing the same handle that identifies you on other sites. Do not send money, passwords, verification codes, private images, or documents. Ignore unexpected downloads and links. If someone uses threats, insults, sexual pressure, or emotional manipulation, end the chat and report the behavior. A free service should never require you to trade away control of your identity or safety.'],
      ['Know when a chat is successful', 'Not every match will become a great conversation. Success can mean finding one shared interest, learning a new viewpoint, or recognizing quickly that the match is not right. Be polite when you can, but do not stay because you feel guilty. The strongest habit is simple: be curious, be honest about your boundaries, and leave the interaction better than you found it.'],
    ],
    faq: 'Do I have to keep talking after I match with someone? No. You can skip or leave a conversation at any time, especially when the tone becomes uncomfortable or disrespectful.',
  },
  'random-text-chat': {
    keyword: 'random text chat with strangers',
    title: 'Random Text Chat With Strangers: What to Expect',
    description: 'A clear guide to random text chat with strangers, including matching, conversation starters, privacy limits, and respectful exits.',
    answer: 'Random text chat matches you with an available person for a written conversation. Because the match is unpredictable, the quality of the experience depends on your opening question, your boundaries, and your willingness to move on from a poor fit.',
    sections: [
      ['How random matching works', 'A random chat service looks for another person who is available at roughly the same time. The match may last seconds or much longer, depending on whether both people find a shared rhythm. Availability changes throughout the day, so a quiet period does not necessarily mean the service is broken. Treat each match as a small opportunity rather than a promise of instant friendship.'],
      ['Use the first minute well', 'Begin with a question that can lead somewhere: What is one thing you enjoyed this week? Which hobby would you recommend to a beginner? What kind of stories do you like? These prompts are open but not intrusive. Share your own answer after asking so the person has context. If they respond with a detail, follow it. A real conversation grows from details, not from a long script of unrelated questions.'],
      ['Stay in control of personal information', 'Random does not mean risk-free. Use a display name that does not identify you, and keep your exact location, routine, contact details, and account credentials private. Do not open files or links from someone you have just met. Remember that another person can save a screenshot even when the service does not create a public profile. Privacy is an active choice you make message by message.'],
      ['Skip without taking it personally', 'A random match can be quiet, distracted, or simply incompatible. You do not need to argue or diagnose the reason. Say goodbye when appropriate, skip the match, and try again later. If a person is threatening, hateful, sexually aggressive, or persistent after you say no, report them instead of trying to win the conversation.'],
    ],
    faq: 'Why do random chats sometimes end quickly? Either person may leave, lose connection, or decide the conversation is not a fit. Short matches are a normal part of random chat.',
  },
  'safe-stranger-chat': {
    keyword: 'safe stranger chat website',
    title: 'How to Choose a Safe Stranger Chat Website',
    description: 'Use this practical checklist to evaluate a safe stranger chat website before you start talking with people online.',
    answer: 'A safer stranger chat website explains its rules, offers a way to report abuse, minimizes unnecessary profile information, and makes it easy for you to leave. Good safety also depends on the choices you make during each conversation.',
    sections: [
      ['Look for clear safety controls', 'Before starting, find the service rules, privacy information, and reporting process. A platform should make it obvious how to leave a chat and how to report harmful behavior. It should not pressure you to reveal more information than the experience requires. Clear language is a positive sign: people should be able to understand what the service does, what it collects, and how moderation concerns are handled.'],
      ['Check the behavior of the community', 'No website can guarantee that every stranger will be polite. The useful question is whether the service gives users a practical response when someone crosses a line. Threats, scams, harassment, hateful content, and sexual pressure should be treated as reportable behavior. Do not debate with an abusive user. Save relevant details if needed, report the issue, and leave.'],
      ['Build your own safety routine', 'Use a nickname, avoid identifying photos, and keep personal accounts separate. Never share passwords, payment details, codes, private documents, or your exact whereabouts. Be cautious with requests to move immediately to another app because that can remove the platform protections and reporting context. If a conversation makes you uneasy, that feeling is enough reason to stop.'],
      ['What safety can and cannot mean', 'A safe stranger chat website can reduce avoidable risks, but it cannot verify every claim another person makes. Do not send money or meet someone offline based only on an online conversation. Safety is a combination of platform design, thoughtful moderation, and your own boundaries. Choose services that support all three.'],
    ],
    faq: 'What is the first safety check? Find the report and exit controls before you start. Knowing how to leave makes it easier to respond quickly if a conversation becomes inappropriate.',
  },
  'omegle-alternative': {
    keyword: 'omegle alternative text chat',
    title: 'Omegle Alternative Text Chat: What to Look For',
    description: 'Looking for an Omegle alternative for text chat? Compare privacy, ease of use, moderation, and conversation quality before choosing a service.',
    answer: 'An Omegle alternative for text chat should make it easy to meet someone new without forcing a public profile. The most useful features are simple access, clear rules, reporting tools, privacy-conscious design, and an easy way to move on from a poor match.',
    sections: [
      ['Why text-only chat is different', 'Video can feel immediate, but text gives people more control over pace and exposure. You can think before replying, avoid showing your face or surroundings, and focus on shared interests. That makes text a good choice for people who want spontaneous conversation without the intensity of a video call. It also works well on slower connections and in places where audio would be inconvenient.'],
      ['Features worth comparing', 'Look for a straightforward start process, useful reporting options, visible community expectations, and a clear way to end a match. Avoid platforms that hide important privacy information or make unnecessary personal details feel mandatory. The best interface is not the one with the most features. It is the one that lets you meet someone, communicate comfortably, and leave without confusion.'],
      ['How to avoid the common risks', 'Do not assume a familiar name guarantees a safe interaction. Never share passwords, money, private images, or exact location. Treat links and downloads from strangers as suspicious. If a person tries to move the conversation away from the platform immediately, pause and decide whether there is a good reason. You can keep a conversation friendly without giving up control.'],
      ['A better alternative experience', 'The best Omegle alternative is not simply a copy of an old interface. It should support a healthier rhythm: match quickly, communicate respectfully, report problems, and leave easily. ChatLove focuses on anonymous text conversations so you can decide what kind of connection you want without starting with a large public profile.'],
    ],
    faq: 'What makes a good Omegle alternative? Look for quick text matching, simple privacy choices, transparent rules, reporting controls, and an easy exit from any conversation.',
  },
  'online-chat-no-signup': {
    keyword: 'online chat without signup',
    title: 'Online Chat Without Signup: How It Works',
    description: 'Learn how online chat without signup works, what information to protect, and how to start a better conversation with a stranger.',
    answer: 'Online chat without signup removes the account creation step so you can begin a conversation faster. You may still choose a display name, and you should still protect private information because no-signup access is not the same as total invisibility.',
    sections: [
      ['Why no-signup access is useful', 'An account can be useful for a long-term community, but it is unnecessary for every conversation. No-signup chat is convenient when you want to ask a question, take a short break, practice a language, or meet someone outside your existing network. It also avoids the pressure of creating a permanent profile before you know whether the service suits you.'],
      ['What you still need to do', 'Choose a nickname that does not reveal your identity, and use a current browser with a secure connection. Read the rules before you start. Keep your email, phone number, address, workplace, school, passwords, codes, and payment information private. If a stranger requests an image, download, or link, pause and consider whether the request benefits you or only them.'],
      ['Conversation ideas for a quick start', 'Ask about a recent film, a favorite meal, a hobby, a place someone hopes to visit, or a skill they would like to learn. Offer your own answer so the exchange feels mutual. Avoid trying to uncover personal details. The goal is a good conversation, not a complete biography of a person you just met.'],
      ['Leaving with confidence', 'No signup does not mean you have to stay anonymous to yourself. Notice how you feel during the conversation. If the other person is respectful, continue while it remains enjoyable. If they pressure, insult, threaten, or manipulate you, leave and report the behavior. A fast exit is one of the main benefits of a low-friction service.'],
    ],
    faq: 'Does online chat without signup cost anything? Many services offer basic text chat for free, but check the individual service terms and avoid services that request unexpected payments or sensitive information.',
  },
  'meet-strangers-anonymously': {
    keyword: 'meet strangers anonymously',
    title: 'Meet Strangers Anonymously Without Oversharing',
    description: 'Discover how to meet strangers anonymously online, start genuine conversations, and keep your personal boundaries clear.',
    answer: 'You can meet strangers anonymously by using a nickname, avoiding identifying details, and choosing text conversations that do not require a public profile. Anonymity works best when it supports curiosity without removing responsibility.',
    sections: [
      ['Anonymity and authenticity can coexist', 'You do not need to publish your name or life story to be genuine. Talk about what you are learning, listening to, watching, cooking, or thinking about. A person can understand your perspective without knowing your address or employer. This balance lets you explore a conversation on its own terms instead of asking a profile to do all the work.'],
      ['Set boundaries before you begin', 'Decide what you will not share before a stranger asks. Keep your phone number, exact location, daily routine, financial details, passwords, and private images to yourself. Use a nickname that is not connected to your other accounts. If someone repeatedly pushes past a boundary, take the behavior seriously rather than trying to explain the boundary again and again.'],
      ['Find a human connection', 'Open with a question that invites a story. Ask what made them smile this week, what they would teach a beginner, or what subject they could discuss for an hour. Listen for a detail and follow it. Meaningful anonymous conversation is not about extracting information. It is about exchanging ideas while both people remain comfortable.'],
      ['Know the difference between curiosity and risk', 'Some people may quickly request another app, a photo, money, or private information. You can say no without defending the decision. Never let a stranger turn urgency into pressure. Leave, block, or report when needed. Meeting strangers anonymously should expand your perspective, not make you feel trapped.'],
    ],
    faq: 'Can I be anonymous and still have a meaningful chat? Yes. Share thoughts, interests, and stories while keeping details that identify you private.',
  },
  'anonymous-chat-room': {
    keyword: 'anonymous chat room',
    title: 'Anonymous Chat Room Guide for First-Time Users',
    description: 'Understand what an anonymous chat room is, how to participate respectfully, and how to protect your privacy from the first message.',
    answer: 'An anonymous chat room is an online space where people can talk without presenting a full public identity. Some rooms are open to many participants, while others match two people. Read the rules, protect personal information, and remember that anonymity does not remove the need for respect.',
    sections: [
      ['How chat rooms differ', 'A room may be built around a topic, a broad community, or random conversation. Public rooms can offer many viewpoints at once, while one-to-one matching gives a quieter exchange. Before joining, look for the topic, age requirements, rules, and moderation controls. The right room depends on whether you want shared interests, a quick question, or a private text conversation.'],
      ['Participate without taking over', 'Read the room before posting repeatedly. Ask questions that fit the subject and avoid sharing someone else’s personal information. Disagreement is normal, but insults and threats do not create a useful conversation. If a room becomes hostile, leave rather than trying to repair every person in it. Respect also means giving others room to speak.'],
      ['Privacy in a shared space', 'Never post an address, phone number, password, private image, financial detail, or identifying document. A room can have more viewers than you expect, and messages may be copied. Use a nickname and avoid usernames that connect directly to your other profiles. Assume that anything you post could be seen again later.'],
      ['When to report', 'Use reporting tools for harassment, threats, scams, hateful behavior, sexual pressure, or repeated attempts to expose private information. Give the platform enough context to review the issue, then stop engaging. A healthy anonymous chat room is one where people can ask questions, disagree normally, and leave without being followed or intimidated.'],
    ],
    faq: 'Are anonymous chat rooms moderated? Moderation differs by service and room. Check the rules and reporting tools before participating, and report behavior that violates the published standards.',
  },
  'random-chat-room': {
    keyword: 'random chat room free',
    title: 'Free Random Chat Room: How to Have Better Conversations',
    description: 'Learn how a free random chat room works, what to discuss with new people, and how to keep a casual online conversation safe.',
    answer: 'A free random chat room gives you a low-cost way to meet people outside your usual circle. You will have better conversations when you bring a simple topic, respect the room rules, and keep control of your private information.',
    sections: [
      ['What makes random rooms appealing', 'Random rooms create variety. Instead of choosing every person through a profile, you encounter a wider mix of interests and experiences. That can make a short break more interesting and help you practice social confidence. The tradeoff is that not every match will be engaging. A good room gives you an easy way to move on when the chemistry is not there.'],
      ['Conversation starters that work', 'Try questions about music, films, food, games, hobbies, travel, or small goals. Keep the first question broad and answer it yourself. If the other person mentions a detail, follow it instead of changing subjects immediately. People do not need a perfect prompt; they need an opening that feels easy to answer.'],
      ['Keep free chat genuinely safe', 'Do not send money, codes, passwords, private images, or documents. Treat links and downloads as untrusted until you understand them. Avoid sharing your exact location and do not arrange an offline meeting based only on a short online exchange. If someone pressures or threatens you, leave and use the report feature.'],
      ['Enjoy the room without depending on it', 'Random chat is healthiest as an option, not an obligation. Take breaks, close the page when you are tired, and do not measure your value by how long a stranger continues talking. A free chat room can offer a pleasant surprise, a new idea, or a brief laugh. That is enough.'],
    ],
    faq: 'Can I use a random chat room for free? The basic experience may be free, but always review the service details and do not provide payment information to another user.',
  },
};

const KeywordBlog = ({ slug: routeSlug }) => {
  const { slug: urlSlug } = useParams();
  const slug = routeSlug || urlSlug;
  const post = blogData[slug];

  useEffect(() => {
    if (!post) return undefined;
    const canonicalUrl = `https://www.chatlove.pro/${slug}`;
    document.title = `${post.title} | ChatLove`;
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.content = post.description;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = canonicalUrl;
    const schemaId = `keyword-blog-schema-${slug}`;
    const schemaTag = document.createElement('script');
    schemaTag.id = schemaId;
    schemaTag.type = 'application/ld+json';
    schemaTag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.description,
      mainEntityOfPage: canonicalUrl,
      author: { '@type': 'Organization', name: 'ChatLove' },
      publisher: { '@type': 'Organization', name: 'ChatLove', url: 'https://www.chatlove.pro/' },
      mainEntity: {
        '@type': 'Question',
        name: post.title,
        acceptedAnswer: { '@type': 'Answer', text: post.faq },
      },
    });
    document.head.appendChild(schemaTag);
    return () => schemaTag.remove();
  }, [post, slug]);

  if (!post) {
    return <div className="min-h-screen bg-slate-950 px-6 py-24 text-center text-white"><h1 className="text-4xl font-bold">Guide not found</h1><Link className="mt-6 inline-block text-purple-300" to="/blog">Back to the blog</Link></div>;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="relative overflow-hidden border-b border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),_transparent_30%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
          <Link to="/blog" className="text-sm font-semibold text-purple-200 hover:text-white">ChatLove guides</Link>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Online connection guide</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">{post.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">{post.description}</p>
        </div>
      </header>
      <article className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white">The short answer</h2>
          <p className="mt-4 text-[17px] leading-8 text-gray-300">{post.answer}</p>
        </div>
        <div className="mt-12 space-y-12 text-[17px] leading-8 text-gray-300">
          {post.sections.map(([heading, content]) => (
            <section key={heading}>
              <h2 className="text-3xl font-bold text-white">{heading}</h2>
              <p className="mt-5">{content}</p>
            </section>
          ))}
          <section>
            <h2 className="text-3xl font-bold text-white">Frequently asked question</h2>
            <p className="mt-5">{post.faq}</p>
          </section>
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-3xl font-bold text-white">Continue exploring</h2>
            <p className="mt-5">ChatLove is built for simple, respectful conversations with new people. Keep your personal details private, follow the community rules, and leave whenever a chat stops feeling right.</p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link to="/stranger-chat" className="rounded-2xl bg-purple-600 px-6 py-3 text-center font-semibold text-white hover:bg-purple-500">Start chatting</Link>
              <Link to="/safety" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white hover:bg-white/10">Read safety guidance</Link>
              <Link to="/blog" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white hover:bg-white/10">More guides</Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

export default KeywordBlog;
