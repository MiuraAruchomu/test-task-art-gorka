import styles from './buttons.module.scss';
import { useState } from 'react';
import OurProjectsButton from './Button';

export default function OurProjectsButtons() {
  const [activeButton, setActiveButton] = useState('Все');

  return (
    <div className={styles['our-projects-buttons']}>
      <OurProjectsButton
        name={'Все'}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <OurProjectsButton
        name={'Разработка сайта'}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <OurProjectsButton
        name={'Контекстная реклама'}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <OurProjectsButton
        name={'SMM'}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
    </div>
  );
}
