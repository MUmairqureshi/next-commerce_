import { CollectionBox } from 'components/CollectionBox/page';
import { CollectionBox2 } from 'components/CollectionBox2/page';
import category_hero from 'components/images/category_hero.webp';
import { getProducts } from 'lib/shopify';

import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import StyleInspiration from 'src/app/collection/style-inspiration';
import TwoBoxes from 'src/app/collection/two-boxes';

export default async function Hero() {

  const products = await getProducts({});

  return (
    <section>
      <CategoryPage item={products}  />
    </section>
  );
}
const SHEET_SIDES = ['bottom'] as const;
type SheetSide = (typeof SHEET_SIDES)[number];

// export function SheetSide() {
//   return (
//     <div className="flex gap-2 ">
//       {SHEET_SIDES.map((side) => (
//         <Sheet key={side}>
//           <SheetTrigger asChild>
//             <div>
//               <Button className="rounded-3xl bg-slate-200 text-slate-600">
//                 Color{' '}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="14"
//                   height="18"
//                   viewBox="0 0 18 18"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="1"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   className="lucide lucide-chevron-down ml-1"
//                 >
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </Button>
//             </div>
//           </SheetTrigger>

//           <SheetContent side={side} className="flex w-full flex-col place-items-end bg-white">
//             <div className="flex w-full flex-col items-start">
//               <div className="text-xl">Colors</div>
//               <div className="w-full">
//                 <div className="mt-8 flex h-28 flex-col gap-y-2 overflow-y-auto">
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Asphalt" />
//                     <p>Asphalt</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Betta Fish" />
//                     <p>Betta Fish</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Black" />
//                     <p>Black</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Black Constellation" />
//                     <p>Black Constellation</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Blue" />
//                     <p>Blue</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Blue Ditsy" />
//                     <p>Blue Ditsy</p>
//                   </div>
//                 </div>
//                 <div className="mt-8 flex justify-between gap-x-2">
//                   <Button className="w-full border-[1px]">CLEAR</Button>
//                   <Button className="w-full border-[1px] border-slate-950 bg-slate-950  text-white">
//                     APPLY
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </SheetContent>

//           <SheetTrigger asChild>
//             <div>
//               <Button className="rounded-3xl bg-slate-200 text-slate-600">
//                 Size{' '}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="14"
//                   height="18"
//                   viewBox="0 0 18 18"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="1"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   className="lucide lucide-chevron-down ml-1"
//                 >
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </Button>
//             </div>
//           </SheetTrigger>
//           {/* @ts-ignore */}

//           <SheetContent side={side} className="flex w-full flex-col place-items-end bg-white">
//             <div className="flex w-full flex-col items-start">
//               <div className="text-xl">Size</div>
//               <div className="w-full">
//                 <div className="mt-8 flex h-28 flex-col gap-y-2 overflow-y-auto">
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="30" />
//                     <p>30</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="34" />
//                     <p>34</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="39" />
//                     <p>39</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="44" />
//                     <p>44</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="49" />
//                     <p>49</p>
//                   </div>
//                 </div>
//                 <div className="mt-8 flex justify-between gap-x-2">
//                   <Button className="w-full border-[1px]">CLEAR</Button>
//                   <Button className="w-full border-[1px] border-slate-950 bg-slate-950  text-white">
//                     APPLY
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </SheetContent>

//           <SheetTrigger asChild>
//             <div>
//               <Button className="rounded-3xl bg-slate-200 text-slate-600">
//                 Style{' '}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="14"
//                   height="18"
//                   viewBox="0 0 18 18"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="1"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   className="lucide lucide-chevron-down ml-1"
//                 >
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </Button>
//             </div>
//           </SheetTrigger>
//           {/* @ts-ignore */}
//           <SheetContent side={side} className="flex w-full flex-col place-items-end bg-white">
//             <div className="flex w-full flex-col items-start">
//               <div className="text-xl">Style</div>
//               <div className="w-full">
//                 <div className="mt-8 flex h-28 flex-col gap-y-2 overflow-y-auto">
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Blazer" />
//                     <p>Blazer</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Bow Tie" />
//                     <p>Bow Tie</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Classic Dress Shirt" />
//                     <p>Classic Dress Shirt</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Dress Shirt" />
//                     <p>Dress Shirt</p>
//                   </div>
//                 </div>
//                 <div className="mt-8 flex justify-between gap-x-2">
//                   <Button className="w-full border-[1px]">CLEAR</Button>
//                   <Button className="w-full border-[1px] border-slate-950 bg-slate-950  text-white">
//                     APPLY
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </SheetContent>

//           <SheetTrigger asChild>
//             <div>
//               <Button className="rounded-3xl bg-slate-200 text-slate-600">
//                 Sort{' '}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="14"
//                   height="18"
//                   viewBox="0 0 18 18"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="1"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   className="lucide lucide-chevron-down ml-1"
//                 >
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </Button>
//             </div>
//           </SheetTrigger>

//           {/* @ts-ignore */}

//           <SheetContent side={side} className="flex w-full flex-col place-items-end bg-white">
//             <div className="flex w-full flex-col items-start">
//               <div className="flex text-xl ">Sort</div>
//               <div className="w-full">
//                 <div className="mt-8 flex h-28 flex-col gap-y-2 overflow-y-auto">
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Featured" />
//                     <p>Featured</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Best Selling" />
//                     <p>Best Selling</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Alphabetically, A-Z" />
//                     <p>Alphabetically, A-Z</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Price, Low To High" />
//                     <p>Price, Low To High</p>
//                   </div>
//                   <div className="flex items-center space-x-2 rounded-sm py-1 hover:bg-slate-100">
//                     <Checkbox id="Price, High To Low" />
//                     <p>Price, High To Low</p>
//                   </div>
//                 </div>
//                 <div className="mt-8 flex justify-between gap-x-2">
//                   <Button className="w-full border-[1px]">CLEAR</Button>
//                   <Button className="w-full border-[1px] border-slate-950 bg-slate-950  text-white">
//                     APPLY
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       ))}
//     </div>
//   );
// }

async function CategoryPage({ item }: { item: Product[]}) {
  return (
    <>
      <section className=" mx-auto w-full">
      <div className="relative md:h-[430px]">
            <Image
              src={category_hero}
              alt={'params.handle'}
              height={500}
              width={400}
              className="h-full w-full object-cover object-top "
            />
            {/* Dull black overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-30"></div>
            {/* Text */}
            <div className="absolute top-0 z-50 flex h-full w-full flex-col justify-center p-6 text-end text-white md:items-end md:justify-end md:gap-y-10 md:p-11">
              <h1 className="hidden font-serif text-2xl capitalize md:block lg:text-6xl">
                {"Our Collections"}
              </h1>
              <h4 className="lg:text-xl">{"Shop Our Androgynous Clothing"}</h4>
            </div>
          </div>
        
            <CollectionBox CollectionName="all-new-arrivals-1"/>
            <CollectionBox2 CollectionName="dress-pant"/>
            <CollectionBox CollectionName="all-new-arrivals-1"/>
            {/* <CollectionBox CollectionName="trendings"/> */}
            <CollectionBox2 CollectionName="all-dress-shirt"/>
         
      </section>

      <StyleInspiration />

      <TwoBoxes />
    </>
  );
}
