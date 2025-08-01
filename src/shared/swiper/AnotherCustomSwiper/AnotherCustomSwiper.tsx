import styles from './anotherCustomSwiper.module.scss';
import { IAnotherCustomSwiperProps } from './anotherCustomSwiper.interface';
import AnotherSwiperDesktop from './desktop/DesktopSwiper';
import AnotherSwiperMobile from './mobile/MobileSwiper';

export default function AnotherCustomSwiper({
  config,
}: IAnotherCustomSwiperProps) {
  return (
    <div className={styles['another-custom-swiper']}>
      <AnotherSwiperMobile config={config} />
      <AnotherSwiperDesktop config={config} />
    </div>
  );
}
