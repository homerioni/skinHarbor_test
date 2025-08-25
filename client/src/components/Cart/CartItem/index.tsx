import s from './styles.module.scss';

type CartItemProps = {
  name: string;
  price: number;
};

export const CartItem = ({ name, price }: CartItemProps) => {
  return (
    <li className={s.cartItem}>
      <p>{name}</p>
      <p>{price} €</p>
      <button className={s.cartItem__button} type="button">
        Remove
      </button>
    </li>
  );
};
