'use client';

import styles from './ourProjects.module.scss';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import OurProjectsButtons from './buttons/Buttons';
import OurProjectsList from './list/List';

export default function OurProjects() {
  const [isVisible, setIsVisible] = useState(false);
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
      className={`${styles['our-projects']} ${isVisible ? styles.visible : ''} container`}
    >
      <h1 className={styles['our-projects__title']}>Какие-то наши проекты</h1>
      <OurProjectsButtons />
      <OurProjectsList />
    </section>
  );
}
