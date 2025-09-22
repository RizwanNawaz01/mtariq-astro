// components/Heading.tsx
"use client";

import clsx from "clsx";

interface HeadingProps {
  title: string;
  subtitle?: string; 
  custom?: string; 
}

export default function Heading({
  title,
  subtitle ,
  custom
}: HeadingProps) {
  return (
    <div
      className={clsx(
        "my-8 text-center max-w-7xl mx-auto px-4 lg:px-16 ", 
      )}
    >
         {subtitle && (
        <h4 className={clsx("mt-2 mb-2 text-2xl font-bold",custom?"text-black":"text-yellow-400 ")}>{subtitle}</h4>
      )}
      <h2
        className={clsx(
          "text-3xl md:text-5xl font-bold ",custom?"text-black ":"text-white"
        )}
      >
        {title}
      </h2>

     
    </div>
  );
}
