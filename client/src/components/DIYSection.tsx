import { Package, Book, Video, Heart } from 'lucide-react';

export function DIYSection() {
  return (
    <section id="diy" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">DIY Bonsai Pet Kits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Package className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Starter Kit</h3>
            <p className="text-gray-600">Everything you need to begin your Bonsai pet journey</p>
          </div>
          <div className="text-center">
            <Book className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Guide Book</h3>
            <p className="text-gray-600">Comprehensive care instructions and tips</p>
          </div>
          <div className="text-center">
            <Video className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
            <p className="text-gray-600">Step-by-step video guidance</p>
          </div>
          <div className="text-center">
            <Heart className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Care Package</h3>
            <p className="text-gray-600">Monthly supplies for your Bonsai pet</p>
          </div>
        </div>
      </div>
    </section>
  );
}