import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/lib/session";

const protectedRoutes = ['/'];
const publicRoutes = ['/login'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(path);
  const isPublic = publicRoutes.includes(path);

  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  console.log('session', session);

  // if (isProtected && !session?.userId) {
  //   return NextResponse.redirect(new URL('/login', req.nextUrl));
  // }

  // if (isPublic && session?.userId) {
  //   return NextResponse.redirect(new URL('/', req.nextUrl));
  // }

  return NextResponse.next();
}
