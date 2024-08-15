
import { BiSolidContact } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";   
import Lottie from 'lottie-react';
import animationmap from "./map2.json";
import animatiomcontact from "./mail1.json";
import animatiomcall from "./call3.json";
import animationcontact from "./contactus.json";
export default function contact (){
    return(
        <>
<div className="flex flex-col items-center justify-center min-h-screen bg-[#171616] mt-20 lg:mt-0 text-white ">
      <h1 className=" text-6xl lg:text-[88px] font-barlowmedium mb-12">CONTACT</h1>
      <p className=" lg:text-[32px] text-1.5xl lg:px-32 px-[10%] text-[#FFFFFF]  mb-0 lg:mb-0  font-actor">
        Have a question or need assistance? Our team is always ready to help.
        Feel free to reach out, and we will be delighted to aid you by providing heartfelt support.
      </p>


      <div className="h"> <Lottie animationData= {animationcontact}/></div>



</div>

<footer className='  bg-[#171616] z-50'>
    <div className=" flex flex-col md:flex-row lg:flex-row w-full lg:px-28 px-0 flex-wrap justify-between lg:-mt-24  md:-mt-28 mt-0 ">
    <div className=" flex lg:flex-row  lg:mx-28 mx-[20%]   md:mx-[20%] items-center">
        <div className="lg:h-20 lg:w-20 md:h-32 md:w-32 h-20 w-20"> <Lottie animationData= {animationmap}/></div>
      <div className='lg:ml-8 ml-8 md:ml-20'>
        <p className="text-1.2xl lg:text-1.5xl md:text-3xl  font-barlow">Address</p>
        <p className="text-1.2xl   lg:text-1.5xl md:text-3xl font-barlow">NIT, Hamirpur<br />Himachal Pradesh,<br/> India, 177001</p>
      </div>
    </div>
    <div className=" flex lg:flex-row  lg:mx-12 mx-[20%] md:mt-12 lg:mt-0 mt-7 md:mx-[20%] items-center ">
    <div className="lg:h-16 lg:w-16 md:h-28 md:w-28 h-16 w-16"> <Lottie animationData= {animatiomcall}/></div>
      <div className=' ml-10 lg:ml-8 md:ml-24'>
        <p className="text-1.2xl lg:text-1.5xl md:text-3xl font-barlow">Phone</p>
        <p className="text-1.2xl lg:text-1.5xl md:text-3xl font-actor">12345578</p>
      </div>
    </div>
    <div className="lg:mr-20 flex lg:flex-row mt-7 lg:mx-12 md:mx-[20%] mx-[20%] items-center">
    <div className="lg:h-28 lg:w-28  md:h-48 md:w-48 h-28 w-28  -ml-6"> <Lottie animationData= {animatiomcontact}/></div>
      <div className='lg:ml-8 ml-4 md:ml-12 '>
        <p className="text-1.2xl  lg:text-1.5xl md:text-3xl font-barlow " >Email</p>
        <p className="text-1.2xl lg:text-1.5xl md:text-3xl font-barlow ">iste@nith.ac.in</p>
      </div>
    </div>

  </div>


  
</footer>

 </>
    )
}