"use client"
import React from 'react';
import { useRouter } from 'next/navigation'


const CustomButton = () => {
  const router = useRouter()

  const pressed = () => {
    router.push('/events')
  }
  return (
    <button onClick={pressed} className="w-40 h-14 relative overflow-hidden px-6 py-3 bg-blue-300 text-black font-semibold rounded-lg shadow-md hover:bg-blue-100 transition duration-400 group">
      <span className="font-serif absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-x-0 group-hover:-translate-x-full">
        JUMP IN
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-x-full group-hover:translate-x-0">
        ✈️
      </span>
    </button>
  );
};

export default CustomButton;
