import styles from './styles/item.module.scss';
import { TDropdownItem } from './List';
import { useState, useRef, useEffect } from 'react';

interface IWhatWeDoDropdownItemProps {
  name: string;
  content: TDropdownItem[];
}

export default function WhatWeDoDropdownItem({
  name,
  content,
}: IWhatWeDoDropdownItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  const renderItem = (item: TDropdownItem) => {
    if (typeof item === 'string') {
      return (
        <li key={item} className={styles['dropdown-item__item']}>
          {item}
        </li>
      );
    }

    return Object.keys(item).map((key) => (
      <li key={key} className={styles['dropdown-item__item']}>
        {key}
        <ul className={styles['dropdown-item__list']}>
          {item[key].map((item) => renderItem(item))}
        </ul>
      </li>
    ));
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(
        isVisible ? `${contentRef.current.scrollHeight}px` : '0px',
      );
    }
  }, [isVisible]);

  return (
    <>
      <label
        className={`${styles['dropdown-item']} ${isVisible ? styles.visible : ''}`}
      >
        <span
          className={`${styles['dropdown-item__name']} ${isVisible ? styles.visible : ''}`}
        >
          {name}
        </span>
        <button
          className={`${styles['dropdown-item__button']} ${isVisible ? styles.visible : ''}`}
          onClick={() => setIsVisible(!isVisible)}
        />
      </label>
      <div
        ref={contentRef}
        className={`${styles['dropdown-item__content']} ${isVisible ? styles.visible : ''}`}
        style={{
          height: contentHeight,
          overflow: 'hidden',
          transition: 'height 0.3s ease-in-out',
        }}
      >
        <ul className={styles['dropdown-item__list']}>
          {content && content.map((item) => renderItem(item))}
        </ul>
      </div>
    </>
  );
}
