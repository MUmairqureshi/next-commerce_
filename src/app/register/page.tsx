'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import React, { useState } from 'react';
const Login = () => {
  // const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    acceptsMarketing: false
  });
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      axios
        .post('/api/register', {
          formData
        })
        .then((response: any) => {
          if (response.data.status === 200) {
            console.log('success', response.data.message, response);
            window.alert(response.data.message);
            // router.push("/login")
          } else {
            console.log('err', response.data.message);
            window.alert(response.data.message);
          }
        })
        .catch((error: any) => {
          console.log('err', error);
        });
    } catch (error) {
      console.log('Error Logging Shopify customer:', error);
    }
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-slate-100">
        <div className="mb-4 flex w-full max-w-sm items-center justify-center gap-1.5 space-x-2 space-y-12 px-8 pb-8 pt-12 text-2xl font-semibold text-sky-950 sm:bg-white sm:shadow-xl">
          <form
            className="w-full	space-y-5 rounded-full border-sky-500 sm:w-[400px]"
            onSubmit={onSubmit}
          >
            <div className="mb-4 flex w-full max-w-sm items-center justify-center gap-1.5 space-x-2 text-2xl font-semibold text-sky-950 ">
              <label>Signup Page</label>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 border-sky-500	text-slate-800	">
              <Input
                type="text"
                placeholder="First Name"
                id="firstName"
                value={formData.firstName}
                onChange={(e: any) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 border-sky-500	text-slate-800	">
              <Input
                type="text"
                placeholder="Last Name"
                id="lastName"
                value={formData.lastName}
                onChange={(e: any) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 border-sky-500	text-slate-800	">
              <Input
                type="email"
                placeholder="Email"
                id="email"
                value={formData.email}
                onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 border-sky-500	 text-slate-800	">
              <Input
                type="password"
                placeholder="Password"
                id="password"
                value={formData.password}
                onChange={(e: any) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div className="flex w-full max-w-sm items-center  justify-start gap-2 border-sky-500	 text-slate-800	">
              <Input
                type="checkbox"
                id="marketing"
                className="h-4 w-4"
                // size={2}
                onChange={(e: any) => setFormData({ ...formData, acceptsMarketing: !formData.acceptsMarketing })}
                />
               <label  className="text-sm font-normal">You want Email Marketing</label>
            </div>
            <div className="grid  w-full max-w-sm items-center gap-1.5 text-slate-200 shadow-xl ">
              <Button className="bg-[#003445]" variant="default">
                Sign Up
              </Button>
            </div>
            <div className="mb-4 flex w-full max-w-sm items-center justify-center gap-1.5 space-x-2 text-sm font-semibold text-sky-950 ">
              <label>
                Have an account?{' '}
                <Link href="/login" className="text-indigo-500 hover:underline">
                  Log in
                </Link>
                {''}
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
