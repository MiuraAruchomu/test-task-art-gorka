'use client';

import styles from './styles/dropdownMenu.module.scss';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectIsDropdownMenuOpen } from '@/store/slices/header/selectors';
import { useEffect } from 'react';
import Link from 'next/link';
import DropdownMenuButtons from './DropdownMenuButtons';

export const ROUTES = [
  {
    name: 'Студия',
    path: '#',
  },
  {
    name: 'Проекты',
    path: '#',
  },
  {
    name: 'Услуги',
    path: '#',
  },
  {
    name: 'Контакты',
    path: '#',
  },
];

export default function HeaderDropdownMenu() {
  const isVisible = useAppSelector(selectIsDropdownMenuOpen);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isVisible]);

  return (
    <div
      className={`${styles['header-dropdown-menu']} ${isVisible ? styles['visible'] : ''}`}
    >
      <ul className={styles['header-dropdown-menu__list']}>
        {ROUTES &&
          ROUTES.map((route) => (
            <li key={route.name}>
              <Link
                href={route.path}
                className={styles['header-dropdown-menu__item']}
              >
                {route.name}
              </Link>
            </li>
          ))}
      </ul>
      <DropdownMenuButtons />
    </div>
  );
}
