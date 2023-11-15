import { UserIcon } from '@heroicons/react/24/outline';
import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { Suspense } from 'react';
// import { LuBird } from "react-icons/lu";
import { getSubMenu } from 'lib/shopify';
import Link from 'next/link';
import { DropdownMenuCheckboxes } from './dropdown';
import MobileMenu from './mobile-menu';
import Search from './search';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  // const menu = await getMenu('main-menu');
  const menu = await getSubMenu('main-menu');
  // console.log("Menu",menu)
  return (
    <div className="mx-auto h-full w-full  max-w-screen-2xl">
      <div className="ceontent-center flex h-12 items-center justify-center bg-slate-400 text-center text-black">
        <p className=" items-center text-center font-sans text-sm  font-light">
          THE GEORGIE SUIT - RESTOCKED IN BURGUNDY, OLIVE, ROYAL & SLATE BLUE! SHOP NOW{' '}
        </p>{' '}
      </div>
      <div className=" relative flex  items-center justify-between border  border-b-2 p-4 lg:px-20">
        <div className="block flex-none lg:hidden">
          <MobileMenu men={menu} />
        </div>
        <div className="flex w-full  justify-between">
          <div className="flex w-full lg:w-1/3">
            <Link href="/" className="mr-2 flex w-full items-center justify-center lg:mr-6">
              <div className="ml-2 flex-none text-sm font-medium uppercase ">
                <img src="https://kirrinfinch.com/cdn/shop/t/149/assets/kf-logo.svg?v=99177132444844244501693863898" />{' '}
              </div>
            </Link>

            {menu.length ? (
              <ul className="ml-20 hidden gap-8  text-sm lg:flex lg:items-center ">
                {menu.map((item, key) => (
                  // <li className='w-full' key={key}>
                  //   {item.title}
                  // </li>
                  <li className=" w-full" key={key}>
                    {item.title === 'Shop' ? (
                      // item.subcategories.map((category) => category.title)
                      <DropdownMenuCheckboxes item={item} />
                    ) : (
                      <Link
                        href={`${item.path
                          .replace('/search', '')
                          .replace('blogs-page', 'all-blogs')
                          .replace('all-our-storys', 'our-story')
                          .replace('the-dapper-scouts-image', '../all-blogs/dapper-scout')}`}
                        // href={`/${
                        //   item.path.split('/')[2] == 'blog'
                        //     ? `${item.path.split('/')[2]}s/news`
                        //     : item.path.split('/')[2]
                        // }`}
                        className="text-baseline w-full items-baseline text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 "
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="flex items-center justify-end text-xl ">
            <div className="relative flex items-center justify-center gap-x-6">
              <div className="hidden sm:block">
                <Search />
              </div>
              <div className="right-0 top-0 flex h-full items-center font-extrabold">
                <UserIcon className="h-6  font-extrabold " />
              </div>
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
