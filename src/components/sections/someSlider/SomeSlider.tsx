import styles from './someSlider.module.scss';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SomeCustomSwiper from '@/components/swiper/someCustomSwiper/SomeCustomSwiper';

const sliderItems = [
  {
    imgPath: '/img/slide-image.png',
    title: 'Какой-то слайдер',
    description: 'Какое-то описание чего-то там, бла-бла-бла',
    linkName: 'Перейти куда-то',
    linkPath: '#',
  },
  {
    imgPath: '/img/slide-image.png',
    title: 'Какой-то слайдер',
    description: 'Какое-то описание чего-то там, бла-бла-бла',
    linkName: 'Перейти куда-то',
    linkPath: '#',
  },
  {
    imgPath: '/img/slide-image.png',
    title: 'Какой-то слайдер',
    description: 'Какое-то описание чего-то там, бла-бла-бла',
    linkName: 'Перейти куда-то',
    linkPath: '#',
  },
];

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
      className={`${styles['some-slider']} ${isVisible ? styles.visible : ''}`}
    >
      <div className='container'>
        <SomeCustomSwiper config={sliderItems} />
      </div>
    </section>
  );
}
