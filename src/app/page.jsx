import Image from 'next/image';
import Menu from './components/Menu';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-pink-600">Final Exam 343</h1>
        <h2 className="text-2xl font-semibold">Fuzaylov, Ruben</h2>
        <h3 className="text-xl text-gray-500">Spring 2025</h3>
      </div>

      <div className="mt-10 space-y-12">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">Spicy Flavor Near You</h2>
          <p className="text-lg">Serving Queens with delicious Mexican cuisine!</p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-center mb-4">Customer Favorites</h3>
          <Menu />
        </section>

        <section className="mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">About Us</h3>
          <p className="text-gray-600">
            We are a new food truck company providing a burst of flavor and spice to the streets of Queens, New York. Every item is made with love and passion from nachos to tacos.
          </p>
        </section>

        <section id="faq" className="mt-16 max-w-3xl mx-auto bg-pink-100 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold text-center text-pink-700 mb-4">FAQ</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg">Where are you located?</h4>
              <p className="text-gray-700">We’re located in Queens Center Mall in Elmhurst, Queens, New York and in Kissena Park, Flushing, Queens, New York.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Do you accept credit cards?</h4>
              <p className="text-gray-700">Yes, we accept all major credit cards as well as mobile payments.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Are your ingredients fresh?</h4>
              <p className="text-gray-700">Absolutely! All our ingredients are sourced daily from local vendors to ensure quality and freshness.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}