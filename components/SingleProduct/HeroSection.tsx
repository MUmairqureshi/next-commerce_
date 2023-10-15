'use client';

import ImageCarousel from 'components/SingleProduct/ImageCarousel';
import { motion } from 'framer-motion';
import { Product } from 'lib/shopify/types';
import RightSideContent from './RightSideContent';

const HeroSection = ({ data }: { data: Product }) => {
  console.log('hello', data);
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <motion.span
        viewport={{ once: false }}
        initial={{ opacity: 0, x: -6 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4 }}
      >
        <ImageCarousel imgData={data.images} />
      </motion.span>
      <motion.span
        viewport={{ once: false }}
        initial={{ opacity: 0, x: 6 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4 }}
      >
        <RightSideContent data={data} />
      </motion.span>
    </div>
  );
};

export default HeroSection;
