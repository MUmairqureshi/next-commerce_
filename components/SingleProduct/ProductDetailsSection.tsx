'use client';
import ProductDescription from 'components/SingleProduct/ProductDescription';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AdditionalInfo from './AdditionalInfo';
import Reviews from './Reviews';

const ProductDetailsSection = ({ data }: any) => {
  const [showContent, setShowContent] = useState('description');

  return (
    <>
      <motion.div
        viewport={{ once: false }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-14 flex flex-col gap-x-8 gap-y-4 border-t-2 border-gray-200 p-0 md:flex-row"
      >
        <p
          onClick={() => setShowContent('description')}
          className={
            showContent == 'description'
              ? 'border-t-4 border-primary pt-2 font-semibold'
              : 'pt-2 font-semibold'
          }
        >
          Description
        </p>
        <p
          onClick={() => setShowContent('addInfo')}
          className={
            showContent == 'addInfo'
              ? 'border-t-4 border-primary pt-2 font-semibold'
              : 'pt-2  font-semibold '
          }
        >
          Additional Information
        </p>
        <p
          onClick={() => setShowContent('review')}
          className={
            showContent == 'review'
              ? 'border-t-4 border-primary pt-2 font-semibold'
              : 'pt-2 font-semibold'
          }
        >
          Reviews ({data[0].noOfReviews})
        </p>
      </motion.div>
      {showContent == 'description' ? (
        <ProductDescription
          longDesc={data[0].longDesc}
          subDesc={data[0].subDesc}
          subImg={data[0].subImg}
          more={data[0].more}
        />
      ) : showContent == 'addInfo' ? (
        <AdditionalInfo data={data[0].addInfo} />
      ) : (
        <Reviews />
      )}
    </>
  );
};

export default ProductDetailsSection;
