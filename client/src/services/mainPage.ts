import { API_ROUTES } from '@/constants/routes';
import { API_TOKEN } from '@/constants/api';
import { StrapiResponse } from '@/types';
import { TMainPageData } from '@/types/mainPage';

export const getMainPage = async (): Promise<StrapiResponse<TMainPageData>> => {
  try {
    const res = await fetch(`${API_ROUTES.mainPage}?populate[slides][populate]=image`, {
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

    return err as StrapiResponse<TMainPageData>;
  }
};
