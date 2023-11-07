import { getAllArticles, getCollection, getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import ProductCart from 'src/app/collection/product-cart';

export async function CollectionBox({CollectionName}:{CollectionName:string}) {
 const Collection = await getCollection('suit-blazer')
 const data= await getAllArticles()
  console.log("dat333a",data)


  const latestProduct = await getCollectionProducts({
    collection: CollectionName
  });
  if (!latestProduct[0]) return null;
  if (!Collection) return null;
  return (
    <div className="item-center  min-h- relative w-full p-4 md:p-12 ">
      <div className=" min-h- mx-auto container w-full flex flex-col gap-8  p-4 md:flex-row md:px-3 md:py-4">
        <div className=" flex flex-col gap-y-2 w-full">
        <div className='flex gap-4 lg:gap-8  w-full justify-between' >
          <div style={{backgroundImage:`url(${latestProduct[0]?.featuredImage?.url})`,backgroundPosition:"center",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"}} className=" basis-1/2 hidden ml-4  w-full flex-col  text-white  text-center md:flex  ">
            <div className=' justify-end h-full w-full backdrop-brightness-75 flex flex-col items-start pb-2 pl-4'>


            <p className="mb-2 font-serif md:text-start font-bold text-white md:text-2xl lg:mb-4 lg:text-center lg:text-4xl  ">
              {Collection?.title}
            </p>
            <p className="w-18 text-md font-serif md:mb-4 md:text-start  lg:text-left">
              {Collection?.description}
            </p>
          <Link href={`/collection/${Collection?.handle}`}>
            <button className="  bg-black px-10 py-3 font-serif text-white">SHOP SUITS</button>
          </Link>
            </div>
          </div>

          <div className="basis-1/2 flex gap-4 lg:gap-8">

          {latestProduct.slice(0,2).map((product,i)=>
                <ProductCart key={product.id} item={product} />
            )}
          </div>
          </div>

          <div className="flex gap-4 lg:gap-8 ">
            {latestProduct.slice(0,4).map((product,i)=>
                <ProductCart key={product.id} item={product} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
