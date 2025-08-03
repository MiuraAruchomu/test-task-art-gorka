import styles from './styles/block.module.scss';

export default function AboutUsBlock({ text }: { text: string }) {
  return (
    <div className={styles['about-us-block']}>
      <span className={styles['about-us-block__inner']}>{text}</span>
    </div>
  );
}
