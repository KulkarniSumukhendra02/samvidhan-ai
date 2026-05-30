const rightsData = {
  "right-to-equality": {
    title: "Right to Equality",
    article: "Articles 14-18",
    content:
      "Ensures equality before law and prohibits discrimination on the basis of religion, race, caste, sex or place of birth."
  },

  "right-to-freedom": {
    title: "Right to Freedom",
    article: "Articles 19-22",
    content:
      "Provides freedom of speech, expression, movement, residence and personal liberty."
  },

  "right-against-exploitation": {
    title: "Right Against Exploitation",
    article: "Articles 23-24",
    content:
      "Prohibits human trafficking, forced labour and child labour."
  },

  "freedom-of-religion": {
    title: "Freedom of Religion",
    article: "Articles 25-28",
    content:
      "Allows citizens to freely practice, profess and propagate religion."
  },

  "cultural-and-educational-rights": {
    title: "Cultural & Educational Rights",
    article: "Articles 29-30",
    content:
      "Protects minority cultural and educational interests."
  },

  "constitutional-remedies": {
    title: "Right to Constitutional Remedies",
    article: "Article 32",
    content:
      "Allows citizens to approach the Supreme Court for protection of Fundamental Rights."
  }
};

export default async function RightPage({ params }) {

  const { slug } = await params;
  const right = rightsData[slug];

  if (!right) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Right Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#E8DFC9]">

      <div className="max-w-5xl mx-auto px-6 py-20">

        <div className="bg-[#F8F5EE] rounded-3xl shadow-lg p-10">

          <p className="text-[#7F1D1D] font-semibold text-lg">
            {right.article}
          </p>

          <h1 className="text-5xl font-bold mt-4 text-[#0F172A]">
            {right.title}
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            {right.content}
          </p>

        </div>

      </div>

    </main>
  );
}