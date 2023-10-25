import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import HeroSection from 'components/SingleProduct/HeroSection';
import ProductDetailsSection from 'components/SingleProduct/ProductDetailsSection';
// import RelatedProducts from 'components/SingleProduct/RelatedProducts';
import RelatedProducts from 'components/SingleProduct/RelatedProducts';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

async function RelatedProd({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);
  console.log('id', id);
  if (!relatedProducts.length) return <p>null</p>;
  return <RelatedProducts Data={relatedProducts} />;
}
export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="flex w-full justify-center bg-background">
        <div className="max-w-screen-xl bg-background px-6 py-16">
          <HeroSection data={product} />
          <ProductDetailsSection data={product} />
          <RelatedProd id={product.id} />
          {/* <RelatedProducts /> */}
        </div>
      </div>
    </>
  );
}

// const data = [
//   {
//     title: 'DNK Blue Shores',
//     img: [img1, img2, img3, img4],
//     category: 'Men',
//     price: '400-1000',
//     stars: 4,
//     longDesc: `Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
//     shortDesc:
//       'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
//     more: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.',
//     subImg: [img5, img6, img5, img6],
//     noOfReviews: 8,
//     addInfo: [
//       { label: 'colors', value: ['green', 'red'] },
//       { label: 'size', value: 27 }
//     ],
//     subDesc: [
//       {
//         heading: 'Ut enim ad minim',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
//       },
//       {
//         heading: 'Ut enim ad minim',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
//       },
//       {
//         heading: 'Ut enim ad minim',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
//       }
//     ]
//   }
// ];
