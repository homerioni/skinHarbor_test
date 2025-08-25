import { TImageData } from '@/types/index';

export type TSlide = {
  id: number;
  title: string;
  image: TImageData;
};

export type TMainPageData = {
  id: number;
  contact_form: string;
  documentId: string;
  slides: TSlide[];
  createdAt: Date;
  publishedAt: Date;
  updatedAt: Date;
};
