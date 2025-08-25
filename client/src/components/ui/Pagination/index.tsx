import { ArrowIcon } from '@/icons';
import s from './styles.module.scss';

type PaginationProps = {
  activePage: number;
  total: number;
  onChange?: (page: number) => void;
};

export const Pagination = ({ activePage, total, onChange }: PaginationProps) => {
  const getPages = () => {
    const pages: (number | 'ellipsis')[] = [];

    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (activePage <= 3) {
        pages.push(1, 2, 3, 4, 'ellipsis', total);
      } else if (activePage >= total - 2) {
        pages.push(1, 'ellipsis', total - 3, total - 2, total - 1, total);
      } else {
        pages.push(1, 'ellipsis', activePage - 1, activePage, activePage + 1, 'ellipsis', total);
      }
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className={s.main}>
      <button
        type="button"
        className={s.button}
        disabled={activePage === 1}
        onClick={() => onChange?.(activePage - 1)}
      >
        <ArrowIcon />
      </button>
      <ul className={s.list}>
        {pages.map((page, i) =>
          page === 'ellipsis' ? (
            <li key={`ellipsis-${i}`} className={s.ellipsis}>
              ...
            </li>
          ) : (
            <li
              key={page}
              className={`${s.item} ${activePage === page ? s.active : ''}`}
              onClick={() => onChange?.(page)}
            >
              {page}
            </li>
          )
        )}
      </ul>
      <button
        type="button"
        className={s.button}
        disabled={activePage === total}
        onClick={() => onChange?.(activePage + 1)}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};
