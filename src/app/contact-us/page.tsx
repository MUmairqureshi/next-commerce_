import ContactForm from 'components/Contact-Form/page';
import { getPage } from 'lib/shopify';
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
  const page = await getPage('contactsss');

  // window.onload = async function() {
  // };
  // const [page,setPage]=useState({})
  // let page;
  // const fetchData=async()=>{
  //   let res=await axios.get('/api/getContactPage') 
  //   return res?.data;
  // }
  // useEffect(()=>{
  //   fetchData()
  // })
  return (
    <div className="w-full h-full">
        <div className="max-w-screen-2xl w-full flex justify-center relative items-center flex-col  mx-auto">

            <div className="w-full z-10 top-0 h-[72vh] max-h-[490px] flex justify-end items-end text-right  pr-10 absolute ">
            <h1 className="text-white lg:text-6xl text-5xl bottom-0 font-bold italic">{page?.title}</h1>
            </div>
        <div className="w-full ">
 
            <div
            className="my-styled-content"
      dangerouslySetInnerHTML={{ __html: page?.body as string }}
    /> 
             </div>
          <ContactForm/>
          <TwoBoxes/>

        </div>

    </div>
  )
}

export default Page

