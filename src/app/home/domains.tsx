"use client";
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import Lottie from 'lottie-react';
import animationData from "./tech1.json";
import animationData2 from "./design.json";
import animationData3 from "./finance.json";
import animationData4 from "./pr.json"

const DomainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define domains here
  const domains = useMemo(() => [
    {
      title: 'DESIGN',
      description: "The design team is the creative force to elevate society's visual, artistic, and aesthetic aspects. The Design team works to develop imaginatively captivating posters, graphics, and event branding.",
      image: 'https://i.pinimg.com/564x/df/ab/86/dfab862519becd6970a10c1369efdcf3.jpg',
      rotation: 'rotate-12'
    },
    {
      title: 'FINANCE',
      description: "The management of ISTE's financial activities falls within the purview of the Finance domain. It oversees activities such as accounting, financial reporting, and budgeting.",
      image: 'https://i.pinimg.com/564x/68/7c/69/687c6904b364e3c8bf539b7d15a581d4.jpg',
      rotation: 'rotate-1'
    },
    {
      title: 'PR',
      description: 'The Public Relations domain of ISTE is committed to providing the best possible communication with its members, institutions, and the public.',
      image: 'https://i.pinimg.com/564x/7a/cc/85/7acc8503086b3a2d7448b8be7058292d.jpg',
      rotation: '-rotate-6'
    },
    {
      title: 'TECH',
      description: "Welcome to ISTE's Tech Domain! Serving as the organization's technological backbone, the Tech domain is responsible for delivering essential technical resources and support.",
      image: 'https://i.pinimg.com/564x/96/6f/21/966f212c46f1d4831b82ed2698ce7953.jpg',
      rotation: '-rotate-12'
    }
  ], []);

  // Set up an auto-swiping interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % domains.length);
    }, 5000); // Change the interval time (5000ms = 5 seconds) as needed

    return () => clearInterval(interval); 
  }, [domains.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackMouse: true
  });

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % domains.length);
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + domains.length) % domains.length);
    }
  };

  const handleDomainClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentDomain = domains[currentIndex];



 

  

  return (

<div className=" lg:h-[100rem] md:h-[75rem] h-[160rem] bg-[#171616] lg:-mt-[38%] md:-mt-[80%]  -mt-[140%]  text-white flex flex-col   p-4 ">
      <h1 className="text-5xl mb-8 font-barlowmedium lg:pt-7  lg:text-[88px] text-center">DOMAINS</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:ml-[15%] md:ml-[5%] ml-0 lg:pt-7 pt-0 "> 
        <div className=''>


        <div className=' lg:w-116 lg:h-116  md:h-80 md:w-80 w-80 h-80 pt-4'>
        <Lottie animationData= {animationData}/></div>
        <div className='font-barlowmedium text-3xl text-center lg:w-96 w-80 -mt-16 md:mt-1 lg:-mt-16 '> TECH</div>
        <p className=" text-1.2xl lg:p-4  md:px-8 px-[7%] font-actor lg:w-96   pt-4  ">  Welcome to ISTE Tech Domain! Serving as the organization technological backbone, the Tech domain is responsible for delivering essential technical resources and support.
        </p>
        </div>

          
        <div>
        <div className='lg:w-96 lg:h-96 w-80 h-80 lg:pt-0 md:pt-0 pt-16'>
        <Lottie animationData= {animationData4}/>
        <div className='font-barlowmedium text-3xl text-center'> PR</div>
        <p className=" text-1.2xl pt-4 font-actor flex justify-center px-[7%] "> The Public Relations domain of ISTE is committed to providing the best possible communication with its members, institutions, and the public.
        </p></div>
        </div>

        <div>
        <div className='lg:w-96 lg:h-96 lg:pt-20 pt-80  md:pt-20 lg:mt-0 mt-8 w-80 h-80'>
        <Lottie animationData= {animationData3}/>
        <div className='font-barlowmedium text-3xl text-center lg:pt-8 pt-7 '> FINANCE</div>
        <p className=" text-1.2xl pt-4 font-actor flex justify-center px-[7%] ">  The management of ISTE& financial activities falls within the purview of the Finance domain. It oversees activities such as accounting, financial reporting, and budgeting.
        </p></div>
        </div>


        <div>
        <div className='lg:w-96 lg:h-96 w-80 h-80 pt-140 md:pt-0 lg:mt-0 mt-28 lg:pt-20'>
        <Lottie animationData= {animationData2}/>
        <div className='font-barlowmedium text-3xl text-center lg:pt-7 md:pt-7'> DESIGN</div>
        <p className=" text-1.2xl pt-4 px-[7%] font-actor ">  The design team is the creative force to elevate society visual, artistic, and aesthetic aspects. The Design team works to develop imaginatively captivating posters, graphics, and event branding.
        </p></div>
        </div>
        </div>
     




</div>

  );
};

export default DomainPage;
