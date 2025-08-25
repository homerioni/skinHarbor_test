import { API_URL } from './api';

export const ROUTES = {
  main: {
    name: 'Home',
    href: '/',
  },
  profile: {
    name: 'Profile',
    href: '/profile',
  },
  cart: {
    name: 'Shopping Cart',
    href: '/cart',
  },
} as const;

export const BREADCRUMBS = {
  profile: [ROUTES.main, ROUTES.profile],
  cart: [ROUTES.main, ROUTES.cart],
};

export const API_ROUTES = {
  product: `${API_URL}/api/product`,
  products: `${API_URL}/api/products`,
  mainPage: `${API_URL}/api/main-page`,
  users: `${API_URL}/api/users`,
  address: `${API_URL}/api/address`,
  addresses: `${API_URL}/api/addresses`,
  orders: `${API_URL}/api/orders`,
};
