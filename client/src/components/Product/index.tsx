import Image from 'next/image';
import { Button } from '@/components/ui';
import s from './styles.module.scss';

type ProductProps = {
  imageUrl: string;
  imageAlt?: string;
  name: string;
  price: number;
  onClick?: () => void;
  min?: boolean;
};

export const Product = ({
  name,
  price,
  imageUrl,
  imageAlt = 'skin',
  onClick,
  min,
}: ProductProps) => {
  return (
    <div className={`${s.product} ${min ? s['product--min'] : ''}`}>
      <div className={s.product__image}>
        <Image src={imageUrl} alt={imageAlt} width={276} height={200} />
      </div>
      <h3 className={s.product__title}>{name}</h3>
      <p className={s.product__price}>{price}€</p>
      <Button className={s.product__button} onClick={onClick}>
        Add to Cart
      </Button>
    </div>
  );
};
