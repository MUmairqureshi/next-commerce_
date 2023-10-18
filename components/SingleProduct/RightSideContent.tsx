import Price from 'components/price';
import Link from 'next/link';

import { Input } from '@/components/ui/input';
import { AddToCart } from 'components/cart/add-to-cart';
import { VariantSelector } from '../product/variant-selector';

const RightSideContent = ({ data }: any) => {
  console.log(data);
  return (
    <div className="py-1 md:px-4">
      <p className="mb-3 text-sm  text-gray-400">
        <Link href="/">Home</Link> /<Link href="#"> {data.category} </Link>/ {data.title}
      </p>
      <p className="mb-3 text-black">{data.category}</p>
      <h3 className="m-0 mb-4 p-0 text-4xl font-bold text-[#003445] md:text-5xl">{data.title}</h3>
      <Price
        className="m-0 mb-3 p-0 text-xl font-semibold md:text-2xl"
        amount={data.priceRange.maxVariantPrice.amount}
        currencyCode={data.priceRange.maxVariantPrice.currencyCode}
      />
      <VariantSelector options={data.options} variants={data.variants} />

      {/* {data.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={data.descriptionHtml}
        />
      ) : null} */}
      <h4 className="text-sm leading-8 md:text-base">{data.description}</h4>

      <div className="mt-6 flex gap-4 border-y-2 border-gray-200 py-6">
        <Input
          defaultValue={1}
          className="w-16 bg-white focus:border-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
          type="number"
        />
        <AddToCart variants={data.variants} availableForSale={data.availableForSale} />

        {/* <Button className="text-white">Add To Cart</Button> */}
      </div>
      <div className="mt-4 flex gap-10">
        <p className="mb-3 text-sm  text-black">SKU: N/A</p>
        <p className="mb-3 text-sm  text-black">Category: {data.category}</p>
      </div>
    </div>
  );
};

export default RightSideContent;
