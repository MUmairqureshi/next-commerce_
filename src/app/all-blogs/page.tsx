import CardListingScetion from 'components/Dapper-Hero/CardListingScetion';
import Hero from 'components/Dapper-Hero/DapperHero';
import { getAllArticles, getCollectionProducts } from 'lib/shopify';

export default async function Blogs() {
  const latestProduct = await getCollectionProducts({
    collection: 'blogs-page'
  });
  if (!latestProduct[0]) return null;

  const Blogs = await getAllArticles();
  if (!Blogs[0]) return null;

  // console.log("Blogs",Blogs)
  return (
    <div className="mx-auto w-full max-w-screen-2xl ">
      <Hero
        altText={latestProduct[0]?.featuredImage.altText}
        imageSrc={latestProduct[0]?.featuredImage.url}
        title={latestProduct[0]?.title}
        description={latestProduct[0]?.description}
      />
      <section className="mt-20 md:mt-60">
        <div className=" mx-7  items-center justify-center border-b-[1px] border-[#032733] bg-white font-bold ">
          <h1 className="h1 m-0 mb-[20px]  text-center text-base  font-bold uppercase text-[#032733]">
            MOST RECENT
          </h1>
        </div>
        <CardListingScetion Blogs={Blogs} />
      </section>
    </div>
  );
}
