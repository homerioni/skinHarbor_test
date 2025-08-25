import { Products } from '@/components/Products';
import { ContactForm } from '@/components/ContactForm';
import { Slider } from '@/components/Slider';
import { getProducts } from '@/services/products';
import { getMainPage } from '@/services/mainPage';

const PAGE_SIZE = 12;

export default async function MainPage() {
  const [{ data: mainPageData }, initialProducts] = await Promise.all([
    getMainPage(),
    getProducts({ pageSize: PAGE_SIZE }),
  ]);

  return (
    <>
      <Slider slides={mainPageData.slides} />
      <Products title="Popular Products:" initialProducts={initialProducts} pageSize={PAGE_SIZE} />
      <ContactForm text={mainPageData.contact_form} />
    </>
  );
}
