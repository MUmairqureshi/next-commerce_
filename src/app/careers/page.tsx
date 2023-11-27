import Prose from 'components/prose';
import { getPage } from 'lib/shopify';

const page = async () => {
    const page = await getPage("career");
  return (
    <div className="w-full h-full">
        <div className="max-w-screen-2xl w-full flex justify-center items-center flex-col p-20 gap-8 mx-auto">
            <h1 className="text-[#003445] text-4xl italic ">{page?.title}</h1>
            <div className="flex gap-3 max-w-md">
      <Prose className="mb-8" html={page.body as string} />

            </div>
          
        </div>

    </div>
  )
}

export default page