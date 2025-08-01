import styles from './mobile.module.scss';
import { SOME_GALLERY } from '../someGallery.config';

export default function SomeGalleryMobile() {
  return (
    <div className={styles['some-gallery-mobile']}>
      {SOME_GALLERY &&
        SOME_GALLERY.map((item, index) => (
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
