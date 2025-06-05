import { Home, ShoppingBag, Heart, User } from 'lucide-react';

export default function Banner() {
  return (
    <main className="relative flex items-center justify-between px-6 py-10">
      {/* Left Icon */}
      <Home className="w-6 h-6 text-gray-800 hover:text-black cursor-pointer" />

      {/* Center Title (absolute center using translate) */}
      <h1 className="absolute left-1/2 transform -translate-x-1/2 uppercase text-5xl font-serif">
        Diamond Forest
      </h1>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        <ShoppingBag className="w-6 h-6 text-gray-800 hover:text-black cursor-pointer" />
        <Heart className="w-6 h-6 text-gray-800 hover:text-black cursor-pointer" />
        <User className="w-6 h-6 text-gray-800 hover:text-black cursor-pointer" />
      </div>
    </main>
  );
}
