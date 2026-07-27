import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../Socket";

const Randomchat = () => {
  const [showModal, setShowModal] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [isAdult, setIsAdult] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleStart = () => {
    if (!name || !gender || !isAdult) {
      alert("Please enter your name, choose a gender, and confirm that you are 18+.");
      return;
    }

    setConnecting(true);

    // Save user info in tab-scoped storage
    sessionStorage.setItem("userName", name);
    sessionStorage.setItem("userGender", gender);
    sessionStorage.setItem("userIsAdult", "true");

    // Emit find-stranger event to backend
    socket.emit("find-stranger", { name, gender, isAdult: true });

    // Listen for matched event
    socket.on("matched", (data) => {
      sessionStorage.setItem("strangerId", data.strangerId);
      if (data.strangerName) {
        sessionStorage.setItem("strangerName", data.strangerName);
      }
      navigate("/anonymous-chat");
    });

    // Listen for waiting event
    socket.on("waiting", () => {
      console.log("Waiting for another user...");
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Meet Random People
        </h1>
      </div>



      {showModal && !connecting && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white text-black w-[90%] max-w-md p-8 rounded-3xl">

            <h2 className="text-3xl font-bold mb-6 text-center">
              Enter Details
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-slate-200 bg-slate-50 p-4 rounded-2xl mb-4 text-slate-950"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="mb-6">
              <p className="mb-3 text-sm font-semibold text-slate-700">Gender</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {['Male', 'Female', 'Other'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setGender(option)}
                    className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                      gender === option
                        ? 'border-purple-600 bg-purple-600 text-white'
                        : 'border-slate-300 bg-white text-slate-800 hover:border-purple-500 hover:bg-purple-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <label className="mb-8 flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-950">
              <input
                type="checkbox"
                checked={isAdult}
                onChange={(e) => setIsAdult(e.target.checked)}
                className="h-5 w-5 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm font-medium">I confirm I am 18 years old.</span>
            </label>

            <button
              onClick={handleStart}
              className="w-full rounded-2xl bg-purple-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-purple-500"
            >
              Continue
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-3 text-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
        
      )}

      {/* Connecting Screen */}
      {connecting && (
        <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50">

          <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>

          <h2 className="text-3xl font-bold mt-8">
            Finding a Stranger...
          </h2>

          <p className="text-gray-400 mt-3">
            Connecting you with someone amazing
          </p>
        </div>
  )}
   
    </div>
  );
}               


export default Randomchat;
