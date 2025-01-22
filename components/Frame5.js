import React from 'react';
import Image from 'next/image';
import Dman from '../assets/Cman.png';

const Frame5 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#7A112D] justify-center items-center"> 
      
      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-8 mt-16 flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold text-white mb-4">CONTACT US</h1> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="p-3 rounded-md text-black w-full" />
            <input type="text" placeholder="Last name" className="p-3 rounded-md text-black w-full" />
            <input type="text" placeholder="Phone number" className="p-3 rounded-md text-black w-full" />
            <input type="text" placeholder="E mail" className="p-3 rounded-md text-black w-full" />
            <textarea placeholder="Moving from" className="p-3 rounded-md text-black h-24 md:h-auto w-full"></textarea>
            <textarea placeholder="Moving to" className="p-3 rounded-md text-black h-24 md:h-auto w-full"></textarea>
          </div>
          <button className="mt-4 px-6 py-2 border border-white rounded-md text-white">SUBMIT</button>
        </div>

   
        {/* <div className="hidden md:block md:w-1/3">
          <Image src={Dman} alt="Delivery person with boxes" className="w-full" />
        </div> */}
      </div>

  
  

      {/* Copyright & Branding */}
      <div className="text-center text-white py-4">
      <img src="/SPARKLE LOGOS-03.svg" alt="Sparkle Relocations Logo" className="w-250 h-object-contain white-logo" />
        <p className="text-sm mt-2">&copy; Sparkle's Relocation Ltd. All rights reserved</p>
      </div>
      
    </div>
  );
};

export default Frame5;