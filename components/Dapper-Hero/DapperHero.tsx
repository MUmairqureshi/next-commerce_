import Image from 'next/image';
interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
}
function BlogPostSection({ imageSrc, title, description, altText }: HeroProps) {
  return (
    <section className=" mb-10 h-auto w-full  px-7 ">
      <div className="relative w-full ">
        <div className="mt-10 h-[300px]  md:h-[500px]">
          <Image
            src={imageSrc}
            alt={altText}
            layout="fill"
            objectFit="cover"
            className=" h-full  w-full object-cover"
          />
          <div className="block bg-[#e0e7ed] px-4 py-8 font-serif md:hidden">
            <span className="mb-3 border-t-[1px] border-[#003445] pt-2 font-serif font-semibold uppercase leading-4 tracking-wider text-[#003445]">
              Featured
            </span>
            <h4 className="my-4 text-4xl font-bold capitalize leading-[48px] tracking-normal text-[#003445] ">
              {title}
            </h4>
            <p className=" m-0 text-sm text-black md:px-10">{description}</p>
          </div>
        </div>

        <div className="absolute -bottom-40 z-10  box-border  flex   w-full justify-center text-center">
          <div className="z-10  box-border hidden w-5/6 bg-[#003445] p-12 text-center   md:block lg:p-16 xl:p-20">
            <div className="mb-3 font-semibold uppercase leading-4 tracking-wider text-white">
              Featured
            </div>
            <h4 className="mb-4 text-4xl font-bold capitalize leading-[48px] tracking-normal text-white ">
              {title}
            </h4>
            <p className="text m-0 font-thin leading-6 tracking-normal text-white md:px-10">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPostSection;
