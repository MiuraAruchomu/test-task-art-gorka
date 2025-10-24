import styles from './leaveRequest.module.scss';
import { TModalClose } from '@/store/slices/modals/modalsSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { closeDropdownMenu } from '@/store/slices/header/headerSlice';
import { closeModal, openModal } from '@/store/slices/modals/modalsSlice';
import Link from 'next/link';
import CloseButton from '../CloseButton';
import UiInput from '@/components/ui/input/Input';
import UiTextarea from '@/components/ui/textarea/Textarea';
import UiButton from '@/components/ui/button/Button';
import { useFormState } from '@/hooks/useFormState';
import { validatePhoneNumber } from '@/utils/form-validation';

const initialState = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

const validateFn = ({ name, phone, email, message }: typeof initialState) => {
  const errors: Partial<Record<keyof typeof initialState, string>> = {};
  const phoneErr = validatePhoneNumber(phone);

  if (phoneErr) errors.phone = phoneErr;

  return errors;
};

export default function LeaveRequest({
  modalClose,
}: {
  modalClose: TModalClose;
}) {
  const { formState, formErrors, setValue, handleSubmit, resetError } =
    useFormState({ initialState, validateFn, submitFn });
  const dispatch = useAppDispatch();

  const handleClose = () => {
    if (modalClose === 'thanks-for-request') {
      dispatch(closeDropdownMenu());
    }

    dispatch(closeModal(modalClose));
  };

  async function submitFn() {
    dispatch(closeModal(modalClose));
    dispatch(openModal('thanks-for-request'));
    // Имитация асинхронного запроса
    Promise.resolve();
  }

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
        <form className={styles['modal-leave-request__form']}>
          <UiInput
            name={'name'}
            theme={'dark'}
            placeholder={'Имя'}
            required={false}
            value={formState.name}
            setValue={setValue}
            error={formErrors.name}
            resetError={resetError}
          />
          <UiInput
            name={'phone'}
            theme={'dark'}
            placeholder={'Телефон'}
            required={true}
            value={formState.phone}
            setValue={setValue}
            error={formErrors.phone}
            resetError={resetError}
          />
          <UiInput
            name={'email'}
            theme={'dark'}
            placeholder={'Email'}
            required={false}
            value={formState.email}
            setValue={setValue}
            error={formErrors.email}
            resetError={resetError}
          />
          <UiTextarea
            name={'message'}
            theme={'dark'}
            height={'medium'}
            placeholder={'Опишите ваш запрос'}
            required={false}
            value={formState.message}
            setValue={setValue}
            error={formErrors.message}
            resetError={resetError}
          />
          <UiButton
            name={'Отправить'}
            type={'fill'}
            size={'full'}
            onClick={handleSubmit}
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
