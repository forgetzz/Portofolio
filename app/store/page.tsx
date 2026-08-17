import React from "react";
import { ArrowLeft } from "lucide-react";

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
  {
    id: 3,
    name: "ForgetzStudio T-Shirt",
    price: "Rp 150.000",
    image: "/products/3.png",
  },
];

export default function StorePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0B] text-[#F2F0EA] font-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
      `}</style>

    
      {/* TOP BAR */}
      <div className="fixed top-0 w-full z-50 bg-[#0A0A0B]/90 backdrop-blur-sm border-b border-[#26262A]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wide text-[#8A8880] hover:text-[#F2F0EA] transition-colors"
          >
            <ArrowLeft size={14} />
            Back
          </a>
          <h1 className="font-display text-lg tracking-tight text-[#F2F0EA]">
            ForgetzStudio
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="min-h-screen py-32">
        <div className="max-w-6xl mx-auto px-4">

          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="font-mono text-[12px] uppercase tracking-wide text-[#8A8880] mb-3">
              Store
            </p>
            <h2 className="font-display font-medium text-3xl md:text-4xl mb-4 text-[#F2F0EA]">
              ForgetzStudio Merchandise
            </h2>
            <p className="text-[#8A8880] max-w-xl mx-auto">
              Official merchandise from ForgetzStudio. High quality & limited edition.
            </p>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#26262A] border border-[#26262A]">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#0A0A0B] overflow-hidden group"
              >
                {/* IMAGE */}
                <div className="h-64 bg-[#111113] flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image || "/products/default.png"}
                    alt={product.name}
                    loading="lazy"
                    className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* INFO */}
                <div className="p-6">
                  <h3 className="font-display text-lg mb-2 text-[#F2F0EA]">
                    {product.name}
                  </h3>
                  <p className="font-mono text-[13px] text-[#FF6A3D] mb-5">
                    {product.price}
                  </p>
                  <a
                    href="https://wa.me/6289602203266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center font-mono text-[12px] uppercase tracking-wide border border-[#F2F0EA] text-[#F2F0EA] py-2.5 hover:bg-[#FF6A3D] hover:text-[#0A0A0B] hover:border-[#FF6A3D] transition-colors"
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