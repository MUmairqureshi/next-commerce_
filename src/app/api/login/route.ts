import { SignIn } from 'lib/shopify';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const res = await SignIn(data);
    if (!res.customerAccessToken) {
      throw Error;
    }
    console.log(res);
    return NextResponse.json({
      message: 'Login In Successful',
      status: 200,
      customerAccessToken: res.customerAccessToken
    });
  } catch (err) {
    return NextResponse.json({ message: 'Error Logging In customer', status: 500 });
  }
}
