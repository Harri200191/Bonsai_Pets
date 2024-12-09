import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PetGallery } from './components/PetGallery';
import { Testimonials } from './components/Testimonials';
import { DIYSection } from './components/DIYSection';
import { WorkshopBooking } from './components/WorkshopBooking';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <PetGallery />
      <Testimonials />
      <DIYSection />
      <WorkshopBooking />
    </div>
  );
}

export default App;