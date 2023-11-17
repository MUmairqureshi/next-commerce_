// import Link from 'next/link';

import { getMenu } from 'lib/shopify';

// import FooterMenu from 'components/layout/footer-menu';
// import LogoSquare from 'components/logo-square';
// import { getMenu } from 'lib/shopify';
// import { Suspense } from 'react';

// const { COMPANY_NAME, SITE_NAME } = process.env;

// export default async function Footer() {
//   const currentYear = new Date().getFullYear();
//   const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
//   const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
//   const menu = await getMenu('next-js-frontend-footer-menu');
//   const copyrightName = COMPANY_NAME || SITE_NAME || '';

//   return (
//     <footer className="text-sm text-neutral-500 dark:text-neutral-400">
//       <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
//         <div>
//           <Link className="flex items-center gap-2 text-black dark:text-white md:pt-1" href="/">
//             <LogoSquare size="sm" />
//             <span className="uppercase">{SITE_NAME}</span>
//           </Link>
//         </div>
//         <Suspense
//           fallback={
//             <div className="flex h-[188px] w-[200px] flex-col gap-2">
//               <div className={skeleton} />
//               <div className={skeleton} />
//               <div className={skeleton} />
//               <div className={skeleton} />
//               <div className={skeleton} />
//               <div className={skeleton} />
//             </div>
//           }
//         >
//           <FooterMenu menu={menu} />
//         </Suspense>
//         <div className="md:ml-auto">
//           <a
//             className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
//             aria-label="Deploy on Vercel"
//             href="https://vercel.com/templates/next.js/nextjs-commerce"
//           >
//             <span className="px-3">▲</span>
//             <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
//             <span className="px-3">Deploy</span>
//           </a>
//         </div>
//       </div>
//       <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
//         <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
//           <p>
//             &copy; {copyrightDate} {copyrightName}
//             {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
//           </p>
//           <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
//           <p>Designed in California</p>
//           <p className="md:ml-auto">
//             Crafted by{' '}
//             <a href="https://vercel.com" className="text-black dark:text-white">
//               ▲ Vercel
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


const footer = async () => {
  const menu = await getMenu('footer_menu');
  console.log("menu",menu)
  return (
    <div className="bg-white pt-10">
      <div className="mx-auto grid max-w-screen-2xl gap-y-4 border-y-2 border-gray-300 bg-white px-6 py-10 sm:grid-cols-5 md:px-10">
        <div className="col-span-2 border-r-2 border-[#003445] md:pr-20">
          <h2 className="mt-2 text-2xl	font-bold leading-10 tracking-wider text-[#003445]">
            Free Shipping & Returns
          </h2>
          <p className="mt-2 text-base text-[#003445] ">
            Kirrin Finch is proud to offer free shipping and returns in the US on all orders of $95
            and above. We also offer low rates to international destinations.
          </p>
        </div>
        <div className="col-span-3  grid grid-cols-2 gap-y-2 sm:grid-cols-3 sm:px-6 md:pl-20">
        {menu&&menu.map((items,ind)=>{
          return(
          <div className="px-3">
            <h2 className="trading-wider mb-2  text-lg font-medium text-[#003445]">
              {items?.title}
            </h2>
            <ul>
              {items?.subMenu?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="mb-1 text-sm font-light text-gray-600 hover:cursor-pointer hover:text-primary"
                  >
                    <a href={item.path}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          )
        })} 
         
        </div>
      </div>
      <div className="mx-auto w-full bg-white p-6 text-center">
        <p>Copyright © 2023 Panacloud</p>
      </div>
    </div>
  );
};

export default footer;
