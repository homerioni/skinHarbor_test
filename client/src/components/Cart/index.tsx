import { Products } from '@/components/Products';
import { CartOrder } from '@/components/Cart/CartOrder';
import { StrapiResponse } from '@/types';
import { TProduct } from '@/types/product';
import { CartList } from '@/components/Cart/CartList';
import s from './styles.module.scss';

type CartProps = {
  products: StrapiResponse<TProduct[]>;
};

export const Cart = ({ products }: CartProps) => {
  return (
    <section className={s.cart}>
      <div className={`${s.cart__container} container`}>
        <div className={s.cart__listWrapper}>
          <h2 className={s.cart__title}>Shopping Cart</h2>
          <CartList />
          <Products title="You may also like:" min initialProducts={products} paginated={false} />
        </div>
        <CartOrder />
      </div>
    </section>
  );
};
