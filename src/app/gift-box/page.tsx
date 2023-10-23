/* eslint-disable react/jsx-key */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { getCollectionProducts } from 'lib/shopify';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { Suspense } from 'react';
import TwoBoxes from '../collection/two-boxes';
import { Review, getReviews } from '../service';
import Reviews from './reviews';
import ReviewsComponent from './reviews-component';
import cloud from '/components/images/cloud.webp';
import flag from '/components/images/flag.webp';
import message from '/components/images/message.webp';

export default async function gift_box() {
  const styleComponents = await getCollectionProducts({
    collection: 'all-gift-card'
  });

  const [section, mainProduct] = styleComponents;

  return (
    <section>
      <GiftBox mainProduct={mainProduct} section={section} />
    </section>
  );
}

// interface Review {
//   name: string;
//   title: string;
//   content: string;
// }

// const reviews: Review[] = [
//   {
//     name: 'Susan L. (Lancaster, US)',
//     title: 'An exciting gift',
//     content:
//       "What more could a hip Brooklynite want than a Kirrin Finch gift card? My daughter loves her birthday gift card and can't wait to go to the showroom (hopefully with me!) to find a treasure."
//   },
//   {
//     name: 'Shari W. (Greensboro, US)',
//     title: 'Great service',
//     content: 'Great clothes. Great service.'
//   },
//   {
//     name: 'J E.D. (Tucson, US)',
//     title: 'Digital Gift Card',
//     content: ''
//   },
//   {
//     name: 'Julia B. (Sacramento, US)',
//     title: 'Gift card EASY',
//     content:
//       'The process to send a gift card to my daughter was very easy. I requested delayed delivery/notification so that she received it via email on her birthday and it was delivered as requested. Will use them again.'
//   },
//   {
//     name: 'Pamela R. (Sudbury, US)',
//     title: 'very happy',
//     content: 'the person who received the gift card was very happy!'
//   },
//   {
//     name: 'Linda M. (Northville, US)',
//     title: 'Digital Gift Card',
//     content: ''
//   },
//   {
//     name: 'Elaine H. (Freeland, US)',
//     title: 'Gift Card',
//     content:
//       'I purchased for my daughter for Christmas so she has not received as yet. She left full-time military and started a civilian job 2 years ago and purchased many items from Kirrin Finch. She loves them and so do I.'
//   },
//   {
//     name: 'Emma',
//     title: 'Great!',
//     content: 'I liked that!'
//   },
//   {
//     name: 'Candice G. (Spruce Grove, CA)',
//     title: 'Excellent customer service',
//     content:
//       'I was a little concerned that one egift card was not going to be sent on the requested day but I reached out to customer service and heard back from the recipient within a few hours that she had received the gift.'
//   },
//   {
//     name: 'Mary G. (Oakland, US)',
//     title: `It a Gift Card!`,
//     content: "What's not to love about a gift card with a discount?"
//   },
//   {
//     name: 'Miriam P. (Underhill Center, US)',
//     title: 'E gift card review',
//     content:
//       'I purchased the gift card as a present so I was a little unsure about how it worked with me buying it but giving it to someone else to use since it was an e-card. The customer service person was great and explained how all the recipient of the E gift card needed was the code and ta-da! In business! Very easy and very helpful person on the other end of the chat box. this one too'
//   }
// ];
const apiUrl =
  'https://judge.me/api/v1/reviews?api_token=MDNdJzaFmVDpoimCC2iTWoh68OQ&shop_domain=next-ecommerce-templates.myshopify.com';

const GiftBox = async ({ section, mainProduct }: any) => {
  const data = await getReviews<Review>(apiUrl);
  return (
    <section className="2xl:mx-96">
      <div className="m-5 flex flex-col gap-x-8 md:m-10 md:flex-row">
        <div className="flex justify-center md:basis-3/6 lg:basis-4/6">
          <div className="md:h-80 md:w-80 xl:h-96 xl:w-96 2xl:h-[600px] 2xl:w-[600px]">
            <Image
              src={mainProduct.featuredImage.url}
              alt={mainProduct.featuredImage.altText}
              height={mainProduct.featuredImage.height}
              width={mainProduct.featuredImage.width}
            />
          </div>
        </div>
        <div className="md:basis-3/6 lg:basis-2/6">
          <div className="mt-6 text-2xl">{mainProduct.title}</div>
          <div className="mt-2 font-thin">${mainProduct.priceRange.minVariantPrice.amount}</div>
          <div className="mt-4 flex items-center">
            <Star size={20} strokeWidth={0.5} fill="black" />
            <Star size={20} strokeWidth={0.5} fill="black" />
            <Star size={20} strokeWidth={0.5} fill="black" />
            <Star size={20} strokeWidth={0.5} fill="black" />
            <Star size={20} strokeWidth={0.5} fill="black" />
            <ul>
              {data.reviews.map((review: any) => (
                <div className="pl-2">{review.rating}</div>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="my-4 capitalize tracking-widest">Select Amount</div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="$25" />
              </SelectTrigger>
              <SelectContent className="w-full min-w-full border-none bg-white px-0">
                <SelectItem value="25">$25</SelectItem>
                <SelectItem value="50">$50</SelectItem>
                <SelectItem value="100">$100</SelectItem>
                <SelectItem value="150">$150</SelectItem>
                <SelectItem value="200">$200</SelectItem>
                <SelectItem value="250">$250</SelectItem>
                <SelectItem value="500">$500</SelectItem>
                <SelectItem value="1000">$1000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-2 flex flex-col gap-y-4">
            <Button className="w-full rounded-sm bg-slate-500 py-3 tracking-widest text-white">
              SELECT A SIZE
            </Button>
            <Button className="w-full rounded-sm bg-gray-900 py-3 tracking-widest text-white">
              SEND AS A GIFT
            </Button>
          </div>
          <div className="mt-6">
            Pay in 4 interest-free installments for orders over $50.00 with{' '}
            <span className="underline">Learn more</span>
          </div>
          <div className="my-6 text-center text-xs underline">FREE SHIPPING & RETURNS OVER $95</div>
          <div className="flex flex-col bg-blue-200">
            <h1 className="my-4 text-center text-lg">The Hightlights</h1>
            <div className="border-b-[1px] border-slate-900 md:ml-4 md:max-w-sm"></div>
            <div className="my-8 flex items-center justify-around text-center text-xs">
              <div className="flex flex-col items-center">
                <Image src={cloud} alt="none" height={30} width={30} />
                <p className="mt-4 w-16">Completely Digital</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={flag} alt="none" height={30} width={30} />
                <p className="mt-4 w-24">Give the Gift Of Choice</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={message} alt="none" height={30} width={30} />
                <p className="mt-4 w-16">Personalized Messaging</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm font-thin text-slate-600">{mainProduct.description}</div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm font-normal tracking-widest">
                  SHIPPING AND RETURNS
                </AccordionTrigger>
                <AccordionContent className="border-none">
                  <div className="ml-5 space-y-2">
                    <li>Free shipping and returns in the US on orders $95+</li>
                    <li>
                      Flat rate of $20 to Canada (custom/duties included when orders are below $400)
                    </li>
                    <li>
                      Weight based rate that includes customs and duties to all countries outside
                      the US and Canada
                    </li>
                    <li>Delivered in ecofriendly recycled packaging</li>
                  </div>
                  <Button className="mt-2 px-0" variant={'ghost'}>
                    Shipping and Returns Policy
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-4 text-sm font-thin text-slate-600">{mainProduct.description}</div>
        </div>
      </div>
      <div className="mx-5 flex h-96 flex-col bg-blue-200 p-6 md:mx-10 md:h-60 md:flex-row">
        <div className="w-full md:flex md:flex-col lg:flex-row">
          <div className="flex flex-col lg:w-[350px] xl:w-[550px] ">
            <div className="mt-1 flex items-center ">
              <Star size={20} strokeWidth={0.5} fill="black" />
              <Star size={20} strokeWidth={0.5} fill="black" />
              <Star size={20} strokeWidth={0.5} fill="black" />
              <Star size={20} strokeWidth={0.5} fill="black" />
              <Star size={20} strokeWidth={0.5} fill="black" />
            </div>
            <div className="mt-2 text-sm tracking-widest">BASED ON 11 REVIEWS</div>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex items-center">
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} fill="black" />
              <span className="ml-1">100% (11)</span>
            </div>
            <div className="flex items-center">
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} />
              <span className="ml-1">0% (0)</span>
            </div>
            <div className="flex items-center">
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} />
              <Star size={18} strokeWidth={0.5} />
              <span className="ml-1">0% (0)</span>
            </div>
            <div className="flex items-center">
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} />
              <Star size={18} strokeWidth={0.5} />
              <Star size={18} strokeWidth={0.5} />
              <span className="ml-1">0% (0)</span>
            </div>
            <div className="flex items-center">
              <Star size={18} strokeWidth={0.5} fill="black" />
              <Star size={18} strokeWidth={0.5} />
              <Star size={18} strokeWidth={0.5} />
              <Star size={18} strokeWidth={0.5} />
              <Star size={18} strokeWidth={0.5} />
              <span className="ml-1">0% (0)</span>
            </div>
            <Button variant={'ghost'} className="justify-start px-0 ">
              See all reviews
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-end justify-end gap-y-4">
          <Button className="w-full rounded-none bg-slate-900 px-14 py-3 font-light tracking-widest text-white md:w-auto">
            WRITE A REVIEW
          </Button>
          <Button
            className="w-full rounded-none border-black text-gray-800 md:w-auto"
            variant={'outline'}
          >
            Ask a question
          </Button>
        </div>
      </div>
      <div className="mx-5 mt-4 flex flex-col md:mx-10">
        <div className="flex w-full justify-end">
          <Select>
            <SelectTrigger className="w-full rounded-none border-black md:w-[260px]">
              <SelectValue placeholder="Most Recent" />
            </SelectTrigger>
            <SelectContent className="max-w-full gap-y-2 rounded-none border-none bg-white">
              <SelectItem value="most_recent">Most Recent</SelectItem>
              <SelectItem value="highest_rating">Highest Rating</SelectItem>
              <SelectItem value="lowest_rating">Lowest Rating</SelectItem>
              <SelectItem value="only_pictures">Only Pictures</SelectItem>
              <SelectItem value="pictures_first">Pictures First</SelectItem>
              <SelectItem value="videos_first">Videos First</SelectItem>
              <SelectItem value="most_helpful">Most Helpful</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Reviews items={data} />
          <ReviewsComponent />
        </div>
        <div>{/* <MenProducts items={null} key={null}/> */}</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-4 bg-blue-200 px-5 py-6 text-center md:mt-4 md:px-0 2xl:mx-10">
        <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-white">
          <Image
            src={section.featuredImage.url}
            alt={section.featuredImage.altText}
            height={35}
            width={35}
          />
        </div>
        <h1 className="text-3xl text-slate-900">{section.title}</h1>
        <p className="font-thin">{section.description}</p>
        <Button className="tracking-widest underline">{section.tags}</Button>
      </div>
      <div className="my-8">
        <TwoBoxes />
      </div>
      <div>
        <Suspense>{/* <RelatedProducts id={product.id} /> */}</Suspense>
      </div>
    </section>
  );
};

// async function RelatedProducts({ id }: { id: string }) {
//   const relatedProducts = await getProductRecommendations(id);

//   if (!relatedProducts.length) return null;

//   return (
//     <div className="py-8">
//       <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
//       <ul className="flex w-full gap-4 overflow-x-auto pt-1">
//         {relatedProducts.map((product) => (
//           <li
//             key={product.handle}
//             className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
//           >
//             <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
//               <GridTileImage
//                 alt={product.title}
//                 label={{
//                   title: product.title,
//                   amount: product.priceRange.maxVariantPrice.amount,
//                   currencyCode: product.priceRange.maxVariantPrice.currencyCode
//                 }}
//                 src={product.featuredImage?.url}
//                 fill
//                 sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
//               />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
