'use client';
import StyleCard from 'components/ui/StyleCard';
import { motion } from 'framer-motion';

const Data = [
  { title: 'DNK Blue Shores', category: 'Men', price: '400-1000', stars: 4 },
  { title: 'XYZ Red Waves', category: 'Women', price: '350-700', stars: 5 },
  { title: 'ABC Green Fields', category: 'Unisex', price: '150-250', stars: 4 },
  { title: 'PQR Ocean Breeze', category: 'Men', price: '500-1200', stars: 4 },
  { title: 'XYZ Red Waves', category: 'Women', price: '350-700', stars: 5 },
  { title: 'XYZ Red Waves', category: 'Women', price: '350-700', stars: 5 },
  { title: 'LMN Golden Sands', category: 'Women', price: '250-400', stars: 3 },
  { title: 'Elegant Black Tuxedo', category: 'Men', price: '800-1500', stars: 5 },
  { title: 'Stylish Red Dress', category: 'Women', price: '400-800', stars: 4 },
  { title: 'Cozy Unisex Sweater', category: 'Unisex', price: '50-100', stars: 4 }
];
const FeaturedProduct = () => {
  return (
    <div className="flex max-w-full flex-col items-center justify-center gap-20 bg-background py-20">
      <motion.div
        viewport={{ once: false }}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center justify-center gap-5"
      >
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-wider lg:text-4xl">
          Featured Products
        </h1>
        <div className="h-[2px] w-32 bg-primary" />
      </motion.div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 px-2 lg:gap-y-16 ">
        {Data.map((item, ind) => {
          return (
            <motion.div
              key={ind}
              viewport={{ once: false }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.3 * ind }}
            >
              <StyleCard
                title={item.title}
                category={item.category}
                price={item.price}
                stars={item.stars}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProduct;
