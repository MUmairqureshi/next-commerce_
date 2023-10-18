import { getCollectionProducts } from "lib/shopify";
import Link from "next/link";

export async function Latestproduct() {
  const latestProduct = await getCollectionProducts({
    collection: 'the-latest-product'
  });
  console.log("oooo",latestProduct)
  if (!latestProduct[0]) return null;
  const [firstProduct] = latestProduct;


  const trendingProduct = await getCollectionProducts({
    collection: 'Trending'
  });

  if (!trendingProduct[0]) return null;
  const [trenProduct] = trendingProduct;
  return (
    //         <div className='h-screen p-8 w-full  first-line: item-center  '>

    //             <div className='flex flex-col lg:flex-row    h-screen md:gap-4'>
    //             <div className="relative w-1/2 flex items-end ">
    //   <img src="https://kirrinfinch.com/cdn/shop/files/New_Arrivals_Pre_Fall_61451e0c-e89e-4c13-ad31-49e20c7862bf_720x.png?v=1692206347" alt="Your Image" className="absolute   object-cover h-full w-full" />
    //   <div className="relative   p-4 text-white text-left">
    //     <p className="text-6xl    lg:w-96   ">The Latest Product</p>
    //     <button className='text-black bg-white px-12 py-4 rounded-sm  border'>SHOP NEW ARRIVALS</button>
    //   </div>
    // </div>

    // <div className="relative w-1/2 flex items-end ">
    //   <img src="https://kirrinfinch.com/cdn/shop/files/Best_Seller_Pre_F_b415c760-f5e0-4801-8357-afd3d0beb67c_720x.png?v=1692210526" alt="Your Image" className="absolute w-full h-full object-cover" />
    //   <div className="relative  p-4 text-white text-left">

    //     <p className=" text-6xl    lg:w-96  text-white  selection: ">What's Trending</p>
    //     <button className='text-black  bg-white px-12 py-4 rounded-sm border '>SHOP BEST SELEERS</button>
    //   </div>
    // </div>
    //             </div>

    //         </div>

    <div className="container mx-auto w-full my-6">
      <div className="  flex  flex-col gap-14   md:p-8 lg:flex-row lg:p-12">
        <div className="relative   flex    h-96   w-full     items-end      overflow-hidden  md:h-[600px]">
          <img
          src={firstProduct.featuredImage.url}
          alt={firstProduct.featuredImage.altText}
          
            className="absolute h-full  w-full     object-cover"
          />
          <div className="relative items-end p-4 text-white lg:text-left">
            <p className="w-17 mb-2 font-serif text-4xl  lg:w-96 lg:text-6xl text-slate-100">
              The Latest Product
            </p>
            <Link href="/collections/new-arrivals">
            <button className="text-ellipsis rounded-sm border bg-white px-3 font-serif text-lg  text-black lg:px-12 lg:py-4">
              SHOP NEW ARRIVALS
            </button>
            </Link>
          </div>
        </div>

        <div className="relative   flex    h-96   w-full    items-end      overflow-hidden   md:h-[600px]">
          <img
            src={trenProduct.featuredImage.url}
            alt={trenProduct.featuredImage.altText}
            className="absolute h-full w-full    object-cover"
          />
          <div className="relative items-end p-4 text-white lg:text-left">
            <p className="w-17 mb-2 font-serif text-4xl text-slate-100 lg:w-96 lg:text-6xl">
              What's Trending
            </p>
            <Link href="/collections/trending">
            <button className="text-ellipsis rounded-sm border bg-white px-3 font-serif text-lg  text-black lg:px-12 lg:py-4">
              SHOP BEST SELLERS
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
