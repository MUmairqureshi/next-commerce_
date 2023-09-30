'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

const ImageCarousel = ({ imgData }: { imgData: StaticImageData[] }) => {
  const [selectedImage, setSelectedImage] = useState(imgData[0]);
  return (
    <>
      <div className="border-content box-content grid h-full w-full  grid-cols-4 gap-4 ">
        <div className="border-content col-span-4 box-content grid  w-full overflow-hidden">
          <Image src={selectedImage} className="h-full w-full" alt="Image" objectFit="cover" />
        </div>
        {imgData &&
          imgData.map((e, i) => (
            <div
              className={
                selectedImage == e
                  ? 'border-2 border-primary brightness-110 hover:cursor-pointer '
                  : 'border-0 brightness-90 hover:cursor-pointer'
              }
              onClick={() => setSelectedImage(e)}
            >
              <Image src={e} alt="product Image" objectFit="cover" />
            </div>
          ))}
      </div>
    </>
  );
};

export default ImageCarousel;
