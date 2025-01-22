import React from 'react';
import HeroImage from '../assets/Hero.jpg';
import Image from 'next/image';

function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Hero Image */}
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="w-full h-full object-cover"
        key="hero-image"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Updated Logo */}
          <img src="/SPARKLE LOGOS-03.svg" alt="Sparkle Relocations Logo" className="w-250 h-object-contain" /> 
        </div>
        <nav className="space-x-6 text-white">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Blogs</a>

          {/* Contact Us Button without Sliding Effect */}
          <a href="#" className="bg-red-700 text-white py-2 px-4 rounded inline-block hover:bg-red-800">
            Contact Us
          </a>
        </nav>
      </div>

      {/* Hero Text */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 text-white">
        <h1 className="text-5xl font-bold text-red-700">Stress-Free Relocations, </h1>
        <h1 className="text-5xl font-bold text-red-700">Anytime, Anywhere.</h1>
        <p className="mt-4 text-lg">
          Handling Everything from Door to Door with care and 
        </p>
        <p className="mt-4 text-lg">
          efficiency, with our trusted expert teams and partners
        </p>
        
        <p className="mt-4 text-lg">
        for seamless moves, anytime, anywhere worldwide.
        </p>
      </div>
    </div>
  );
}

export default Hero;