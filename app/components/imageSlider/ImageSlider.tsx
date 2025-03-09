"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Interface for image data
interface Props {
  imagesUrl: string[];
}

export default function ImageSlider({imagesUrl}: Props){
  // State to keep track of the current image index

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className="carousel w-full">

        {imagesUrl.map((url, index) => (index = index + 1,
          <div key={index} id={index.toString()} className="carousel-item w-full flex justify-center items-center">
          <Image  key={index} src={url} height={1000} width={1000} alt='product' style={{objectFit:'cover'}}/>
          </div>
        ))}
        </div>
        <div className="w-full gap-2 flex justify-center items-center">
          {imagesUrl.map((url, index) => ( index = index + 1,
            <Link key={index} href={`#${index.toString()}`} className="btn h-16 bg-transparent" replace>
              <Image  key={index} src={url} height={50} width={50} alt='product' style={{objectFit:'cover'}}/>
              </Link>
          ))}
        </div>

        </div>
  );
}