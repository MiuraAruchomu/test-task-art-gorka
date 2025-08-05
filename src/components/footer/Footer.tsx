'use client';

import styles from './footer.module.scss';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
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
