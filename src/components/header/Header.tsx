'use client';

import styles from './styles/header.module.scss';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectIsDropdownMenuOpen } from '@/features/header/selectors';
import HeaderLogo from './Logo';
import HeaderDesktopMenu from './DesktopMenu';
import HeaderButtons from './HeaderButtons';
import HeaderBurgerMenu from './BurgerMenu';

export default function Header() {
  const isDropDownMenuopen = useAppSelector(selectIsDropdownMenuOpen);

  return (
    <header className={`${styles.header} container`}>
      <HeaderLogo />
      <HeaderDesktopMenu />
      <HeaderButtons />
      <HeaderBurgerMenu />
    </header>
  );
}
