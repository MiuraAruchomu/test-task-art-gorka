import styles from './someSlider.module.scss';
import { SOME_SLIDER } from './someSlider.config';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SomeCustomSwiper from '@/shared/swiper/someCustomSwiper/SomeCustomSwiper';

export default function SomeSlider() {
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
      className={`${styles['some-slider-bg']} ${isVisible ? styles.visible : ''}`}
    >
      <div className='container'>
        <SomeCustomSwiper config={SOME_SLIDER} />
      </div>
    </section>
  );
}
