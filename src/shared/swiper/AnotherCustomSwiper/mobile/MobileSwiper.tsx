import './mobileSwiper.scss';
import { TAboutStudioSliderConfig } from '@/components/sections/aboutStudio/aboutStudio.type';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function AnotherSwiperMobile({
  config,
}: {
  config: TAboutStudioSliderConfig;
}) {
  return (
    <Swiper
      spaceBetween={5}
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
