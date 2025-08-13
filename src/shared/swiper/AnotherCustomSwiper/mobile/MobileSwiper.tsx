import './mobileSwiper.scss';
import { IAnotherCustomSwiperProps } from '../anotherCustomSwiper.interface';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function AnotherSwiperMobile({
  config,
}: IAnotherCustomSwiperProps) {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={'auto'}
      scrollbar={false}
      className={'another-swiper-mobile'}
    >
      {config &&
        config.map((slide) => (
          <SwiperSlide>
            <img
              src={slide.imgPath}
              alt='slide-img'
              className={'another-swiper-mobile__img'}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
