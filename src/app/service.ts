export const getReviews = async <T>(url: string): Promise<T> => {
    const data = await fetch(url);
    const res = await data.json();
    return res;
  };
  
  export interface Review {
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