import styles from './copyToClipboard.module.scss';
import { useState } from 'react';

export default function CopyToClipboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const text = document.getElementsByClassName('copy-text')[0].textContent;

    try {
      if (text) {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      }
    } catch (err) {}
  };

  return (
    <div className={styles['copy-to-clipboard']}>
      {children}
      <span
        className={`${styles['copy-to-clipboard__text']} ${isCopied ? styles.copied : ''}`}
      >
        Скопировано
      </span>
      {!isCopied && (
        <img
          src='/svg/copy-icon.svg'
          alt='copy'
          className={styles['copy-to-clipboard__img']}
          onClick={handleCopy}
        />
      )}
      {isCopied && (
        <img
          src='/svg/check-mark.svg'
          alt='check-mark'
          className={styles['copy-to-clipboard__img']}
        />
      )}
    </div>
  );
}
