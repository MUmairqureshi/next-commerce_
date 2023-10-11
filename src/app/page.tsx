import { Dressshirt } from 'components/Dress-Shirts';
import { Essential } from 'components/ESSENTIAL STYLES';
import { Formallwear } from 'components/FORMAL WEAR';
import { Comfort } from 'components/confort';
import { Hero } from 'components/hero';
import { Latestproduct } from 'components/latest-trent';
import { Logos } from 'components/logos';

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
      {/* <Commutiny/> */}
      {/* <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense> */}
    </>
  );
}
