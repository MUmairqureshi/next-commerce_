import Image from 'next/image';
interface HeroProps{
    title : string,
    description : string
    imageSrc : string
    altText : string
}
function BlogPostSection({ imageSrc, title, description,altText }:HeroProps) {
  return (
      <section className=' h-auto w-full px-7  mb-10 '>
        <div className='relative w-full '>
              <div className='mt-10 h-[300px]  md:h-[500px]'>
                <Image
                  src={imageSrc}
                  alt={altText}
                  layout="fill"
                  objectFit="cover"
                  className=' object-cover  h-full w-full'
                  />
                  <div className='block font-serif md:hidden bg-[#e0e7ed] py-8 px-4'>
                  <span className='font-semibold font-serif mb-3 border-t-[1px] border-[#003445] pt-2 tracking-wider leading-4 uppercase text-[#003445]'>
                Featured  
              </span>
              <h4 className='text-[#003445] text-4xl leading-[48px] my-4 tracking-normal capitalize font-bold '>
                {title}
              </h4>
              <p className=' text-sm md:px-10 m-0 text-black'>
                {description}
              </p>
                  </div>

            </div>
            
            <div className='w-full flex justify-center  absolute  -bottom-40   text-center z-10 box-border'>
            <div className='hidden  md:block p-12 lg:p-16 xl:p-20 w-5/6 bg-[#003445]   text-center z-10 box-border'>
              <div className='font-semibold mb-3 tracking-wider leading-4 uppercase text-white'>
                Featured  
              </div>
              <h4 className='text-white text-4xl leading-[48px] mb-4 tracking-normal capitalize font-bold '>
                {title}
              </h4>
              <p className='text font-thin md:px-10 tracking-normal leading-6 m-0 text-white'>
                {description}
              </p>
            </div>
            </div>
          </div>
          
      </section>
  );
}

export default BlogPostSection;
