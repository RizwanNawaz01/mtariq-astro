// components/Timeline.tsx
"use client";
 
import { ChevronRight   } from "lucide-react"; 
import clsx from "clsx"; 
import { useState } from "react";
import { read } from "fs";

export default function Timeline({
  timelines
}:{
  timelines:{ title: string; description: string; image: string; link: string; }[]}) {

const [showAll, setShowAll] = useState(false);
const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

const toggleExpand = (i: number) => {
  setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
};

  const visibleItems = showAll ? timelines : timelines.slice(0, 3);
  return (
    <>
    <div className="relative max-w-6xl mx-auto px-4 py-16">
      {/* Vertical line */}
     <div
  className="absolute left-1/2 top-0 bottom-0 w-[3px] hidden md:block"
  style={{
    background: "linear-gradient(to bottom, white 85%, transparent 100%)",
  }}
/>

      <div className="space-y-16">
        {visibleItems.map((item, i) => (
          <div
            key={i}
            className={`md:flex items-center gap-20 relative ${
              "md:flex-row"  
            }`}
          >
            
              {/* Dot indicator */}
              <div className={clsx("hidden md:block absolute  -translate-y-1/2 w-4 h-4 rounded-full bg-yellow-400 left-[49.4%] ",i==0?"-top-14":"top-1/2")}  />
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 relative bg-[#1e1e1e] text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className={clsx("text-gray-300 mb-4",expanded[i] ?'':'line-clamp-2')}>{item.description}</p>
              <button  onClick={() => toggleExpand(i)} className="text-yellow-400 font-semibold hover:underline flex cursor-pointer">
                  {expanded[i]  ? (
              <>
                READ LESS <ChevronRight className="w-5 h-5 ml-2 text-yellow-400" />
              </>
            ) : (
              <>
                READ MORE <ChevronRight className="w-5 h-5 ml-2 text-yellow-400" />
              </>
            )}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
    
     {/* Show more / less button */}
      {timelines.length > 2 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-yellow-400 text-black px-5 py-5 rounded-full font-semibold hover:bg-yellow-500 transition flex items-center"
          >
            {showAll ? (
              <>
                Show Less Timeline<ChevronRight className="w-5 h-5 ml-2 text-black" />
              </>
            ) : (
              <>
                See Full Timeline <ChevronRight className="w-5 h-5 ml-2 text-black" />
              </>
            )}
          </button>
        </div>
      )} 
        </>
  );
}
