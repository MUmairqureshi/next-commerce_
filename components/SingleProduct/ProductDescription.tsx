'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const subDesc = [
  {
    heading: 'Ut enim ad minim',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
  },
  {
    heading: 'Ut enim ad minim',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
  },
  {
    heading: 'Ut enim ad minim',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
  }
];
const more =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem soluta corrupti perferendis modi quasi et voluptatum. Dicta, ipsa? Explicabo, quo.';

const ProductDescription = ({ longDesc, subImg }: any) => {
  return (
    <div className="mt-16 w-full">
      <div className="mb-10">
        <h3 className="m-0 mb-3 p-0 text-xl font-semibold md:text-2xl">Product Description</h3>
        <p className="text-sm leading-8 md:text-base">{longDesc}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3">
        <motion.div
          viewport={{ once: false }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-96  w-full md:h-full"
        >
          <Image
            src={subImg[0].url}
            layout="fill"
            className="h-full w-full"
            alt={subImg[0].altText}
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          viewport={{ once: false }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-96 w-full md:h-full"
        >
          <Image
            src={subImg.length < 2 ? subImg[0].url : subImg[1].url}
            layout="fill"
            className="h-full w-full"
            alt={subImg.length < 2 ? subImg[0].altText : subImg[1].altText}
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          viewport={{ once: false }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-96 w-full md:h-full"
        >
          <Image
            src={subImg.length < 3 ? subImg[0].url : subImg[2].url}
            layout="fill"
            className="h-full w-full"
            alt={subImg.length < 3 ? subImg[0].altText : subImg[2].altText}
            objectFit="cover"
          />
        </motion.div>

        <div className=" flex flex-col justify-center space-y-4 bg-white px-6 py-6 md:px-12 lg:p-20">
          {subDesc?.map((e: { heading: string; desc: string }, i: number) => {
            return (
              <motion.div
                key={i}
                viewport={{ once: false }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 * i }}
              >
                <h3 className="mb-1 text-lg font-semibold">{e.heading}</h3>
                <p className="text-sm font-light md:text-base">{e.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          viewport={{ once: false }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col justify-center space-y-4 bg-white px-6 py-6 md:px-12 lg:p-20"
        >
          <h3 className="mb-1 text-lg font-semibold">More About This Product</h3>
          <p className="text-sm font-light md:text-base">{more}</p>
        </motion.div>
        <motion.div
          viewport={{ once: false }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-96 w-full md:h-full"
        >
          <Image
            src={subImg.length < 4 ? subImg[0].url : subImg[3].url}
            layout="fill"
            className="h-full w-full"
            alt={subImg.length < 4 ? subImg[0].altText : subImg[3].altText}
            objectFit="cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDescription;
