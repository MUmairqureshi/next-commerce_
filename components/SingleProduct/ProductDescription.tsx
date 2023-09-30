'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ProductDescription = ({ longDesc, subDesc, subImg, more }: any) => {
  return (
    <div className="mt-16 w-full">
      <motion.div
        viewport={{ once: false }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mb-10"
      >
        <h3 className="m-0 mb-3 p-0 text-xl font-semibold md:text-2xl">Product Description</h3>
        <p className="text-sm leading-8 md:text-base">
          {longDesc}
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nihil esse quibusdam
          nemo atque consequatur velit numquam beatae exercitationem culpa.<p></p>
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3">
        <motion.div
          viewport={{ once: false }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-full w-full"
        >
          <Image src={subImg[0]} className="h-full w-full" alt="Image" objectFit="cover" />
        </motion.div>
        <motion.div
          viewport={{ once: false }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-full w-full"
        >
          <Image src={subImg[1]} className="h-full w-full" alt="Image" objectFit="cover" />
        </motion.div>
        <motion.div
          viewport={{ once: false }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-full w-full"
        >
          <Image src={subImg[2]} className="h-full w-full" alt="Image" objectFit="cover" />
        </motion.div>

        <div className=" flex flex-col justify-center space-y-4 bg-white px-6 py-6 md:px-12 lg:p-20">
          {subDesc.map((e: { heading: string; desc: string }, i: number) => {
            return (
              <motion.div
                key={i}
                viewport={{ once: false }}
                initial={{ opacity: 0, y: 20 }}
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
          initial={{ opacity: 0, y: 20 }}
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
          className="h-full w-full"
        >
          <Image src={subImg[3]} className="h-full w-full" alt="Image" objectFit="cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDescription;
