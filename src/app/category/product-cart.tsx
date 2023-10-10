'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

type Product = {
  _id: number;
  title: string;
  category: string;
  price: number;
  imageUrl: StaticImageData;
};

const ProductCart: FC<{ item: Product }> = ({ item }) => {
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
          src={item.imageUrl}
          alt={item.title}
          className="w-full object-cover"
          width={400}
          height={500}
        />
      </div>
      <p className="font-serif text-base text-slate-800 lg:text-xl ">{item.title}</p>
      <p className="flex font-mono font-extralight text-slate-500 lg:text-2xl">${item.price}</p>
    </motion.div>
  );
};

export default ProductCart;
