"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Interface for image data
interface Props {
  imagesUrl: string[];
}

export default function ImageSlider({imagesUrl}: Props) {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(index.toString());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
    setActiveSlide(index);
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className="carousel w-full">
        {imagesUrl.map((url, index) => {
          const slideIndex = index + 1;
          return (
            <div key={slideIndex} id={slideIndex.toString()} className="carousel-item w-full flex justify-center items-center">
              <Image src={url} height={1000} width={1000} alt='product' style={{objectFit:'cover'}}/>
            </div>
          );
        })}
        </div>
        <div className="w-full gap-2 flex justify-center items-center mt-4">
          {imagesUrl.map((url, index) => {
            const slideIndex = index + 1;
            return (
              <button
                key={slideIndex}
                onClick={(e) => handleSlideChange(slideIndex, e)}
                className={`btn h-16 bg-transparent ${activeSlide === slideIndex ? 'border-2 border-primary' : ''}`}
              >
                <Image src={url} height={50} width={50} alt='product' style={{objectFit:'cover'}}/>
              </button>
            );
          })}
        </div>
    </div>
  );
}