import { Leaf } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Leaf className="mx-auto h-12 w-12 text-emerald-400" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Welcome to BonsaiPets
          </h1>
          <p className="mt-6 text-xl text-emerald-100">
            Discover the magic of miniature companionship with our expertly crafted Bonsai pets.
          </p>
          <div className="mt-10">
            <a
              href="#pets"
              className="rounded-md bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-400 transition-colors"
            >
              Explore Our Pets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}