"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import navbarItems from "./navbaritems";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 left-0 h-16 flex justify-between items-center p-4  bg-[#171616] z-50">

      <Link href="/" className="flex items-center text-white no-underline hover:text-gray-300">
<div className="mt-4">
<Image
src="/assets/images/util/iste_logo-01-removebg-preview.webp"
width={70}
height={70}
alt=""
>

</Image>
</div>
<div className="font-barlowb text-3xl -ml-2">
ISTE
</div>
     
      </Link>
      <div className="hidden md:flex items-center font-actor text-1.3xl space-x-12">
        {navbarItems.map((item, index) => (
          <Link href={item.link} key={index} className="text-white no-underline hover:text-gray-300">
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4 lg:mt-7 mt-7  ">
      <Image
src="/assets/images/logos/Nith.png"
width={200}
height={200}
alt=""
>

</Image>
        <div
          className={`md:hidden flex flex-col justify-center items-center cursor-pointer transition-transform duration-300 -mt-8 fixed right-8 ${
            isOpen ? "rotate-45" : ""
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`bg-white h-0.5 w-6 transition-transform duration-300 mb-1 ${
              isOpen ? "translate-y-1 rotate-30" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 w-6 transition-transform duration-300 mb-1 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 w-6 transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-90" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full h-screen  bg-[#171616] z-40 md:hidden">
          <div className="flex flex-col mx-[40%] space-y-2 pt-2 pb-7">
            {navbarItems.map((item, index) => (
              <Link href={item.link} key={index} className="text-white text-2xl  no-underline hover:text-gray-300" onClick={toggleMenu}>
                {item.title}
              </Link>
              
            ))}
          </div>
          <div className="container mx-auto px-4 py-8 sm:px-8 md:px-16 lg:px-32">
        <div className="flex flex-col items-center -mt-16">
          <div className="mb-footer">
            <Image 
              src="/assets/images/util/iste_logo-01-removebg-preview.webp" 
              alt="Website Logo" 
              width={250} 
              height={75} 
            />
          </div>
          <p className="text-3xl lg:mb-2 mb-0 font-barlowb text-white">ISTE NITH</p>
          <hr className="w-3/4 lg:w-full border-white my-4 py-4" />

        </div>

      </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
