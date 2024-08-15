"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Footer from '@/components/footer';
import Head from 'next/head';
import { useEffect } from 'react';
import { BiSolidContact } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";        
import React, { useState } from 'react';
import DomainPage from './domains';
import Image from 'next/image'
import Contactus from './contact';

import Loader from '@/components/loader';
import { motion, useScroll } from "framer-motion";
import { ImagesSlider } from '@/components/ui/image-slider';
import { DirectionAwareHover } from "@/components/ui/direction-aware"


import { ContainerScroll } from "../../components/ui/container-scroll";




const Homepage = () => {

  const pagenames = [

  { name: 'HOME', href: '/home' },
  { name: 'MEMBERS', href: '/members' },
  { name: 'EVENTS', href: '/events' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'BLOGS', href: '/blogs' },
  { name: 'PROJECTS', href: '/projects' },];

  const [menu, setmenu] = useState(false);


  const imageUrl = [
    "/assets/images/util/Copy of DCS_0632 (1).webp",
    "/assets/images/aboutus/Hult_12N.webp",

"/assets/images/aboutus/Technex 04.webp",

    
  ];
 
  const [domain,setdomain] = useState<{ title: string; description: string; } | null>(null);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  useEffect(() => {
    // Simulate data fetching or any other asynchronous operation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1 second loading time

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <Loader />;
  }





return (


<>

<motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-2 bg-custom-white origin-left z-50"
      />
  <div className="lg:h-[320rem]  bg-[#171616]  text-white">
    
  
<div className='full'>

<Image src="/assets/images/util/iste_logo-01-removebg-preview.webp" 
  height={200}
  width ={200}
  quality={100}
  unoptimized={true}
  className=" -left-1 logo-44 relative w-20 h-auto z-50 text-white/70" alt="ISTE Logo" / >
  <span className="text-[#ffffff] font-actor ml-nith text-7xl">NITH</span>

  <div className="flex flex-col items-center justify-center absolute top-iste left-1/4">

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="flex flex-col items-center justify-center"
      >

        <motion.h1
          className="text-iste font-barlowlight lg:-ml-[30%] lg:mt-0 -ml-[40%] -mt-12 text-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ISTE
        </motion.h1>
        <motion.h1
          className="text-white/30 font-barlowlight text-iste lg:-ml-[30%] -ml-[40%] -mt-iste2 "
          style={{ clipPath: 'inset(60% 0 0 0)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          ISTE
        </motion.h1>
        <motion.h1
          className="text-white/10 font-barlowlight text-iste lg:-ml-[30%] -ml-[40%] -mt-iste3 "
          style={{ clipPath: 'inset(60% 0 0 0)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
        >
          ISTE
        </motion.h1>
      </motion.div>
    </div>
  <div className="relative">
      {/* Hamburger button for mobile view */}
      <button
        className="block lg:hidden absolute top-4 mt-4  right-4 p-2 bg-gray-700 rounded-md z-50"
        onClick={() => setmenu(!menu)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Overlay background for mobile menu */}
      {menu && (
        <div
          className="fixed inset-0  bg-[#171616] z-0"
          onClick={() => setmenu(false)}
          style={{ pointerEvents: 'none' }} // Prevents the overlay from blocking clicks
        ></div>
      )}

      {/* Navigation menu */}
      <nav
        className={`absolute top-44 right-0 pr-28 text-white lg:flex md:space-y-4 ${menu ? 'block bg-1e1e1e p-4' : 'hidden'}`}
      >
        <ul className="lg:block flex flex-col md:space-y-8 -mt-20  md:flex md:items-center">
          {pagenames.map((item, index) => (
            <motion.li
              key={item.name}
              className="relative group text-3xl flex items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <Link href={item.href}>
                <div className="text-white/60 font-actor hover:text-white transition-transform duration-300 group-hover:-translate-y-1.5 mr-4 cursor-pointer">
                  {item.name}
                </div>
              </Link>

              <span className="hidden md:flex w-24 h-px bg-white"></span>
              <span className="hidden md:flex w-3 h-3 bg-white rounded-full"></span>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
</div>



<div className="lg:mt-[45rem] md:mt-[47rem] mt-[35rem]  relative text-white">
  <div className="relative mt-40">
  <div className="flex flex-col overflow-hidden">
  



    </div>

    <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl mb-8 font-barlowmedium pt-16 pb-4 lg:text-[88px] text-center"
              >
                ABOUT US
              </motion.div>

<div className='px-[.5%]'>
   <ImagesSlider className="lg:h-[40rem] border-3 rounded-md h-[20rem] w-full  shadow-neon p-6" images={imageUrl}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .6,
        }}
        className="z-50 flex flex-col justify-center items-center opacity-50 lg:px-0 lg:mx-auto lg:w-full lg:h-full md:w-full md:h-full   md:px-0 px-[5%]  "
      >
  

      </motion.div>

    </ImagesSlider>
    </div>




    <div className="absolute inset-0 -mt-12 flex items-center justify-center">

      
    </div>
  </div>

  <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl mb-8 font-barlowmedium pt-16 pb-4 lg:text-[88px] text-center"
              >
                  <div className="flex flex-col items-center justify-center min-h-screen lg:mt-8 md:-mt-24 mt-8">
  <div className="lg:mx-[15%] lg:px-8 lg:py-7  mx-[5%] bg-[rgba(255,255,255,0.25)] shadow-custom backdrop-blur-2xl rounded-lg border border-custom mt-4 sm:mt-aboutcontent p-3">
  <p className="text-white font-actor text-center text-1.5xl sm:text-left md:text-2xl lg:text-3xl ">
    The Indian Society for Technical Education (ISTE) is the leading
    National Professional non-profit making Society for the Technical
    Education System in our country. The Students Chapter NIT Hamirpur is
    the representative at NIT Hamirpur to promote such technical culture in
    our college. We at NITH, conduct various events within the college and
    also participate in inter-college fests.
  </p>
</div>


<div className="relative mt-64 ml-72 h-80 w-auto">
  <div className="relative inset-grey  opacity-70 z-0 h-96 w-56 right-20 top-20  hidden sm:block "></div> 
  

</div>
</div>
            
              </motion.div>


</div>






<motion.div
initial={{ opacity: 0, y: 250 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className=""
>


<DomainPage/>
 </motion.div>
 <motion.div
initial={{ opacity: 0, y: 250 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className=""
>


<Contactus/>
 </motion.div>
 <div className='lg:pt-40 pt-0'></div>
 <Footer/>
              
 </div> 


 
 </>
);};


export default Homepage;