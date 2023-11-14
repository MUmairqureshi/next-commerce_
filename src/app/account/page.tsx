"use client"
import axios from "axios";
import LogoutButton from 'components/LogoutButton/page';
import { useEffect, useState } from "react";
const Acccount = async () => {
  const [customerData,setCustomerData] = useState({
    firstName:"",
    lastName:"",
    email: "",
  })
  const fetchData=async()=>{
    let data=await axios.get("/api/getAccountDetails")
    console.log(data)
    // @ts-ignore
    setCustomerData(data.data.data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  if(customerData?.firstName==""||!customerData?.firstName){
    return null;
  }
  return (
    <div className="w-full h-full">
        <div className="max-w-screen-2xl w-full flex justify-center items-center flex-col p-20 gap-8 mx-auto">
            <h1 className="text-[#003445] text-4xl italic ">My Account</h1>
            <div className="flex gap-3">
            <p className="text-[0.9rem]">Welcome Back, {customerData?.firstName}! </p>
            <LogoutButton/>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-[#003445] text-2xl font-light mt-6">Account Details</h1>
            <div className="text-center">
            <p className="text-[0.9rem]">{`${customerData?.firstName}  ${customerData?.lastName}`}</p>
            <p className="text-[0.9rem]">{customerData?.email}</p>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Acccount