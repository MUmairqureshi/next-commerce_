import { getLoginCustomerData } from 'lib/shopify';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    let accessToken = cookies().get('accessToken')?.value;
    console.log('in api', accessToken);
    if (accessToken == undefined) {
      return NextResponse.redirect('/login');
    }
    if (accessToken) {
      let customerData = await getLoginCustomerData(accessToken);
      return NextResponse.json({ message: 'Successful', status: 200, data: customerData });
    } else {
      throw new Error();
    }
  } catch (err) {
    return NextResponse.json({ message: 'Error ', status: 500 });
  }
}
