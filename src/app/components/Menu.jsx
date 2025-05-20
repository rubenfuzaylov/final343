export default function Menu() {
  return (
    <div className="text-center py-10 px-4 bg-pink-50">
      <h2 className="text-3xl font-bold text-pink-700 mb-2">Spicy Flavor Near You</h2>
      <p className="text-gray-700 mb-6">Serving Queens with delicious Mexican cuisine!</p>

      <h3 className="text-2xl font-semibold text-pink-700 mb-4">Customer Favorites</h3>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="bg-pink-100 p-4 rounded shadow w-48">
          <h4 className="text-lg font-bold">Taco</h4>
          <p className="text-gray-600">$4</p>
        </div>
        <div className="bg-pink-100 p-4 rounded shadow w-48">
          <h4 className="text-lg font-bold">Jarrito Soda</h4>
          <p className="text-gray-600">$2.50</p>
        </div>
        <div className="bg-pink-100 p-4 rounded shadow w-48">
          <h4 className="text-lg font-bold">Nachos with Guacamole</h4>
          <p className="text-gray-600">$11</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-2 text-pink-700">About Us</h3>
        <p className="text-gray-700 max-w-xl mx-auto">
          We are a new food truck company providing a burst of flavor and spice to the streets
          of Queens, New York. Every item is made with love and passion from nachos to tacos.
        </p>
      </div>
    </div>
  );
}
