import { getPage } from 'lib/shopify';
import { NextResponse } from "next/server";

export async function GET(){
    try{
    const page = await getPage("contaact");
        if (!page) {
            return null;
          }
    if(page){
        
        return NextResponse.json({ message: 'Successful', status: 200,data:page});
    }else{
        throw new Error
    }
    
    }catch(err){
    return NextResponse.json({ message: 'Error ', status: 500 });
    }
}