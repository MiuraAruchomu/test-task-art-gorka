import {
  LazyProducts,
  LazySomeSlider,
  LazyAboutStudio,
  LazySomeGallery,
  LazyOurProjects,
  LazySomeTable,
  LazyWhatWeDo,
} from '@/components/sections/lazy/LazySections';
import TestTask from '@/components/sections/testTask/TestTask';

export default function Home() {
  return (
    <>
      <TestTask />
      <LazyProducts />
      <LazySomeSlider />
      <LazyAboutStudio />
      <LazySomeGallery />
      <LazyOurProjects />
      <LazySomeTable />
      <LazyWhatWeDo />
    </>
  );
}
