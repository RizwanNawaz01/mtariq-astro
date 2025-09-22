// components/Episodes.js
import { Play, Youtube } from "lucide-react"; // optional: install lucide-react for icons
import { ChevronRight  } from "lucide-react";  


export default function Episodes({ episodes }: { episodes: any[] }) {
   if (!episodes || episodes.length === 0) return null;

   
  const main = episodes[0]; // first episode as featured
  const others = episodes.slice(1); // rest


  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-1 gap-8 mb-10">
        {/* Main featured episode */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Thumbnail */}
           <a href={episodes[0].link} className="relative w-full md:w-1/2">
            <img
              src={main.image}
              alt={main.title}
              width={600}
              height={340}
              className="rounded-lg shadow-lg"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
                <Play className="text-black w-8 h-8" />
              </button>
            </div>
          </a>

          {/* Content */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <span className="text-sm text-green-600 font-semibold">
              {main.badge}
            </span>
            <span className="text-sm text-gray-500 mb-2">{main.date}</span>
            <h2 className="text-lg font-bold leading-snug mb-4 text-black">
              {main.title}
            </h2>
            <p className="text-gray-500 mb-4">{main.description}</p>
            <a href={episodes[0].link} className="flex items-center gap-4 justify-between">
                <span
                 
                className="text-red-600 font-semibold flex items-center gap-2"
                >
                WATCH EPISODE <ChevronRight  className="w-5 h-5 text-red-600"/>
            </span>
                <Youtube className="w-10 h-10 text-red-600 mr-12"/>
            </a>
            
          </div>
        </div>
      </div>

        {/* Other episodes grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {others.map((ep) => (
            <div key={ep.id} className="flex flex-col">
              <a href={ep.link}  className="relative">
                <img
                  src={ep.image}
                  alt={ep.title}
                  width={550}
                  height={220}
                  className="rounded-lg shadow-lg"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
                    <Play className="text-black w-6 h-6" />
                  </button>
                </div>
              </a>
              <h3 className="text-sm font-semibold mt-4 text-black">{ep.title}</h3>
                  <a href={ep.link}  className="flex items-center gap-4 justify-between">
                <span 
                className="text-red-600 font-semibold flex items-center gap-2"
                >
                WATCH EPISODE <ChevronRight  className="w-5 h-5 text-red-600"/>
            </span>
                <Youtube className="w-10 h-10 text-red-600 mr-12"/>
            </a>
            </div>
          ))}
        </div>
    </section>
  );
}
