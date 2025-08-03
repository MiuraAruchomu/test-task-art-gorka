import styles from './whatWeDo.module.scss';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import WhatWeDoDropdownList from './dropdown/List';

export default function WhatWeDo() {
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
      className={`${styles['what-we-do']} ${isVisible ? styles.visible : ''} container`}
    >
      <h1 className={styles['what-we-do__title']}>Чем мы обычно занимаемся</h1>
      <WhatWeDoDropdownList />
    </section>
  );
}
