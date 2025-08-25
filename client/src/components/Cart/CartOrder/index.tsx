'use client';

import { Button, Input } from '@/ui';
import { signIn } from 'next-auth/react';
import { SteamIcon } from '@/icons';
import s from './styles.module.scss';
import { useCartStore } from '@/store/cartStore';
import { useEffect, useState } from 'react';
import { getProducts } from '@/services/products';
import { useUserStore } from '@/store/userStore';
import { createOrder } from '@/services/order';
import { useModalStore } from '@/store/modalStore';
import { saveUserAddress } from '@/services/user';

export const CartOrder = () => {
  const [total, setTotal] = useState({
    qty: 0,
    price: 0,
  });

  const cartList = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const userInfo = useUserStore((state) => state.userInfo);
  const updateUserInfo = useUserStore((state) => state.updateUserInfo);
  const setForm = useModalStore((state) => state.setForm);
  const openModal = useModalStore((state) => state.openModal);

  useEffect(() => {
    if (cartList.length > 0) {
      getProducts({ ids: cartList }).then((res) => {
        return setTotal(
          res.data.reduce((acc, item) => ({ qty: ++acc.qty, price: acc.price + item.price }), {
            qty: 0,
            price: 0,
          })
        );
      });
    }
  }, [cartList]);

  const onCreateOrder = () => {
    if (userInfo) {
      createOrder({
        products: cartList.map((item) => ({ id: item })),
        total: total.price,
        qty: total.qty,
        id: userInfo?.id,
      }).then((res) => {
        clearCart();

        updateUserInfo({ orders: [...userInfo.orders, res.data] });
      });
    }
  };

  const address = userInfo?.address;

  const openModalHandler = () => {
    setForm({ address: address?.address || '' });

    openModal({
      title: address ? 'Edit Address' : 'Add New Address',
      content: (
        <Input
          value={address?.address}
          onChange={(e) => setForm({ address: e.target.value })}
          placeholder="Please enter your address"
          required
        />
      ),
      onSubmit: (value) => {
        if (userInfo) {
          saveUserAddress({
            userId: userInfo.id,
            address: value,
            existingAddressId: address ? address.id : undefined,
          }).then((res) => {
            updateUserInfo({ address: { id: res.data.user, address: res.data.address } });
          });
        }
      },
    });
  };

  return (
    <div className={s.cart__order}>
      <p>Subtotal: {total.price} EUR</p>
      <p>Items qty: {total.qty} pcs.</p>
      <p>Grand Total: {total.price} EUR</p>
      {userInfo ? (
        userInfo.address ? (
          <>
            <Button onClick={onCreateOrder}>Proceed to Checkout</Button>
          </>
        ) : (
          <>
            <p>
              <i>You don not have saved address</i>
            </p>
            <Button onClick={openModalHandler}>Complete Your Info</Button>
          </>
        )
      ) : (
        <Button className={s.cart__login} onClick={() => signIn('steam')}>
          <SteamIcon />
          <span>Login with Steam</span>
        </Button>
      )}
    </div>
  );
};
