// import React from "react";
// import SearchBar from "./SearchBar";
// import Link from "next/link";
// import BestSellerProductCard from "./BestSellerProductCard";

// const MenProductSideBar = () => {
//   const menus = [
//     { title: "Accessories", path: "/your-path", quantity: "7" },
//     { title: "Men", path: "/your-path", quantity: "14" },
//     { title: "Women", path: "/your-path", quantity: "17" },
//   ];

//   return (
//     <section className="px-2 lg:px-8">
//       <SearchBar />
//       <div className="py-16">filter</div>
//       <div className="py-8">
//         <h1 className="text-lg">Categories</h1>
//         <ul className="justify-center font-light items-center space-y-4 mt-5">
//           {menus.map((item, idx) => (
//             <li key={idx} className="flex justify-between text-black">
//               <div className="hover:text-indigo-600">
//                 <Link href={item.path}>{item.title}</Link>
//               </div>
//               <div>({item.quantity})</div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="py-6">
//         <h1 className="text-lg mb-4">Our Best Sellers</h1>
//         <div>
//           <BestSellerProductCard />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MenProductSideBar;
