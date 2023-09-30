import Home from './home/page';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Home />
      {/* <Hero />
      <Latestproduct />
      <Essential />
      <Formallwear />
      <Comfort />
      <Dressshirt />
      <Logos /> */}
      {/*   <Commutiny/> */}
      {/* <ThreeItemGrid /> */}
      {/* <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense> */}
    </>
  );
}
