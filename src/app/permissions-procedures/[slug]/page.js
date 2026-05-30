const procedures = {
  "building-permissions": {
    title: "Building Permissions",
    department: "Municipal Corporation",
    description:
      "Approvals required before constructing houses, additional floors, or commercial buildings.",
    documents: [
      "Property Ownership Documents",
      "Building Plan",
      "Identity Proof",
      "Address Proof",
    ],
  },

  "income-certificate": {
    title: "Income Certificate",
    department: "Revenue Department",
    description:
      "Certificate showing annual income for scholarships, reservations, and government schemes.",
    documents: [
      "Aadhaar Card",
      "Ration Card",
      "Income Proof",
      "Passport Size Photo",
    ],
  },

  "property-registration": {
    title: "Property Registration",
    department: "Registration Department",
    description:
      "Registration of land and property ownership transfers.",
    documents: [
      "Sale Deed",
      "Identity Proof",
      "Address Proof",
      "Property Tax Receipt",
    ],
  },

  "shop-trade-license": {
    title: "Shop & Trade License",
    department: "Local Municipality",
    description:
      "License required for operating shops and commercial businesses.",
    documents: [
      "Aadhaar Card",
      "Business Address Proof",
      "PAN Card",
      "Photograph",
    ],
  },

  "birth-certificate": {
    title: "Birth Certificate",
    department: "Municipal Office",
    description:
      "Official record of birth issued by local authorities.",
    documents: [
      "Hospital Record",
      "Parents Identity Proof",
      "Address Proof",
    ],
  },

  "marriage-registration": {
    title: "Marriage Registration",
    department: "Registrar Office",
    description:
      "Official registration of marriage under applicable laws.",
    documents: [
      "Identity Proof",
      "Address Proof",
      "Marriage Photographs",
      "Witness Documents",
    ],
  },
};

export default async function ProcedurePage({ params }) {

  const { slug } = await params;

  const procedure = procedures[slug];

  if (!procedure) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Procedure Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#E8DFC9]">

      <div className="max-w-5xl mx-auto px-6 py-20">

        <div className="bg-[#F8F5EE] rounded-3xl shadow-lg p-10">

          <p className="text-[#7F1D1D] font-semibold text-lg">
            {procedure.department}
          </p>

          <h1 className="text-5xl font-bold mt-4 text-[#0F172A]">
            {procedure.title}
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            {procedure.description}
          </p>

          <div className="mt-10 bg-[#EFE7DA] rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-4 text-[#0F172A]">
              Required Documents
            </h2>

            <ul className="space-y-3 text-gray-700">

              {procedure.documents.map((doc, index) => (
                <li key={index}>
                  ✓ {doc}
                </li>
              ))}

            </ul>

          </div>

          <div className="mt-8 bg-[#EFE7DA] rounded-2xl p-6">

           <h2 className="text-2xl font-bold mb-4 text-[#0F172A]">
              General Process
            </h2>

            <ol className="space-y-3 text-gray-700">

              <li>1. Gather required documents</li>
              <li>2. Submit application to the concerned department</li>
              <li>3. Verification of documents</li>
              <li>4. Approval and certificate/license issuance</li>

            </ol>

          </div>

        </div>

      </div>

    </main>
  );
}