/* eslint-disable unicorn/filename-case */
import Head from 'next/head';
import { getReviews } from 'src/app/service';

const Reviews = async ({ params }: { params: string }) => {
  console.log('params2', params);
  const apiUrl = `https://judge.me/api/v1/reviews?api_token=MDNdJzaFmVDpoimCC2iTWoh68OQ&shop_domain=next-ecommerce-templates.myshopify.com&handle=${params}`;
  const data = await getReviews<any>(apiUrl);
  return (
    <>
      <Head>
        <script>
          {`
      jdgm = window.jdgm || {};
      jdgm.SHOP_DOMAIN = 'next-ecommerce-templates.myshopify.com';
      jdgm.PLATFORM = 'shopify';
      jdgm.PUBLIC_TOKEN = '26L1yhVlvZFXq6eji7fftCucYNA';
    `}
        </script>
        <script
          data-cfasync="false"
          type="text/javascript"
          async
          src="https://cdn.judge.me/widget_preloader.js"
        ></script>
        <script
          data-cfasync="false"
          type="text/javascript"
          async
          src="https://cdn1.judge.me/assets/installed.js"
        ></script>
      </Head>
      <div className="mt-8">
        <div>{data}</div>
        <p>There are no reviews</p>
      </div>
    </>
  );
};

export default Reviews;
