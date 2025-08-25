import { TImageData } from '@/types/index';

export type TProduct = {
  id: number;
  name: string;
  price: number;
  image: TImageData;
  createdAt: Date;
  publishedAt: Date;
  updatedAt: Date;
};
