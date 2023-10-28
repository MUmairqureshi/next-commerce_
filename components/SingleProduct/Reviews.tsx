/* eslint-disable unicorn/filename-case */

import axios from "axios";



// import { getReviews } from 'src/app/service';
const Reviews = async ( {params} : {params:string}) => {
  let productId=params.split("/")[params.split("/").length-1];
  axios.get('/api/getreview').then((res)=>{
    console.log("res",res.data.reviews)
  })
  return (
    <div className="mt-8">
    <div >bkjbjbjk{productId}</div>
  </div>
  )
}

export default Reviews;