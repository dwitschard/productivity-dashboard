export async function GET(): Promise<{ url: string }> {
  return new Response(
    JSON.stringify({
      url: process.env.NEXTAUTH_URL!
    })
  );
}
