import s from './styles.module.scss';

type HeaderMenuProps = {
  menuIsOpen: boolean;
};

export const HeaderMenu = ({ menuIsOpen }: HeaderMenuProps) => (
  <nav className={`${s.headerMenu} ${menuIsOpen ? s.active : ''}`}>
    <ul className={s.headerMenu__list}>
      <li className={s.headerMenu__item}>Rifles</li>
      <li className={s.headerMenu__item}>Pistols</li>
      <li className={s.headerMenu__item}>Mid-Tier</li>
      <li className={s.headerMenu__item}>Sniper Rifles</li>
    </ul>
  </nav>
);
