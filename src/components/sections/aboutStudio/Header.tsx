import styles from './styles/header.module.scss';
import UiButton from '@/components/ui/button/Button';

export default function AboutStudioHeader() {
  const handleClick = () => {
    return window.open(
      'https://artgorka.ru/',
      '_blank',
      'noopener, noreferrer',
    );
  };

  return (
    <div className={`${styles['about-studio-header']}`}>
      <div className={styles['about-studio-header__top']}>
        <h1 className={styles['about-studio-header__title']}>
          Что-то про студию
        </h1>
        <p className={styles['about-studio-header__subtitle']}>
          Создаём эффективные веб-продукты и дизайн с 2011 года.
          <br />
          <br />
          Подход на стыке бизнеса, креатива и технологий, с акцентом
          на аналитику и юзабилити.
        </p>
      </div>
      <UiButton
        name={'Перейти на сайт студии'}
        type={'outline'}
        size={'medium'}
        onClick={handleClick}
      />
    </div>
  );
}
