import styles from './wrapper.module.scss';
import { IinputWrapperProps } from './input.interface';
import { useState } from 'react';

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
      </label>
      <span className={styles[`ui-input-wrapper-${type}__error`]}>{error}</span>
    </>
  );
}
