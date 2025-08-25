import { Cart } from '@/components/Cart';
import { Breadcrumbs } from '@/ui';
import { BREADCRUMBS } from '@/constants/routes';
import { getProducts } from '@/services/products';

export default async function CartPage() {
  const products = await getProducts({ pageSize: 8 });

  return (
    <>
      <Breadcrumbs items={BREADCRUMBS.cart} />
      <Cart products={products} />
    </>
  );
}
