import { Suspense } from 'react';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense>
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-4  pb-4 text-black dark:text-white lg:flex-row">
          <div className="order-last min-h-screen w-full md:order-none">{children}</div>          
        </div>
      </Suspense>
    </>
  );
}
