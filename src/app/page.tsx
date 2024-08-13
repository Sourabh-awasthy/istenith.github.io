"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shoting-star";
import { StarsBackground } from "@/components/ui/stars-backfround";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/type-writter";
import Link from "next/link";
import {Button } from "../components/ui/moving-border";
import  { useState,useEffect } from 'react';
import Loader from "@/components/loader";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/ui/animated-cursor";

import { motion } from "framer-motion";

const words = [


  {
    text: "Team",
    
  },
  {
    text: "Society",
   
  },

  {
    text: " Family",
    
  },
];


export default function ShootingStarsAndStarsBackgroundDemo() {
  const [loading, setLoading] = useState(true);


useEffect(() => {
  // Simulate data fetching or any other asynchronous operation
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1400); // Simulate a 1 second loading time

  return () => clearTimeout(timer); // Cleanup the timer on unmount
}, []);

if (loading) {
  return <Loader />;
}
  return (
    <>
      <div className="min-h-screen relative w-full bg-[#171616] flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={70}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className=" font-bold lg:-mt-60 md:-mt-60 -mt-[60%] text-white relative  z-20">
          <div className=" lg:mx-[20%] mx-[10%]">
      
          <Image 
            src="/assets/images/util/iste_logo-01-removebg-preview.webp" 
            alt="Website Logo" 
            width={320} 
            height={100} 
          />

          </div>

      
          <div className="lg:-mt-32 -mt-[20%] lg:text-9xl md:text-7xl text-6xl mx-[8%] lg:mx-0 md:mx-0 font-barlowmedium  ">ISTE NITH</div>

        </div>
        <div className="font-barlowb mt-8 text-white  " >
      
        <TypewriterEffectSmooth words={words} />
        </div>
      </div>

      <ShootingStars />
      <ShootingStars />
      <ShootingStars />
      <div className="lg:mx-[46%] mx-[33%]  lg:-mt-32  md:-mt-24 -mt-[40%] md:mx-[46%] h-40 w-40">
<Link href="/home">

      <Button
        borderRadius="1rem"
        className=" bg-[#171616] text-white dark:text-black  text-1xl  p-4 dark:white hover:text-white/40"
      >
        Explore
      </Button>
      </Link>
        </div>

    </>
  );
}
