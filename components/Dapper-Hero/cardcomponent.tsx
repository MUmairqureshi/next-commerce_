import Image from 'next/image';

import Link from 'next/link';

// interface CardProps {
//   id: string;
//   name: string;
//   url?: string;
//   description: string;
//   imageSrc: string;
//   altText: string;
//   handle: string;
// }
const CardComponent = ({ props }: any) => {
  // console.log(props)
  return (
    <div className="border-content hover:brightness-805 group relative box-content h-full w-full  overflow-hidden  rounded-sm hover:cursor-pointer">
      <Link href={`/all-blogs/${props.handle}`}>
        <div className="border-content box-content h-[200px] w-full transform overflow-hidden transition-transform group-hover:scale-105 lg:h-[260px] ">
          <Image
            alt={props.featuredImage?.altText}
            src={props.featuredImage?.url}
            className="h-full w-full overflow-hidden"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="py-6">
          <div>
            <h3 className=" m-0 mb-3 text-xl  text-slate-800  underline underline-offset-8 ">
              {props.title}
            </h3>
            <p className="text-sm font-light leading-7 text-black xl:text-base ">
              {props.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardComponent;
