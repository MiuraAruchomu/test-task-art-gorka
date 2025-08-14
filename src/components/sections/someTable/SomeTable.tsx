import styles from './someTable.module.scss';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const tableItems: Record<string, string> = {
  Исследование:
    'Погружаемся в ваш бизнес, разбираем текущую ситуацию, выясняем цели и задачи, изучаем целевую аудиторию, конкурентов и лучшие практики рынка',
  Дизайн:
    'Проектируем продукт, который будет отвечать потребностям пользователей и решать задачи бизнеса',
  Разработка:
    'Разрабатываем решение на оптимальном стеке технологий, с чистым кодом и оптимизацией',
  Контент: 'Создаём и редактируем контент, загружаем его через админ-панели',
  Маркетинг: 'Продвигаем ваш продукт, настраиваем рекламу, ведём соцсети',
};

export default function SomeTable() {
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
      className={`${styles['some-table']} ${isVisible ? styles.visible : ''} container`}
    >
      <h1 className={styles['some-table__title']}>Какая-то табличка</h1>
      <div className={styles['some-table__list']}>
        {tableItems &&
          Object.keys(tableItems).map((key) => (
            <div key={key} className={styles['some-table__item']}>
              <h2 className={styles['some-table__item_title']}>{key}</h2>
              <p className={styles['some-table__item_text']}>
                {tableItems[key]}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
