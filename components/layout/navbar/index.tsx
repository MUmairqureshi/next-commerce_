import { UserIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Suspense } from 'react';

import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Search from './search';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  const men = ['New', 'Shop', 'Our Story', 'The Dapper Scouts', 'Blog', 'Pre-Loved'];
  return (
    <div className="h-full w-full">
      <div className="ceontent-center flex h-12 items-center justify-center bg-slate-400 text-center text-black">
        <p className=" items-center text-center font-sans text-sm  font-light">
          THE GEORGIE SUIT - RESTOCKED IN BURGUNDY, OLIVE, ROYAL & SLATE BLUE! SHOP NOW{' '}
        </p>{' '}
      </div>
      <div className=" relative flex  items-center justify-between border border-b-2 p-4 lg:px-16">
        <div className="block flex-none md:hidden">
          <MobileMenu men={men} />
        </div>
        <div className="flex w-full  justify-between">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                <img src="https://kirrinfinch.com/cdn/shop/t/149/assets/kf-logo.svg?v=99177132444844244501693863898" />{' '}
              </div>
            </Link>

            {men.length ? (
              <ul className=" ml-14 hidden w-full gap-6   text-sm md:flex md:items-center ">
                {men.map((item) => (
                  <li>
                    <Link
                      href="/to"
                      className="text-baseline  w-full    items-baseline text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 "
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="flex items-baseline justify-end text-xl font-bold md:w-1/3">
            <div className="hidden justify-center font-bold md:flex md:w-1/3">
              <Search />
              <UserIcon className={clsx('h-6 w-8  font-extrabold ')} />{' '}
            </div>

            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
