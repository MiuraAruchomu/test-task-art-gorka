import styles from './styles/item.module.scss';

interface IProductsItemProps {
  path: string;
  title: string;
}

export default function ProductsItem({ path, title }: IProductsItemProps) {
  return (
    <div className={styles['products-item']}>
      {path && (
        <img
          src={path}
          alt='product-item'
          className={styles['products-item__img']}
        />
      )}
      {title && <span className={styles['products-item__title']}>{title}</span>}
    </div>
  );
}
