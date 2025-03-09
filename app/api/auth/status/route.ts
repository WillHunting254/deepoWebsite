// app/api/auth/status/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/app/lib/session";

export async function GET() {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);
  return NextResponse.json({ isAuthenticated: !!session?.userId });
}
