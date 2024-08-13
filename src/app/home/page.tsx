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
import DomainPage from '../domainspage/page';
import Image from 'next/image'

import Loader from '@/components/loader';
import { motion, useScroll } from "framer-motion";


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
  <div className="h-screen bg-[#171616]  text-white">
    
  
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
          className="text-iste font-barlowlight ml-iste lg:mt-0 -mt-12 text-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ISTE
        </motion.h1>
        <motion.h1
          className="text-white/30 font-barlowlight text-iste ml-iste -mt-iste2 "
          style={{ clipPath: 'inset(60% 0 0 0)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          ISTE
        </motion.h1>
        <motion.h1
          className="text-white/10 font-barlowlight text-iste ml-iste -mt-iste3 "
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
        className="block md:hidden absolute top-4 right-4 p-2 bg-gray-700 rounded-md z-50"
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
          className="fixed inset-0 bg-[#171616] z-0"
          onClick={() => setmenu(false)}
          style={{ pointerEvents: 'none' }} // Prevents the overlay from blocking clicks
        ></div>
      )}

      {/* Navigation menu */}
      <nav
        className={`absolute top-44 right-0 pr-28 text-white md:flex md:space-y-4 ${menu ? 'block bg-1e1e1e p-4' : 'hidden'}`}
      >
        <ul className="flex flex-col md:space-y-8 md:flex md:items-center">
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



<div className="mt-isteimg relative text-white">
  <div className="relative mt-10">
  <div className="flex flex-col overflow-hidden">
  



    </div>
    <Image
      src="/assets/images/util/Copy of DCS_0632 (1).webp"
      alt =""

      width ={200}
      height={200}
      quality={100}
      unoptimized={true}
      className="  flex opacity-50 lg:mx-auto lg:w-full lg:h-full md:w-full md:h-full h-56 w-96  md:px-0 px-[5%] lg:px-0  "
    />
    <div className="absolute inset-0 -mt-12 flex items-center justify-center">
      <div className="absolute text-3xl text-white/70  font-barlowmedium lg:-mt-96 md:-mt-40 md:text-5xl -mt-56 ml-auto lg:mr-[60%] mr-[50%]   z-10  lg:text-[108px] ">
        ABOUT US
      </div>
      
    </div>
  </div>

  <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="relative max-w-2xl lg:-ml-[50%] md:-ml-[50%] bg-aboutus opacity-100 p-4 rounded-lg shadow-lg mt-4 mx-4 sm:mt-aboutcontent sm:ml-aboutcontent sm:w-full sm:left-1/2">
      <p className="text-xl text-white opacity-100 font-actor text-center sm:text-2xl sm:text-left md:text-2xl lg:text-3xl">
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
  
  <Image src="/assets/images/util/aboutuspage.webp" 
  height={200}
  width ={200}
  quality={100}
  unoptimized={true}
  alt ="" className="relative z-10 h-img2 w-full mt-img2 right-img2 top-6 right-5  hidden sm:block" />
</div>
</div>
</div>








<DomainPage/>






{/* CONTACT PAGEEEEEE*/}



      <div className="flex flex-col items-center justify-center min-h-screen bg-[#171616]  text-white  -mt-16 lg:mt-0">
      <h1 className=" text-5xl lg:text-[88px] font-barlowmedium mb-12">CONTACT</h1>
      <p className=" lg:text-[32px] text-2xl px-10 lg:px-32  text-[#FFFFFF]  mb-0 lg:mb-0 text-center font-actor">
        Have a question or need assistance? Our team is always ready to help.
        Feel free to reach out, and we will be delighted to aid you by providing heartfelt support.
      </p>


    </div>

    <footer className='  bg-[#171616] z-50'>
    <div className=" flex flex-col md:flex-row lg:flex-row w-full justify-between   -mt-28 ">
    <div className=" flex lg:flex-row  lg:mx-12 mx-[15%] lg:ml-20 items-center">
      <FaMapLocationDot className="  lg:size-20 size-16 " />
      <div className='lg:ml-8 ml-8'>
        <p className="text-1.2xl font-barlow">Address</p>
        <p className="text-1.2xl font-barlow">NIT, Hamirpur<br />Himachal Pradesh,<br/> India, 177001</p>
      </div>
    </div>
    <div className=" flex lg:flex-row  lg:mx-12 mx-[15%] mt-7 items-center ">
      <BiSolidContact className=" size-16 lg:size-20  " />
      <div className=' ml-8 lg:ml-8'>
        <p className="text-1.2xl font-barlow">Phone</p>
        <p className="text-1.2xl font-actor">12345578</p>
      </div>
    </div>
    <div className="lg:mr-20 flex lg:flex-row mt-7 lg:mx-12 mx-[15%] items-center">
      <HiOutlineMailOpen className=" size-16 lg:size-20 " />
      <div className='lg:ml-8 ml-8  '>
        <p className="text-1.2xl font-barlow " >Email</p>
        <p className="text-1.2xl font-barlow ">iste@nith.ac.in</p>
      </div>
    </div>

  </div>

  
  </footer>



 </div> 
 <div className='lg:mt-116 mt-140'>
 <Footer/>
</div>

 </>
);};


export default Homepage;