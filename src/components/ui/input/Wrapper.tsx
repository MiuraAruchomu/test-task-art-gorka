import styles from './wrapper.module.scss';
import { useState } from 'react';

export interface IinputWrapperProps {
  type: string;
  field: string;
  placeholder: string;
  required: boolean;
  updateConfig: ({ field, value }: { field: string; value: string }) => void;
  updateError: (value: string | null) => void;
  children: React.ReactNode;
}

export default function UiInputWrapper({
  type,
  field,
  placeholder,
  required,
  updateConfig,
  updateError,
  children,
}: IinputWrapperProps) {
  const [value, setValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: any) => {
    setValue(e.target.value);
    updateConfig({ field, value: e.target.value });
  };

  const onFocus = () => {
    setError(null);
    setFocused(true);
  };

  const onBlur = () => {
    if (required && !value) {
      setError('Поле заполнено некорректно');
      updateError('Поле заполнено некорректно');
    } else if (required && value) {
      setError(null);
      updateError(null);
    }

    setFocused(false);
  };

  return (
    <>
      <label
        className={`${styles[`ui-input-wrapper-${type}`]} ${focused ? styles.focused : ''} ${error ? styles.errored : ''}`}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {required && (
          <span
            className={`${styles[`ui-input-wrapper-${type}__required`]} ${error ? styles.errored : ''}`}
          >
            *
          </span>
        )}
        {placeholder && !value && !error && (
          <span className={styles[`ui-input-wrapper-${type}__placeholder`]}>
            {placeholder}
          </span>
        )}
        {children}
        {error && (
          <span className={styles[`ui-input-wrapper-${type}__error`]}>
            {error}
          </span>
        )}
      </label>
    </>
  );
}
