// pages/api/hello.ts

import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
  const apiUrl = `https://judge.me/api/v1/reviews?api_token=MDNdJzaFmVDpoimCC2iTWoh68OQ&shop_domain=next-ecommerce-templates.myshopify.com?product_external_id=8606460248342`;

      const response = await axios.get(apiUrl);
      const responseData = response.data;

    return NextResponse.json({ data: responseData });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred' });
  }
}
