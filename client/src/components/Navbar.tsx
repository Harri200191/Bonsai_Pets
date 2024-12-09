import { Menu, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/AuthStore';

export function Navbar() {
  const { logout, user } = useAuthStore();

  return (
    <nav className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">BonsaiPets</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#pets" className="hover:bg-emerald-700 px-3 py-2 rounded-md">Our Pets</a>
              <a href="#testimonials" className="hover:bg-emerald-700 px-3 py-2 rounded-md">Testimonials</a>
              <a href="#diy" className="hover:bg-emerald-700 px-3 py-2 rounded-md">DIY Kits</a>
              <a href="#workshops" className="hover:bg-emerald-700 px-3 py-2 rounded-md">Workshops</a>
              <div className="flex items-center space-x-4 ml-4">
                <span className="text-sm">Welcome, {user?.name}</span>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 hover:bg-emerald-700 px-3 py-2 rounded-md"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-emerald-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}