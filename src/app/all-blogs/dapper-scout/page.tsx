import CardListingScetion from 'components/Dapper-Hero/CardListingScetion';
import Hero from 'components/Dapper-Hero/DapperHero';
import ImageScrollSection from 'components/Dapper-Hero/ImageScrollSection';
import { getArticlesByBlog, getCollectionProducts } from 'lib/shopify';

export default async function DapperScout() {
  const latestProduct = await getCollectionProducts({
    collection: 'the-dapper-scouts-image'
  });
  if (!latestProduct[0]) return null;

  const ScoutlistingData = await getCollectionProducts({
    collection: 'all-the-dappers-scoutts'
  });
  if (!ScoutlistingData[0]) return null;

  const DPBlogs = await getArticlesByBlog('dapper-scouts');
  if (!DPBlogs) return null;

  // const BlogData = await getAllArticles()
  // const a = getArticlesByBlog({blogHandle: 'news'})
  // const blogs = getBlogs()

  // console.log("Blogs",BlogData)
  return (
    <div className="mx-auto w-full max-w-screen-2xl ">
      <Hero
        altText={latestProduct[0]?.featuredImage.altText}
        imageSrc={latestProduct[0]?.featuredImage.url}
        title={latestProduct[0]?.title}
        description={latestProduct[0]?.description}
      />

      <section className="mt-20  md:mt-60">
        <div className=" mx-7  items-center justify-center border-b-[1px] border-[#032733] bg-white font-bold ">
          <h1 className="h1 m-0 mb-[20px]  text-center text-base  font-bold uppercase text-[#032733]">
            DAPPER SCOUTS SHOWCASE DAPPER STYLE AND COMMUNITY SPIRIT
          </h1>
        </div>
        <div
          style={{ backgroundImage: `url(${latestProduct[1]?.featuredImage.url})` }}
          className="w-full  border-0  bg-cover bg-fixed bg-center bg-no-repeat "
        >
          <CardListingScetion Products={DPBlogs} />
          <ImageScrollSection data={latestProduct[1]} />
        </div>
      </section>
    </div>
  );
}
