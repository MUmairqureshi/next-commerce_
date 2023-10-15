import CardListingScetion from 'components/Dapper-Hero/CardListingScetion';
import Hero from 'components/Dapper-Hero/DapperHero';
import ImageScrollSection from 'components/Dapper-Hero/ImageScrollSection';
import Footer from "components/layout/footer";
import { getCollectionProducts } from "lib/shopify";

export default async function DapperScout() {
const latestProduct = await getCollectionProducts({
  collection: 'the-dapper-scouts-image'
});
if(!latestProduct[0]) return null;

const ScoutlistingData = await getCollectionProducts({
  collection: 'all-the-dappers-scoutts'
});
if(!ScoutlistingData[0]) return null;

  return (
    <div className="w-full max-w-screen-2xl mx-auto ">
      <Hero 
      altText={latestProduct[0]?.featuredImage.altText}
      imageSrc={latestProduct[0]?.featuredImage.url} 
      title={latestProduct[0]?.title} 
      description={latestProduct[0]?.description} />

     <section className='mt-[460px] md:mt-60'>
      <div className=' mx-7  bg-white border-b-[1px] justify-center items-center border-[#032733] font-bold '>
        <h1 className='text-base text-center font-bold  text-[#032733] uppercase  mb-[20px] m-0 h1'>
        DAPPER SCOUTS SHOWCASE DAPPER STYLE AND COMMUNITY SPIRIT
        </h1>
      </div> 
      <div
        style={{ backgroundImage: `url(${latestProduct[1]?.featuredImage.url})` }}
        className="w-full  bg-cover bg-fixed bg-center bg-no-repeat "
      >
<CardListingScetion Products={ScoutlistingData}/>
    <ImageScrollSection data={latestProduct[1]}/>
          <Footer />
  </div>
    </section> 
  </div>
  )
} 
