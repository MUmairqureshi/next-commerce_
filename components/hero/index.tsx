import React from 'react';

export function Hero() {
  return (
    // <div className='w-full h-full item-center relative'>
    //     <div className=' '>
    //         {/* <img src='https://kirrinfinch.com/cdn/shop/files/Hero_HomePage_Banner_1500x.png?v=1692199151' className="   w-full h-full object-cover   " /> */}
    //     </div>
    //     <div className=" flex flex-col justify-center  inset-4   ml-10 absolute z-10 p-4    text-left       mx-auto  ">
    //         <p className='text-xl	  text-slate-300 mb-2'>GENDER DEFYING FASHION</p>
    //         <p className='     font-serif mb-2  text-7xl    w-96   font-light text-slate-200'>Style That Suits You</p>
    //         <button className='bg-white     px-14 py-4  ml-2  rounded-lg border mx-auto  text-black text-xl  font-serif'>SHOP NOW</button>
    //     </div>
    // </div>
    <div className="item-center relative h-full w-full">
      <div className="">
        <img
          srcSet=" 
            https://kirrinfinch.com/cdn/shop/files/Mobile_Hero_2_3_1080x.png?v=1692200428 600w,
            https://kirrinfinch.com/cdn/shop/files/Mobile_Hero_2_3_1080x.png?v=1692200428 1200w,
              https://kirrinfinch.com/cdn/shop/files/Hero_HomePage_Banner_1500x.png?v=1692199151 1500w"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 1500px"
          src="https://kirrinfinch.com/cdn/shop/files/Hero_HomePage_Banner_1500x.png?v=1692199151"
          className="h-full w-full object-cover"
          alt="Hero Image"
        />
      </div>
      <div className="absolute inset-0 z-10 mx-auto ml-10 flex flex-col justify-center p-4 pt-4 text-left">
        <p className="text-md mb-2 text-slate-200 sm:text-2xl">GENDER DEFYING FASHION</p>
        <p className="mb-2 w-full font-serif text-5xl font-light  text-slate-100    sm:w-96 sm:text-7xl">
          Style That Suits You
        </p>
        <button className="ml-auto mr-auto  mt-2 rounded-lg border bg-white px-10 py-4 font-serif text-xl text-black sm:ml-2 sm:mt-0 sm:px-14 sm:text-2xl">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
