import AnotherCustomSwiper from '@/components/swiper/AnotherCustomSwiper/AnotherCustomSwiper';

const sliderItems = [
  {
    imgPath: '/img/another-slide-image-1.png',
  },
  {
    imgPath: '/img/another-slide-image-2.png',
  },
  {
    imgPath: '/img/another-slide-image-3.png',
  },
];

export default function AboutStudioSlider() {
  return <AnotherCustomSwiper config={sliderItems} />;
}
