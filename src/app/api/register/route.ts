import { SignUp } from 'lib/shopify';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  
  try {
    const res = await SignUp(data.formData); 
    console.log(res)
    if(!res.customerAccessToken){
      throw Error
      }
      cookies().set('accessToken', res.customerAccessToken?.accessToken);

    return NextResponse.json({ message: 'Sign Up Successful', status: 200, userData: res.customerAccessToken });
  } catch (error: any) {

    console.error('Error registering customer:', error);
    return NextResponse.json({ message: 'Error registering customer', status: 500 });
  }
}
