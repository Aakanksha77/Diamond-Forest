import { ChevronDown } from "lucide-react"; // Make sure to import

export default function DesignSection() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 my-20 px-6">
            {/* Image Section with overlay */}
            <div className="w-full md:w-1/2 flex justify-center relative">
                {/* Image */}
                <img
                    src="/images/image.png"
                    alt="design"
                    className="w-full max-w-md rounded-3xl shadow-md object-cover"
                />

                {/* Overlay Circle */}
                <div className="absolute top-1/2 right-32 transform -translate-y-1/2 z-20 bg-white w-24 h-24 rounded-full flex items-center justify-center">
                    <div className="w-14 h-14 bg-gray-800 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition shadow-lg">
                        <ChevronDown className="w-6 h-6 text-white" />
                    </div>
                </div>

            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    DESIGN YOUR OWN
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    From selecting your perfect lab-grown diamond to choosing the setting,
                    metal, and personal touches, our custom design process brings your
                    vision to life with expert craftsmanship and effortless guidance every
                    step of the way.
                </p>
                <div className="bg-[#555c3b] rounded-md text-center p-3 w-fit">
                    <h2 className="text-lg font-medium text-amber-50">
                        START YOUR CUSTOM DESIGN
                    </h2>
                </div>
            </div>
        </div>
    );
}
