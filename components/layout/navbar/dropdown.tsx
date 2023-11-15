'use client';

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import img1 from 'assets/images/NavImage1.png';
import img2 from 'assets/images/NavImage2.png';
import { motion } from 'framer-motion';
import { Bird, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Checked = DropdownMenuCheckboxItemProps['checked'];
// const shpoMenu1 = [
//   { label: 'Shop', href: '#' },
//   { label: 'New Arrivals', href: '../collection/all-new-arrivals-1' },
//   { label: 'Suits & Blazzers', href: '../collection/suits-blazers' },
//   { label: 'Vests', href: '../collection/vests' },
//   { label: 'Dress Shirts', href: '../collection/all-dress-shirt' },
//   { label: 'Dress Pants', href: '../collection/dress-pants' },
//   { label: 'Sweaters & Jacket', href: '../collection/sweaters-jackets' }
// ];
// const shpoMenu2 = [
//   { label: 'Casual Shirts & Sets', href: '../collection/casual-shirts-sets' },
//   { label: 'Casual Pants & Shorts', href: '../collection/casual-pants-shorts' },
//   { label: 'Accessories', href: '../collection/accessories' },
//   { label: 'Gift Card', href: '../gift-box/digital-gift-card-1' }
// ];
export function DropdownMenuCheckboxes({ item }: { item: { subcategories: any } }) {
  // console.log("item", item.subcategories)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" align-center flex pt-1">
          <Link
            href="#"
            className="text-baseline group  flex w-full   items-baseline gap-x-3 text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 "
          >
            Shop{' '}
          </Link>
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex w-[98.7vw] justify-center border-0 p-0">
        <motion.div
          className=" mt-8 flex h-[380px] w-[98.6vw] max-w-screen-2xl justify-center rounded-none  border-0 bg-[#003445] lg:h-[460px]"
          viewport={{ once: false }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid w-full grid-cols-5 p-12 2xl:w-5/6 ">
            <div className="col-span-2 flex justify-end border-r-2 border-white pr-14">
              <div>
                {item.subcategories.length ? (
                  <ul className=" ml-14 hidden w-full gap-4 text-sm md:flex md:flex-col  ">
                    {item.subcategories.slice(0, 5).map((item: any, key: number) => (
                      <li key={key}>
                        <Link
                          // href={`../collection/${
                          // item.path.split('/')[2] == 'search'
                          // ? `${item.path.split('/')[2]}collection`
                          // : item.path.split('/')[2]
                          // }`}

                          href={`..${item.path.replace('/search', '/collection')}`}
                          className="text-baseline  w-full    items-baseline text-white underline-offset-4 hover:text-white/70 hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 "
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div>
                {item.subcategories.length ? (
                  <ul className=" ml-14 hidden w-full gap-4 text-sm md:flex md:flex-col ">
                    {item.subcategories.slice(5).map((item: any, key: number) => (
                      <li key={key}>
                        <Link
                          href={`..${item.path
                            .replace('/search', '/collection')
                            .replace(
                              '/collection/all-gift-card',
                              '/gift-box/digital-gift-card-1'
                            )}`}
                          // href={`../collection/${
                          //   item.path.split('/')[2] == 'search'
                          //   ? `${item.path.split('/')[2]}collection`
                          //   : item.path.split('/')[2]
                          //   }${item.path === '/all-gift-card' ? '' : item.path.replace('/collection/all-gift-card','../all-gift-card')}`}
                          className="text-baseline items-baseline text-white underline-offset-4 hover:text-white/70  hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 "
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="col-span-3 flex justify-start gap-x-8 pl-12">
              <div className="flex h-2/3 w-44 flex-col items-center justify-center border-[1px] border-white p-4 text-center text-sm text-white">
                <Bird size="40" className="mb-3" />
                <h1 className="text-base font-bold">Our Design</h1>

                <p>
                  We pride ourselves on our menswear-inspired cut & details. Learn More about our
                  designs.
                </p>
              </div>
              <div className=" flex h-4/5 w-48 flex-col items-center justify-center border-white text-center text-sm text-white">
                <Image alt="image" className="h-full w-full" width="100" height="100" src={img1} />
                <h1 className="mb-1 mt-3 font-bold">Shop fresh new arrivals!</h1>
                <Link href="#" className="hover:text-white/70 hover:underline">
                  <p>Shop New Arrivals</p>
                </Link>
              </div>
              <div className=" flex h-4/5 w-48 flex-col items-center justify-center border-white text-center text-sm text-white">
                <Image alt="image" className="h-full w-full" width="100" height="100" src={img2} />
                <h1 className="mb-1  mt-3 font-bold">Shop fresh new arrivals!</h1>
                <Link href="#" className="hover:text-white/70 hover:underline">
                  <p>Shop New Arrivals</p>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
