"use client"
import React, { useState, useEffect } from "react";
import BlogList from "../../components/ui/blogCards";
import Loader from "@/components/loader"; // Import the Loader component
import { BackgroundBeams } from "@/components/ui/background_beams";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar1";

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  if (isLoading) {
    return <Loader />; // Show the loader while loading
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#171616]">
        <div className="justify-center flex flex-row pt-16">
          <div className="lg:text-7xl text-6xl font-barlowb text-white">B</div>
          <div className="lg:text-7xl text-6xl font-barlowb text-white">L</div>
          <div className="text-white font-barlowb lg:text-7xl text-6xl">O</div>
          <div className="text-white font-barlowb lg:text-7xl text-6xl">G</div>
          <div className="text-white font-barlowb lg:text-7xl text-6xl">S</div>
        </div>
        <div className="border-t-2 border-gray-200 md:mx-20 lg:mx-24 mx-4 mt-1 lg:mt-1"></div>

        <div className="lg:w-[65%] lg:mt-7 lg:mx-auto md:mx-auto md:w-[80%] mt-7 mx-auto md:mt-4">
          <BlogList />
        </div>
        <Footer />
      </div>
    </>
  );
}
