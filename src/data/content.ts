
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
 
const api_host = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:1337"

async function fetchGuestSlider(){
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.STRIPI_API_TOKEN}`
    }
  }

  try {
    const res = await fetch(`${api_host}/api/guests?populate=*` );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data.data.map((guest: any) => {

      const imageAttr = guest.image;  

      return {
        src: imageAttr?.formats?.small?.url
          ? `${api_host}${imageAttr.formats.small.url}`
          : `${api_host}${imageAttr?.url}`, 
        url: guest.url,
      };
    });
  } catch (error) {
    console.error("Error fetching guests:", error);
    return [];
  }


}

export const guestSlides  = await fetchGuestSlider();

 // split into even & odd
export const guestSlidesEven = guestSlides.filter((_: unknown, i: number) => i % 2 === 0);
export const guestSlidesOdd = guestSlides.filter((_: unknown, i: number) => i % 2 !== 0);



async function fetchTimeline(){
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.STRIPI_API_TOKEN}`
    }
  }

  try {
    const res = await fetch(`${api_host}/api/timelines?populate=*` );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data.data.map((timeline: any) => {

      const imageAttr = timeline.image;  

      return {
        title: timeline.title,
        description: timeline.description,
        link: timeline.link,
        image: imageAttr?.formats?.small?.url
          ? `${api_host}${imageAttr.formats.small.url}`
          : `${api_host}${imageAttr?.url}`,  
      };
    });
  } catch (error) {
    console.error("Error fetching timelines:", error);
    return [];
  }

}

 export  const timelines = await fetchTimeline();
 

 
async function fetchEpisodes(){
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.STRIPI_API_TOKEN}`
    }
  }

  try {
    const res = await fetch(`${api_host}/api/episodes?populate=*` );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data.data.map((episode: any) => {

      const imageAttr = episode.image;  

      return {
        id : episode.id,
        title: episode.title,
        description: episode.description,
        link: episode.link,
        date: episode.date,
        image: imageAttr?.formats?.small?.url
          ? `${api_host}${imageAttr.formats.small.url}`
          : `${api_host}${imageAttr?.url}`,  
      };
    });
  } catch (error) {
    console.error("Error fetching episodes:", error);
    return [];
  }

}

 export  const episodes = await fetchEpisodes();
 
 
// content/socials.ts
export const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: FaTiktok,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: Youtube,
  },
  {
    name: "X",
    href: "https://x.com",
    icon: FaXTwitter,
  },
];
