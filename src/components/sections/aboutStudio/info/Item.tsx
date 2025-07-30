import styles from './styles/item.module.scss';
import { IAboutStudioInfoItemProps } from '../aboutStudio.interface';

export default function AboutStudioInfoitem({
  title,
  subtitle,
}: IAboutStudioInfoItemProps) {
  return (
    <div className={styles['info-item']}>
      {title && <h1 className={styles['info-item__title']}>{title}</h1>}
      {subtitle && <p className={styles['info-item__subtitle']}>{subtitle}</p>}
    </div>
  );
}
