'use client';
import ChooseUs from 'components/Home/ChooseUs';

import img2 from 'assets/images/teamMember1.png';
import img1 from 'assets/images/teamMember2.png';
import FollowUs from 'components/About/FollowUs';
import OurTeam from 'components/About/OurTeam';
import WhoWeAre from 'components/About/WhoWeAre';
import { motion } from 'framer-motion';

const TeamData = [
  { name: 'Harvey Spector', post: 'Founder - CEO', img: img2 },
  { name: 'Jessica Pearson', post: 'COO', img: img1 },
  { name: 'Rachel Zain', post: 'Marketing Head', img: img2 },
  { name: 'Jessica Pearson', post: 'COO', img: img1 },
  { name: 'Rachel Zain', post: 'Marketing Head', img: img2 },
  { name: 'Harvey Spector', post: 'Founder - CEO', img: img2 }
];

const About = () => {
  return (
    <>
      <div className="w-full bg-AboutUsBanner bg-cover bg-fixed bg-no-repeat ">
        <div className="flex h-[480px] w-full items-center justify-center backdrop-brightness-50 xl:h-[700px]">
          <motion.span
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-white"
          >
            About Us
          </motion.span>
        </div>
        <WhoWeAre />
      </div>
      <div className="w-full bg-FollowUsBanner bg-cover bg-fixed bg-no-repeat ">
        <OurTeam TeamData={TeamData} />
        <FollowUs />
        <ChooseUs bgColor="white" />
      </div>
    </>
  );
};

export default About;
