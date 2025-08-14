import styles from './mobile.module.scss';

const galleryItems = [
  {
    imgPath: '/img/gallery-1.jpg',
  },
  {
    imgPath: '/img/gallery-2.jpg',
  },
  {
    imgPath: '/img/gallery-3.jpg',
  },
  {
    imgPath: '/img/gallery-4.jpg',
  },
  {
    imgPath: '/img/gallery-5.jpg',
  },
];

export default function SomeGalleryMobile() {
  return (
    <div className={styles['some-gallery-mobile']}>
      {galleryItems &&
        galleryItems.map((item, index) => (
          <img
            key={index}
            src={item.imgPath}
            alt='gallery-image'
            className={styles['some-gallery-mobile__img']}
          />
        ))}
    </div>
  );
}
