import { Button } from '@/components/ui/button';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';

export default async function style_inspiration() {
  const styleComponents = await getCollectionProducts({
    collection: 'all-style'
  });

  const [
    firstProduct,
    fifthProduct,
    fourthProduct,
    thirdProduct,
    secondProduct,
    secondComponent,
    firstComponent
  ] = styleComponents;

  return (
    <section>
      <StyleInspiration
        firstComponent={firstComponent}
        secondComponent={secondComponent}
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
  firstComponent,
  secondComponent,
  firstProduct,
  secondProduct,
  thirdProduct,
  fourthProduct,
  fifthProduct
}: any) => {
  // console.log("firstComponent", firstComponent)
  // console.log("secondComponent", secondComponent)
  // console.log("firstProduct", firstProduct)
  // console.log("secondProduct", secondProduct)
  // console.log("thirdProduct", thirdProduct)
  // console.log("fourthProduct", fourthProduct)
  // console.log("fifthProduct", fifthProduct)
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

      {/* Two Boxes */}

      <section className="mx-5 flex flex-col-reverse items-center justify-between gap-x-5 gap-y-5 lg:mx-8 lg:flex-row 2xl:mx-80">
        <div className="relative h-[500px]">
          <Image
            alt={firstComponent.images[0].altText}
            src={firstComponent.images[0].url}
            height={firstComponent.images[0].height}
            width={firstComponent.images[0].width}
            className="h-full w-full object-cover object-top "
          />
          {/* Dull black overlay */}
          <div className="absolute inset-0 z-10 bg-black opacity-30"></div>

          {/* Text */}
          <div className="absolute top-0 z-50 flex h-full w-full flex-col justify-end p-4 text-white">
            <Image
              alt={firstComponent.images[1].altText}
              src={firstComponent.images[1].url}
              height={firstComponent.images[1].height}
              width={firstComponent.images[1].width}
              className="h-7 w-7 lg:h-12 lg:w-12"
            />
            <h1 className="mt-4 text-sm font-light tracking-widest">{firstComponent.tags}</h1>
            <h4 className="mt-4 font-serif text-4xl md:max-w-[250px]">{firstComponent.title}</h4>
            <p className="mt-4 md:max-w-xs">{firstComponent.description}</p>
            <Button className="mt-4 rounded-sm bg-white text-black md:max-w-[250px]">
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative h-[500px]">
          <Image
            alt={secondComponent.images[0].altText}
            src={secondComponent.images[0].url}
            height={secondComponent.images[0].height}
            width={secondComponent.images[0].width}
            className="h-full w-full object-cover object-top "
          />
          {/* Dull black overlay */}
          <div className="absolute inset-0 z-10 bg-black opacity-30"></div>

          {/* Text */}
          <div className="absolute top-0 z-50 flex h-full w-full flex-col justify-end p-6 text-white">
            <Image
              alt={secondComponent.images[1].altText}
              src={secondComponent.images[1].url}
              height={secondComponent.images[1].height}
              width={secondComponent.images[1].width}
              className="h-7 w-7 lg:h-12 lg:w-12"
            ></Image>
            <h1 className="mt-4 text-sm font-light tracking-widest">{secondComponent.tags}</h1>
            <h4 className="mt-4 rounded-sm font-serif text-4xl md:max-w-[250px]">
              {secondComponent.title}
            </h4>
            <p className="mt-4 md:max-w-xs">{secondComponent.description}</p>
            <Button className="mt-4 bg-white text-black md:max-w-[250px]">Learn More</Button>
          </div>
        </div>
      </section>
    </section>
  );
};
