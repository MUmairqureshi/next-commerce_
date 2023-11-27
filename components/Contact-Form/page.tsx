/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-async-client-component */
'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  

  // const fetchDetails=async()=>{
  //   const res= await axios.get(`/api/getStoreDetails`)
  // console.log(res)
  // }
  // useEffect(() => {
  //   fetchDetails()
  // }, []);

  const onFinish = async (e:any) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!name || !email || !message || !subject) {
      return alert("Please fill all fields");
    }
// const res=await axios.get(`https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2023-10/shop.json`)
// if(!res?.data){
//   return null;
// }
// console.log(res?.shop)
    if (email !== "") {
      const model = 
        {
to_name: "Code",
subject: subject,
store_name: "Panaverse",
from_name: name,
message: message,
reply_to: email,
to_email: "codehouse84@gmail.com",
from_email: email,
}
      ;

      emailjs.send("service_zu8mydb","template_ftpdb25",model,'i26Ov9qViqq9P-_ma')
        .then(
          (result) => {
            console.log("result", result);
            alert("Message successfully sent");
          },
          (error) => {
            console.log("error", error);
            alert(error.text);
          }
        );

      console.log("model");
    }
  };

  return (
    <div className='max-w-3xl w-full mt-10 mb-20 p-10'>
      <form onSubmit={onFinish} className='w-full space-y-4'>
        <Input onChange={(e) => setName(e.target.value)} className='border-black  p-5' placeholder="Name" />
        <Input onChange={(e) => setEmail(e.target.value)} className='border-black  p-5' placeholder="Email Address" />
        <Input onChange={(e) => setSubject(e.target.value)} className='border-black  p-5' placeholder="Subject" />
        <Textarea onChange={(e) => setMessage(e.target.value)} className='border-black  p-5' placeholder="Message" />
        <Button type="submit" className='bg-[#212A2F] p-6 text-white w-full'>
          SEND
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;