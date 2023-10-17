/* eslint-disable react/jsx-key */
'use client';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const Reviews = ({ items }: { items: any }) => {
  const itemsPerPage = 6; // Number of items to display per page
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
        <div className="flex flex-col px-8 py-4 md:py-0 lg:px-5">
          {paginatedItems.map((product: any) => (
            <div className="my-6">
              <div className="flex">
                <div className="flex items-center ">
                  <Star size={20} strokeWidth={0.5} fill="black" />
                  <Star size={20} strokeWidth={0.5} fill="black" />
                  <Star size={20} strokeWidth={0.5} fill="black" />
                  <Star size={20} strokeWidth={0.5} fill="black" />
                  <Star size={20} strokeWidth={0.5} fill="black" />
                </div>
                <div className="ml-3 text-sm tracking-widest">VERFIED</div>
              </div>
              <h1 className="mt-4">{product.name}</h1>
              <h2 className="my-2 text-2xl">{product.title}</h2>
              <p className="font-serif text-sm text-slate-500">{product.content}</p>
            </div>
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

export default Reviews;
