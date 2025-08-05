import styles from './leaveRequest.module.scss';
import { TModalClose } from '@/features/modals/modals.type';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { closeDropdownMenu } from '@/features/header/headerSlice';
import { closeModal, openModal } from '@/features/modals/modalsSlice';
import { useState } from 'react';
import Link from 'next/link';
import CloseButton from '../CloseButton';
import UiInputWrapper from '@/components/ui/input/Wrapper';
import UiButtonWrapper from '@/components/ui/button/Wrapper';

export default function LeaveRequest({
  modalClose,
}: {
  modalClose: TModalClose;
}) {
  const dispatch = useAppDispatch();

  const [config, setConfig] = useState({});
  const [error, setError] = useState<string | null>(
    'Поле заполнено некорректно',
  );

  const updateConfig = ({ field, value }: { field: string; value: string }) => {
    setConfig((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateError = (value: string | null) => {
    setError(value);
  };

  const handleClose = () => {
    if (modalClose === 'thanks-for-request') {
      dispatch(closeDropdownMenu());
    }

    dispatch(closeModal(modalClose));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (error) return;
    dispatch(closeModal(modalClose));
    dispatch(openModal('thanks-for-request'));
  };

  return (
    <div className={styles['modal-leave-request']} onClick={handleClose}>
      <div
        className={styles['modal-leave-request__inner']}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton modalClose={modalClose} />
        <h1 className={styles['modal-leave-request__title']}>
          Оставьте заявку
        </h1>
        <p className={styles['modal-leave-request__subtitle']}>
          Заполните форму, и наш менеджер свяжется с вами
        </p>
        <form
          className={styles['modal-leave-request__form']}
          onSubmit={onSubmit}
        >
          <UiInputWrapper
            type={'dark'}
            field={'name'}
            placeholder={'Имя'}
            required={false}
            updateConfig={updateConfig}
            updateError={updateError}
            children={<input name='name' />}
          />
          <UiInputWrapper
            type={'dark'}
            field={'phone'}
            placeholder={'Телефон'}
            required={true}
            updateConfig={updateConfig}
            updateError={updateError}
            children={<input name='phone' />}
          />
          <UiInputWrapper
            type={'dark'}
            field={'email'}
            placeholder={'Email'}
            required={false}
            updateConfig={updateConfig}
            updateError={updateError}
            children={<input name='email' />}
          />
          <UiInputWrapper
            type={'dark'}
            field={'message'}
            placeholder={'Опишите ваш запрос'}
            required={false}
            updateConfig={updateConfig}
            updateError={updateError}
            children={
              <textarea className={styles['modal-leave-request__textarea']} />
            }
          />
          <UiButtonWrapper
            type={'fill'}
            size={'full'}
            children={<button>Отправить</button>}
          />
          <span className={styles['modal-leave-request__privacy-notice']}>
            Нажимая кнопку «Отправить» вы соглашаетесь на 
            <Link href={'#'} className={styles['modal-leave-request__link']}>
              обработку персональных данных
            </Link>
            .
          </span>
        </form>
      </div>
    </div>
  );
}
