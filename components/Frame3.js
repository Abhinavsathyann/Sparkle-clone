import React from 'react';
import Image from 'next/image';
import Liftcar from '../assets/Storage.png';
import Van from '../assets/Van.png';
import Pet from '../assets/Pet.png';
import Ship from '../assets/Ship.png';


const services = [
  {
    title: "STORAGE",
    description: "Secure and accessible storage units with advanced CCTV and fire alarm systems for your peace of mind.",
    image: Liftcar, // Corrected here
    icon: "fas fa-warehouse",
    bgColor: "bg-red-700"
  },
  {
    title: "OFFICE MOVE",
    description: "Effortless office relocation with minimal downtime, handled professionally for seamless business continuity.",
    image: Van,
    icon: "fas fa-building",
    bgColor: "bg-red-700"
  },
  {
    title: "PET RELOCATION",
    description: "Ensure your pet’s safe travel with our services, including flights, veterinary prep, and customs clearance.",
    image: Pet,
    icon: "fas fa-paw",
    bgColor: "bg-red-700"
  },
  {
    title: "TRANSIT INSURANCE",
    description: "Protect your belongings against loss or damage during relocation with our comprehensive transit insurance.",
    image: Ship,
    icon: "fas fa-shield-alt",
    bgColor: "bg-red-700"
  }
];

function ServiceCard({ service }) {
    return (
      <div className="relative">
        <Image
          src={service.image}
          alt={service.title} 
          width={700} 
          height={700} className="w-full h-[500px] object-cover text-center" 
        />
        <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg text-center">
          <div className="flex items-center mb-2 text-center">
            <i className={`${service.icon} ${service.bgColor} text-white p-2 rounded-full mr-2  `}></i>
            <h3 className="text-xl font-bold text-black">{service.title}</h3> 
          </div>
          <p className="text-black">{service.description}</p>
        </div>
      </div>
    );
  }
export default function Frame3() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
}