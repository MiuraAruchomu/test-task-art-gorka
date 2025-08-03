import styles from './styles/aboutUs.module.scss';
import { ABOUT_US } from './aboutUs.config';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AboutUsBlock from './Block';

export default function AboutUs() {
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
