import './desktopSwiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IAnotherCustomSwiperSlide {
  imgPath: string;
}

interface IAnotherCustomSwiperProps {
  config: IAnotherCustomSwiperSlide[];
}

export default function AnotherSwiperDesktop({
  config,
}: IAnotherCustomSwiperProps) {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={2}
      scrollbar={false}
      className={'another-swiper-desktop'}
    >
      {config &&
        config.map((slide) => (
          <SwiperSlide>
            <img
              src={slide.imgPath}
              alt='slide-img'
              className={'another-swiper-desktop__img'}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
