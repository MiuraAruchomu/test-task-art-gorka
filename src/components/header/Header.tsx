'use client';

import styles from './styles/header.module.scss';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectIsDropdownMenuOpen } from '@/store/slices/header/selectors';
import HeaderLogo from './Logo';
import HeaderDesktopMenu from './DesktopMenu';
import HeaderButtons from './HeaderButtons';
import HeaderBurgerMenu from './BurgerMenu';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isDropDownMenuopen = useAppSelector(selectIsDropdownMenuOpen);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isDropDownMenuopen ? styles['menu-is-open'] : ''} container`}
    >
      <HeaderLogo />
      <HeaderDesktopMenu />
      <HeaderButtons />
      <HeaderBurgerMenu />
    </header>
  );
}
