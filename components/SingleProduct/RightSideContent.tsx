import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import Link from 'next/link';

const RightSideContent = ({ data }: any) => {
  return (
    <div className="py-1 md:px-4">
      <p className="mb-3 text-sm  text-gray-400">
        <Link href="/">Home</Link> /<Link href="#"> {data.category} </Link>/ {data.title}
      </p>
      <p className="mb-3 text-black">{data.category}</p>
      <h3 className="m-0 mb-4 p-0 text-4xl font-bold text-primary md:text-5xl">{data.title}</h3>
      <h3 className="m-0 mb-3 p-0 text-xl font-semibold md:text-2xl">{data.price} $</h3>
      <h4 className="text-sm leading-8 md:text-base">{data.shortDesc}</h4>
      <div className="mt-6 flex gap-4">
        <div className="h-4 w-4 rounded-full bg-purple-500" />
        <div className="h-4 w-4 rounded-full bg-red-500" />
        <div className="h-4 w-4 rounded-full bg-green-500" />
      </div>
      <div className="mt-6 flex gap-4 border-y-2 border-gray-200 py-6">
        <Input defaultValue={1} className="w-16 bg-white" type="number" />
        <Button>Add To Cart</Button>
      </div>
      <div className="mt-4 flex gap-10">
        <p className="mb-3 text-sm  text-black">SKU: N/A</p>
        <p className="mb-3 text-sm  text-black">Category: {data.category}</p>
      </div>
    </div>
  );
};

export default RightSideContent;
