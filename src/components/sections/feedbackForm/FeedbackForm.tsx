import styles from './feedbackForm.module.scss';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { openModal } from '@/features/modals/modalsSlice';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import UiInputWrapper from '@/components/ui/input/Wrapper';
import UiButtonWrapper from '@/components/ui/button/Wrapper';

export default function FeedbackForm() {
  const dispatch = useAppDispatch();

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -40% 0px',
  });

  const [config, setConfig] = useState({});
  const [error, setError] = useState<string | null>(
    'Поле заполнено некорректно',
  );

  const [resetCounter, setResetCounter] = useState(0);

  const updateConfig = ({ field, value }: { field: string; value: string }) => {
    setConfig((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateError = (value: string | null) => {
    setError(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (error) return;
    dispatch(openModal('thanks'));
    setResetCounter((prev) => prev + 1);
  };

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
        <form
          key={resetCounter}
          className={styles['feedback-form__form']}
          onSubmit={onSubmit}
        >
          <UiInputWrapper
            type={'light'}
            field={'name'}
            placeholder={'Имя'}
            required={false}
            updateConfig={updateConfig}
            updateError={updateError}
            children={<input name='name' />}
          />
          <UiInputWrapper
            type={'light'}
            field={'phone'}
            placeholder={'Телефон'}
            required={true}
            updateConfig={updateConfig}
            updateError={updateError}
            children={<input name='phone' />}
          />
          <UiInputWrapper
            type={'light'}
            field={'Email'}
            placeholder={'Email'}
            required={false}
            updateConfig={updateConfig}
            updateError={updateError}
            children={<input name='email' />}
          />
          <UiButtonWrapper
            type={'fill-reverse'}
            size={'full'}
            children={<button>Отправить</button>}
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
