import { Search } from 'lucide-react';


export default function Navbar() {
    return (
        <>
        <div className="flex items-start justify-between mx-6 my-6">
            <div className="hidden md:flex space-x-20 mx-10">
                <a href="#" className="text-gray-600 hover:text-gray-900">RINGS</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">BRACELETS</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">NECKLACES</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">EARRINGS</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">CUSTOM</a>
            </div>


            <div className="relative">
                <input
                    type="text"
                    placeholder="SEARCH"
                    className="pl-3 pr-10 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-olive-500"
                />
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />

            </div>

        </div>
        </>
    )
}