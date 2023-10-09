/* eslint-disable react/jsx-no-undef */
'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import bs_1 from '/components/images/bs_1.jpg';
import bs_2 from '/components/images/bs_2.jpg';
import bs_3 from '/components/images/bs_3.jpg';
import bs_4 from '/components/images/bs_4.jpg';
import bs_5 from '/components/images/bs_5.jpg';

type Product = {
  id: number;
  title: string;
  rating: number;
  priceType: 'fixed' | 'range' | 'discounted';
  actualPrice?: number; // For products with a fixed actual price
  priceRange?: [number, number]; // For products with a price range
  discountedPrice?: number; // For products with a discounted price
  imageSrc: StaticImageData;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex border-b-2 ">
      {/* Product Image (on the left) */}
      <div className="mb-4 mt-5 flex-shrink-0">
        <Image height={65} width={65} src={product.imageSrc} alt={product.title} />
      </div>
      {/* Product Details (on the right) */}
      <div className="ml-4 mt-4 space-y-1">
        <h2 className="text-md">{product.title}</h2>
        <div className="flex items-center">
          {/* Display 5 stars (You can customize this part) */}
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={16} strokeWidth={1} className="h-5 w-5" />
            ))}
          </div>
          {/* <span className="ml-1 text-gray-600">{product.rating}</span> */}
        </div>
        <div className="flex space-x-2">
          {product.priceType === 'discounted' && (
            <div className=" text-gray-500 line-through">${product.actualPrice?.toFixed(2)}</div>
          )}
          {product.priceType === 'fixed' && (
            <div className=" text-black">${product.actualPrice?.toFixed(2)}</div>
          )}
          {product.priceType === 'range' && (
            <div className=" text-black">
              ${product.priceRange?.[0].toFixed(2)} - ${product.priceRange?.[1].toFixed(2)}
            </div>
          )}
          {product.priceType === 'discounted' && (
            <div className=" text-black">${product.discountedPrice?.toFixed(2)}</div>
          )}
        </div>
      </div>
    </div>
  );
};

// Example product data
const sampleProducts: Product[] = [
  {
    id: 1,
    title: 'DNK Yellow Shoes',
    rating: 5,
    priceType: 'discounted',
    actualPrice: 150,
    discountedPrice: 120,
    imageSrc: bs_1
  },
  {
    id: 2,
    title: 'Blue Tshirt',
    rating: 4,
    priceType: 'range',
    priceRange: [40, 46],
    imageSrc: bs_2
  },
  {
    id: 3,
    title: 'Basic Grey Jeans',
    rating: 3,
    priceType: 'fixed',
    actualPrice: 150,
    imageSrc: bs_3
  },
  {
    id: 4,
    title: 'DNK Black Shoes',
    rating: 3,
    priceType: 'range',
    priceRange: [175, 200],
    imageSrc: bs_4
  },
  {
    id: 5,
    title: 'Buddha Bracelet',
    rating: 3,
    priceType: 'fixed',
    actualPrice: 150,
    imageSrc: bs_5
  }
];

const App: React.FC = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0, y: '10vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {sampleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
};

export default App;
