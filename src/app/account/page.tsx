'use client';
import axios from 'axios';
import LogoutButton from 'components/LogoutButton/page';
import { useEffect, useState } from 'react';
const Acccount = async () => {
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const fetchData = async () => {
    let data = await axios.get('/api/getAccountDetails');
    console.log(data);
    // @ts-ignore
    setCustomerData(data.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (customerData?.firstName == '' || !customerData?.firstName) {
    return null;
  }
  return (
    <div className="h-full w-full">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-8 p-20">
        <h1 className="text-4xl italic text-[#003445] ">My Account</h1>
        <div className="flex gap-3">
          <p className="text-[0.9rem]">Welcome Back, {customerData?.firstName}! </p>
          <LogoutButton />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="mt-6 text-2xl font-light text-[#003445]">Account Details</h1>
          <div className="text-center">
            <p className="text-[0.9rem]">{`${customerData?.firstName}  ${customerData?.lastName}`}</p>
            <p className="text-[0.9rem]">{customerData?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acccount;
