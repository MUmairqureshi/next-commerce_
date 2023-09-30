'use client';

import { motion } from 'framer-motion';

import OurTeamCard from 'components/ui/OurTeamCard';

interface PropType {
  img: any;
  name: string;
  post: string;
}

const OurTeam = ({ TeamData }: { TeamData: PropType[] }) => {
  return (
    <div className="w-full bg-white px-6 py-8 md:p-12 ">
      <motion.div
        viewport={{ once: false }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="flex w-full flex-col items-center justify-center gap-6"
      >
        <div className="h-1 w-20 bg-primary" />
        <h1 className="leading-wider mb-2 text-center text-xl font-semibold">A Few Words About</h1>
        <h1 className="leading-wider text-3xl font-bold tracking-wider md:text-4xl">Our Team</h1>
        <p className="text-center font-light">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
          auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </p>
      </motion.div>
      <div className="mt-16 flex justify-center ">
        <div className="grid w-full grid-cols-1 gap-8 md:w-auto md:grid-cols-3">
          {TeamData.map((item, ind) => {
            return (
              <motion.div
                key={ind}
                viewport={{ once: false }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.3 * ind }}
              >
                <OurTeamCard key={ind} data={item} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
