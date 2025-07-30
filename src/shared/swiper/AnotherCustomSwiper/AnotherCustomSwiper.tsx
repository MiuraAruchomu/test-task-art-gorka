import styles from './anotherCustomSwiper.module.scss';
import { IAnotherCustomSwiperProps } from './anotherCustomSwiper.interface';
import AnotherSwiperDesktop from './desktop/DesktopSwiper';
import AnotherSwiperMobile from './mobile/MobileSwiper';

export default function AnotherCustomSwiper({
  config,
}: IAnotherCustomSwiperProps) {
  return (
    <div className={styles['another-custom-swiper']}>
      <div className={styles['another-custom-swiper__mobile']}>
        <AnotherSwiperMobile config={config} />
      </div>
      <div className={styles['another-custom-swiper__desktop']}>
        <AnotherSwiperDesktop config={config} />
      </div>
    </div>
  );
}
