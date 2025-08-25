export interface PaginationMeta {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination: PaginationMeta;
  };
  error?: {
    status: number;
    name: string;
    message: string;
    details: unknown;
  };
}

export type TImageData = {
  id: number;
  name: string;
  url: string;
};
