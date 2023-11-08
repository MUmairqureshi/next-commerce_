/* eslint-disable unicorn/filename-case */
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  node: {
    handle: string;
    id: string;
    image: any;
    title: string;
    content: string;
  };
}
const CardListingScetion = ({ Blogs }: { Blogs: BlogPost[] }) => {
  // console.log("All",Blogs)
  return (
    <div className="grid w-full grid-cols-1  gap-x-6 gap-y-8 bg-white px-7 py-10 md:grid-cols-2 lg:grid-cols-3">
      {Blogs.slice(1).map((item: any, ind: any) => {
        // console.log("item",item.node)
        return (
          <div
            key={ind}
            className="border-content hover:brightness-805 group relative box-content h-full w-full  overflow-hidden  rounded-sm hover:cursor-pointer"
          >
            <Link href={`/all-blogs/${item.node.handle}`}>
              <div className="border-content box-content h-[200px] w-full transform overflow-hidden transition-transform group-hover:scale-105 lg:h-[260px] ">
                <Image
                  alt={item.node.image?.altText}
                  src={item.node.image?.src}
                  width={1000}
                  height={1000}
                  className="h-full w-full overflow-hidden object-cover object-top"
                />
              </div>
              <div className="py-6">
                <div>
                  <h3 className=" m-0 mb-3 text-xl text-slate-800 underline underline-offset-8 ">
                    {item.node.title}
                  </h3>
                  <p className="line-clamp-3 text-sm font-light leading-5 text-black xl:text-sm ">
                    {item.node.content}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardListingScetion;
