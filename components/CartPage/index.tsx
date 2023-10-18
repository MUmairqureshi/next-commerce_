'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import DeleteItemButton from 'components/cart/delete-item-button';
import EditItemQuantityButton from 'components/cart/edit-item-quantity-button';
import Price from 'components/price';
import { DEFAULT_OPTION } from 'lib/constants';
import type { Cart } from 'lib/shopify/types';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartPage({ cart }: { cart: Cart | undefined }) {
  const quantityRef = useRef(cart?.totalQuantity);

  useEffect(() => {
    if (cart?.totalQuantity !== quantityRef.current) {
     

      quantityRef.current = cart?.totalQuantity;
    }
  }, [ cart?.totalQuantity, quantityRef]);

  return (
    <>
    <div className="w-full">

    <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-20 py-10 border-0">

            <div className="flex border-0 w-full flex-col mx-auto  text-[#003445]   dark:bg-black/80 dark:text-white ">
              <div className="flex items-center justify-center">
                <p className="text-4xl font-semibold font-serif">Your Cart</p>
            
              </div>

              {!cart || cart.lines.length === 0 ? (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                  <ShoppingCartIcon className="h-16 " />
                  <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                  <ul className="flex-grow overflow-auto py-4">
                    {cart.lines.map((item, i) => {
                      const merchandiseSearchParams = {} as MerchandiseSearchParams;

                      item.merchandise.selectedOptions.forEach(({ name, value }) => {
                        if (value !== DEFAULT_OPTION) {
                          merchandiseSearchParams[name.toLowerCase()] = value;
                        }
                      });

                      const merchandiseUrl = createUrl(
                        `/product/${item.merchandise.product.handle}`,
                        new URLSearchParams(merchandiseSearchParams)
                      );

                      return (
                        <li
                          key={i}
                          className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                        >
                          <div className="relative flex w-full flex-row justify-between px-1 py-4">
                            <div className="absolute z-40 -mt-2 sm:ml-[120px] ml-[90px] md:ml-[150px]">
                              <DeleteItemButton item={item} />
                            </div>
                            <Link
                              href={merchandiseUrl}
                              className="z-30 flex h-full flex-row space-x-4"
                            >
                              <div className="relative  w-24 h-32 sm:w-32 md:h-40 md:w-40 s cursor-pointer overflow-hidden rounded-md  bg-neutral-300  dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                <Image
                                  className="h-full w-full object-cover"
                                  width={160}
                                  height={160}
                                  alt={
                                    item.merchandise.product.featuredImage.altText ||
                                    item.merchandise.product.title
                                  }
                                  src={item.merchandise.product.featuredImage.url}
                                />
                              </div>


                              <div className="flex flex-1 justify-center  flex-col text-base mb-10">
                                <span className="leading-tight md:text-xl">
                                  {item.merchandise.product.title}
                                </span>
                                {item.merchandise.title !== DEFAULT_OPTION ? (
                                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                    {item.merchandise.title}
                                  </p>
                                ) : null}
                              </div>
                            </Link>
                            <div className="flex z-30 md:z-0 right-1/2 left-1/2 md:right-auto md:left-auto md:bottom-auto -bottom-2 absolute md:relative h-16 flex-col justify-between pb-2 ">
                              <Price
                                className="flex justify-items-center md:justify-end space-y-2 text-right text-sm"
                                amount={item.cost.totalAmount.amount}
                                currencyCode={item.cost.totalAmount.currencyCode}
                              />
                              <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                                <EditItemQuantityButton item={item} type="minus" />
                                <p className="w-6 text-center">
                                  <span className="w-full text-sm">{item.quantity}</span>
                                </p>
                                <EditItemQuantityButton item={item} type="plus" />
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="mb-3  text-[#003445] flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                      <p className="font-bold text-lg">Taxes</p>
                      <Price
                        className="text-right text-base text-black dark:text-white"
                        amount={cart.cost.totalTaxAmount.amount}
                        currencyCode={cart.cost.totalTaxAmount.currencyCode}
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b text-[#003445] border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p className="font-bold text-lg">Shipping</p>
                      <p className="text-right text-black">Calculated at checkout</p>
                    </div>
                    <div className="mb-3 text-[#003445] flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <h2 className="font-bold text-lg">Total</h2>
                      <Price
                        className="text-right text-base  text-black dark:text-white"
                        amount={cart.cost.totalAmount.amount}
                        currencyCode={cart.cost.totalAmount.currencyCode}
                      />
                    </div>
                  </div>
                  <div className="w-full ">

                  <a
                    href={cart.checkoutUrl}
                    className="block w-40 mx-auto rounded-sm bg-[#003445] p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                  >
                    CHECKOUT
                  </a>
                  </ div>
                </div>
              )}
            </div>
            </div>
            </div>
    </>
  );
}
