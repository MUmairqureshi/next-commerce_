// pages/products.tsx
'use client';
import { Product } from 'components/product/products';
import React, { useState } from 'react';

const ProductsPage: React.FC<{ products: Product[] }> = ({ products }) => {
  const [priceFilter, setPriceFilter] = useState<number>(100); // Initial price filter value

  const filteredProducts = products.filter((product) => product.price <= priceFilter);

  return (
    <div>
      <h1>Products</h1>
      <input
        type="range"
        min={0}
        max={1000}
        step={10}
        value={priceFilter}
        onChange={(e) => setPriceFilter(Number(e.target.value))}
      />
      <p>Filter by Price: ${priceFilter}</p>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product._id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   // Fetch your product data here and return it as props
//   const products: Product[] = [
//     { id: 1, name: 'Product 1', price: 50 },
//     { id: 2, name: 'Product 2', price: 75 },
//     { id: 3, name: 'Product 3', price: 100 },
//     // Add more products as needed
//   ];

//   return {
//     props: {
//       products,
//     },
//   };
// };

export default ProductsPage;
