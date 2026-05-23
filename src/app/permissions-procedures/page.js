export default function PermissionsProcedures() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">

      {/* Heading */}
      <section className="mb-16">

        <h1 className="text-5xl font-bold text-blue-700 mb-6">
          Permissions & Procedures
        </h1>

        <p className="text-lg text-gray-700 max-w-4xl">
          Understand important permissions, registrations, certificates,
          and government-related procedures in simplified language.
        </p>

      </section>

      {/* Topics Grid */}
      <section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Building Permissions */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Building Permissions
            </h2>

            <p className="text-gray-600 mb-4">
              Understand approvals and permissions commonly required before
              constructing a house or adding additional floors.
            </p>

            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li>Municipal approvals</li>
              <li>Building plan awareness</li>
              <li>Property tax considerations</li>
              <li>Safety regulations</li>
            </ul>

          </div>

          {/* Certificates */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Certificates & Documents
            </h2>

            <p className="text-gray-600 mb-4">
              Learn procedures and required documents for common citizen certificates.
            </p>

            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li>Income certificate</li>
              <li>Birth certificate</li>
              <li>Caste certificate</li>
              <li>Voter ID awareness</li>
            </ul>

          </div>

          {/* Property */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Property & Land Awareness
            </h2>

            <p className="text-gray-600 mb-4">
              Understand basic awareness regarding land ownership,
              registration, and property-related procedures.
            </p>

            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li>Property registration</li>
              <li>Ownership awareness</li>
              <li>Land documentation</li>
              <li>Property tax basics</li>
            </ul>

          </div>

          {/* Business */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Business & Shop Permissions
            </h2>

            <p className="text-gray-600 mb-4">
              Learn about common permissions and registrations required
              for small businesses and shops.
            </p>

            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li>Trade license basics</li>
              <li>Shop registration</li>
              <li>Municipal permissions</li>
              <li>GST awareness basics</li>
            </ul>

          </div>

        </div>

      </section>

    </main>
  );
}