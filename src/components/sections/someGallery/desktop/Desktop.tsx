import styles from './desktop.module.scss';
import { SOME_GALLERY } from '../someGallery.config';

export default function SomeGalleryDesktop() {
  return (
    <div className={styles['some-gallery-desktop']}>
      {SOME_GALLERY &&
        SOME_GALLERY.map((item, index) => (
          <img
            key={index}
            src={item.imgPath}
            alt='gallery-image'
            className={styles['some-gallery-desktop__img']}
          />
        ))}
    </div>
  );
}
