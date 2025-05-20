export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <section className="max-w-3xl mx-auto bg-pink-100 p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold text-center text-pink-700 mb-4">FAQ</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg">Where are you located?</h4>
            <p className="text-gray-700">
              We’re located in Queens Center Mall in Elmhurst, Queens, New York and in Kissena Park, Flushing, Queens, New York.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Do you accept credit cards?</h4>
            <p className="text-gray-700">
              Yes, we accept all major credit cards as well as mobile payments.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Are your ingredients fresh?</h4>
            <p className="text-gray-700">
              Absolutely! All our ingredients are sourced daily from local vendors to ensure quality and freshness.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
