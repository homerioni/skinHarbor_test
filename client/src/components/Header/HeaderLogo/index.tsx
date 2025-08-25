import { Logo } from '@/ui';
import s from './styles.module.scss';

type HeaderLogoProps = {
  menuIsOpen: boolean;
  toggleMenu: () => void;
};

export const HeaderLogo = ({ menuIsOpen, toggleMenu }: HeaderLogoProps) => (
  <div className={s.headerLogo__wrapper}>
    <button
      className={`${s.headerLogo__burger} ${menuIsOpen ? s['headerLogo__burger--active'] : ''}`}
      type="button"
      onClick={toggleMenu}
    >
      <span />
    </button>
    <Logo />
  </div>
);
