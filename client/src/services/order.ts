import { API_ROUTES } from '@/constants/routes';
import { API_USER_TOKEN } from '@/constants/api';
import { StrapiResponse } from '@/types';

export type TOrder = {
  createdAt: Date;
  publishedAt: Date;
  updatedAt: Date;
  qty: number;
  total: number;
  id: number;
};

export const createOrder = async ({
  id,
  products,
  total,
  qty,
}: {
  id: number;
  products: { id: number }[];
  total: number;
  qty: number;
}): Promise<StrapiResponse<TOrder>> => {
  try {
    const res = await fetch(`${API_ROUTES.orders}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_USER_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          user: id,
          total,
          qty,
          products: {
            connect: products,
          },
        },
      }),
    });

    if (!res.ok) {
      throw new Error(`Ошибка запроса: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error('Не удалось получить данные главной страницы:', err);

    return err as StrapiResponse<TOrder>;
  }
};
