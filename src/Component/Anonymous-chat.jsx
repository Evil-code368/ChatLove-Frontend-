import React, { useState, useRef, useEffect } from "react";
import { socket } from "../Socket"

const Anonymouschat = () => {

  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const [connected, setConnected] = useState(true);
  const [searching, setSearching] = useState(false);
  const [strangerName, setStrangerName] = useState(() => sessionStorage.getItem("strangerName") || "Stranger");
  const typingTimeoutRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      sender: "stranger",
      type: "text",
      content: " ",
    },
  ]);

  const chatRef = useRef(null);
  const fileInputRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    chatRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // Setup socket listeners
  useEffect(() => {
    socket.on("receive-message", (data) => {
      setMessages((prev) => [
        ...prev,
        {
          sender: data.sender || "stranger",
          type: "text",
          content: data.text,
        },
      ]);
      setTyping(false);
    });

    socket.on("receive-image", (data) => {
      setMessages((prev) => [
        ...prev,
        {
          sender: data.sender || "stranger",
          type: "image",
          content: data.image,
        },
      ]);
    });

    socket.on("matched", (data) => {
      setConnected(true);
      setSearching(false);
      const nextName = data.strangerName || "Stranger";
      setStrangerName(nextName);
      sessionStorage.setItem("strangerName", nextName);
    });

    socket.on("stranger-typing", () => {
      setTyping(true);
    });

    socket.on("stranger-stopped-typing", () => {
      setTyping(false);
    });

    socket.on("stranger-left", () => {
      setConnected(false);
      setSearching(false);
    });

    socket.on("search-again", () => {
      setConnected(false);
      setSearching(true);
    });

    return () => {
      socket.off("receive-message");
      socket.off("receive-image");
      socket.off("stranger-typing");
      socket.off("stranger-stopped-typing");
      socket.off("stranger-left");
      socket.off("search-again");
    };
  }, []);

  // Send Message
  const sendMessage = () => {
    if (!message.trim()) return;

    const msgContent = message;
    setMessages((prev) => [
      ...prev,
      {
        sender: "you",
        type: "text",
        content: msgContent,
      },
    ]);

    setMessage("");

    // Emit message to backend
    socket.emit("send-message", msgContent);
  };

  // Send Photo
  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Image = event.target.result;
      
      setMessages((prev) => [
        ...prev,
        {
          sender: "you",
          type: "image",
          content: base64Image,
        },
      ]);

      // Send to backend
      socket.emit("send-image", base64Image);
    };
    reader.readAsDataURL(file);
  };

  // Add Emoji
  const addEmoji = (emoji) => {
    setMessage((prev) => prev + emoji);
  };

  // Handle typing with debounce
  const handleTyping = (e) => {
    setMessage(e.target.value);

    if (!connected) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    socket.emit("typing");

    typingTimeoutRef.current = setTimeout(() => {
      socket.emit("stopped-typing");
    }, 1000);
  };

  const handleTypingStart = () => {
    if (!connected) return;
    socket.emit("typing");
  };

  const handleTypingStop = () => {
    if (!connected) return;
    socket.emit("stopped-typing");
  };

  // Disconnect handler
  const handleDisconnect = () => {
    if (connected) {
      socket.emit("disconnect-user");
    }
    setConnected(false);
    setSearching(false);
  };

  // Next Stranger
  const nextStranger = () => {
    setMessages([]);
    setTyping(false);
    setConnected(false);
    setSearching(true);

    const userData = {
      name: sessionStorage.getItem("userName") || "Stranger",
      age: sessionStorage.getItem("userAge") || "",
    };

    socket.emit("next-stranger", userData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">

      {/* Header */}
      <div className="bg-slate-800 p-4 flex justify-between items-center shadow">

        <div>
          <link rel="canonical" href="https://www.chatlove.pro/anonymous-chat"></link>
          <h1 className="text-xl font-bold">
            Anonymous Chat
          </h1>

          <p className="text-green-400 text-sm">
            {connected
              ? `🟢 Connected with ${strangerName}`
              : searching
              ? "🟡 Searching for stranger..."
              : "🔴 Disconnected"}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={nextStranger}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
          >
            Next
          </button>

          <button
            onClick={handleDisconnect}
            className="bg-purple-600 hover:bg-purple-400 px-4 py-2 rounded-lg"
          >
            Disconnect
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 min-h-0 overflow-y-auto p-5 space-y-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "you"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-md rounded-2xl p-3 ${
                msg.sender === "you"
                  ? "bg-purple-600"
                  : "bg-slate-700"
              }`}
            >
              <p className="text-xs opacity-70 mb-1">
                {msg.sender === "you" ? "You" : msg.sender}
              </p>

              {msg.type === "text" ? (
                <p>{msg.content}</p>
              ) : (
                <img
                  src={msg.content}
                  alt="shared"
                  className="rounded-lg max-h-64"
                />
              )}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {typing && (
          <div className="flex justify-start">
            <div className="bg-slate-700 px-4 py-3 rounded-xl">
               Typing...
            </div>
          </div>
        )}

        <div ref={chatRef}></div>
      </div>

      {/* Emoji Bar */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto bg-slate-800">
        {["😀", "😂", "😍", "❤️", "👍", "🔥","😡", "😎", "🎉"].map(
          (emoji) => (
            <button
              key={emoji}
              onClick={() => addEmoji(emoji)}
              className="text-2xl"
            >
              {emoji}
            </button>
          )
        )}
      </div>

      {/* Input Section */}
      <div className="bg-slate-800 p-4">

        <div className="flex flex-wrap gap-2">

          {/* Photo Button */}
          <button
            onClick={() =>
              fileInputRef.current.click()
            }
            className="bg-slate-700 px-4 rounded-xl"
          >
            📷
          </button>

          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept="image/*"
            onChange={handlePhoto}
          />

          {/* Message Input */}
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 min-w-0 bg-slate-700 rounded-xl px-3 py-2 outline-none"
            value={message}
            onChange={handleTyping}
            onFocus={handleTypingStart}
            onBlur={handleTypingStop}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleTypingStop();
                sendMessage();
              }
            }}
          />

          {/* Send Button */}
          <button
            onClick={sendMessage}
            className="w-max px-4 py-2 bg-purple-600 hover:bg-purple-700  rounded-xl"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Anonymouschat;