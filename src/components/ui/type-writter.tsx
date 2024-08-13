"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let letterIndex = 0;

    const interval = setInterval(() => {
      if (letterIndex < words[currentIndex].text.length) {
        currentText += words[currentIndex].text[letterIndex];
        setDisplayedText(currentText);
        letterIndex++;
      } else {
        currentText = "";
        letterIndex = 0;
        currentIndex = (currentIndex + 1) % words.length;
      }
    }, 200);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className=" lg:text-4xl text-2xl font-barlowb"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          <span className="dark:text-white font-barlowb text-white">
            <span>We are a </span>
            {displayedText}
          </span>
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-8 sm:h-6 xl:h-12 bg-white",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
