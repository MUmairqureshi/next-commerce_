const apiUrl =
  'https://judge.me/api/v1/widgets/product_review?handle=digital-gift-card&api_token=MDNdJzaFmVDpoimCC2iTWoh68OQ&shop_domain=next-ecommerce-templates.myshopify.com';
import { getReviews } from '../service';

interface Review {
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
  email: string;
  name: string;
  phone: string;
  accepts_marketing: boolean;
  unsubscribed_at: string | null;
  tags: string[];
}

const ReviewsComponent = async () => {
  const data = await getReviews<any>(apiUrl);
  const markup = { __html: data.widget };
  // const reviews = data.reviews
  // console.log('data', markup);
  // const res = data.reviews;
  return (
    <div>
      <h2>Customer Reviews</h2>
      <ul>
        <div dangerouslySetInnerHTML={markup} />;
        {/* <div dangerouslySetInnerHTML={{ __html: data.widget.contentHtml }} /> */}
        {/* {res.map((review: any) => (
          <li key={review.id}>
            <p>{review.content}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default ReviewsComponent;
