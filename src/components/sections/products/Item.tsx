import styles from './styles/item.module.scss';
import { IProductsItemProps } from './products.interface';

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
