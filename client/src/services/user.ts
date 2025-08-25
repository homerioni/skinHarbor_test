import { API_ROUTES } from '@/constants/routes';
import { API_USER_TOKEN, API_TOKEN } from '@/constants/api';

export type TOrder = {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  qty: number;
  id: number;
  total: number;
};

export type TUserData = {
  id: number;
  address?: {
    id: number;
    address: string;
  };
  username: string;
  email: string;
  blocked: boolean;
  confirmed: boolean;
  steamid: string;
  orders: TOrder[];
};

export const getUser = async (id: number): Promise<TUserData> => {
  try {
    const res = await fetch(`${API_ROUTES.users}/${id}?populate=*`, {
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
    console.error('Не удалось получить данные главной страницы:', err);

    return err as TUserData;
  }
};

export const saveUserAddress = async ({
  userId,
  address,
  existingAddressId,
}: {
  userId: number;
  address: { address: string };
  existingAddressId?: number;
}): Promise<{ data: { address: string; user: number } }> => {
  const url = existingAddressId
    ? `${API_ROUTES.addresses}/${existingAddressId}`
    : `${API_ROUTES.addresses}`;

  const method = existingAddressId ? 'PUT' : 'POST';

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${API_USER_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: existingAddressId ? { ...address, user: userId } : { ...address, user: userId },
    }),
  });

  return await res.json();
};
