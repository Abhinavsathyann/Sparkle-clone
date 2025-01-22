import React from 'react';
import Dman from '../assets/Dman.png';
import Image from 'next/image';

const Frame4 = () => {
  // Array to hold the data for the cards
  const cardsData = [
    {
      id: 1,
      image: Dman,
      alt: "Delivery person with packages",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
      id: 2,
      image: Dman,
      alt: "Delivery person with packages",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
      id: 3,
      image: Dman,
      alt: "Delivery person with packages",   
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 font-roboto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-red-800">Blogs</h1>
        <p className="text-lg text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={card.image}
              alt={card.alt}
              width={500}
              height={600}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frame4;