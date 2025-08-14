import styles from './styles/products.module.scss';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ProductsItem from './Item';

const productsItems = [
  {
    imgPath: '/img/landings.jpg',
    title: 'Лендинги',
  },
  {
    imgPath: '/img/corp-sites.jpg',
    title: 'Корпоративные сайты',
  },
];

export default function Products() {
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
      className={`${styles.products} ${isVisible ? styles.visible : ''} container`}
    >
      {productsItems &&
        productsItems.map((product) => (
          <ProductsItem
            key={product.title}
            path={product.imgPath}
            title={product.title}
          />
        ))}
    </section>
  );
}
