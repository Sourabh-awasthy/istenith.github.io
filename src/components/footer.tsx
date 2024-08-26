import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <footer className="bg-[#171616] text-white">
      <div className="container mx-auto px-4 py-8 sm:px-8 md:px-16 lg:px-32">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-footer">
            <Image 
              src="/assets/images/util/iste_logo-01-removebg-preview.webp" 
              alt="Website Logo" 
              width={240} 
              height={75} 
            />
          </div>
          <p className="text-3xl lg:mb-2 -mt-12 font-medium">ISTE NITH</p>
          <hr className="w-3/4 lg:w-full border-gray-600 my-4 py-4" />
          <div className="flex mb-8 space-x-4 lg:space-x-16">
            <a 
              href="https://www.linkedin.com/company/iste-nith/" 
              className="p-3 bg-white text-black rounded-full transition duration-500 ease-in-out transform hover:bg-gray-900 hover:text-white hover:opacity-100 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/istenith" 
              className="p-3 bg-white text-black rounded-full transition duration-500 ease-in-out transform hover:bg-gray-900 hover:text-white hover:opacity-100 hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://maps.app.goo.gl/Wzwst1ZgeqPKxDUi6" 
              className="p-3 bg-white text-black rounded-full transition duration-500 ease-in-out transform hover:bg-gray-900 hover:text-white hover:opacity-100 hover:scale-110"
            >
              <FaMapMarkerAlt size={24} />
            </a>
            <a 
              href="https://www.instagram.com/teamistenith/" 
              className="p-3 bg-white text-black rounded-full transition duration-500 ease-in-out transform hover:bg-gray-900 hover:text-white hover:opacity-100 hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <p className="hidden sm:block">© 2024 All Rights Reserved</p>
          <p className="block sm:hidden text-center">© 2024 All Rights Reserved</p>

          <Link href="mailto:iste@nith.ac.in" className=" mr-4 lg:mr-0 hover:underline cursor-pointer">
      Contact Us
   

          </Link>
        </div>
      </div>


</footer>

    
      </>
    

  );
};

export default Footer;