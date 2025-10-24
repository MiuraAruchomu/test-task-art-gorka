import styles from './styles/aboutUs.module.scss';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AboutUsBlock from './Block';

const ABOUT_US = [
  'Небольшая и дружная команда специалистов, не держим у себя лишних людей',
  'Настроены на долгосрочные отношения с клиентами',
  'Здравый смысл в работе — наше всё',
  'Прозрачный и понятный процесс работы',
];

export default function AboutUs() {
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
    <section ref={ref} className={`${styles['about-us']} container`}>
      <h1
        className={`${styles['about-us__title']} ${isVisible ? styles.visible : ''}`}
      >
        Тут всякие классные штуки про нас
      </h1>
      <div
        className={`${styles['about-us__blocks-list']} ${isVisible ? styles.visible : ''}`}
      >
        {ABOUT_US &&
          ABOUT_US.map((item, index) => (
            <AboutUsBlock key={index} text={item} />
          ))}
        <img
          src='/svg/mini-logo.svg'
          alt='mini-logo'
          className={`${styles['about-us__logo']} ${isVisible ? styles.visible : ''}`}
        />
      </div>
    </section>
  );
}
