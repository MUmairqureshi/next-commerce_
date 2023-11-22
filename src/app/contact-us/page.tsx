/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-async-client-component */
import ContactForm from 'components/Contact-Form/page';
import { getMetaObject, getShopDetails } from 'lib/shopify';
import TwoBoxes from '../collections/two-boxes';
import "./style.css";
// export async function getServerSideProps() {
//   console.log("Get")
  // const pageData = await getPage('contactsss');
// 
// console.log(":DSDSd?",pageData)
// return {
//   props: {
//     pageData,
//   },
// };
// }


const Page = async () => {
  
  const page = await getMetaObject('contact-page','contact_page');
  getShopDetails();
  console.log(page)
  return (
    <div className="w-full h-full">
        <div className="max-w-screen-2xl w-full flex justify-center relative items-center flex-col  mx-auto">
          <div style={{backgroundImage: `url(${page?.image})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='h-[86vh] flex justify-end items-end w-full max-h-[700px]'>
          <h1 className='text-white font-bold text-6xl mb-16 mr-12'>{page?.title}</h1>
          </div>
            
            <div className="p-10    sm:p-20 bg-[#003445] w-full text-center text-white">
        <h1 className="text-4xl font-bold mb-4">{page?.sub_heading}</h1>
        <p>{page?.short_description}</p>
            </div>

          <ContactForm/>
          <TwoBoxes/>

        </div>

    </div>
  )
}

export default Page

