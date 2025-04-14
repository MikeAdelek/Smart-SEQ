import { useState, useEffect, useRef } from "react";
import Gallery1 from "../assets/gallery1.png";
import Gallery2 from "../assets/gallery2.png";
import Gallery3 from "../assets/gallery3.png";
import Gallery4 from "../assets/gallery4.png";

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        <div className="overflow-hidden">
          <div className="w-72 h-72 flex items-center justify-center">
            <img
              src={Gallery1}
              alt="Gallery 1"
              className="max-w-full max-h-full object-cover"
            />
            <img
              src={Gallery2}
              alt="Gallery 1"
              className="max-w-full max-h-full object-cover"
            />
            <img
              src={Gallery3}
              alt="Gallery 1"
              className="max-w-full max-h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 

export default Gallery