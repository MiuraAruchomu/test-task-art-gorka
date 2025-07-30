import styles from './ThanksForRequest.module.scss';
import { TModalClose } from '@/features/modals/modals.type';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { closeDropdownMenu } from '@/features/header/headerSlice';
import { closeModal } from '@/features/modals/modalsSlice';
import CloseButton from '../CloseButton';
import UiButtonWrapper from '@/components/ui/button/Wrapper';

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
    <div className={styles['modal-thank-for-request']} onClick={handleClose}>
      <div
        className={styles['modal-thank-for-request__inner']}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton modalClose={modalClose} />
        <h1 className={styles['modal-thank-for-request__title']}>
          Спасибо за обращение
        </h1>
        <p className={styles['modal-thank-for-request__subtitle']}>
          Мы уже получили вашу заявку, свяжемся с вами в течение дня
        </p>
        <UiButtonWrapper
          type={'fill'}
          size={'full'}
          children={<button onClick={handleClose}>Хорошо, закрыть</button>}
        />
      </div>
    </div>
  );
}
