import Link from 'next/link';
import { Logo } from '@/ui';
import s from './styles.module.scss';

export const Footer = () => (
  <footer className={s.footer}>
    <div className={`${s.footer__container} container`}>
      <div className={s.footer__topWrapper}>
        <Logo />
        <nav className={s.footer__navigation}>
          <ul className={s.footer__links}>
            <li className={s.footer__link}>
              <Link href={'/'}>Privacy Policy</Link>
            </li>
            <li className={s.footer__link}>
              <Link href={'/'}>Terms and conditions</Link>
            </li>
            <li className={s.footer__link}>
              <Link href={'/'}>Cookie policy</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className={s.footer__text}>
        Created{' '}
        <Link href={'https://t.me/homerion'} target="_blank">
          by Homerion
        </Link>
      </p>
    </div>
  </footer>
);
