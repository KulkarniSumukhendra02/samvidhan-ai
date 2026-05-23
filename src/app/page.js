import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E8DFC9] text-[#111827] antialiased">
      
      {/* Navbar Section */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5 bg-[#0F172A] text-white rounded-b-2xl shadow-md mt-0">
        <h1 className="text-2xl font-bold tracking-tight hover:opacity-90 transition">
          <Link href="/">Samvidhan AI</Link>
        </h1>
        <div className="flex items-center gap-6 md:gap-8 text-gray-200 font-medium text-sm md:text-base">
          <Link href="/" className="hover:text-white transition-colors duration-200">
            Home
          </Link>
          <Link href="/learn-rights" className="hover:text-white transition-colors duration-200">
            Learn Rights
          </Link>
          <Link href="/permissions-procedures" className="hover:text-white transition-colors duration-200">
            Permissions & Procedures
          </Link>
          <Link href="#" className="hover:text-white transition-colors duration-200">
            AI Assistant
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-28 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#111827] tracking-tight">
            Understand Rights & <br className="hidden md:inline" /> Government Procedures Easily
          </h2>

          <p className="mt-6 text-base md:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
            AI-powered civic awareness platform helping citizens understand
            constitutional rights, permissions, registrations, and
            government-related procedures in simplified language.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <button className="px-8 py-3.5 bg-[#7F1D1D] text-white font-semibold rounded-xl hover:bg-[#991B1B] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md">
              Explore Rights
            </button>
            <button className="px-8 py-3.5 border-2 border-[#CFC4AE] bg-[#F8F5EE] text-[#7F1D1D] font-semibold rounded-xl hover:bg-[#EFE7DA] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm">
              Ask AI Assistant
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          Platform Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-[#0F172A] group-hover:text-[#7F1D1D] transition-colors">
              Constitutional Learning
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Learn fundamental rights, duties, and important constitutional
              articles in simplified language with real-life examples.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-[#0F172A] group-hover:text-[#7F1D1D] transition-colors">
              Permissions & Procedures
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Understand permissions, registrations, certificates,
              and government-related procedures easily.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-[#0F172A] group-hover:text-[#7F1D1D] transition-colors">
              AI Assistance
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Ask questions in simple language and receive AI-powered
              awareness and guidance explanations.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-28">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          Popular Topics
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200/60 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <h4 className="text-lg font-bold mb-3 text-[#0F172A]">
              Building Permissions
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Learn approvals and permissions required before constructing houses or additional floors.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200/60 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <h4 className="text-lg font-bold mb-3 text-[#0F172A]">
              Income Certificate
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Understand required documents and procedures for applying certificates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200/60 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <h4 className="text-lg font-bold mb-3 text-[#0F172A]">
              Property Registration
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Learn about land ownership awareness and registration procedures.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200/60 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <h4 className="text-lg font-bold mb-3 text-[#0F172A]">
              Shop & Trade Licenses
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Understand permissions and registrations commonly needed for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0F172A] text-white py-12 px-6 md:px-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Samvidhan AI
            </h2>
            <p className="text-slate-400 mt-2 max-w-md text-sm leading-relaxed">
              AI-powered civic awareness and constitutional learning platform
              helping citizens understand rights and government procedures.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-slate-300 font-medium text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/learn-rights" className="hover:text-white transition-colors">Rights</Link>
            <Link href="/permissions-procedures" className="hover:text-white transition-colors">Permissions</Link>
            <Link href="#" className="hover:text-white transition-colors">AI Assistant</Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-10 pt-6 text-center text-xs md:text-sm text-slate-500">
          © 2026 Samvidhan AI. All rights reserved.
        </div>
      </footer>

    </main>
  );
}