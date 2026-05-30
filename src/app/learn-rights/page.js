"use client";

import Link from "next/link";
import { useState } from "react";

export default function LearnRights() {

  const [searchTerm, setSearchTerm] = useState("");

  const rights = [
    {
      slug: "right-to-equality",
      title: "Right to Equality",
      articles: "Articles 14 - 18",
      description:
        "Ensures equality before law and prohibits discrimination based on religion, caste, gender, or place of birth.",
    },
    {
      slug: "right-to-freedom",
      title: "Right to Freedom",
      articles: "Articles 19 - 22",
      description:
        "Provides freedom of speech, expression, movement, residence, and protection of personal liberty.",
    },
    {
      slug: "right-against-exploitation",
      title: "Right Against Exploitation",
      articles: "Articles 23 - 24",
      description:
        "Prohibits human trafficking, forced labor, and child labor in hazardous environments.",
    },
    {
      slug: "freedom-of-religion",
      title: "Right to Freedom of Religion",
      articles: "Articles 25 - 28",
      description:
        "Allows every citizen to freely practice, profess, and propagate religion.",
    },
    {
      slug: "cultural-and-educational-rights",
      title: "Cultural & Educational Rights",
      articles: "Articles 29 - 30",
      description:
        "Protects the cultural and educational rights of minorities in India.",
    },
    {
      slug: "constitutional-remedies",
      title: "Right to Constitutional Remedies",
      articles: "Article 32",
      description:
        "Allows citizens to approach the Supreme Court for protection of fundamental rights.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#E8DFC9] text-[#111827]">

      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 md:px-10 py-5 bg-[#0F172A] text-white shadow-md">

        <h1 className="text-2xl font-bold">
          <Link href="/">
            Samvidhan AI
          </Link>
        </h1>

        <div className="flex items-center gap-8 text-gray-200 font-medium">

          <Link href="/">
            Home
          </Link>

          <Link href="/learn-rights">
            Learn Rights
          </Link>

          <Link href="/permissions-procedures">
            Permissions & Procedures
          </Link>

          <Link href="/ai-assistant">
            AI Assistant
          </Link>

          <Link href="/quiz">
            Quiz Hub
          </Link>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Learn Fundamental Rights
        </h2>

        <p className="mt-6 text-lg text-[#4B5563] max-w-3xl mx-auto leading-8">
          Explore constitutional rights, important articles, and simplified
          explanations designed to improve civic awareness and constitutional literacy.
        </p>

      </section>

      {/* Search Box */}
      <div className="max-w-xl mx-auto mb-12 px-6">

        <input
          type="text"
          placeholder="Search Fundamental Rights..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-4 rounded-2xl border border-[#D6CFC2] bg-[#F8F5EE] text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#7F1D1D]"
        />

      </div>

      {/* Rights Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {rights
            .filter((right) =>
              right.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((right) => (

              <Link
                key={right.slug}
                href={`/learn-rights/${right.slug}`}
              >

                <div className="bg-[#F8F5EE] border border-[#D6CFC2] rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">

                  <p className="text-sm font-semibold text-[#7F1D1D] mb-3">
                    {right.articles}
                  </p>

                  <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                    {right.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {right.description}
                  </p>

                  <button className="mt-6 px-5 py-3 bg-[#7F1D1D] text-white rounded-xl hover:bg-[#991B1B] transition duration-300">
                    Learn More
                  </button>

                </div>

              </Link>

            ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12 px-6 md:px-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h2 className="text-2xl font-bold">
              Samvidhan AI
            </h2>

            <p className="text-gray-400 mt-2 max-w-md">
              AI-powered civic awareness and constitutional learning platform.
            </p>

          </div>

          <div className="flex gap-6 text-gray-300">

            <Link href="/">
              Home
            </Link>

            <Link href="/learn-rights">
              Rights
            </Link>

            <Link href="/permissions-procedures">
              Permissions
            </Link>

            <Link href="/quiz">
              Quiz
            </Link>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          © 2026 Samvidhan AI. All rights reserved.
        </div>

      </footer>

    </main>
  );
}