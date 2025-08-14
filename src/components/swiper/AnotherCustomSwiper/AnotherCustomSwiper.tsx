import styles from './anotherCustomSwiper.module.scss';
import AnotherSwiperDesktop from './desktop/DesktopSwiper';
import AnotherSwiperMobile from './mobile/MobileSwiper';

interface IAnotherCustomSwiperSlide {
  imgPath: string;
}

interface IAnotherCustomSwiperProps {
  config: IAnotherCustomSwiperSlide[];
}

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
