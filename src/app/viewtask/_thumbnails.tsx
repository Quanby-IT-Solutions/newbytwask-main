"use client";
import EmblaCarousel from "@/components/ui/thumbnailcarousel";
import { EmblaOptionsType } from 'embla-carousel';
import { SlideType } from "@/components/ui/thumbnailcarousel";

const OPTIONS: EmblaOptionsType = {}

const SLIDES: SlideType[] = [
  { type: "video", src: "/videos/example-video.mp4" },
  { type: "image", src: "/IMG-2.png" },
  { type: "image", src: "/IMG-1.png" },
  { type: "image", src: "/IMG-2.png" },
  { type: "image", src: "/IMG-1.png" },
  { type: "image", src: "/IMG-2.png" },
  { type: "image", src: "/IMG-1.png" },
  { type: "image", src: "/IMG-2.png" },
  { type: "image", src: "/IMG-1.png" },
  { type: "image", src: "/IMG-2.png" },
  { type: "image", src: "/IMG-1.png" },
  // Add more slides as needed
];

const _Thumbnails = () => {
  
  return (
    <section className="embla pb-6">
      <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
    </section>
  );
};

export default _Thumbnails;