import styles from './someGallery.module.scss';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SomeGalleryMobile from './mobile/Mobile';
import SomeGalleryDesktop from './desktop/Desktop';

export default function SomeGallery() {
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
      className={`${styles['some-gallery']} ${isVisible ? styles.visible : ''} container`}
    >
      <h1 className={styles['some-gallery__title']}>Какая-то галерея</h1>
      <SomeGalleryMobile />
      <SomeGalleryDesktop />
    </section>
  );
}
