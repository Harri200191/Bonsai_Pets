import React from 'react';
import { bonsaiPets } from '../data/pets';

export function PetGallery() {
  return (
    <section id="pets" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Bonsai Pets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonsaiPets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
                <p className="text-gray-600 mb-4">{pet.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-bold">
                    Rs. {pet.price.toLocaleString()}
                  </span>
                  <button className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}