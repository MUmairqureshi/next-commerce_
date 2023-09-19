import React from 'react';

export function Formallwear() {
  return (
    <div className="item-center    min-h- relative w-full p-4 md:p-12">
      <div className=" min-h- container mx-auto  flex flex-col  gap-8 bg-gray-200  p-6 md:flex-row md:p-12">
        <div className=" flex flex-col items-center       text-start md:hidden">
          <img
            src="https://kirrinfinch.com/cdn/shop/files/ico-04_180x_png_540x.webp?v=1686602068"
            className="mb-2 w-10"
          />
          <p className="mb-4 font-serif text-lg   text-slate-700"> FORMAL WEAR</p>
          <p className="mb-4 font-serif text-4xl text-slate-700">Comfortable and Confident</p>
          <p className="w-18   text-md mb-8 font-serif text-slate-600">
            A good suit has never been easier to wear thanks to expert details, well-sourced
            fabrics, and spot-on fit.
          </p>
          <button className="  rounded-sm bg-black px-12 py-3 font-sans text-white">
            SHOP SUITS
          </button>
        </div>
        <div className="h-full w-full border-b   border-zinc-950 pb-6 md:border-none xl:w-2/3 ">
          <img
            src="https://kirrinfinch.com/cdn/shop/files/HomePage_Georgie_Royal_Blue_540x.png?v=1692216933"
            alt="Large Image"
            className="h-full  w-full "
          />
        </div>

        <div className=" flex  flex-col   ">
          <div className=" mb-4 hidden flex-col items-center border-b-2 border-zinc-950 pb-2 text-center md:mb-2  md:flex lg:mb-8 lg:pb-10 ">
            <img
              src="https://kirrinfinch.com/cdn/shop/files/ico-04_180x_png_540x.webp?v=1686602068"
              className="    mb-2 w-10"
            />
            <p className="mb-4 font-serif text-lg text-slate-700"> FORMAL WEAR</p>

            <p className="mb-2 font-serif text-slate-700 md:text-start md:text-2xl lg:mb-4 lg:text-center lg:text-4xl">
              Comfortable and Confident
            </p>
            <p className="w-18   text-md font-serif text-slate-600  md:mb-4 md:text-start lg:mb-8 lg:text-center">
              A good suit has never been easier to wear thanks to expert details, well-sourced
              fabrics, and spot-on fit.
            </p>
            <button className="  bg-black px-16 py-4 font-serif text-white">SHOP SUITS</button>
          </div>
          <p></p>

          <div className="flex  gap-14 ">
            <div className="">
              <img
                src="https://kirrinfinch.com/cdn/shop/products/RoyalBlueAndrogynousWomensSuitBlazer_92891533-f229-4bc0-b8eb-f85fbef4a93a_360x.jpg?v=1634089471"
                alt="Small Image 1"
                className="mb-2 h-auto w-64"
              />
              <p className="  text-md font-serif text-slate-600">
                The Georgie Royal Blue Suit Blazer
              </p>
              <p className="text-md text-slate-600">$ 380</p>
            </div>

            <div className="     ">
              <img
                src="https://kirrinfinch.com/cdn/shop/products/RoyalBlueAndroDressPantsbrighter_3196dbfc-6303-407a-9779-eca169d55c78_360x.jpg?v=1651697522"
                alt="Small Image 2"
                className="mb-2 h-auto w-64"
              />
              <p className="    text-md font-serif text-slate-600">
                The Georgie Royal Blue Dress Pants
              </p>
              <p className="text-md text-slate-600">$ 195</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
