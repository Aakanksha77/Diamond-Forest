import React from 'react';

const products = [
  { imageSrc: '/images/image01.png', productName: 'Organic Green Tea' },
  { imageSrc: '/images/image02.png', productName: 'Raw Forest Honey' },
  { imageSrc: '/images/image03.png', productName: 'Almond Butter' },
  { imageSrc: '/images/image05.png', productName: 'Organic Green Tea' },
];

export default function ProductGrid() {
  return (
    <div className="rounded-lg  max-w-10xl">
    <h1 className="text-5xl text-center font-sans mb-4">SHOP BY CATEGORY</h1>
  
    <div className="overflow-x-auto mx-40">
      <div className="flex flex-row flex-nowrap gap-12">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center  rounded-xl  flex-shrink-0"
            style={{ minWidth: 320 }}
          >
            <img
              src={product.imageSrc}
              alt={product.productName}
              className="rounded-3xl w-80 h-80 object-cover mb-8"
            />
            <div className="bg-[#555c3b]  rounded-md min-w-full text-center p-1.5">
              <h2 className="text-xl font-normal text-amber-50">{product.productName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
}
