import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E8DFC9] text-[#111827] antialiased">

      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 md:px-10 py-5 bg-[#0F172A] text-white shadow-md">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight">
          <Link href="/">
            Samvidhan AI
          </Link>
        </h1>

        {/* Nav Links */}
        <div className="flex items-center gap-6 md:gap-8 text-gray-200 font-medium text-sm md:text-base">

          <Link
            href="/"
            className="hover:text-white transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            href="/learn-rights"
            className="hover:text-white transition-colors duration-200"
          >
            Learn Rights
          </Link>

          <Link
            href="/permissions-procedures"
            className="hover:text-white transition-colors duration-200"
          >
            Permissions & Procedures
          </Link>

          <Link
            href="/ai-assistant"
            className="hover:text-white transition-colors duration-200"
          >
            AI Assistant
          </Link>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F8F5EE] border border-[#D6CFC2] shadow-sm text-sm font-medium text-[#7F1D1D]">

              AI-Powered Civic Awareness Platform

            </div>

            {/* Heading */}
            <h2 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#0F172A]">

              Understand Your{" "}

              <span className="text-[#7F1D1D]">
                Rights.
              </span>

              <br />

              Know Your{" "}

              <span className="text-[#7F1D1D]">
                Power.
              </span>

            </h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-[#4B5563] max-w-2xl">

              AI-powered civic awareness platform helping citizens understand
              constitutional rights, permissions, registrations, and
              government-related procedures in simplified language.

            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              {/* Explore Rights Button */}
              <Link href="/learn-rights">

                <button className="w-full sm:w-auto px-8 py-4 bg-[#7F1D1D] text-white rounded-2xl font-semibold hover:bg-[#991B1B] transition duration-300 shadow-md">

                  Explore Rights

                </button>

              </Link>

              {/* AI Assistant Button */}
              <Link href="/ai-assistant">

                <button className="w-full sm:w-auto px-8 py-4 border border-[#CFC4AE] bg-[#F8F5EE] text-[#7F1D1D] rounded-2xl font-semibold hover:bg-[#EFE7DA] transition duration-300">

                  Ask AI Assistant

                </button>

              </Link>

            </div>

            {/* Disclaimer */}
            <p className="mt-6 text-sm text-[#6B7280]">

              Educational Civic Awareness Platform • Not Legal Advice

            </p>

          </div>

          {/* Right AI Assistant Card */}
          <div>

            <div className="bg-[#F8F5EE] rounded-3xl border border-[#D6CFC2] shadow-xl p-6">

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">

                <div className="w-10 h-10 rounded-full bg-[#E8DFC9] flex items-center justify-center text-[#7F1D1D] font-bold">

                  AI

                </div>

                <div>

                  <h3 className="font-bold text-lg text-[#0F172A]">
                    Ask AI Assistant
                  </h3>

                  <p className="text-sm text-[#6B7280]">
                    Get instant civic awareness guidance
                  </p>

                </div>

              </div>

              {/* Question */}
              <div className="bg-white rounded-2xl p-4 border border-[#D6CFC2]">

                <p className="text-[#111827] font-medium">
                  What are my fundamental rights as a citizen?
                </p>

              </div>

              {/* AI Response */}
              <div className="mt-5 bg-[#EFE7DA] rounded-2xl p-5 border border-[#D6CFC2]">

                <p className="text-[#374151] leading-7">

                  Fundamental Rights are protected under Part III of
                  the Constitution of India and include the Right to
                  Equality, Freedom, Constitutional Remedies,
                  and protection against exploitation.

                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-3">

                  <span className="px-3 py-1 bg-white border border-[#D6CFC2] rounded-full text-sm text-[#7F1D1D]">
                    Article 14
                  </span>

                  <span className="px-3 py-1 bg-white border border-[#D6CFC2] rounded-full text-sm text-[#7F1D1D]">
                    Article 19
                  </span>

                  <span className="px-3 py-1 bg-white border border-[#D6CFC2] rounded-full text-sm text-[#7F1D1D]">
                    Article 32
                  </span>

                </div>

              </div>

              {/* Input */}
              <div className="mt-6 flex gap-3">

                <input
                  type="text"
                  placeholder="Ask about rights or procedures..."
                  className="flex-1 px-5 py-4 rounded-2xl border border-[#D6CFC2] bg-white outline-none focus:ring-2 focus:ring-[#7F1D1D]"
                />

                <button className="px-6 py-4 bg-[#7F1D1D] text-white rounded-2xl hover:bg-[#991B1B] transition duration-300">

                  Ask

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Mini Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-[#F8F5EE] rounded-2xl border border-[#D6CFC2] p-6 shadow-sm hover:shadow-lg transition duration-300">

            <h3 className="font-bold text-lg text-[#0F172A]">
              Reliable & Accurate
            </h3>

            <p className="mt-3 text-sm text-[#6B7280] leading-6">
              Constitutional awareness based on trusted public legal resources.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-[#F8F5EE] rounded-2xl border border-[#D6CFC2] p-6 shadow-sm hover:shadow-lg transition duration-300">

            <h3 className="font-bold text-lg text-[#0F172A]">
              Simple Language
            </h3>

            <p className="mt-3 text-sm text-[#6B7280] leading-6">
              Complex constitutional topics explained in easy-to-understand language.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-[#F8F5EE] rounded-2xl border border-[#D6CFC2] p-6 shadow-sm hover:shadow-lg transition duration-300">

            <h3 className="font-bold text-lg text-[#0F172A]">
              For Every Citizen
            </h3>

            <p className="mt-3 text-sm text-[#6B7280] leading-6">
              Designed for students, professionals, and everyday citizens.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-[#F8F5EE] rounded-2xl border border-[#D6CFC2] p-6 shadow-sm hover:shadow-lg transition duration-300">

            <h3 className="font-bold text-lg text-[#0F172A]">
              Privacy Focused
            </h3>

            <p className="mt-3 text-sm text-[#6B7280] leading-6">
              Awareness guidance with secure and privacy-focused interactions.
            </p>

          </div>

        </div>

      </section>

      {/* Stats Section */}
      <section className="bg-[#0F172A] text-white py-10">

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-[#E8DFC9]">
              10K+
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              Citizens Empowered
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#E8DFC9]">
              500+
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              Rights Explained
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#E8DFC9]">
              300+
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              Procedures Simplified
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#E8DFC9]">
              100%
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              Privacy Focused
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12 px-6 md:px-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

          <div>

            <h2 className="text-2xl font-bold">
              Samvidhan AI
            </h2>

            <p className="mt-3 text-gray-400 max-w-md leading-7">
              AI-powered constitutional awareness and civic learning platform helping citizens understand rights and procedures.
            </p>

          </div>

          <div className="flex gap-8 text-gray-300 font-medium">

            <Link href="/">
              Home
            </Link>

            <Link href="/learn-rights">
              Rights
            </Link>

            <Link href="/permissions-procedures">
              Procedures
            </Link>

            <Link href="/ai-assistant">
              AI Assistant
            </Link>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">

          © 2026 Samvidhan AI. All rights reserved.

        </div>

      </footer>

    </main>
  );
}