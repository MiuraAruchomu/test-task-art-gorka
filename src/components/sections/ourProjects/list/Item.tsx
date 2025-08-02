import styles from './styles/item.module.scss';
import { IOurProjectsListItemProps } from '../ourProjects.interface';

export default function OurProjectsListItem({
  imgPath,
  title,
  filters,
  linkName,
  linkPath,
}: IOurProjectsListItemProps) {
  return (
    <div className={styles['list-item']}>
      <img src={imgPath} alt='list-item' className={styles['list-item__img']} />
      <h1 className={styles['list-item__title']}>{title}</h1>
      <div className={styles['list-item__filters']}>
        {filters &&
          filters.map((filter) => (
            <span key={filter} className={styles['list-item__filter']}>
              {filter}
            </span>
          ))}
      </div>
      <span className={styles['list-item__link-wrapper']}>
        <img
          src={'/svg/link-arrow.svg'}
          alt='link-arrow'
          className={styles['list-item__link-img']}
        />
        <a
          href={linkPath}
          target='_blank'
          rel='noopener noreferrer'
          className={styles['list-item__link']}
        >
          {linkName}
        </a>
      </span>
    </div>
  );
}
