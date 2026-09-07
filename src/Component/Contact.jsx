import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-slate-900 sticky top-0 z-40">
        <div className="mx-auto max-w-2xl px-6 py-8">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-gray-400">Have questions? We'd love to hear from you.</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* Contact Form */}
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
          {submitted && (
            <div className="mb-6 rounded-xl bg-green-500/20 border border-green-500/50 p-4 text-green-300">
              <p className="font-semibold">✓ Message sent successfully!</p>
              <p className="text-sm mt-1">We'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Your message..."
                className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 rounded-lg px-4 py-3 font-semibold text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-slate-900 p-6">
            <p className="text-sm text-gray-400 mb-1">Email</p>
            <p className="text-white font-semibold">badboyr031@gmail.com</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-900 p-6">
            <p className="text-sm text-gray-400 mb-1">Response Time</p>
            <p className="text-white font-semibold">24-48 Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
