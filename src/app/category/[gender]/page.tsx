import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { getCollectionProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ProductCart from '../product-cart';
import category_hero from '/components/images/category_hero.webp';

export default async function Hero(params: any) {
  const latestProduct = await getCollectionProducts({
    collection: 'all-new-arrivals-1'
  });
  // console.log("Latest Product", latestProduct)
  return (
    <section>
      <CategoryPage item={latestProduct} params={params} />
    </section>
  );
}

// export async function generateMetadata({
//   params
// }: {
//   params: { page: string };
// }): Promise<Metadata> {
//   const page = await getPage(params.page);

//   if (!page) return notFound();

//   return {
//     title: page.seo?.title || page.title,
//     description: page.seo?.description || page.bodySummary,
//     openGraph: {
//       publishedTime: page.createdAt,
//       modifiedTime: page.updatedAt,
//       type: 'article'
//     }
//   };
// }

// console.log("before ", latestProduct.map((products:any) => products.title))

const SHEET_SIDES = ['bottom'] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className="flex gap-2 ">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <div>
              <Button className="rounded-3xl bg-slate-200 text-slate-600">
                Color{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side={side} className="flex w-full flex-col place-items-end bg-white">
            <div className="flex w-full flex-col items-start">
              <div className="text-xl">Colors</div>
              <div className="w-full">
                <div className="mt-8 flex h-28 flex-col gap-y-2 overflow-y-auto">
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Asphalt" />
                    <p>Asphalt</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Betta Fish" />
                    <p>Betta Fish</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Black" />
                    <p>Black</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Black Constellation" />
                    <p>Black Constellation</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Blue" />
                    <p>Blue</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Blue Ditsy" />
                    <p>Blue Ditsy</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-between gap-x-2">
                  <Button className="w-full border-[1px]">CLEAR</Button>
                  <Button className="w-full border-[1px] border-slate-950 bg-slate-950  text-white">
                    APPLY
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>

          <SheetTrigger asChild>
            <div>
              <Button className="rounded-3xl bg-slate-200 text-slate-600">
                Size{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side={side} className="flex w-full flex-col place-items-end bg-white">
            <div className="flex w-full flex-col items-start">
              <div className="text-xl">Size</div>
              <div className="w-full">
                <div className="mt-8 flex h-28 flex-col gap-y-2 overflow-y-auto">
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="30" />
                    <p>30</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="34" />
                    <p>34</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="39" />
                    <p>39</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="44" />
                    <p>44</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="49" />
                    <p>49</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-between gap-x-2">
                  <Button className="w-full border-[1px]">CLEAR</Button>
                  <Button className="w-full border-[1px] border-slate-950 bg-slate-950  text-white">
                    APPLY
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>

          <SheetTrigger asChild>
            <div>
              <Button className="rounded-3xl bg-slate-200 text-slate-600">
                Style{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side={side} className="flex w-full flex-col place-items-end bg-white">
            <div className="flex w-full flex-col items-start">
              <div className="text-xl">Style</div>
              <div className="w-full">
                <div className="mt-8 flex h-28 flex-col gap-y-2 overflow-y-auto">
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Blazer" />
                    <p>Blazer</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Bow Tie" />
                    <p>Bow Tie</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Classic Dress Shirt" />
                    <p>Classic Dress Shirt</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Dress Shirt" />
                    <p>Dress Shirt</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-between gap-x-2">
                  <Button className="w-full border-[1px]">CLEAR</Button>
                  <Button className="w-full border-[1px] border-slate-950 bg-slate-950  text-white">
                    APPLY
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>

          <SheetTrigger asChild>
            <div>
              <Button className="rounded-3xl bg-slate-200 text-slate-600">
                Sort{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side={side} className="flex w-full flex-col place-items-end bg-white">
            <div className="flex w-full flex-col items-start">
              <div className="flex text-xl ">Sort</div>
              <div className="w-full">
                <div className="mt-8 flex h-28 flex-col gap-y-2 overflow-y-auto">
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Featured" />
                    <p>Featured</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Best Selling" />
                    <p>Best Selling</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Alphabetically, A-Z" />
                    <p>Alphabetically, A-Z</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Price, Low To High" />
                    <p>Price, Low To High</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
                    <Checkbox id="Price, High To Low" />
                    <p>Price, High To Low</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-between gap-x-2">
                  <Button className="w-full border-[1px]">CLEAR</Button>
                  <Button className="w-full border-[1px] border-slate-950 bg-slate-950  text-white">
                    APPLY
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

// type Product = {
//   _id: number;
//   title: string;
//   category: string;
//   price: number;
//   imageUrl: StaticImageData;
// };

// const products: Product[] = [
//   {
//     _id: 1,
//     title: 'The Frances Gray Quarter-Zip Sweater',
//     category: 'Men',
//     price: 110,
//     imageUrl: product_1
//   },
//   {
//     _id: 2,
//     title: 'The Vasa Charcoal Crewneck Sweater (Pre-Order)',
//     category: 'Men',
//     price: 110,
//     imageUrl: product_2
//   },
//   {
//     _id: 3,
//     title: 'The Vasa Burgundy Crewneck Sweater (Pre-Order)',
//     category: 'Men',
//     price: 110,
//     imageUrl: product_3
//   },
//   {
//     _id: 4,
//     title: 'The Vasa Navy Crewneck Sweater (Pre-Order)',
//     category: 'Men',
//     price: 110,
//     imageUrl: product_4
//   }
// ];

async function CategoryPage({ params, item }: { item: Product[]; params: { gender: string } }) {
  // console.log("After ", item.map((products) => products.title))
  return (
    <section className="mx-2 flex flex-col px-2 md:mx-5 md:px-5 2xl:mx-40 2xl:px-40">
      <div className="relative mt-5 md:mt-11">
        <div className="relative md:h-[430px]">
          <Image
            src={category_hero}
            alt={params.gender}
            height={500}
            width={400}
            className="h-full w-full object-cover object-top "
          />
          {/* Dull black overlay */}
          <div className="absolute inset-0 z-10 bg-black opacity-30"></div>
          {/* Text */}
          <div className="absolute top-0 z-50 flex h-full w-full flex-col justify-center p-6 text-end text-white md:items-end md:justify-end md:gap-y-10 md:p-11">
            <h1 className="hidden font-serif text-2xl md:block lg:text-6xl">New Arrivals</h1>
            <h4 className="lg:text-xl">{}</h4>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-x-2 gap-y-8 md:flex-row">
        <div className=" basis-4/12 lg:basis-1/4 xl:basis-1/5 ">
          {/* <MenProductSideBar /> */}

          <div className="flex overflow-x-auto md:hidden">{SheetSide()}</div>

          <div className="hidden md:block">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="colors" className="border-black">
                <AccordionTrigger className="mb-4 rounded-sm px-3 py-2 text-sm hover:bg-slate-100 hover:no-underline">
                  Colors
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center gap-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Asphalt" />
                    <p>Asphalt</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Betta Fish" />
                    <p>Betta Fish</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Black" />
                    <p>Black</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Black Constellation" />
                    <p>Black Constellation</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Blue" />
                    <p>Blue</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Blue Ditsy" />
                    <p>Blue Ditsy</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="Size" className="border-black">
                <AccordionTrigger className="mb-4 mt-2 rounded-sm px-3 py-2 text-sm hover:bg-slate-100 hover:no-underline">
                  Size
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center gap-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="0" />
                    <p>0</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="2" />
                    <p>2</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="4XL" />
                    <p>4XL</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="4" />
                    <p>4</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="size" className="border-black">
                <AccordionTrigger className="mb-4 mt-2 rounded-sm px-3 py-2 text-sm hover:bg-slate-100 hover:no-underline">
                  Size
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center gap-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="30" />
                    <p>30</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="34" />
                    <p>34</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="39" />
                    <p>39</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="44" />
                    <p>44</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="49" />
                    <p>49</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="Style" className="border-black">
                <AccordionTrigger className="mb-4 mt-2 rounded-sm px-3 py-2 text-sm hover:bg-slate-100 hover:no-underline">
                  Style
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center gap-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Blazer" />
                    <p>Blazer</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Bow Tie" />
                    <p>Bow Tie</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Cabana Set" />
                    <p>Cabana Set</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Classic Dress Shirt" />
                    <p>Classic Dress Shirt</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Dress Shirt" />
                    <p>Dress Shirt</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Easy-Care Dress Shirt" />
                    <p>Easy-Care Dress Shirt</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="Sort" className="border-black">
                <AccordionTrigger className="mb-4 mt-2 rounded-sm px-3 py-2 text-sm hover:bg-slate-100 hover:no-underline">
                  Sort
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center gap-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Featured" />
                    <p>Featured</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Best Selling" />
                    <p>Best Selling</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Alphabetically, A-Z" />
                    <p>Alphabetically, A-Z</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Price, Low To High" />
                    <p>Price, Low To High</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Price, High To Low" />
                    <p>Price, High To Low</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Date, Old To New" />
                    <p>Date, Old To New</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm py-1 pl-3 hover:bg-slate-100">
                    <Checkbox id="Date, New To Old" />
                    <p>Date, New To Old</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="basis-8/12 lg:basis-3/4 xl:basis-4/5">
          {/* <MenProducts /> */}

          <section className="">
            <div className=" grid grid-cols-2 py-3 md:grid-cols-3 lg:px-3">
              {item.map((product: Product) => (
                <ProductCart key={product.id} item={product} />
              ))}
            </div>
            <div className="mt-12 flex items-center justify-center gap-x-2 py-4 lg:mt-4 lg:py-10">
              <div>
                <ChevronLeft strokeWidth={1} />
              </div>
              <Button className="border-none bg-white px-2 font-thin text-black">1</Button>
              <Button className="bg-white px-2 font-thin text-black">2</Button>
              <Button className="bg-white px-2 font-thin text-black">3</Button>
              <Button className="bg-white px-2 font-thin text-black">
                <ChevronRight strokeWidth={1} />
              </Button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
