import { getCollectionProducts } from 'lib/shopify';

export async function Commutiny() {
  const product = await getCollectionProducts({
    collection: 'community'
  });
  if (product.length <= 0) return null;
  return (
    <div className="w-full">
      <div className="item-center mx-auto h-full  w-full max-w-screen-2xl p-6  px-6">
        <div className=" max-h-88rem       p-4 text-white ">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="bg-gray-100 p-6 font-serif  md:w-1/2">
              <img
                src={product[0]?.featuredImage.url}
                alt={product[0]?.featuredImage.altText}
                className="h-auto w-full"
              />
              <h2 className="mt-6 text-2xl font-semibold text-[#003445]">{product[0]?.title}</h2>
              <p className="mt-2 text-base text-gray-600">{product[0]?.description}</p>{' '}
              <button className="marker:  mt-2  rounded bg-white px-8 py-3 font-serif text-black transition-colors">
                READ MORE
              </button>
            </div>

            <div className="bg-gray-100 p-6 font-serif md:w-1/2">
              <img
                src={product[1]?.featuredImage.url}
                alt={product[1]?.featuredImage.altText}
                className="h-auto w-full"
              />
              <h2 className="mt-6 text-2xl font-semibold text-[#003445]">{product[1]?.title}</h2>
              <p className="mt-2 text-base text-gray-600">{product[1]?.description}</p>
              <button className="marker:  mt-2  rounded bg-white px-8 py-3 font-serif text-black transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
