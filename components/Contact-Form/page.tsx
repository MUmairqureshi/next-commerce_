'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
const ContactForm = async () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
    const[subject,setSubject]=useState("");
    const onFinish=()=>{
      if(!name||!email||!message||!subject){
        return alert("Please fill all fields")
      }
      if(email!==""){
        let model={
          Full_Name:name,
        Email:email,
        Subject:subject,
        Message:message
        }
        emailjs.send('service_zu8mydb', 'template_cq8m8id',model, 'i26Ov9qViqq9P-_ma')
        .then((result) => {
          console.log("result",result)
          alert("messsage succesfully sent");
        }, (error) => {
          console.log("error",error)
          
          alert(error.text);
        });
        console.log("model")
    }
  }
  return (
          <div className='max-w-3xl w-full mt-10 mb-20'>
            <form onSubmit={onFinish} className='w-full space-y-4'>
                <Input onChange={(e)=>setName(e.target.value)} className='border-black  p-5' placeholder="Name"/>
                <Input onChange={(e)=>setEmail(e.target.value)} className='border-black  p-5' placeholder="Email Address"/>
                <Input onChange={(e)=>setSubject(e.target.value)} className='border-black  p-5' placeholder="Subject"/>
            <Textarea onChange={(e)=>setMessage(e.target.value)} className='border-black  p-5' placeholder="Message"/>
            <Button type="submit" className='bg-[#212A2F] p-6 text-white w-full'>
                SEND
            </Button>
            </form>
          </div>


  )
}

export default ContactForm