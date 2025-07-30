import styles from './styles/aboutStudio.module.scss';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AboutStudioHeader from './Header';
import AboutStudioSlider from './Slider';
import AboutStudioInfo from './info/Info';

export default function AboutStudio() {
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
      className={`${styles['about-studio']} ${isVisible ? styles.visible : ''} container`}
    >
      <AboutStudioHeader />
      <AboutStudioSlider />
      <AboutStudioInfo />
    </section>
  );
}
