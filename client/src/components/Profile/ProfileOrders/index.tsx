'use client';

import { useUserStore } from '@/store/userStore';
import sMain from '../styles.module.scss';
import s from './styles.module.scss';

export const ProfileOrders = () => {
  const userInfo = useUserStore((state) => state.userInfo);

  return (
    <>
      <div className={sMain.profile__wrapper}>
        <h2>Orders</h2>
      </div>
      {userInfo?.orders.map((order) => (
        <div key={order.id} className={s.order}>
          <span>#{order.id}</span>
          <span>{order.total} EUR</span>
          <span>{order.qty} items</span>
          <span>{new Date(order.createdAt).toLocaleString()}</span>
        </div>
      ))}
    </>
  );
};
