import styles from './stages.module.scss';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectCurrentStage } from '@/slices/stages/selectors';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import StagesList from './list/List';

export default function Stages() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -40% 0px',
  });

  const selectStage = useAppSelector(selectCurrentStage);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className={`${styles['stages']} ${isVisible ? styles.visible : ''} container`}
    >
      <h1 className={styles['stages__title']}>
        Неизбежная прелюдия перед проектом
      </h1>
      <StagesList isVisible={isVisible} />
      {selectStage && (
        <img
          src={`/svg/stage-${selectStage}.svg`}
          alt='stage'
          className={styles['stages__icon']}
        />
      )}
    </section>
  );
}
