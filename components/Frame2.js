import React from 'react';
import Image from 'next/image';
import Liftcar from '../assets/liftcar.png';


const Frame2 = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-700 to-red-900 text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <i className="fas fa-star text-xl mr-4"></i>
              <span className="text-xl">STORAGE</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-star text-xl mr-4"></i>
              <span className="text-xl">OFFICE MOVES</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-star text-xl mr-4"></i>
              <span className="text-xl">PET RELOCATION</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-star text-xl mr-4"></i>
              <span className="text-xl">TRANSIT INSURANCE</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-star text-xl mr-4"></i>
              <span className="text-xl">FAMILY RELOCATION (DSP)</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src={Liftcar}
            alt="Forklift carrying boxes with 'Sparkle Relocations' logo"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame2;