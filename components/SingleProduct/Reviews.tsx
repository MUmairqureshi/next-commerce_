/* eslint-disable unicorn/filename-case */
import { getReviews } from 'src/app/service';

const Reviews = async ({ params }: { params: string }) => {
  console.log('params2', params);
  const apiUrl = `https://judge.me/api/v1/reviews?api_token=MDNdJzaFmVDpoimCC2iTWoh68OQ&shop_domain=next-ecommerce-templates.myshopify.com&handle=${params}`;
  const data = await getReviews<any>(apiUrl);
  return (
    <div className="mt-8">
      <div>{data}</div>
      <p>There are no reviews</p>
    </div>
  );
};

export default Reviews;
