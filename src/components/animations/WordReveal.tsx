import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface WordRevealProps {
  text: string;
  animate: boolean; // Add animate prop to control animation
}

const WordReveal: React.FC<WordRevealProps> = ({ text, animate }) => {
  const words = text.split(' ');

  return (
    <div className="inline-flex flex-wrap justify-center mx-auto">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : { opacity: 0 }} // Animate based on the animate prop
          transition={{ delay: index * 0.1 }} // Adjust delay as needed
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default WordReveal;
