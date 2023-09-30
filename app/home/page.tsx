import ChooseUs from 'components/Home/ChooseUs';
// import Hero from "@/components/Home/hero";
import SaleSection from 'components/Home/saleSection';
import SpecialEdition from 'components/Home/specialEdition';
// import Layout from "@/components/layout/layout";
import FeaturedProduct from 'components/Home/featuredProduct';
import Hero from 'components/Home/hero';
const Home = () => {
  return (
    // <Layout>
    <div className="flex w-full justify-center bg-background">
      <div className="flex w-full flex-col items-center ">
        <Hero />
        <SaleSection />
        <div className="w-full max-w-screen-xl bg-image bg-cover bg-fixed bg-no-repeat">
          <FeaturedProduct />
          <SpecialEdition />
          <ChooseUs bgColor="background" />
        </div>
      </div>
    </div>
    // </Layout>
  );
};

export default Home;
