'use client';

import styles from './styles/dropdownMenu.module.scss';
import { HEADER_LINKS } from './header.config';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectIsDropdownMenuOpen } from '@/features/header/selectors';
import { useEffect } from 'react';
import Link from 'next/link';
import DropdownMenuButtons from './DropdownMenuButtons';

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
        {HEADER_LINKS &&
          HEADER_LINKS.map((link) => (
            <li key={link.linkName}>
              <Link
                href={link.linkPath}
                className={styles['header-dropdown-menu__item']}
              >
                {link.linkName}
              </Link>
            </li>
          ))}
      </ul>
      <DropdownMenuButtons />
    </div>
  );
}
