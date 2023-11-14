import { NextRequest, NextResponse } from "next/server";

// ... (unchanged imports)

export function middleware(request: NextRequest) {
    let loggedIn = request.cookies.get('accessToken')?.value;
    console.log(loggedIn, "token in mw ");

    if (loggedIn) {
        console.log("outsde");
        if (request.nextUrl.pathname === "/login") {
            console.log("outsde22");
            return NextResponse.redirect('http://localhost:3000/account');
        }
    }
    else if (!loggedIn) {
        console.log("insied");
        console.log(request.nextUrl.pathname);
        if (request.nextUrl.pathname === "/account") {
            console.log("insied222");
            return NextResponse.redirect('http://localhost:3000/login');
        }
    } else {
        return NextResponse.next();
    }
}
