import styles from './ThanksForRequest.module.scss';
import { TModalClose } from '@/store/slices/modals/modalsSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { closeDropdownMenu } from '@/store/slices/header/headerSlice';
import { closeModal } from '@/store/slices/modals/modalsSlice';
import CloseButton from '../CloseButton';
import UiButton from '@/components/ui/button/Button';

export default function ThanksForRequest({
  modalClose,
}: {
  modalClose: TModalClose;
}) {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    if (modalClose === 'thanks-for-request') {
      dispatch(closeDropdownMenu());
    }

    dispatch(closeModal(modalClose));
  };

  return (
    <div className={styles['modal-thanks-for-request']} onClick={handleClose}>
      <div
        className={styles['modal-thanks-for-request__inner']}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton modalClose={modalClose} />
        <h1 className={styles['modal-thanks-for-request__title']}>
          Спасибо за обращение
        </h1>
        <p className={styles['modal-thanks-for-request__subtitle']}>
          Мы уже получили вашу заявку, свяжемся с вами в течение дня
        </p>
        <UiButton
          name={'Хорошо, закрыть'}
          type={'fill'}
          size={'full'}
          onClick={handleClose}
        />
      </div>
    </div>
  );
}
