import styles from './styles/burgerMenu.module.scss';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectIsDropdownMenuOpen } from '@/store/slices/header/selectors';
import { toggleDropdownMenu } from '@/store/slices/header/headerSlice';

export default function HeaderBurgerMenu() {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectIsDropdownMenuOpen);

  return (
    <button
      className={`${styles['burger-menu']} ${isOpen ? styles['is-open'] : ''}`}
      onClick={() => dispatch(toggleDropdownMenu())}
    >
      <div className={styles['burger-menu__inner']}>
        <span />
        <span />
        <span />
      </div>
    </button>
  );
}
