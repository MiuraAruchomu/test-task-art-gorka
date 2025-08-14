import styles from './styles/contactUs.module.scss';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CopyToClipboard from '@/components/copyToClipboard/CopyToClipboard';
import ContactPerson from './Person';

const contactUsPersons = [
  {
    imgPath: '/img/contact-person-1.jpg',
    phone: '8 (999) 999 99 99',
    name: 'Константин',
  },
  {
    imgPath: '/img/contact-person-2.jpg',
    phone: '8 (999) 999 99 99',
    name: 'Александр',
  },
];

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -40% 0px',
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className={`${styles['contact-us']} ${isVisible ? styles.visible : ''} container`}
    >
      <div className={styles['contact-us__leftSide']}>
        <h1 className={styles['contact-us__title']}>Свяжитесь с нами</h1>
        <p className={styles['contact-us__subtitle']}>
          Отвечаем в будние дни с 9:00 до 18:00
        </p>
        <div className={styles['contact-us__info']}>
          <div className={styles['contact-us__persons']}>
            {contactUsPersons &&
              contactUsPersons.map((person) => (
                <ContactPerson
                  key={person.name}
                  imgPath={person.imgPath}
                  phone={person.phone}
                  name={person.name}
                />
              ))}
          </div>
          <div className={styles['contact-us__contacts']}>
            <div className={styles['contact-us__item']}>
              <a
                href='#'
                className={`${styles['contact-us__link']} under-line-link`}
              >
                8 800 222 86 84
              </a>
              <span className={styles['contact-us__text']}>
                Бесплатные звонки по России
              </span>
            </div>
            <div
              className={`${styles['contact-us__item']} ${styles['contact-us__item_with-copy']}`}
            >
              <CopyToClipboard>
                <span
                  className={`${styles['contact-us__copy-text']} copy-text`}
                >
                  info@artgorka.ru
                </span>
              </CopyToClipboard>
            </div>
            <div className={styles['contact-us__item']}>
              <a
                href='https://yandex.ru/maps/24/veliky-novgorod/?from=mapframe&ll=31.303006%2C58.534816&mode=poi&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D170659121317&source=mapframe&utm_source=mapframe&z=17'
                target='_blank'
                rel='noopener noreferrer'
                className={`${styles['contact-us__link']} under-line-link`}
              >
                Великий Новгород, ул. Студенческая, 14 (4 этаж)
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['contact-us__rightSide']}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <iframe
            src='https://yandex.ru/map-widget/v1/?ll=31.303925%2C58.534190&mode=search&oid=170659121317&ol=biz&z=17'
            allowFullScreen={true}
            style={{ position: 'relative' }}
            className={styles['contact-us__map']}
          />
        </div>
      </div>
    </section>
  );
}
