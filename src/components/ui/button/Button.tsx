import styles from './button.module.scss';

export interface IButtonProps {
  name: string;
  type: string;
  size: string;
  onClick?: () => void;
}

export default function UiButton({ name, type, size, onClick }: IButtonProps) {
  return (
    <label
      className={`${styles['ui-button']} ${styles[`ui-button_${type}`]} ${styles[`ui-button_${size}`]}`}
    >
      <button type='button' onClick={onClick}>
        {name}
      </button>
    </label>
  );
}
