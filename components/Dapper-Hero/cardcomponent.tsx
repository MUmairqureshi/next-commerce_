import Image from 'next/image';

import Link from 'next/link';

interface CardProps {
    name: string;
    url?:string
    description: string;
    imageSrc: string;
    altText: string;
  }
const CardComponent = (
  { name, description, url, imageSrc,altText
}: CardProps) => {
  return (
    <div className="border-content w-full hover:brightness-805 group relative box-content h-full  overflow-hidden  rounded-sm hover:cursor-pointer">
      <Link href={`${url}`}>
        <div className="border-content box-content h-[200px] w-full transform overflow-hidden transition-transform group-hover:scale-105 lg:h-[260px] ">
          <Image
          alt={altText}
            src={imageSrc}
            className="h-full w-full overflow-hidden"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <div className="py-6">
        <div>
          <Link href={`/product/${url}`}>
          
            <h3 className=" m-0 mb-3 underline-offset-8  text-xl  text-slate-800 underline ">{name}</h3>
          </Link>
          <p className="text-sm xl:text-base font-light leading-7 text-black ">{description.slice(0,180)+" ..."}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;