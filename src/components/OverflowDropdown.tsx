"use client"
import React, { useState, useRef, useEffect } from 'react';

interface OverflowDropdownProps {
  text: string;
}

const OverflowDropdown: React.FC<OverflowDropdownProps> = ({ text }) => {
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (textRef.current) {
        setIsOverflowing(textRef.current.scrollWidth > textRef.current.clientWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [text]);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="relative">
      <div 
        ref={textRef}
        className={`text-lg ${isOverflowing ? 'truncate' : ''} cursor-pointer`}
        onClick={toggleDropdown}
      >
        {text}
      </div>
      {isOverflowing && isOpen && (
        <div className="absolute left-0 top-full mt-2 bg-black text-white p-2 rounded shadow-lg z-10 whitespace-normal">
          {text}
        </div>
      )}
    </div>
  );
};

export default OverflowDropdown;
