import { NextRequest } from 'next/server';

export async function GET() {
  return new Response(JSON.stringify(process.env.NEXTAUTH_URL));
}
