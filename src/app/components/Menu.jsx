export default function Menu() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <div className="bg-pink-100 p-4 rounded shadow w-48 text-center">
        <h4 className="text-lg font-bold">Taco</h4>
        <p className="text-gray-600">$4</p>
      </div>
      <div className="bg-pink-100 p-4 rounded shadow w-48 text-center">
        <h4 className="text-lg font-bold">Jarrito Soda</h4>
        <p className="text-gray-600">$2.50</p>
      </div>
      <div className="bg-pink-100 p-4 rounded shadow w-48 text-center">
        <h4 className="text-lg font-bold">Nachos with Guacamole</h4>
        <p className="text-gray-600">$11</p>
      </div>
    </div>
  );
}
