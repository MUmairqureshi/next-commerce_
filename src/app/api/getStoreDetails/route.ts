import { NextResponse } from 'next/server';

export async function GET() {
    const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
    try {
    let result=await fetch('https://next-ecommerce-templates.myshopify.com/admin/api/2023-10/shop.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': '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',
        }})
    const body = await result.json();

  console.log(body)
    if (body) {
      return NextResponse.json({ message: 'Successful', status: 200, data: body });
    } else {
      throw new Error();
    }
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: 'Error ', status: 500 });
  }
}
