'use client';

import { useEffect, useState } from 'react';
import { HeaderLogo } from '@/components/Header/HeaderLogo';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { HeaderProfile } from '@/components/Header/HeaderProfile';
import { TUserData } from '@/services/user';
import { Session } from 'next-auth';
import { useUserStore } from '@/store/userStore';
import s from './styles.module.scss';

type HeaderProps = {
  session: Session | null;
  user: TUserData | null;
};

export const Header = ({ user, session }: HeaderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const userInfo = useUserStore((state) => state.userInfo);
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const toggleMenu = () =>
    setMenuIsOpen((prev) => {
      const body = document.getElementById('body');

      if (body && prev) {
        body.classList.remove('lock');
        body.style.width = '';
      } else if (body) {
        body.style.width = `${body.offsetWidth}px`;
        body?.classList.add('lock');
      }

      return !prev;
    });

  useEffect(() => {
    if (session && user) {
      setUserInfo({ ...user, avatar: session.user.image });
    }
  }, [user, session, setUserInfo]);

  return (
    <header className={s.header}>
      <div className={`${s.header__container} container`}>
        <HeaderLogo menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
        <HeaderMenu menuIsOpen={menuIsOpen} />
        <HeaderProfile userInfo={userInfo} />
      </div>
    </header>
  );
};
