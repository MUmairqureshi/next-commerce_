import CardListingScetion from 'components/Dapper-Hero/CardListingScetion';
import Hero from 'components/Dapper-Hero/DapperHero';
import { getCollectionProducts } from "lib/shopify";

export default async function Blogs() {
const latestProduct = await getCollectionProducts({
  collection: 'blogs-page-images'
});
if(!latestProduct[0]) return null;

const Blogs = await getCollectionProducts({
    collection: 'all-blogs'
  });
  if(!Blogs[0]) return null;


  return (
    <div className="w-full max-w-screen-2xl mx-auto ">
      <Hero 
      altText={latestProduct[0]?.featuredImage.altText}
      imageSrc={latestProduct[0]?.featuredImage.url} 
      title={latestProduct[0]?.title} 
      description={latestProduct[0]?.description} />

     <section className='mt-20 md:mt-60'>
      <div className=' mx-7  bg-white border-b-[1px] justify-center items-center border-[#032733] font-bold '>
        <h1 className='text-base text-center font-bold  text-[#032733] uppercase  mb-[20px] m-0 h1'>
        MOST RECENT
        </h1>
      </div> 
      
        <CardListingScetion Products={Blogs}/>
    </section> 
  </div>
  )
} 
