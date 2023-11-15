/* eslint-disable unicorn/filename-case */
import Image from 'next/image';
import Link from 'next/link';

// interface BlogPost {
//   id: string;
//   title: string;
//   contentHtml: string;
//   content: string;
//   publishedAt: string;
//   image: {
//     url: string;
//     width: number;
//     height: number;
//     altText: string | null;
//   };
// }
const CardListingScetion = ({ Products }: { Products: any }) => {
  // console.log("All",Products)
  return (
    <div className="grid w-full grid-cols-1  gap-x-6 gap-y-8 bg-white px-7 py-10 md:grid-cols-2 lg:grid-cols-3">
      {Products.map((item: any, ind: any) => {
        // console.log("item",item)
        return (
          <div
            key={ind}
            className="border-content hover:brightness-805 group relative box-content h-full w-full  overflow-hidden  rounded-sm hover:cursor-pointer"
          >
            <Link href={`/all-blogs/dapper-scouts/${item.handle}`}>
              <div className="border-content box-content h-[200px] w-full transform overflow-hidden transition-transform group-hover:scale-105 lg:h-[260px] ">
                <Image
                  alt={item.image?.altText}
                  src={item.image?.url}
                  width={item.image?.width}
                  height={item.image?.height}
                  className="h-full w-full overflow-hidden object-cover object-top"
                />
              </div>
              <div className="py-6">
                <div>
                  <h3 className=" m-0 mb-3 text-xl text-slate-800 underline underline-offset-8 ">
                    {item.title}
                  </h3>
                  <p className="line-clamp-3 text-sm font-light leading-5 text-black xl:text-sm ">
                    {item.description}
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
