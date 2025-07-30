import styles from './wrapper.module.scss';
import { IinputWrapperProps } from './input.interface';
import { useState } from 'react';

export default function UiInputWrapper({
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
      setError('Это обязательное поле!');
      updateError('Обязательное поле не заполнено');
    } else if (required && value) {
      setError(null);
      updateError(null);
    }

    setFocused(false);
  };

  return (
    <label
      className={`${styles['ui-input-wrapper']} ${focused || value ? styles.focused : ''} ${error ? styles.errored : ''}`}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {required && (
        <span className={styles['ui-input-wrapper__required']}>*</span>
      )}
      {placeholder && !error && (
        <span className={styles['ui-input-wrapper__placeholder']}>
          {placeholder}
        </span>
      )}
      {children}
      <span className={styles['ui-input-wrapper__error']}>{error}</span>
    </label>
  );
}
