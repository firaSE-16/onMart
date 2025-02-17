import React from 'react'


const Home = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Gaming Keyboard",
      price: 79.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      price: 129.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      name: "Portable Charger",
      price: 39.99,
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <button
                  className="w-full bg-[#FF6B01] text-white py-2 rounded-md hover:bg-[#E65C00] transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Home