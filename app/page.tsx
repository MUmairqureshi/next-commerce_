import { Dressshirt } from 'components/Dress-Shirts';
import { Essential } from 'components/ESSENTIAL STYLES';
import { Formallwear } from 'components/FORMAL WEAR';
import { Carousel } from 'components/carousel';
import { Commutiny } from 'components/community';
import { Comfort } from 'components/confort';
import { ThreeItemGrid } from 'components/grid/three-items';
import { Hero } from 'components/hero';
import { Latestproduct } from 'components/latest-trent';
import Footer from 'components/layout/footer';
import { Logos } from 'components/logos';
import { Suspense } from 'react';

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
      <Hero />
      <Latestproduct />
      <Essential />
      <Formallwear />
      <Comfort />
      <Dressshirt />
      <Logos />
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
