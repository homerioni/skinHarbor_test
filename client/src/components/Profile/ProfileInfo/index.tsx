'use client';

import { EmailIcon, UserIcon } from '@/icons';
import sMain from '../styles.module.scss';
import s from './styles.module.scss';
import { useUserStore } from '@/store/userStore';

export const ProfileInfo = () => {
  const userInfo = useUserStore((state) => state.userInfo);

  return (
    <div className={sMain.profile__wrapper}>
      <h2>Profile</h2>
      <ul className={s.profileList}>
        <li className={s.profileList__info}>
          <EmailIcon />
          <span>{userInfo?.email}</span>
        </li>
        <li className={s.profileList__info}>
          <UserIcon />
          <span>{userInfo?.username}</span>
        </li>
      </ul>
    </div>
  );
};
