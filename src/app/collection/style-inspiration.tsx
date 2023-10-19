/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';

export default async function style_inspiration() {
  const styleComponents = await getCollectionProducts({
    collection: 'all-style'
  });

  const [firstProduct, fifthProduct, fourthProduct, thirdProduct, secondProduct] = styleComponents;

  return (
    <section>
      <StyleInspiration
        firstProduct={firstProduct}
        secondProduct={secondProduct}
        thirdProduct={thirdProduct}
        fourthProduct={fourthProduct}
        fifthProduct={fifthProduct}
      />
    </section>
  );
}
const StyleInspiration = ({
  firstProduct,
  secondProduct,
  thirdProduct,
  fourthProduct,
  fifthProduct
}: any) => {
  return (
    <section className="2xl:mx-80">
      {/* Style Inspiration */}

      <section className="my-6 flex flex-col bg-[#fafafa] py-6 md:my-16">
        <div className="flex flex-col-reverse items-center justify-center md:mt-6 md:flex-col">
          <img
            alt="none"
            src="https://kirrinfinch.com/cdn/shop/files/ico-12_1080x.png?v=1619289921"
            height={30}
            width={30}
          />
          <h1 className="bold mb-2 text-4xl md:mb-0 md:mt-4">Style Inpiration</h1>
        </div>

        <div className="mx-5 my-12 grid grid-cols-2 gap-x-3 md:mx-8 md:my-16 md:grid-cols-5 lg:gap-x-10 2xl:mx-32 2xl:gap-x-32">
          <div className="flex flex-col">
            <Image
              alt={firstProduct.featuredImage.altText}
              src={firstProduct.featuredImage.url}
              height={firstProduct.featuredImage.height}
              width={firstProduct.featuredImage.width}
              className="h-full w-full object-cover"
            />
            <h4>{firstProduct.title}</h4>
          </div>

          <div className="flex flex-col">
            <Image
              alt={secondProduct.featuredImage.altText}
              src={secondProduct.featuredImage.url}
              height={secondProduct.featuredImage.height}
              width={secondProduct.featuredImage.width}
              className="h-full w-full object-cover"
            />
            <h4>{secondProduct.title}</h4>
          </div>

          <div className="flex flex-col">
            <Image
              alt={thirdProduct.featuredImage.altText}
              src={thirdProduct.featuredImage.url}
              height={thirdProduct.featuredImage.height}
              width={thirdProduct.featuredImage.width}
              className="h-full w-full object-cover"
            />
            <h4>{thirdProduct.title}</h4>
          </div>

          <div className="flex flex-col">
            <Image
              alt={fourthProduct.featuredImage.altText}
              src={fourthProduct.featuredImage.url}
              height={fourthProduct.featuredImage.height}
              width={fourthProduct.featuredImage.width}
              className="h-full w-full object-cover"
            />
            <h4>{fourthProduct.title}</h4>
          </div>

          <div className="flex flex-col">
            <Image
              alt={fifthProduct.featuredImage.altText}
              src={fifthProduct.featuredImage.url}
              height={fifthProduct.featuredImage.height}
              width={fifthProduct.featuredImage.width}
              className="h-full w-full object-cover"
            />
            <h4>{fifthProduct.title}</h4>
          </div>
        </div>

        <Button variant={'ghost'} className="tracking-widest underline">
          MEET THE DAPPER SCOUTS
        </Button>
      </section>
    </section>
  );
};
