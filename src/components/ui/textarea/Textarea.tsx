import styles from './textarea.module.scss';
import { useState } from 'react';

export interface ITextareaProps {
  name: string;
  theme: string;
  height: string;
  placeholder: string;
  required: boolean;
  value: string;
  setValue: ({ field, value }: { field: string; value: string }) => void;
  error?: string;
  resetError: (field: string) => void;
}

export default function UiTextarea({
  name,
  theme,
  height,
  placeholder,
  required,
  value,
  setValue,
  error,
  resetError,
}: ITextareaProps) {
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
        className={`${styles[`ui-textarea-${theme}`]} ${styles[`ui-textarea_${height}`]} ${isFocus ? styles.focused : ''} ${error ? styles.errored : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {required && (
          <span
            className={`${styles[`ui-textarea-${theme}__required`]} ${error ? styles.errored : ''}`}
          >
            *
          </span>
        )}
        {placeholder && !value && !error && (
          <span className={styles[`ui-textarea-${theme}__placeholder`]}>
            {placeholder}
          </span>
        )}
        <textarea
          onChange={(e) => setValue({ field: name, value: e.target.value })}
        />
        {error && (
          <span className={styles[`ui-textarea-${theme}__error`]}>{error}</span>
        )}
      </label>
    </>
  );
}
