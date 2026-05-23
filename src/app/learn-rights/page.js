export default function LearnRights() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-blue-700 mb-6">
        Fundamental Rights
      </h1>

      <p className="text-lg text-gray-700 mb-12 max-w-3xl">
        Learn about the constitutional rights guaranteed to every citizen
        of India in simplified language.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Right to Equality
          </h2>

          <p className="text-gray-600">
            Ensures equal treatment before law and prohibits discrimination
            based on religion, caste, gender, or place of birth.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Right to Freedom
          </h2>

          <p className="text-gray-600">
            Provides freedoms such as speech, expression, movement,
            and peaceful assembly.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Right Against Exploitation
          </h2>

          <p className="text-gray-600">
            Protects citizens from forced labor, child labor,
            and human trafficking.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Right to Constitutional Remedies
          </h2>

          <p className="text-gray-600">
            Allows citizens to approach courts when fundamental rights
            are violated.
          </p>
        </div>

      </div>

    </main>
  );
}