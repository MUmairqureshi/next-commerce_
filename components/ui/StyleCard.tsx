import img from 'assets/images/image1.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { AiTwotoneStar } from 'react-icons/ai';

interface PropData {
  title: string;
  category: string;
  price: string;
  stars: number;
}
const StyleCard = ({ title, category, price, stars }: PropData) => {
  const url = title.split(' ').join('-');
  return (
    <div className="border-content group relative box-content h-[300px] w-[210px] overflow-hidden rounded-sm  hover:cursor-pointer hover:brightness-105">
      <Link href={`/product/${url}`}>
        <div className="border-content box-content h-[55%] w-full transform overflow-hidden transition-transform group-hover:scale-105 lg:h-3/5">
          <Image
            src={img}
            className="h-full w-full overflow-hidden"
            alt="product Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <div className="px-4 py-2">
        <div>
          <Link href={`/product/${url}`}>
            <h3 className="m-0 p-0 text-base font-semibold hover:text-primary">{title}</h3>
          </Link>
          <p className=" text-sm">{category}</p>
          <p className="font-semibold leading-7">{price}$</p>
        </div>
        <div className="mt-2">
          <div className="flex gap-4">
            <div className="h-3 w-3 rounded-full bg-purple-500" />
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="mt-1 flex gap-2">
            {[...Array(stars)].map((e) => (
              <AiTwotoneStar color="#F59E0B" size="18 " />
            ))}
            {[...Array(5 - stars)].map((e) => (
              <AiTwotoneStar color="#D9D9D9" size="18 " />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleCard;
