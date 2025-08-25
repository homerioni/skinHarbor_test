/* eslint-disable */
// @ts-nocheck

import type { AuthOptions } from 'next-auth';
import Steam, { STEAM_PROVIDER_ID } from 'next-auth-steam';
import type { NextRequest } from 'next/server';

const STRAPI_URL = process.env.STRAPI_URL!;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN!;

async function findOrCreateUserInStrapi(profile) {
  const steamId = profile?.steamid;

  const checkRes = await fetch(`${STRAPI_URL}/api/users?filters[steamid][$eq]=${steamId}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  });

  const existingUsers = await checkRes.json();

  if (Array.isArray(existingUsers) && existingUsers.length > 0) {
    return existingUsers[0];
  }

  const createRes = await fetch(`${STRAPI_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    body: JSON.stringify({
      username: profile.personaname,
      email: `${steamId}@steam.local`,
      steamid: steamId,
      password: steamId,
      role: 1,
      provider: 'steam',
    }),
  });

  return await createRes.json();
}

export function getAuthOptions(req?: NextRequest): AuthOptions {
  return {
    providers: req
      ? [
          Steam(req, {
            clientSecret: process.env.STEAM_SECRET!,
          }),
        ]
      : [],
    callbacks: {
      async jwt({ token, account, profile }) {
        if (account?.provider === STEAM_PROVIDER_ID) {
          token.steam = profile;

          const strapiUser = await findOrCreateUserInStrapi(profile);
          token.strapiUserId = strapiUser.id;
        }

        return token;
      },
      async session({ session, token }) {
        if ('steam' in token) {
          session.user.steam = token.steam;
        }

        if (token.strapiUserId) {
          session.user.strapiId = token.strapiUserId;
        }

        return session;
      },
    },
  };
}
