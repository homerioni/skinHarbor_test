'use client';

import { CartItem } from '@/components/Cart/CartItem';
import s from './styles.module.scss';
import { useCartStore } from '@/store/cartStore';
import { useEffect, useState } from 'react';
import { getProducts } from '@/services/products';
import { StrapiResponse } from '@/types';
import { TProduct } from '@/types/product';

export const CartList = () => {
  const [cartItems, setCartItems] = useState<StrapiResponse<TProduct[]>>();

  const cartList = useCartStore((state) => state.items);

  useEffect(() => {
    if (cartList.length > 0) {
      getProducts({ ids: cartList, pageSize: 1000 }).then(setCartItems);
    } else {
      setCartItems(undefined);
    }
  }, [cartList]);

  if (!cartItems) {
    return null;
  }

  return (
    <ul className={s.cartList}>
      {cartItems.data.map((item) => (
        <CartItem key={item.id} name={item.name} price={item.price} />
      ))}
    </ul>
  );
};
