import styles from './thanks.module.scss';
import { TModalClose } from '@/features/modals/modals.type';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { closeModal } from '@/features/modals/modalsSlice';
import UiButtonWrapper from '@/components/ui/button/Wrapper';
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
        <UiButtonWrapper
          type={'fill-rounded'}
          size={'small'}
          children={<button onClick={handleClose}>Хорошо, закрыть</button>}
        />
      </div>
    </div>
  );
}
