'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';
import { CartIcon, LogoutIcon, SteamIcon } from '@/icons';
import { signIn, signOut } from 'next-auth/react';
import { Button } from '@/ui';
import s from './styles.module.scss';
import { useCartStore } from '@/store/cartStore';
import { TUserInfo } from '@/store/userStore';

type HeaderProfileProps = {
  userInfo: TUserInfo;
};

export const HeaderProfile = ({ userInfo }: HeaderProfileProps) => {
  const totalCount = useCartStore((state) => state.getTotalCount());

  if (userInfo) {
    return (
      <div className={s.headerProfile}>
        <Link href={ROUTES.profile.href} className={s.headerProfile__profile}>
          <div className={s.headerProfile__avatar}>
            {userInfo.avatar && <Image src={userInfo.avatar} alt={''} width={30} height={30} />}
          </div>
          <span>{userInfo.username}</span>
        </Link>
        <Link href={ROUTES.cart.href} className={s.headerProfile__cart}>
          <CartIcon />
          {totalCount > 0 && <span className={s.headerProfile__cartNum}>{totalCount}</span>}
        </Link>
        <button className={s.headerProfile__logout} onClick={() => signOut()}>
          <LogoutIcon />
        </button>
      </div>
    );
  }

  return (
    <div className={s.headerProfile}>
      <Link href={ROUTES.cart.href} className={s.headerProfile__cart}>
        <CartIcon />
        {totalCount > 0 && <span className={s.headerProfile__cartNum}>{totalCount}</span>}
      </Link>
      <Button className={s.headerProfile__login} onClick={() => signIn('steam')}>
        <SteamIcon />
        <span>Login with Steam</span>
      </Button>
    </div>
  );
};
