import NextAuth from 'next-auth';
import type { NextRequest } from 'next/server';
import { getAuthOptions } from '@/session/auth';

async function auth(
  req: NextRequest,
  ctx: {
    params: Promise<{ nextauth: string[] }>;
  }
) {
  const { params } = ctx;
  const resolvedParams = await params; // разворачиваем Promise
  return NextAuth(req, { params: resolvedParams }, getAuthOptions(req));
}

export { auth as GET, auth as POST };
