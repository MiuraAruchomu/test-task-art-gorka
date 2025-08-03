import styles from './someTable.module.scss';
import { SOME_TABLE } from './someTable.config';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function SomeTable() {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -40% 0px',
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className={`${styles['some-table']} ${isVisible ? styles.visible : ''} container`}
    >
      <h1 className={styles['some-table__title']}>Какая-то табличка</h1>
      <div className={styles['some-table__list']}>
        {SOME_TABLE &&
          Object.keys(SOME_TABLE).map((key) => (
            <div key={key} className={styles['some-table__item']}>
              <h2 className={styles['some-table__item_title']}>{key}</h2>
              <p className={styles['some-table__item_text']}>
                {SOME_TABLE[key]}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
