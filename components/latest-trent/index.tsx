import { getCollection } from 'lib/shopify';
import Link from 'next/link';

export async function Latestproduct() {
  const trendingProduct = await getCollection('Trendings');
  if (!trendingProduct) return null;
  const latestProduct = await getCollection('the-latest-products');
  if (!latestProduct) return null;
  return (
    <div className="container mx-auto my-6 w-full">
      <div className="  flex  flex-col gap-14   md:p-8 lg:flex-row lg:p-12">
        <div className="relative   flex    h-96   w-full     items-end      overflow-hidden  md:h-[600px]">
          <img
            src={latestProduct?.image?.originalSrc}
            alt={latestProduct?.title}
            className="absolute h-full  w-full     object-cover"
          />
          <div className="relative items-end p-4 text-white lg:text-left">
            <p className="w-17 mb-2 font-serif text-4xl  text-slate-100 lg:w-96 lg:text-6xl">
              {latestProduct?.title}
            </p>
            <Link href={`/collection/${latestProduct?.handle}`}>
              <button className="text-ellipsis rounded-sm border bg-white px-3 font-serif text-lg  text-black lg:px-12 lg:py-4">
                {latestProduct?.description}
              </button>
            </Link>
          </div>
        </div>

        <div className="relative   flex    h-96   w-full    items-end      overflow-hidden   md:h-[600px]">
          <img
            src={trendingProduct?.image?.originalSrc}
            alt={trendingProduct?.title}
            className="absolute h-full w-full    object-cover"
          />
          <div className="relative items-end p-4 text-white lg:text-left">
            <p className="w-17 mb-2 font-serif text-4xl text-slate-100 lg:w-96 lg:text-6xl">
              {trendingProduct?.title}
            </p>
            <Link href="/collection/trending">
              <button className="text-ellipsis rounded-sm border bg-white px-3 font-serif text-lg  text-black lg:px-12 lg:py-4">
                {trendingProduct?.description}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className='h-screen p-8 w-full first-line: item-center'>

  <div className='flex flex-col lg:flex-row h-screen  gap-4'>
  
    <div className="relative w-full lg:w-1/2 flex items-end">
      <img src="https://kirrinfinch.com/cdn/shop/files/New_Arrivals_Pre_Fall_61451e0c-e89e-4c13-ad31-49e20c7862bf_720x.png?v=1692206347" alt="Your Image" className="absolute object-cover h-full w-full" />
      <div className="relative p-4 text-white text-left">
        <p className="text-6xl lg:w-96">The Latest Product</p>
        <button className='text-black bg-white px-12 py-4 rounded-sm border'>SHOP NEW ARRIVALS</button>
      </div>
    </div>

    <div className="relative w-full lg:w-1/2 flex items-end">
      <img src="https://kirrinfinch.com/cdn/shop/files/Best_Seller_Pre_F_b415c760-f5e0-4801-8357-afd3d0beb67c_720x.png?v=1692210526" alt="Your Image" className="absolute w-full h-full object-cover" />
      <div className="relative p-4 text-white text-left">
        <p className="text-6xl lg:w-96 text-white">What's Trending</p>
        <button className='text-black bg-white px-12 py-4 rounded-sm border'>SHOP BEST SELLERS</button>
      </div>
    </div>

  </div>

</div> */
}
