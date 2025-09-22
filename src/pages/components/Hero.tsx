"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react"; 

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

   const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black" id="hero-section">
      {/* Thumbnail */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"   
        autoPlay
        muted
        loop
        playsInline
      />
       {/* <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/VvKQD7apvow?si=l2oSFshoB26svQcJ"
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      /> */}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Play button */}
      <button onClick={handlePlayPause} className="relative z-10 bg-white rounded-full p-6 hover:scale-105 transition">
         {isPlaying ? (
          <Pause className="w-8 h-8 text-black" />
        ) : (
          <Play className="w-8 h-8 text-black" />
        )}
      </button>
    </section>
  );
}
