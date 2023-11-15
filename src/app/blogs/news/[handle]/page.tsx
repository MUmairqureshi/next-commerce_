import { getArticlesById } from 'lib/shopify';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function Articles({ params }: { params: { handle: string } }) {
  const BlogData = await getArticlesById({ blogHandle: 'news', articleHandle: params.handle });

  if (!BlogData) return null;

  return (
    <section>
      <CategoryPage BlogData={BlogData} item={[]} />
    </section>
  );
}

async function CategoryPage({
  BlogData
}: {
  // share: any;
  item: Product[];

  BlogData: any;
}) {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-2xl ">
        <section className=" mb-10 h-auto w-full">
          <div className="relative w-full ">
            <div className="h-full  ">
              <div className="relative h-[100px] w-full md:h-[260px] lg:h-[500px]">
                <Image
                  src={BlogData?.image.src}
                  alt={'product.featuredImage.altText'}
                  height={BlogData?.image.height}
                  width={BlogData?.image.width}
                  className="h-full w-full object-cover object-top"
                />
                {/* Dull black overlay */}
                <div className="absolute inset-0 z-10 bg-black opacity-30"></div>
                {/* Text */}
                <div className="absolute top-0 z-50 hidden h-full w-full flex-col justify-end p-6 text-center text-white md:p-4 lg:flex">
                  <div className="mb-3 font-semibold uppercase leading-4 tracking-wider text-white">
                    {BlogData.tags ? BlogData.tags.join(',') : null}
                  </div>
                  <h4 className="mb-4 text-4xl font-semibold capitalize leading-[48px] tracking-normal text-white ">
                    {BlogData.title}
                  </h4>
                  <span className="mb-6 font-semibold uppercase tracking-wider">
                    BY {BlogData.author.firstName + ' ' + BlogData.author.lastName}
                  </span>
                </div>
              </div>
              <div className="absolute top-10 z-10 m-6 block rounded-xl bg-white p-5 font-serif md:left-12 md:top-52 md:m-0 md:w-full md:max-w-2xl lg:hidden">
                <span className="font-serif text-sm uppercase tracking-wider text-slate-500">
                  {BlogData.tags ? BlogData.tags.join(',') : null}
                </span>
                <h4 className="my-3 text-2xl capitalize md:text-3xl">{BlogData.title}</h4>
                <span className="font-serif text-sm uppercase tracking-wider">
                  BY {BlogData.author.firstName + ' ' + BlogData.author.lastName}
                </span>
                <div className="mt-1 w-14 border-b-[1px] border-black"></div>
              </div>
            </div>

            <div className="mx-4 xl:mx-52 2xl:mx-72">
              <p className="my-4 mt-48 text-justify text-sm text-slate-900 md:mt-28 lg:mt-6">
                <div dangerouslySetInnerHTML={{ __html: BlogData.contentHtml }} />
              </p>
            </div>

            <div className="my-10 flex items-center justify-center gap-x-4 border-y-[1px] border-y-blue-950 py-6">
              <div className="text-lg font-bold text-blue-950">{share.title}</div>
              {share.images.map((item: any, key: number) => (
                <div key={key}>
                  <Link href={'/'}>
                    <Image src={item.url} alt={item.altText} height={30} width={30} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
