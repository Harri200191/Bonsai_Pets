import React, { useState } from 'react';

const cities = ['Karachi', 'Lahore', 'Islamabad', 'Multan'];

export function WorkshopBooking() {
  const [selectedCity, setSelectedCity] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    alert(`Workshop booking request submitted for ${selectedCity}`);
  };

  return (
    <section id="workshops" className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Book a Workshop</h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="city">
                Select City
              </label>
              <select
                id="city"
                className="w-full p-2 border rounded"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                required
              >
                <option value="">Choose a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600"
            >
              Book Workshop
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}