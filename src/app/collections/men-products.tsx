'use client';
import { Button } from '@/components/ui/button';
import { Product } from 'lib/shopify/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ProductCart from './product-cart';

const MenProducts = ({ items }: { items: Product[] }) => {
  const itemsPerPage = 9; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <Button
        key={i}
        className={`bg-white px-2 font-thin text-black ${
          currentPage === i ? 'border border-black' : ''
        }`}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </Button>
    );
  }

  return (
    <div className="basis-8/12 lg:basis-3/4 xl:basis-4/5">
      <section className="">
        <div className="grid grid-cols-2 py-3 md:grid-cols-3 lg:px-3">
          {paginatedItems.map((product: Product) => (
            <ProductCart key={product.id} item={product} />
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-x-2 py-4 lg:mt-4 lg:py-10">
          <div onClick={() => handlePageChange(currentPage - 1)}>
            <ChevronLeft strokeWidth={1} />
          </div>
          {pageButtons}
          <div onClick={() => handlePageChange(currentPage + 1)}>
            <ChevronRight strokeWidth={1} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenProducts;
