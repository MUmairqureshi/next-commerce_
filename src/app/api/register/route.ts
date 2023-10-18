// pages/api/register.js
import axios from 'axios';
import { NextRequest } from 'next/server';

export async function POST (req:NextRequest) {
    const data= await req.json()
    const {email,password} =data;
    try {
        // Your Shopify Storefront API URL
        const shopifyApiUrl = `https://panaverse-template.myshopify.com/api/2021-10/graphql.json`;
    
        // Your Shopify Storefront API Key
        const apiKey = 'cf6e1ff7992e94c310077b7a54b3fad6';
            
        const requestBody = {
          query: `
            mutation customerCreate($input: CustomerCreateInput!) {
              customerCreate(input: $input) {
                customerUserErrors {
                  code
                  field
                  message
                }
                customer {
                  id
                }
              }
            }
          `,
          variables: {
            input: {
              email,
              password,
            },
          },
        };
    
        const response = await axios.post(shopifyApiUrl, requestBody, {
          headers: {
            'X-Shopify-Storefront-Access-Token': apiKey,
          },
        });
        const responseData = response.data.data.customerCreate;
        console.log("hello",responseData);
        // if (responseData.customerUserErrors.length > 0) {
        //   // Handle errors
        //   NextResponse.json({ errors: responseData.customerUserErrors });
        // } else {
        //   // Customer registration successful
        //   NextResponse.json({ customer: responseData.customer });
        // }
      } catch (error:any) {
        console.error('Error registering customer:', error.message);
        // NextResponse.json({ error: 'Customer registration failed' });
      }
    };