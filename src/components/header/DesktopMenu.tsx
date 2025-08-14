import styles from './styles/desktopMenu.module.scss';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

export default function HeaderDesktopMenu() {
  return (
    <ul className={`${styles['header-desktop-menu']}`}>
      {ROUTES &&
        ROUTES.map((route) => (
          <li key={route.name}>
            <Link
              href={route.path}
              className={`${styles['header-desktop-menu__item']} under-line-link`}
            >
              {route.name}
            </Link>
          </li>
        ))}
    </ul>
  );
}
