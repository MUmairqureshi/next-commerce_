'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import MobileShopDropDown from './mobile-menu-shop';
import SearchMobile from './searchMobile';

interface PropType {
  title: string;
  path: string;
}

export default function MobileMenu({ men }: { men: PropType[] }) {
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
        className="flex h-11 w-11 items-center justify-center rounded-md   text-black transition-colors dark:border-neutral-700 dark:text-white lg:hidden"
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
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-[90%] flex-col   bg-[#003445] pb-6 dark:bg-black">
              <div className="border-b-2  p-4 px-8  ">
                <motion.div
                  viewport={{ once: false }}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className=" -ml-8 mt-4 flex w-full  items-baseline"
                >
                  <button
                    className="  flex h-11 w-11 items-center justify-center rounded-md font-extrabold     text-white transition-colors dark:border-neutral-700 dark:text-white"
                    onClick={closeMobileMenu}
                    aria-label="Close mobile menu"
                  >
                    <XMarkIcon className="h-6" />
                  </button>
                </motion.div>
                <motion.div
                  viewport={{ once: false }}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <SearchMobile />
                </motion.div>
                {men.length ? (
                  <ul className="flex w-full    flex-col">
                    {men.map((item, ind) => (
                      <motion.li
                        viewport={{ once: false }}
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.12 * ind }}
                        className="py-2 text-sm font-thin text-white transition-colors hover:text-neutral-500 dark:text-white"
                      >
                        {item.title === 'Shop' ? (
                          <MobileShopDropDown />
                        ) : (
                          <Link href={`/${item.path.split('/')[2]}`} onClick={closeMobileMenu}>
                            {item.title}
                          </Link>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="p-4 px-6">
                <ul className="space-y-3 text-white">
                  <motion.li
                    viewport={{ once: false }}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="flex text-white"
                  >
                    <p className="flex">
                      <UserIcon className={clsx('mr-2 h-6 w-8  font-extrabold text-white ')} />
                      Accounts
                    </p>
                  </motion.li>
                  <motion.li
                    viewport={{ once: false }}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    className="flex text-white"
                  >
                    <p className="flex">
                      <Star className={clsx('mr-2 h-6 w-8  font-extrabold text-white')} />
                      Reviews
                    </p>
                  </motion.li>
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
