import { Button } from '@/components/ui/button';
import { Product } from 'lib/shopify/types';

export default function ImageScrollSection({ data }: { data: Product | undefined }) {
  return (
    <div className="mx-auto flex w-full items-center bg-transparent backdrop-brightness-50">
      <div className="flex max-w-4xl flex-col gap-6 py-20  pl-10 text-white lg:py-32">
        <h2 className="font-mono text-lg font-semibold text-white/80">{data?.title}</h2>
        <h2 className="font-mono text-3xl font-bold">
          We're always looking to feature new cool folks
        </h2>
        <p className="max-w-sm font-sans text-lg ">
          Think you are the definition of a dapper scout? Please apply!
        </p>
        {/* <p className="font-sans text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <h2 className="font-mono text-2xl font-bold">Use Code OFF20 For 20% Discount</h2> */}
        <Button className="w-40 bg-white text-black" variant="default">
          APPLY NOW
        </Button>
      </div>
    </div>
  );
}

// export async function SpecialEdition() {
//   const homepageItems = await getCollectionProducts({
//     collection: 'All-limited-time-offer'
//   });

//   if (!homepageItems[0]) return null;

//   const [firstProduct] = homepageItems;

//   return (
//     <section>
//       <Specialoffer SpecialEdition={firstProduct} />
//     </section>
//   );
// }
