import React from "react";

const products = [
  {
    id: 1,
    name: "ForgetzStudio T-Shirt",
    price: "Rp 150.000",
    image: "/products/1.png",
  },
  {
    id: 2,
    name: "ForgetzStudio T-Shirt",
    price: "Rp 150.000",
    image: "/products/2.png",
  },
];

export default function StorePage() {
  return (
    <div className="relative min-h-screen text-black">

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/bg-store-poster.jpg"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg2.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 -z-10" />

      {/* CONTENT */}
      <div className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">

          {/* HEADER */}
          <div className="text-center mb-12 text-white">
            <h1 className="text-4xl font-bold mb-4">
              ForgetzStudio Merchandise Store
            </h1>
            <p className="text-gray-200">
              Official merchandise from ForgetzStudio. High quality & limited edition.
            </p>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* INFO */}
                <div className="p-5">
                  <h2 className="text-lg font-semibold mb-2">
                    {product.name}
                  </h2>

                  <p className="text-emerald-600 font-bold mb-4">
                    {product.price}
                  </p>

                  <a
                    href="https://wa.me/6289602203266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-lg font-semibold"
                  >
                    Buy via WhatsApp
                  </a>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}
