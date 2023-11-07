import CardListingScetion from 'components/Dapper-Hero/CardListingScetion';
import Hero from 'components/Dapper-Hero/DapperHero';
import { getCollectionProducts } from 'lib/shopify';

export default async function Blogs() {
  const latestProduct = await getCollectionProducts({
    collection: 'blogs-page-images'
  });
  if (!latestProduct[0]) return null;

  const Blogs = await getCollectionProducts({
    collection: 'blogs-page'
  });

  if (!Blogs[0]) return null;

  return (
    <div className="mx-auto w-full max-w-screen-2xl ">
      <Hero
        altText={Blogs[0]?.featuredImage.altText}
        imageSrc={Blogs[0]?.featuredImage.url}
        title={Blogs[0]?.title}
        description={Blogs[0]?.description}
      />

      <section className="mt-20 md:mt-60">
        <div className=" mx-7  items-center justify-center border-b-[1px] border-[#032733] bg-white font-bold ">
          <h1 className="h1 m-0 mb-[20px]  text-center text-base  font-bold uppercase text-[#032733]">
            MOST RECENT
          </h1>
        </div>

        <CardListingScetion Products={Blogs} />
      </section>
    </div>
  );
}
