'use client';
import Image from 'next/image';

import img from 'assets/images/aboutmg2.jpg';
import { motion } from 'framer-motion';
const WhoWeAre = () => {
  return (
    <div className=" flex items-center justify-center bg-background p-3 md:p-16">
      <div className="flex h-full w-full flex-col justify-between bg-white shadow-lg lg:flex-row">
        <motion.div
          viewport={{ once: false }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6 }}
          className="flex basis-1/2 flex-col items-center justify-center gap-6 px-4 py-20 md:items-start md:px-12"
        >
          <div className="h-1 w-20 bg-primary" />
          <h1 className="leading-wider text-center text-3xl font-bold tracking-wider md:text-left md:text-4xl">
            Who We Are
          </h1>
          <p className="text-center font-light md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
          </p>
        </motion.div>
        <motion.div
          viewport={{ once: false }}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6 }}
          className="basis-1/2"
        >
          <Image src={img} alt="img" className="h-full w-full" objectFit="cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;
