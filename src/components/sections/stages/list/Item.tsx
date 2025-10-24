import styles from './styles/item.module.scss';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { changeCurrentStage } from '@/store/slices/stages/stagesSlice';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface IStagesListItemProps {
  index: number;
  title: string;
  becameVisible: boolean;
  children: React.ReactNode;
}

export default function StagesListItem({
  index,
  title,
  becameVisible,
  children,
}: IStagesListItemProps) {
  const dispatch = useAppDispatch();

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-48% 0px -48% 0px',
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      dispatch(changeCurrentStage(index));
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${styles['stages-list-item']} ${becameVisible ? styles['became-visible'] : ''} ${isVisible ? styles.targeted : ''} ${styles[`item-${index}`]}`}
    >
      <div className={styles['stages-list-item__leftSide']}>
        <span className={styles['stages-list-item__index']}>{index}</span>
      </div>
      <div className={styles['stages-list-item__rightSide']}>
        <h2 className={styles['stages-list-item__title']}>{title}</h2>
        <p className={styles['stages-list-item__content']}>{children}</p>
      </div>
    </div>
  );
}
