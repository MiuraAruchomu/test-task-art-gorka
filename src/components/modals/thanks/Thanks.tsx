import styles from './thanks.module.scss';
import { TModalClose } from '@/store/slices/modals/modalsSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals/modalsSlice';
import UiButton from '@/components/ui/button/Button';
import CloseButton from '../CloseButton';

export default function Thanks({ modalClose }: { modalClose: TModalClose }) {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal(modalClose));
  };

  return (
    <div className={styles['modal-thanks']} onClick={handleClose}>
      <div
        className={styles['modal-thanks__inner']}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton modalClose={modalClose} />
        <h1 className={styles['modal-thanks__title']}>Спасибо!</h1>
        <p className={styles['modal-thanks__subtitle']}>
          Наш менеджер свяжется с вами в ближайшее время с 09:00 до 19:00
        </p>
        <UiButton
          name={'Хорошо, закрыть'}
          type={'fill-rounded'}
          size={'small'}
          onClick={handleClose}
        />
      </div>
    </div>
  );
}
