import { getCollection, getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import ProductCart from 'src/app/collections/product-cart';

export async function CollectionBox({ CollectionName }: { CollectionName: string }) {
  const Collection = await getCollection('suit-blazer');

  const latestProduct = await getCollectionProducts({
    collection: CollectionName
  });
  if (!latestProduct[0]) return null;
  if (!Collection) return null;
  return (
    <div className="item-center  min-h- relative w-full p-4 md:p-12 ">
      <div className=" min-h- container mx-auto flex w-full flex-col gap-8  p-4 md:flex-row md:px-3 md:py-4">
        <div className=" flex w-full flex-col gap-y-2">
          <div className="flex w-full justify-between  gap-4 lg:gap-8">
            <div
              style={{
                backgroundImage: `url(${latestProduct[0]?.featuredImage?.url})`,
                backgroundPosition: 'center',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat'
              }}
              className=" ml-4 hidden w-full  basis-1/2 flex-col  text-center  text-white md:flex  "
            >
              <div className=" flex h-full w-full flex-col items-start justify-end pb-2 pl-4 backdrop-brightness-75">
                <p className="mb-2 font-serif font-bold text-white md:text-start md:text-2xl lg:mb-4 lg:text-center lg:text-4xl  ">
                  {Collection?.title}
                </p>
                <p className="w-18 text-md font-serif md:mb-4 md:text-start  lg:text-left">
                  {Collection?.description}
                </p>
                <Link href={`/collection/${Collection?.handle}`}>
                  <button className="  bg-black px-10 py-3 font-serif text-white">
                    SHOP SUITS
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex basis-1/2 gap-4 lg:gap-8">
              {latestProduct.slice(0, 2).map((product, i) => (
                <ProductCart key={product.id} item={product} />
              ))}
            </div>
          </div>

          <div className="flex gap-4 lg:gap-8 ">
            {latestProduct.slice(0, 4).map((product, i) => (
              <ProductCart key={product.id} item={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
