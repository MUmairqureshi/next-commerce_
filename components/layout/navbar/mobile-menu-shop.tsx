'use client';
import { Dialog, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Bird, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import SearchMobile from './searchMobile';


export default function MobileShopDropDown() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);
  const men=[
    {label:'Shop',href:"#"},
    {label:'New Arrivals',href:"#"},
    {label:'Suits & Blazzers',href:"#"},
    {label:'Vests',href:"#"},
    {label:'Dress Shirts',href:"#"},
    {label:'Dress Pants',href:"#"},
    {label:'Sweaters & Jacket',href:"#"},
    {label:'Casual Shirts & Sets',href:"#"},
    {label:'Casual Pants & Shorts',href:"#"},
    {label:'Accessories',href:"#"},
    {label:'Gift Card',href:"#"},
  ]
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
        className="text-md flex w-full justify-between font-thin text-white transition-colors hover:text-neutral-500 dark:text-white"
      >
        Shop 
        <ChevronRight/>
        
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
            <Dialog.Panel className="fixed overflow-y-scroll bottom-0 left-0 right-0 top-0 flex h-full w-[90%] flex-col   bg-[#003445] pb-6 dark:bg-black">
              <div className="border-b-2  p-4 px-8  ">
              <motion.div
              viewport={{ once: false }}
              initial={{ opacity: 0, x: 24 }}
    whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3}}
               className="mt-4 flex w-full  items-baseline">
                  <button
                    onClick={closeMobileMenu}
                    aria-label="Close mobile menu"
                    className="text-md font-bold border-b-0 pb-4 border-white flex w-full justify-between text-white transition-colors hover:text-neutral-500 dark:text-white"
                    >
                      Shop 
                      <ChevronLeft/>
                    </button>
</motion.div>
                <motion.div viewport={{ once: false }}
                 initial={{ opacity: 0, x: 24 }}
       whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.3}} className="mb-6 flex w-full  items-baseline">
                 
                <SearchMobile/>

                </motion.div>
                
                {men.length ? (
                  <ul className="flex w-full    flex-col">
                    {men.map((item,ind) => (
                      <motion.li 
                      viewport={{ once: false }}
                      initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay:0.1*ind}} 
                       className="text-sm py-2 font-thin text-white transition-colors hover:text-neutral-500 dark:text-white">
                        <Link href={item.href} onClick={closeMobileMenu}>
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                ) : null}

                <motion.div
                 viewport={{ once: false }}
                 initial={{ opacity: 0, x: 24 }}
       whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.2,delay:window.innerWidth >= 768 ? 1.2 : 0}}
                className='my-4 w-full flex justify-center items-center gap-3 border-[1px] border-white text-white p-2'>
                <Bird size="30" className='mb-3'/>
                  Our Design & Fit
              </motion.div>
                </div>
              <div className="p-4 pb-10 px-6">
                  <ul className="text-white space-y-3">
                    <motion.li 
                     viewport={{ once: false }}
                     initial={{ opacity: 0, x: 24 }}
           whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.2,delay:window.innerWidth >= 768 ? 1.4 : 0}}  className="flex text-white">
                      <p className="flex">
                        
                        <UserIcon className={clsx('h-6 w-8 font-extrabold  text-white mr-2 ')} />
                        Accounts
                      </p>
                    </motion.li>
                    <motion.li viewport={{ once: false }}
                     initial={{ opacity: 0, x: 24 }}
           whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.2,delay:window.innerWidth >= 768 ? 1.6 : 0}}  className="flex text-white">
                      <p className="flex">
                        
                        <Star className={clsx('h-6 w-8 font-extrabold  text-white mr-2')} />
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
