import './someCustomSwiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ISomeCustomSwiperProps } from './someCustomSwiper.interface';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function SomeCustomSwiper({ config }: ISomeCustomSwiperProps) {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      navigation={true}
      allowTouchMove={false}
      scrollbar={false}
      className={'some-custom-swiper'}
    >
      {config &&
        config.map((slide) => (
          <SwiperSlide>
            {slide.imgPath && (
              <img
                src={slide.imgPath}
                alt='slide-img'
                className={'some-custom-swiper__img'}
              />
            )}
            <div className={'some-custom-swiper__info'}>
              <div className={'some-custom-swiper__info_top'}>
                {slide.title && (
                  <h1 className={'some-custom-swiper__title'}>{slide.title}</h1>
                )}
                {slide.description && (
                  <p className={'some-custom-swiper__description'}>
                    {slide.description}
                  </p>
                )}
              </div>
              <div className={'some-custom-swiper__info_bottom'}>
                {slide.linkPath && slide.linkName && (
                  <Link
                    href={slide.linkPath}
                    className={'some-custom-swiper__link under-line-link'}
                  >
                    {slide.linkName}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
