import styles from './styles/desktopMenu.module.scss';
import Link from 'next/link';

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
