import React from 'react';
import Frame11 from '../assets/Frame11.png'; // If assets is in the root directory
import Frame12 from '../assets/Frame12.png';
import Image from 'next/image';

function Frame1() {
  return (
    <div id="about" className="h-screen w-full p-6 bg-white rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-red-800">About Us</h1>
        <p className="text-gray-700 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Vision Section */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <i className="fas fa-binoculars text-4xl text-red-800"></i>
            <h2 className="text-2xl font-bold ml-4  text-black">Our Vision</h2>
          </div>
          <ul className="list-disc list-inside text-left">
            <li className="flex items-start mb-2">
              <i className="fas fa-star text-red-800 mr-2 mt-1"></i>
              <span className=' text-black'>Recognized as a trailblazer in end-to-end relocation.</span>
            </li>
            <li className="flex items-start mb-2">
              <i className="fas fa-star text-red-800 mr-2 mt-1"></i>
              <span className='text-black'>Each member of the team to be the vanguard of our business.</span>
            </li>
            <li className="flex items-start mb-2">
              <i className="fas fa-star text-red-800 mr-2 mt-1"></i>
              <span className='text-black'>Become your trustworthy logistics partner.</span>
            </li>
          </ul>
        </div>

        {/* Mission Section */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <i className="fas fa-bullseye text-4xl text-red-800"></i>
            <h2 className="text-2xl font-bold ml-4 text-black">Our Mission</h2>
          </div>
          <ul className="list-disc list-inside text-left">
            <li className="flex items-start mb-2">
              <i className="fas fa-star text-red-800 mr-2 mt-1"></i>
              <span className='text-black'>Easy to do business with best possible service at an affordable price.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <Image
          src={Frame11}
          alt="Two delivery men in red uniforms handling packages"
          className="rounded-lg shadow-md"
        />
        <Image
          src={Frame12}
          alt="A delivery man handing a package to a customer at the door"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default Frame1;