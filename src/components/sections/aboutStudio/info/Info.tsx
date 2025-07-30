import styles from './styles/info.module.scss';
import { ABOUT_STUDIO_INFO } from './info.config';
import AboutStudioInfoitem from './Item';

export default function AboutStudioInfo() {
  return (
    <div className={styles['about-studio-info']}>
      {ABOUT_STUDIO_INFO.map((item) => (
        <AboutStudioInfoitem
          key={item.title}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
}
