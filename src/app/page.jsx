import Image from 'next/image';

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
          <div className="flex justify-center gap-6">
            <div className="bg-pink-100 text-pink-800 p-4 rounded shadow-md w-40 text-center">
              <p className="font-bold">Taco</p>
              <p>$4</p>
            </div>
            <div className="bg-pink-100 text-pink-800 p-4 rounded shadow-md w-40 text-center">
              <p className="font-bold">Jarrito Soda</p>
              <p>$2.50</p>
            </div>
            <div className="bg-pink-100 text-pink-800 p-4 rounded shadow-md w-40 text-center">
              <p className="font-bold">Nachos with Guacamole</p>
              <p>$11</p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">About Us</h3>
          <p className="text-gray-600">
            We are a new food truck company providing a burst of flavor and spice to the streets of Queens, New York. Every item is made with love and passion from nachos to tacos.
          </p>
        </section>
      </div>
    </main>
  );
}
