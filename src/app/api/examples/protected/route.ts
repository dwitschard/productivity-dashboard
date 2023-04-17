import {NextRequest, NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";
import {getServerSession} from "next-auth";
import {handler} from "@/app/api/auth/[...nextauth]/route";


export async function GET(req: NextRequest, res: NextResponse) {
    // If you don't have the NEXTAUTH_SECRET environment variable set,
    // you will have to pass your secret as `secret` to `getToken`

    const session = await getServerSession(handler)
    const token = await getToken({ req: req })

    if (token) {
        return NextResponse.json("This is protected content. You can access this content because you are signed in.")
    }

    return NextResponse.json("You must be signed in to view the protected content on this page.");
}