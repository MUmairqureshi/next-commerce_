import React from 'react';

export function Logos() {
  return (
    <div className="mx-auto mt-6 w-full items-center border-b-2 border-t-2 border-slate-200 py-8 pb-12 pt-6">
      <div className="lg:w-65 l container m-4 flex w-full justify-between space-x-4  text-xl md:flex-row md:px-4">
        <div className="flex rounded-md text-center">
          <div className="w-full">
            <img
              src="https://kirrinfinch.com/cdn/shop/files/logo-bustle_180x.png?v=1618855415"
              alt="Logo 1"
              className="w-22 mx-auto mb-2 h-12 text-black"
            />
          </div>
        </div>

        <div className="mt-4 flex rounded-md text-center md:mt-0">
          <div className="w-full">
            <img
              src="https://kirrinfinch.com/cdn/shop/files/logo-atlantic_180x.png?v=1618855731"
              alt="Logo 2"
              className="w-22 mx-auto mb-2 h-12 text-black"
            />
          </div>
        </div>

        <div className="flex rounded-md text-center">
          <div className="w-full">
            <img
              src="https://kirrinfinch.com/cdn/shop/files/logo-them_180x.png?v=1618855751"
              alt="Logo 3"
              className="w-22 mx-auto mb-2 h-12 text-black"
            />
          </div>
        </div>

        <div className="mt-4 flex rounded-md text-center md:mt-0">
          <div className="w-full">
            <img
              src="https://kirrinfinch.com/cdn/shop/files/logo-vice_180x.png?v=1618855786"
              alt="Logo 4"
              className="w-22 mx-auto mb-2 h-12 text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
