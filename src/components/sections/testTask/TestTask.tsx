'use client';

import styles from './testTask.module.scss';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import UiButtonWrapper from '@/components/ui/button/Wrapper';

export default function TestTask() {
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
      className={`${styles['test-task']} ${isVisible ? styles.visible : ''} container`}
    >
      <h1 className={styles['test-task__title']}>Тестовое задание</h1>
      <p className={styles['test-task__subtitle']}>
        на вакансию веб-разработчика в студию&nbsp;
        <a
          href={'https://artgorka.ru/'}
          target='_blank'
          rel='noopener noreferrer'
          className={styles['test-task__link']}
        >
          Art gorka
        </a>
      </p>
      <div className={styles['test-task__buttons']}>
        <UiButtonWrapper type={'fill'} size={'medium'}>
          <button>Нажми меня</button>
        </UiButtonWrapper>
        <UiButtonWrapper type={'outline'} size={'medium'}>
          <button>Меня тоже нажми</button>
        </UiButtonWrapper>
      </div>
    </section>
  );
}
