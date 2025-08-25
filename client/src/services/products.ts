import { API_ROUTES } from '@/constants/routes';
import { API_TOKEN } from '@/constants/api';
import { TProduct } from '@/types/product';
import { StrapiResponse } from '@/types';

interface GetProductsParams {
  page?: number;
  pageSize?: number;
  ids?: number[];
}

export const getProducts = async ({
  page = 1,
  pageSize = 20,
  ids,
}: GetProductsParams): Promise<StrapiResponse<TProduct[]>> => {
  try {
    const idsQuery =
      ids && ids.length > 0 ? ids.map((id, i) => `&filters[id][$in][${i}]=${id}`).join('') : '';

    const url = `${API_ROUTES.products}?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}${idsQuery}`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Ошибка запроса: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error('Не удалось получить продукты:', err);

    return err as StrapiResponse<TProduct[]>;
  }
};
