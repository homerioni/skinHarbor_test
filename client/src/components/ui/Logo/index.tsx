import { ROUTES } from '@/constants/routes';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import Link from 'next/link';
import s from './styles.module.scss';

export const Logo = () => (
  <Link href={ROUTES.main.href} className={s.logo}>
    <Image src={logo} alt="Логотип" width={110} height={56} />
  </Link>
);
