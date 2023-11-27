'use client';

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';
import { Bird, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export async function DropdownMenuCheckboxes({items,Collection1,Collection2,Collection3}:{items:{title:string,path:string}[],Collection1:any,Collection2:any,Collection3:any}) {
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
                {items?.length ? (
                  <ul className=" ml-14 hidden w-full gap-6   text-sm md:flex md:flex-col  ">

                    {items?.slice(0,6)?.map((item) => (

                      <li>
                        <Link
                          href={`${item.path}`}
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
                {items?.length ? (
                  <ul className=" ml-14 hidden w-full gap-6  text-sm md:flex md:flex-col ">
                    {items?.slice(6)?.map((item) => (
                      <li>
                        <Link
                          href={`${item.path}`}
                          className="text-baseline  items-baseline text-white underline-offset-4 hover:text-white/70  hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 "
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
                <h1 className="text-base font-bold">{Collection1?.title}</h1>

                <p>
                  {Collection1?.description}
                </p>
              </div>
              <div className=" flex h-4/5 w-48 flex-col items-center justify-center border-white text-center text-sm text-white">
                <Image alt="image" className="h-full w-full" width="100" height="100" src={Collection2?.image?.originalSrc} />
                <h1 className="mb-1 mt-3 font-bold">{Collection2?.description}</h1>
                <Link href={`/collections/${Collection2?.handle}`} className="hover:text-white/70 hover:underline">
                  <p>{Collection2?.title}</p>
                </Link>
              </div>
              <div className=" flex h-4/5 w-48 flex-col items-center justify-center border-white text-center text-sm text-white">
                <Image alt="image" className="h-full w-full" width="100" height="100" src={Collection3?.image?.originalSrc} />
                <h1 className="mb-1  mt-3 font-bold">{Collection3?.description}</h1>
                <Link href={`/collections/${Collection3?.handle}`} className="hover:text-white/70 hover:underline">
                  <p>{Collection3?.title}</p>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
