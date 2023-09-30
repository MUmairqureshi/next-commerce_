'use client';

import img1 from 'assets/images/image1.jpg';
import img2 from 'assets/images/image2.jpg';
import img3 from 'assets/images/image3.jpg';
import img4 from 'assets/images/image4.jpg';
import img5 from 'assets/images/image5.jpg';
import img6 from 'assets/images/image6.jpg';
import ImageCarousel from 'components/SingleProduct/ImageCarousel';
import ProductDetailsSection from 'components/SingleProduct/ProductDetailsSection';
import RelatedProducts from 'components/SingleProduct/RelatedProducts';
import RightSideContent from 'components/SingleProduct/RightSideContent';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface pageProps {
  params: { slug: any };
}

const data = [
  {
    title: 'DNK Blue Shores',
    img: [img1, img2, img3, img4],
    category: 'Men',
    price: '400-1000',
    stars: 4,
    longDesc: `Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
    shortDesc:
      'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
    more: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.',
    subImg: [img5, img6, img5, img6],
    noOfReviews: 8,
    addInfo: [
      { label: 'colors', value: ['green', 'red'] },
      { label: 'size', value: 27 }
    ],
    subDesc: [
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
    ]
  }
];

const SingleProduct: FC<pageProps> = ({ params }) => {
  return (
    <div className="flex w-full justify-center bg-background">
      <div className="max-w-screen-xl bg-background px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.span
            viewport={{ once: false }}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
          >
            {/* @ts-ignore */}
            <ImageCarousel imgData={data[0].img} />
          </motion.span>
          <motion.span
            viewport={{ once: false }}
            initial={{ opacity: 0, x: 6 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
          >
            <RightSideContent data={data[0]} />
          </motion.span>
        </div>

        <ProductDetailsSection data={data} />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
