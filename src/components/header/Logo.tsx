import styles from './styles/logo.module.scss';
import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <Link href={'/'} className={styles.logo}>
      <img src='/svg/logo.svg' alt='logo' />
    </Link>
  );
}
