"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const ytPlayerRef = useRef<any>(null);
  const ytContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const showLocalVideo = true; // true = local video, false = YouTube

  // Load YouTube API only if YouTube is used
  useEffect(() => {
    if (showLocalVideo) return;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    (window as any).onYouTubeIframeAPIReady = () => {
      if (ytContainerRef.current) {
        ytPlayerRef.current = new (window as any).YT.Player(ytContainerRef.current, {
          videoId: "VvKQD7apvow",
          playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 1,
            rel: 0,
            modestbranding: 1, // removes YouTube logo
            showinfo: 0 , // hides video info     
             fs: 0,                // hide fullscreen button if desired
            iv_load_policy: 3     // hides annotations
          },
          events: {
            onReady: () => setIsPlaying(true),
            onStateChange: (event: any) => {
              if (event.data === 1) setIsPlaying(true); // playing
              if (event.data === 2) setIsPlaying(false); // paused
            },
          },
        });
      }
    };
  }, [showLocalVideo]);

  const handlePlayPause = () => {
    if (showLocalVideo) {
      if (!videoRef.current) return;
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (!ytPlayerRef.current) return;
      const playerState = ytPlayerRef.current.getPlayerState();
      if (playerState === 1) {
        ytPlayerRef.current.pauseVideo();
      } else {
        ytPlayerRef.current.playVideo();
      }
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black" id="hero-section">
      {showLocalVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div ref={ytContainerRef} className="absolute inset-0 w-full h-full" />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Play/Pause button */}
      <button
        onClick={handlePlayPause}
        className="relative z-10 bg-white rounded-full p-6 hover:scale-105 transition"
      >
        {isPlaying ? (
          <Pause className="w-8 h-8 text-black" />
        ) : (
          <Play className="w-8 h-8 text-black" />
        )}
      </button>
    </section>
  );
}
