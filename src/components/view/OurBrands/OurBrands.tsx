import React from "react";

const OurBrands = () => {
  const brands = [
    { id: 1, name: "CREATIVE", isHighlighted: false },
    { id: 2, name: "EXTENSIVE STUDIOS", isHighlighted: false },
    { id: 3, name: "LOCATION MARKETS", isHighlighted: false },
    { id: 4, name: "MWANZA", isHighlighted: false },
    { id: 5, name: "NICE LOGO CORPORATION", isHighlighted: false },
    { id: 6, name: "MINIMALIST", isHighlighted: false },
    { id: 7, name: "HINITIAL", isHighlighted: false },
    { id: 8, name: "PEGASUS", isHighlighted: false },
    { id: 9, name: "FARYA", isHighlighted: false },
    { id: 10, name: "LION KING", isHighlighted: false },
  ];

  return (
    <section className="bg-[#121212] text-white py-16 px-4">
      <div className="max-w-[1400px] px-4 mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-sm font-medium text-[#9ca3af] tracking-wide">
            Our Brands
          </p>
          <h2 className="text-4xl font-semibold">
            Tailored Digital <span className="text-red-500">Marketing Brands</span>
          </h2>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className={`flex justify-center items-center w-full h-20 rounded-lg text-lg font-medium border-2 bg-gradient-to-r from-[#0a0a0a] to-[#333333]${
                brand.isHighlighted
                  ? "bg-red-500 text-white border-red-500"
                  : "border-gray-600 hover:border-red-500 transition"
              }`}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
