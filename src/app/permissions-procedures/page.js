import Link from "next/link";

export default function PermissionsProcedures() {

  const procedures = [
    {
      title: "Building Permissions",
      department: "Municipal Corporation",
      description:
        "Understand approvals required before constructing houses, additional floors, or commercial buildings.",
    },
    {
      title: "Income Certificate",
      department: "Revenue Department",
      description:
        "Learn eligibility, required documents, and application procedures for income certificates.",
    },
    {
      title: "Property Registration",
      department: "Registration Department",
      description:
        "Explore land registration procedures, ownership transfer, and required legal documentation.",
    },
    {
      title: "Shop & Trade License",
      department: "Local Municipality",
      description:
        "Understand permissions and licenses required for operating businesses and shops.",
    },
    {
      title: "Birth Certificate",
      department: "Municipal Office",
      description:
        "Learn procedures and required documents for birth certificate applications and corrections.",
    },
    {
      title: "Marriage Registration",
      department: "Registrar Office",
      description:
        "Understand marriage registration procedures, eligibility, and document verification.",
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

        </div>

      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Permissions & Government Procedures
        </h2>

        <p className="mt-6 text-lg text-[#4B5563] max-w-3xl mx-auto leading-8">
          Simplified guidance for registrations, permissions,
          certificates, and government-related civic procedures.
        </p>

        {/* Search */}
        <div className="mt-10 flex justify-center">

          <input
            type="text"
            placeholder="Search permissions or procedures..."
            className="w-full max-w-2xl px-6 py-4 rounded-2xl border border-[#CFC4AE] bg-[#F8F5EE] outline-none focus:ring-2 focus:ring-[#7F1D1D]"
          />

        </div>

      </section>

      {/* Procedures Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {procedures.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F5EE] border border-[#D6CFC2] rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              <p className="text-sm font-semibold text-[#7F1D1D] mb-3">
                {item.department}
              </p>

              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>

              <button className="mt-6 px-5 py-3 bg-[#7F1D1D] text-white rounded-xl hover:bg-[#991B1B] transition duration-300">
                View Procedure
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* Info Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-[#F8F5EE] border border-[#D6CFC2] rounded-3xl p-10 shadow-sm">

          <h3 className="text-3xl font-bold text-[#0F172A] mb-6">
            Why This Matters
          </h3>

          <p className="text-gray-700 leading-8 text-lg">
            Many citizens struggle to understand government procedures,
            documentation requirements, and permissions due to complex processes
            and scattered information sources. Samvidhan AI simplifies these
            civic procedures through accessible explanations and awareness-focused guidance.
          </p>

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

            <Link href="/ai-assistant">
              AI Assistant
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