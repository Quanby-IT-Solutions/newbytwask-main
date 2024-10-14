'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import '@/components/ui/css/embla.css';
import { Lens } from "@/components/ui/lens";

export type SlideType = {
  type: "video" | "image";
  src: string;
};

type ThumbProps = {
  selected: boolean;
  index: number;
  src: string; // New prop to pass the image or video src
  type: "video" | "image"; // New prop to differentiate between image and video
  onClick: () => void;
};

const Thumb: React.FC<ThumbProps> = (props) => {
  const { selected, index, src, type, onClick } = props;

  return (
    <div
      className={'flex-[0_0_22%] min-w-0 sm:flex-[0_0_15%]'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className={`bg-transparent cursor-pointer border-0 p-0 m-0 shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] text-[1.8rem] font-semibold text-[--detail-high-contrast] flex items-center justify-center h-[--thumbs-slide-height] w-full transition-transform duration-300 transform hover:scale-125
          ${selected ? 'opacity-100' : 'opacity-50' // Change opacity based on selection
        }`}
      >
        {type === "image" ? (
          <img
            src={src}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-full object-cover" // Ensure the image fits the thumbnail button
          />
        ) : (
          <video
            src={src}
            className="w-full h-full object-cover"
            muted
            poster={src} // Optionally, use a poster image for videos
          />
        )}
      </button>
    </div>
  );
};

type EmblaCarouselProps = {
  slides: SlideType[]; // Updated type for the slides
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });
  
  const [hovering, setHovering] = useState(false);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla">
      <div className="overflow-hidden rounded-xl" ref={emblaMainRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-[--slide-spacing]">
          {slides.map((slide, index) => (
            <div
              className="transform:translate-3d-0 flex-[0_0_var(--slide-size)] min-w-0 pl-[--slide-spacing]"
              key={index}
            >
              {slide.type === "video" ? (
                <video
                  controls
                  className="shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] rounded-[1.8rem] text-6xl font-semibold flex items-center justify-center h-[--slide-height] w-full select-none"
                  src={slide.src}
                />
              ) : (
                <Lens hovering={hovering} setHovering={setHovering}>
                  <img
                    className="shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] rounded-[1.8rem] text-6xl font-semibold flex items-center justify-center h-[--slide-height] w-full select-none"
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                  />
                </Lens>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs mt-[--thumbs-slide-spacing]">
        <div className="overflow-hidden rounded-xl" ref={emblaThumbsRef}>
          <div className="flex flex-row -ml-[--thumbs-slide-spacing]">
            {slides.map((slide, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                src={slide.src} // Pass the image or video source to the thumbnail
                type={slide.type} // Pass the type (video or image) to the thumbnail
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;