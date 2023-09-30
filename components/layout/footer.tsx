import logo from 'assets/logo/logo.png';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const ForHimData = [
  { label: 'Men jeans', href: '#' },
  { label: 'Men jeans', href: '#' },
  { label: 'Men jeans', href: '#' },
  { label: 'Men jeans', href: '#' }
];
const ForHerData = [
  { label: 'Women jeans', href: '#' },
  { label: 'Women jeans', href: '#' },
  { label: 'Women jeans', href: '#' },
  { label: 'Women jeans', href: '#' },
  { label: 'Women jeans', href: '#' }
];

const footer = () => {
  return (
    <div>
      <div className=" w-full border-y-2  border-gray-300 p-10 text-center">
        <h1 className="text-2xl font-bold transition duration-300 hover:cursor-pointer hover:text-primary">
          SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS
        </h1>
      </div>
      <div className="mx-auto grid border-b-2 border-gray-300 px-10 py-16 md:grid-cols-5">
        <div className="sm:col-span-2">
          <Image src={logo} alt="logo" />
          <h2 className="mt-2 text-xl	 font-bold leading-10 tracking-wider">
            The best look anytime, anywhere.
          </h2>
        </div>
        <div className="p-3">
          <h2 className="trading-wider  mb-6 text-lg font-medium">For Her</h2>
          <ul>
            {ForHerData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="mb-2 text-base font-light text-gray-600 hover:cursor-pointer hover:text-primary"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="p-3">
          <h2 className="trading-wider  mb-6 text-lg font-medium">For Him</h2>
          <ul>
            {ForHimData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="mb-2 text-base font-light text-gray-600 hover:cursor-pointer hover:text-primary"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-6 p-3">
          <h2 className="trading-wider  text-lg  font-medium">Subscribe</h2>
          <Input type="email" placeholder="Your email address .." />
          {/* @ts-ignore */}
          <Button variant="default">Subscribe</Button>
        </div>
      </div>
      <div className="mx-auto w-full p-6 text-center">
        <p>Copyright © 2023 Panacloud</p>
      </div>
    </div>
  );
};

export default footer;
