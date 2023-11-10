import { cookies } from 'next/headers';
import { NextResponse } from "next/server";

export async function GET(){
    try{
        
        let data=cookies().getAll().map((e,i)=>e.name)  
        data.map(e=>cookies().delete(e))
        return NextResponse.json({ message: 'Login Out Successful', status: 200});
    
    }catch(err){
    return NextResponse.json({ message: 'Error Logging Out customer', status: 500 });
    }
}