'use client';

import dynamic from 'next/dynamic';

export const LazyProducts = dynamic(
  () => import('@/components/sections/products/Products'),
  { ssr: false },
);

export const LazySomeSlider = dynamic(
  () => import('@/components/sections/someSlider/SomeSlider'),
  { ssr: false },
);

export const LazyAboutStudio = dynamic(
  () => import('@/components/sections/aboutStudio/AboutStudio'),
  { ssr: false },
);

export const LazySomeGallery = dynamic(
  () => import('@/components/sections/someGallery/SomeGallery'),
  { ssr: false },
);
