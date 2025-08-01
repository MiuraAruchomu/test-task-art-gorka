import './desktopSwiper.scss';
import { TAboutStudioSliderConfig } from '@/components/sections/aboutStudio/aboutStudio.type';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function AnotherSwiperDesktop({
  config,
}: {
  config: TAboutStudioSliderConfig;
}) {
  return (
    <Swiper
      spaceBetween={10}
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
