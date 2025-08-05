import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles['footer__inner']} container`}>
        <span className={styles['footer__c']}>© 2025 Art gorka</span>
        <a
          href='#'
          className={`${styles['footer__privacy-notice']} under-line-link`}
        >
          Политика обработки персональных данных
        </a>
      </div>
    </footer>
  );
}
