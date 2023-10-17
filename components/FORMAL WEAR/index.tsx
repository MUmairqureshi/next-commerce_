import { getCollectionProducts } from "lib/shopify";
import Link from "next/link";

export async function Formallwear() {
  const latestProduct = await getCollectionProducts({
    collection: 'suits-blazer'
  });
  if (!latestProduct[0]) return null;
  return (
    <div className="item-center    min-h- relative w-full p-4 md:p-12">
      <div className=" min-h- container mx-auto  flex flex-col  gap-8 bg-gray-200  p-6 md:flex-row md:p-12">
        <div className=" flex flex-col items-center       text-start md:hidden">
          <img
            src="https://kirrinfinch.com/cdn/shop/files/ico-04_180x_png_540x.webp?v=1686602068"
            className="mb-2 w-10"
          />
          <p className="mb-4 font-serif text-lg   text-slate-700"> FORMAL WEAR</p>
          <p className="mb-4 font-serif text-4xl text-slate-700">{latestProduct[0].title}</p>
          <p className="w-18   text-md mb-8 font-serif text-slate-600">
           {latestProduct[0].description}
          </p>
          <button className="  rounded-sm bg-black px-12 py-3 font-sans text-white">
            SHOP SUITS
          </button>
        </div>
        <div className="h-full w-full border-b   border-zinc-950 pb-6 md:border-none xl:w-2/3 ">
        <Link href={`/product/${latestProduct[0]?.handle}`}>

          
          <img
            src={latestProduct[0].featuredImage.url}
            alt={latestProduct[0].featuredImage.altText}
            className="h-full  w-full "
            />
            </Link>
        </div>

        <div className=" flex  flex-col   ">
          <div className=" mb-4 hidden flex-col items-center border-b-2 border-zinc-950 pb-2 text-center md:mb-2  md:flex lg:mb-8 lg:pb-10 ">
            <img
              src="https://kirrinfinch.com/cdn/shop/files/ico-04_180x_png_540x.webp?v=1686602068"
              className="    mb-2 w-10"
            />
            <p className="mb-4 font-serif text-lg text-slate-700"> FORMAL WEAR</p>

            <p className="mb-2 font-serif text-slate-700 md:text-start md:text-2xl lg:mb-4 lg:text-center lg:text-4xl">
            {latestProduct[0]?.title}
            </p>
            <p className="w-18   text-md font-serif text-slate-600  md:mb-4 md:text-start lg:mb-8 lg:text-center">
            {latestProduct[0]?.description}
            </p>
            <button className="  bg-black px-16 py-4 font-serif text-white">SHOP SUITS</button>
          </div>
          <p></p>

          <div className="flex gap-4 lg:gap-8 ">
            <div className="relative">
            <Link href={`/product/${latestProduct[1]?.handle}`}>
              <img
                src={latestProduct[1]?.featuredImage.url}
                alt={latestProduct[1]?.featuredImage.altText}
                className="mb-2 h-[170px] md:h-[220px] w-64"
              />
              <p className="  text-md font-serif text-slate-600">
              {latestProduct[1]?.title}
              </p>
              </Link>

              <p className="text-md text-slate-600">{latestProduct[1]?.priceRange.maxVariantPrice.currencyCode} {latestProduct[1]?.priceRange.maxVariantPrice.amount}</p>
            </div>

            <div className="     relative">
            <Link href={`/product/${latestProduct[2]?.handle}`}>


              <img
                src={latestProduct[2]?.featuredImage.url}
                alt={latestProduct[2]?.featuredImage.altText}
                className="mb-2 w-64 h-[170px] md:h-[220px]"
              />
              <p className="    text-md font-serif text-slate-600">
              {latestProduct[2]?.title}
              </p>
            </Link>

              <p className="text-md text-slate-600">{latestProduct[2]?.priceRange.maxVariantPrice.currencyCode} {latestProduct[2]?.priceRange.maxVariantPrice.amount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
