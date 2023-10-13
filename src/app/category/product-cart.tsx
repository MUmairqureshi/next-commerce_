'use client';
import { motion } from 'framer-motion';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import { FC } from 'react';

// type Product = {
//   id: string; // Updated to string, as the ID in the provided data is a string
//   title: string;
//   category: string; // You can add the category field if it exists in your data
//   priceRange: {
//     minVariantPrice: {
//       amount: number; // Adjusted to number based on the data structure
//       currencyCode: string; // Assuming it's a string representing the currency code
//     };
//     maxVariantPrice: {
//       amount: number; // Adjusted to number based on the data structure
//       currencyCode: string; // Assuming it's a string representing the currency code
//     };
//   };
//   featuredImage: {
//     url: string; // Assuming it's a string representing the image URL
//     altText: string | null; // Assuming altText can be a string or null
//     width: number;
//     height: number;
//   };
// };

const ProductCart: FC<{ item: Product }> = ({ item }) => {
  // console.log("item : ", item)
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0, y: '10vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto max-w-[130px] lg:max-w-[220px] xl:max-w-[320px]"
      viewport={{ once: true }}
    >
      <div className="h-[140px] w-[130px] lg:h-[230px] lg:w-[220px] xl:h-[330px] xl:w-[320px] ">
        <Image
          src={item.featuredImage.url}
          alt={item.featuredImage.altText}
          className="w-full object-cover"
          width={item.featuredImage.width}
          height={item.featuredImage.height}
        />
      </div>
      <p className="font-serif text-base text-slate-800 lg:text-xl ">{item.title}</p>
      <p className="flex font-mono font-extralight text-slate-500 lg:text-2xl">
        ${item.priceRange.minVariantPrice.amount}
      </p>
    </motion.div>
  );
};

export default ProductCart;
