'use client';
import { UserIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Menu } from 'lib/shopify/types';
import Search from './search';
import clsx from 'clsx';

export default function MobileMenu({ men }: { men: string[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md   text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden"
      >
        <Bars3Icon className="h-6" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col   bg-slate-800 pb-6 dark:bg-black">
              <div className="border-b-2  p-4 px-12  ">
                <div className="mb-4 mt-4 flex w-full  items-baseline">
                  <button
                    className="  flex h-11 w-11 items-center justify-center rounded-md font-extrabold     text-white transition-colors dark:border-neutral-700 dark:text-white"
                    onClick={closeMobileMenu}
                    aria-label="Close mobile menu"
                  >
                    <XMarkIcon className="h-6" />
                  </button>

                  <Search />
                  <UserIcon className={clsx('h-6 w-8 font-extrabold  text-white ')} />
                </div>

                {men.length ? (
                  <ul className="flex w-full    flex-col">
                    {men.map((item) => (
                      <li className="text-md py-2 font-thin text-white transition-colors hover:text-neutral-500 dark:text-white">
                        <Link href="/to" onClick={closeMobileMenu}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div>
                  <ul className="text-white">
                    <li className="flex text-white">
                      <p className="flex">
                        {' '}
                        <UserIcon className={clsx('h-6 w-8 font-extrabold  text-white ')} />
                        Account
                      </p>{' '}
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
