import styles from './wrapper.module.scss';

export interface IButtonWrapperProps {
  type: string;
  size: string;
  children: React.ReactNode;
}

export default function UiButtonWrapper({
  type,
  size,
  children,
}: IButtonWrapperProps) {
  return (
    <label
      className={`${styles['ui-button-wrapper']} ${styles[`ui-button-wrapper_${type}`]} ${styles[`ui-button-wrapper_${size}`]}`}
    >
      {children}
    </label>
  );
}
