/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';

export default async function two_boxes() {
  const styleComponents = await getCollectionProducts({
    collection: 'all-two-boxes'
  });

  const [secondComponent, firstComponent] = styleComponents;

  return (
    <section>
      <TwoBoxes firstComponent={firstComponent} secondComponent={secondComponent} />
    </section>
  );
}

const TwoBoxes = ({ firstComponent, secondComponent }: any) => {
  return (
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
        <div className="absolute top-0 z-50 flex h-full w-full flex-col justify-end p-6 text-white">
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
  );
};
