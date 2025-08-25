import Link from 'next/link';
import { ArrowIcon } from '@/icons';
import s from './styles.module.scss';

type BreadcrumbsProps = {
  items: { name: string; href: string }[];
};

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className={`${s.main} container`}>
      <ul className={s.list}>
        {items.map((item, i) => (
          <li key={item.href} className={s.item}>
            {i === items.length - 1 ? (
              <span>{item.name}</span>
            ) : (
              <>
                <Link href={item.href}>{item.name}</Link>
                <ArrowIcon />
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
