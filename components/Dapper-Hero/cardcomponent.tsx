import Image from 'next/image';

import Link from 'next/link';

interface CardProps {
  name: string;
  url?: string;
  description: string;
  imageSrc: string;
  altText: string;
}
const CardComponent = ({ name, description, url, imageSrc, altText }: CardProps) => {
  return (
    <div className="border-content hover:brightness-805 group relative box-content h-full w-full  overflow-hidden  rounded-sm hover:cursor-pointer">
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
            <h3 className=" m-0 mb-3 text-xl  text-slate-800  underline underline-offset-8 ">
              {name}
            </h3>
          </Link>
          <p className="text-sm font-light leading-7 text-black xl:text-base ">
            {description.slice(0, 180) + ' ...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
