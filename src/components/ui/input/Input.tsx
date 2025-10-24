import styles from './input.module.scss';
import { useState } from 'react';

export interface IinputProps {
  name: string;
  type?: string;
  theme: string;
  placeholder: string;
  required: boolean;
  value: string;
  setValue: ({ field, value }: { field: string; value: string }) => void;
  error?: string;
  resetError: (field: string) => void;
}

export default function UiInput({
  name,
  type,
  theme,
  placeholder,
  required,
  value,
  setValue,
  error,
  resetError,
}: IinputProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    resetError(name);
    setIsFocus(false);
  };

  return (
    <>
      <label
        className={`${styles[`ui-input-${theme}`]} ${isFocus ? styles.focused : ''} ${error ? styles.errored : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {required && (
          <span
            className={`${styles[`ui-input-${theme}__required`]} ${error ? styles.errored : ''}`}
          >
            *
          </span>
        )}
        {placeholder && !value && !error && (
          <span className={styles[`ui-input-${theme}__placeholder`]}>
            {placeholder}
          </span>
        )}
        <input
          type={type ? type : 'text'}
          name={name}
          value={value}
          onChange={(e) => setValue({ field: name, value: e.target.value })}
        />
        {error && (
          <span className={styles[`ui-input-${theme}__error`]}>{error}</span>
        )}
      </label>
    </>
  );
}
