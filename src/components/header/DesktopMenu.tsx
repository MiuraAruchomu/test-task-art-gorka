import styles from './styles/desktopMenu.module.scss';
import { HEADER_LINKS } from './header.config';
import Link from 'next/link';

export default function HeaderDesktopMenu() {
  return (
    <ul className={`${styles['header-desktop-menu']}`}>
      {HEADER_LINKS &&
        HEADER_LINKS.map((link) => (
          <li key={link.linkName}>
            <Link
              href={link.linkPath}
              className={`${styles['header-desktop-menu__item']}`}
            >
              {link.linkName}
            </Link>
          </li>
        ))}
    </ul>
  );
}
