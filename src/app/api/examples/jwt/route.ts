// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"

import type { NextApiRequest, NextApiResponse } from "next"
import exp from "constants";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`

  const token = await getToken({ req: request })

  return new Response(JSON.stringify(token, null, 2))
}