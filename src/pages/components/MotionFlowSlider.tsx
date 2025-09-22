"use client";
 
import { motion } from "motion/react";


type Slide = {
  src: string;   
  url: string;   
};

type MotionFlowSliderProps = {
  slides:  Slide[];
  reverse?: boolean;
};

export default function MotionFlowSlider({slides, reverse = false }:MotionFlowSliderProps) {
  return (
    <div className="w-full max-w-[1400px] mx-auto py-8 overflow-hidden">
      {/* Moving container */}
      <motion.div
        className="flex gap-2"
        animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
        transition={{
          duration: 20, // adjust speed
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {slides.map((slide, i) => (
              <a
            key={`slide-${i}`}
            href={slide.url}
            target="_blank"
            rel="noopener noreferrer"
            className="!w-[350px] flex-shrink-0"
          >
          <div key={`slide-${i}`} className="!w-[350px] flex-shrink-0">
            <div className="relative w-full h-[250px] overflow-hidden shadow-lg" >
              <img
                src={slide.src}
                alt={`Slide ${i}`} 
                className="object-cover"
              />
            </div>
          </div>
          </a>
        ))}
        {/* duplicate slides for seamless loop */}
        {slides.map((slide, i) => (
          <div key={`dup-${i}`} className="!w-[350px] flex-shrink-0">
            <div className="relative w-full h-[250px] overflow-hidden shadow-lg" >
              <img
                src={slide.src}
                alt={`Dup ${i}`} 
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
