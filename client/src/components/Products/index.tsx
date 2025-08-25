'use client';

import { Product } from '@/components/Product';
import { Pagination } from '@/ui';
import { useEffect, useState } from 'react';
import { StrapiResponse } from '@/types';
import { TProduct } from '@/types/product';
import { getProducts } from '@/services/products';
import { API_URL } from '@/constants/api';
import { useCartStore } from '@/store/cartStore';
import s from './styles.module.scss';

type ProductsProps = {
  title: string;
  min?: boolean;
  initialProducts?: StrapiResponse<TProduct[]>;
  paginated?: boolean;
  pageSize?: number;
};

export const Products = ({
  title,
  min,
  paginated = true,
  initialProducts = { data: [] },
  pageSize = 20,
}: ProductsProps) => {
  const [products, setProducts] = useState<StrapiResponse<TProduct[]>>(initialProducts);
  const [activePage, setActivePage] = useState(1);
  const paginationInfo = products.meta?.pagination;

  const addToCart = useCartStore((state) => state.addItem);

  useEffect(() => {
    if (paginated) {
      getProducts({ page: activePage, pageSize }).then(setProducts);
    }
  }, [activePage, paginated, pageSize]);

  return (
    <section className={s.products}>
      <div className={`${s.products__container} container`}>
        {title && <h2 className={s.products__title}>{title}</h2>}
        <ul className={s.products__list}>
          {products.data.map((product) => (
            <li key={product.id}>
              <Product
                imageUrl={`${API_URL}${product.image.url}`}
                imageAlt={product.image.name}
                name={product.name}
                price={product.price}
                onClick={() => addToCart(product.id)}
                min={min}
              />
            </li>
          ))}
        </ul>
        {paginated && paginationInfo && paginationInfo.pageCount > 1 && (
          <div>
            <Pagination
              total={paginationInfo.pageCount}
              activePage={paginationInfo.page}
              onChange={(page) => setActivePage(page)}
            />
          </div>
        )}
      </div>
    </section>
  );
};
