'use client';
import ProductDescription from 'components/SingleProduct/ProductDescription';
import { useState } from 'react';
import AdditionalInfo from './AdditionalInfo';
import Reviews from './Reviews';

const ProductDetailsSection = ({ data }: any) => {
  const [showContent, setShowContent] = useState('description');
  let noOfReviews = 8;
  return (
    <>
      <div className="mt-14 flex flex-col gap-x-8 gap-y-4 border-t-2 border-gray-200 p-0 md:flex-row">
        <p
          onClick={() => setShowContent('description')}
          className={
            showContent == 'description'
              ? 'border-t-4 border-[#003445] pt-2 font-semibold hover:cursor-pointer'
              : 'pt-2 font-semibold hover:cursor-pointer'
          }
        >
          Description
        </p>
        <p
          onClick={() => setShowContent('addInfo')}
          className={
            showContent == 'addInfo'
              ? 'border-t-4 border-[#003445] pt-2 font-semibold hover:cursor-pointer'
              : 'pt-2  font-semibold hover:cursor-pointer '
          }
        >
          Additional Information
        </p>
        <p
          onClick={() => setShowContent('review')}
          className={
            showContent == 'review'
              ? 'border-t-4 border-[#003445] pt-2 font-semibold hover:cursor-pointer'
              : 'pt-2 font-semibold hover:cursor-pointer'
          }
        >
          Reviews ({noOfReviews})
        </p>
      </div>
      {showContent == 'description' ? (
        <ProductDescription
          longDesc={data.description}
          // subDesc={data?.subDesc}
          subImg={data?.images}
          // more={data?.more}
        />
      ) : showContent == 'addInfo' ? (
        <AdditionalInfo data={data?.options} />
      ) : (
        <Reviews />
      )}
    </>
  );
};

export default ProductDetailsSection;
