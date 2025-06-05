import Image from "next/image";
import Banner from "./Home/components/Banner";
import Navbar from "./Home/components/Navbar";
import HeroSection from "./Home/components/HeroSection";
import ProductCard from "./Home/components/ProductCard";


export default function Home() {
  return (
    <>
    <Banner/>
    <Navbar/>
    <HeroSection/>
    <ProductCard/>
    </>
     
  );
}
