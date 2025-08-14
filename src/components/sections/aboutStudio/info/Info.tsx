import styles from './styles/info.module.scss';
import AboutStudioInfoitem from './Item';

const aboutStudioItems = [
  {
    title: '10 000+',
    subtitle: 'правок в дизайне внесено',
  },
  {
    title: '15',
    subtitle: 'человек в команде',
  },
  {
    title: '13',
    subtitle: 'лет в индустрии',
  },
  {
    title: '150 м²',
    subtitle: 'площадь офиса',
  },
];

export default function AboutStudioInfo() {
  return (
    <div className={styles['about-studio-info']}>
      {aboutStudioItems.map((item) => (
        <AboutStudioInfoitem
          key={item.title}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
}
