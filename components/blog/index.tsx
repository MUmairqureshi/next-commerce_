
export function Commutiny() {
  return (
    <div className="item-center h-full w-full border-b-2 border-t-2 p-6 px-6 ">
      <div className=" max-h-88rem       p-4 text-white ">
        <div className="flex flex-col md:flex-row">
          <div className="bg-slate-800 p-4  md:w-1/2">
            <img
              src="https://kirrinfinch.com/cdn/shop/files/Dapper_Scout_Mo_Banks_Homepage_720x.jpg?v=1687876003"
              alt="Image 1"
              className="h-auto w-full"
            />
            <h2 className="mt-4 text-xl font-semibold">Title 1</h2>
            <p className="mt-2 text-gray-600">Description 1</p>
            <button className="marker:  mt-2  rounded bg-white px-8 py-3 font-serif text-black transition-colors">
              Button 1
            </button>
          </div>

          <div className="bg-slate-800 p-4 md:w-1/2">
            <img
              src="https://kirrinfinch.com/cdn/shop/files/Homepage_Suit_Blog_720x.png?v=1692367945"
              alt="Image 2"
              className="h-auto w-full"
            />
            <h2 className="mt-4 text-xl font-semibold">Title 2</h2>
            <p className="mt-2 text-gray-600">Description 2</p>
            <button className="marker:  mt-2  rounded bg-white px-8 py-3 font-serif text-black transition-colors">
              Button 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
