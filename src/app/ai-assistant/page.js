"use client";

import Link from "next/link";
import { useState } from "react";

export default function AIAssistant() {

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hello! Ask me about constitutional rights, permissions, or civic procedures.",
    },
  ]);

  const handleSend = () => {

    if (!input.trim()) return;

    const userMessage = {
      type: "user",
      text: input,
    };

    const aiMessage = {
      type: "ai",
      text: "This is a demo AI response. Backend AI integration will be connected later.",
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);

    setInput("");
  };

  const suggestions = [
    "What are my constitutional rights?",
    "How to register property?",
    "Can police arrest without warrant?",
    "How to apply for income certificate?",
  ];

  return (
    <main className="min-h-screen bg-[#E8DFC9] text-[#111827]">

      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 md:px-10 py-5 bg-[#0F172A] text-white shadow-md">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight">
          <Link href="/">
            Samvidhan AI
          </Link>
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6 md:gap-8 text-gray-200 font-medium text-sm md:text-base">

          <Link href="/">
            Home
          </Link>

          <Link href="/learn-rights">
            Learn Rights
          </Link>

          <Link href="/permissions-procedures">
            Permissions
          </Link>

          <Link href="/ai-assistant">
            AI Assistant
          </Link>

        </div>

      </nav>

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">

        <div className="text-center">

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F8F5EE] border border-[#D6CFC2] shadow-sm text-sm font-medium text-[#7F1D1D]">

            AI-Powered Civic Guidance

          </div>

          <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight text-[#0F172A]">

            Ask Samvidhan AI

          </h1>

          <p className="mt-6 text-lg text-[#4B5563] max-w-3xl mx-auto leading-8">

            Describe your situation in simple language and receive
            constitutional awareness guidance powered by AI.

          </p>

        </div>

      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE - CHAT */}
          <div className="lg:col-span-2">

            <div className="bg-[#F8F5EE] border border-[#D6CFC2] rounded-3xl shadow-lg p-6">

              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-5 border-b border-[#D6CFC2]">

                <div className="w-12 h-12 rounded-full bg-[#E8DFC9] flex items-center justify-center text-[#7F1D1D] font-bold text-lg">

                  AI

                </div>

                <div>

                  <h2 className="font-bold text-lg text-[#0F172A]">
                    Samvidhan AI Assistant
                  </h2>

                  <p className="text-sm text-[#6B7280]">
                    Constitutional Awareness Guidance
                  </p>

                </div>

              </div>

              {/* Chat Messages */}
              <div className="space-y-6 py-8 min-h-[400px]">

                {messages.map((message, index) => (

                  <div
                    key={index}
                    className={`flex ${
                      message.type === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >

                    <div
                      className={`px-5 py-4 rounded-2xl max-w-2xl shadow-sm leading-7 ${
                        message.type === "user"
                          ? "bg-[#7F1D1D] text-white"
                          : "bg-white border border-[#D6CFC2] text-[#374151]"
                      }`}
                    >

                      {message.text}

                    </div>

                  </div>

                ))}

              </div>

              {/* Input */}
              <div className="flex gap-4">

                <input
                  type="text"
                  placeholder="Describe your situation..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  className="flex-1 px-5 py-4 rounded-2xl border border-[#D6CFC2] bg-white outline-none focus:ring-2 focus:ring-[#7F1D1D]"
                />

                <button
                  onClick={handleSend}
                  className="px-8 py-4 bg-[#7F1D1D] text-white rounded-2xl hover:bg-[#991B1B] transition duration-300 shadow-md"
                >

                  Ask

                </button>

              </div>

              {/* Disclaimer */}
              <p className="mt-5 text-sm text-[#6B7280] text-center">

                Educational civic awareness only • Not legal advice

              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* Suggestions */}
            <div className="bg-[#F8F5EE] border border-[#D6CFC2] rounded-3xl shadow-lg p-6">

              <h3 className="text-2xl font-bold text-[#0F172A]">

                Suggested Questions

              </h3>

              <div className="mt-6 space-y-4">

                {suggestions.map((item, index) => (
                  <div
  key={index}
  onClick={() => setInput(item)}
  className="p-4 bg-white border border-[#D6CFC2] rounded-2xl hover:bg-[#EFE7DA] transition cursor-pointer"
>

                    <p className="text-[#374151] font-medium">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* Awareness Card */}
            <div className="bg-[#F8F5EE] border border-[#D6CFC2] rounded-3xl shadow-lg p-6">

              <h3 className="text-2xl font-bold text-[#0F172A]">

                Civic Awareness

              </h3>

              <p className="mt-4 text-[#4B5563] leading-7">

                Samvidhan AI simplifies constitutional rights,
                permissions, and procedures into understandable
                guidance for every citizen.

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}