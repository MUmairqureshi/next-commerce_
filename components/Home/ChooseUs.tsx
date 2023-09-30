'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import world from 'assets/icons/globe-2.png';
import happy from 'assets/icons/happy.png';
import offers from 'assets/icons/offers.png';
import security from 'assets/icons/security.png';
const Data = [
  {
    title: 'Worldwide Shipping',
    desc: 'lorem ipsum dolor sit amet, It elit tellus, luctus nec ullamcorper mattis, nec ullamcorper mattis.',
    icon: world
  },
  {
    title: 'Secure Payments',
    desc: 'lorem ipsum dolor sit amet, It elit tellus, luctus nec ullamcorper mattis, nec ullamcorper mattis.',
    icon: happy
  },
  {
    title: 'Happy Customers',
    desc: 'lorem ipsum dolor sit amet, It elit tellus, luctus nec ullamcorper mattis, nec ullamcorper mattis.',
    icon: offers
  },
  {
    title: 'Best Offers',
    desc: 'lorem ipsum dolor sit amet, It elit tellus, luctus nec ullamcorper mattis, nec ullamcorper mattis.',
    icon: security
  }
];
const ChooseUs = ({ bgColor }: { bgColor: string }) => {
  return (
    <div className={`w-full bg-${bgColor} flex justify-center px-10 py-24 lg:py-32`}>
      <div className="flex  w-full max-w-screen-xl flex-col flex-wrap items-center justify-center gap-x-10 gap-y-7 md:flex-row xl:justify-between">
        {Data.map((item, ind) => {
          return (
            <motion.div
              viewport={{ once: false }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.3 * ind }}
              key={ind}
              className="flex w-64 flex-col items-center justify-center gap-2"
            >
              <Image src={item.icon} alt="image" />
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <p className="text-center text-sm text-[#13151a]">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseUs;
