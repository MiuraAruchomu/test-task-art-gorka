import styles from './styles/person.module.scss';
import { IContactPersonProps } from './contactUs.interface';

export default function ContactPerson({
  imgPath,
  phone,
  name,
}: IContactPersonProps) {
  return (
    <div className={styles['contact-person']}>
      <img src={imgPath} alt='person' />
      <div className={styles['contact-person__info']}>
        <a className={`${styles['contact-person__phone']} under-line-link`}>
          {phone}
        </a>
        <span className={styles['contact-person__name']}>{name}</span>
      </div>
    </div>
  );
}
