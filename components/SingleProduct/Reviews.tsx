/* eslint-disable unicorn/filename-case */
import Head from 'next/head';



// import { getReviews } from 'src/app/service';
const Reviews = async ( {params} : {params:string}) => {
  let productId=params.split("/")[params.split("/").length-1];
  // const data=axios.get('/api/getreview');
  const htmlString=`<div style='display:none' class='jdgm-prev-badge' data-average-rating='5.00' data-number-of-reviews='2' data-number-of-questions='0'> <span class='jdgm-prev-badge__stars' data-score='5.00' tabindex='0' aria-label='5.00 stars' role='button'> <span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span><span class='jdgm-star jdgm--on'></span> </span> <span class='jdgm-prev-badge__text'> 2 reviews </span> </div>`
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
  <script data-cfasync='false' type='text/javascript' async src='https://cdn.judge.me/widget_preloader.js'></script>
  <script data-cfasync='false' type='text/javascript' async src='https://cdn1.judge.me/assets/installed.js'></script>
</Head>
    <div className="mt-8">
    <div dangerouslySetInnerHTML={{ __html: htmlString }}>
    </div>
      {htmlString}
    </div>
    </>
  )
}

export default Reviews;

