import Link from 'next/link';
import React from 'react';
import { AiOutlineTwitter, AiFillInstagram, AiOutlineGooglePlus } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
const FollowUs = () => {
  return (
    <div className="bg-trasparent flex items-center justify-center p-10 md:p-0">
      <div className="flex h-[300px] flex-col items-center justify-center gap-6 bg-background p-10 md:h-[460px] md:p-20">
        <div className="h-1 w-14 bg-primary md:w-20" />
        <h1 className="leading-wider text-3xl font-bold tracking-wider md:text-4xl">Follow Us</h1>
        <div className="mt-4 flex gap-3 sm:gap-8 md:gap-12">
          <Link href="#">
            <BiLogoFacebook size="26" />
          </Link>
          <Link href="#">
            <AiOutlineTwitter size="26" />
          </Link>
          <Link href="#">
            <AiFillInstagram size="26" />
          </Link>
          <Link href="#">
            <AiOutlineGooglePlus size="26" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
