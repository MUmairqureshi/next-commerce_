/* eslint-disable react/jsx-key */
'use client';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';
interface Review {
  per_page: number;
  id: number;
  title: string;
  body: string;
  rating: number;
  product_external_id: number;
  reviews: reviews[];
  source: string;
  curated: string;
  published: boolean;
  hidden: boolean;
  verified: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
  has_published_pictures: boolean;
  has_published_videos: boolean;
  pictures: string[]; // You may need to define the actual data type for pictures
  ip_address: string;
  product_title: string;
  product_handle: string;
}

interface reviews {
  id: number;
  external_id: number;
  rating: number;
  email: string;
  name: string;
  phone: string;
  accepts_marketing: boolean;
  unsubscribed_at: string | null;
  tags: string[];
}
const Reviews = ({ items }: { items: Review }) => {
  const itemsPerPage = items.per_page; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.reviews.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.reviews.length / itemsPerPage);

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
        <div className="flex flex-col py-4 md:py-0 ">
          {paginatedItems.map((review: any) => (
            <div className="my-6" key={review.id}>
              <div className="flex">
                <div className="flex items-center ">
                  {Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <Star
                        key={index}
                        size={20}
                        strokeWidth={0.5}
                        fill={index < review.rating ? 'black' : 'none'}
                      />
                    ))}
                </div>
                <div className="ml-3 text-sm tracking-widest">{review.verified}</div>
              </div>
              <h2 className="my-2 text-2xl">{review.title}</h2>
              <p className="font-serif text-sm text-slate-500">{review.body}</p>
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
