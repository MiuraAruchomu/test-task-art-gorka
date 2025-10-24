import styles from './feedbackForm.module.scss';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { openModal } from '@/store/slices/modals/modalsSlice';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import UiInput from '@/components/ui/input/Input';
import UiButton from '@/components/ui/button/Button';
import { useFormState } from '@/hooks/useFormState';
import { validatePhoneNumber } from '@/utils/form-validation';

const initialState = {
  name: '',
  phone: '',
  email: '',
};

const validateFn = ({ name, phone, email }: typeof initialState) => {
  const errors: Partial<Record<keyof typeof initialState, string>> = {};
  const phoneErr = validatePhoneNumber(phone);

  if (phoneErr) errors.phone = phoneErr;

  return errors;
};

export default function FeedbackForm() {
  const { formState, formErrors, setValue, handleSubmit, resetError } =
    useFormState({ initialState, validateFn, submitFn });
  const [isVisible, setIsVisible] = useState(false);
  const [resetCounter, setResetCounter] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -40% 0px',
  });

  const dispatch = useAppDispatch();

  async function submitFn() {
    dispatch(openModal('thanks'));
    setResetCounter((prev) => prev + 1);
    // Имитация асинхронного запроса
    Promise.resolve();
  }
  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  //   if (error) return;
  //   dispatch(openModal('thanks'));
  //   setResetCounter((prev) => prev + 1);
  // };

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className={`${styles['feedback-form']} ${isVisible ? styles.visible : ''}`}
    >
      <div className='container'>
        <h1 className={styles['feedback-form__title']}>
          Давайте обсудим ваш проект
        </h1>
        <span className={styles['feedback-form__subtitle']}>
          Заполните форму, и наш менеджер свяжется с вами
        </span>
        <form key={resetCounter} className={styles['feedback-form__form']}>
          <UiInput
            name={'name'}
            theme={'light'}
            placeholder={'Имя'}
            required={false}
            value={formState.name}
            setValue={setValue}
            error={formErrors.name}
            resetError={resetError}
          />
          <UiInput
            name={'phone'}
            theme={'light'}
            placeholder={'Телефон'}
            required={true}
            value={formState.phone}
            setValue={setValue}
            error={formErrors.phone}
            resetError={resetError}
          />
          <UiInput
            name={'email'}
            theme={'light'}
            placeholder={'Email'}
            required={false}
            value={formState.email}
            setValue={setValue}
            error={formErrors.email}
            resetError={resetError}
          />
          <UiButton
            name={'Отправить'}
            type={'fill-reverse'}
            size={'full'}
            onClick={handleSubmit}
          />
        </form>
        <span className={styles['feedback-form__privacy-notice']}>
          Нажимая кнопку «Отправить» вы соглашаетесь на 
          <Link href={'#'} className={styles['feedback-form__link']}>
            обработку персональных данных
          </Link>
          .
        </span>
      </div>
    </section>
  );
}
