import { SignIn } from 'lib/shopify';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const data= await req.json();
    try{
        const res = await SignIn(data)
        if(!res.customerAccessToken){
        throw Error
        }
        cookies().set('accessToken', res.customerAccessToken?.accessToken);
        console.log(res.customerAccessToken?.accessToken)
        return NextResponse.json({ message: 'Login In Successful', status: 200,customerAccessToken:res.customerAccessToken });
    
    }catch(err){
    return NextResponse.json({ message: 'Error Logging In customer', status: 500 });
    }
}