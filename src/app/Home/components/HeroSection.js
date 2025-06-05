import { ChevronDown } from "lucide-react";


export default function HeroSection() {
    return (
        <main className="relative mx-15 h-[70vh]">
            {/* First Div: Image and Content */}
            <div className="relative h-full overflow-visible">
                <img
                    src="/images/HeroSection.png"
                    alt="Hero"
                    className="w-full h-full object-cover rounded-3xl" // Changed to object-cover for full coverage
                />


                {/* Text Content - centered over image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
                    <h2 className="text-5xl font-serif mb-2">Featured collection</h2>
                    <p className="text-lg max-w-md">
                        Explore the exclusive pieces inspired by the beauty of nature
                    </p>
                </div>
            </div>

            {/* Second Div: Circle with floating effect */}
            <div className="relative">
                {/* Position relative here so absolute circle inside can overlap */}
                <div className="absolute w-24 h-24 rounded-full flex items-center justify-center left-1/2 -top-16 transform -translate-x-1/2 z-20 bg-white">
                    <div className="w-14 h-14 bg-gray-800 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition shadow-lg">
                        <ChevronDown className="w-6 h-6 text-white" />
                    </div>

                </div>
            </div>
        </main>
    );
}
