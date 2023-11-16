import { SignUp } from 'lib/shopify';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const res = await SignUp(data.formData);
    if (!res.customer) {
      console.log('hehe');
      throw Error;
    }
    return NextResponse.json({
      message: 'Sign Up Successful',
      status: 200,
      userData: res.customer
    });
  } catch (error: any) {
    console.error('Error registering customer:', error.message);
    return NextResponse.json({ message: 'Error registering customer', status: 500 });
  }
}
