import { getCollection, getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import ProductCart from 'src/app/collection/product-cart';

export async function CollectionBox2({ CollectionName }: { CollectionName: string }) {
  const latestProduct = await getCollectionProducts({
    collection: CollectionName
  });
  const Collection = await getCollection('all-dress-shirt');
  if (!Collection) return null;
  console.log(latestProduct);
  return (
    <div className="  mb-b mx-auto w-full  bg-gray-100 px-12 py-6">
      <div className="mx-auto   max-w-[1240px]   bg-gray-100   ">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="  col-span-2 mt-14 content-center items-center justify-center rounded-lg p-4 md:col-span-2 lg:col-span-1 ">
            <p className="mb-4 flex w-full   font-serif text-4xl text-slate-900 lg:text-5xl">
              {Collection?.title}
            </p>
            <p className="mb-4 font-serif text-lg text-slate-600 ">{Collection?.description}</p>
            <Link href={`/collection/${Collection?.handle}`}>
              <button className="rounded-lg bg-black px-12  py-4 font-serif text-white">
                SHOP DRESS SHIRT{' '}
              </button>
            </Link>
          </div>

          <div className=" col-span-3 flex overflow-scroll  lg:overflow-hidden  ">
            {latestProduct.slice(0, 3).map((product, i) => (
              <ProductCart key={product.id} item={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
