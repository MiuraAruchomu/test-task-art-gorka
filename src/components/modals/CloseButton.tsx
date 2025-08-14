import styles from './closeButton.module.scss';
import { TModalClose } from '@/slices/modals/modalsSlice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { closeDropdownMenu } from '@/slices/header/headerSlice';
import { closeModal } from '@/slices/modals/modalsSlice';

export default function CloseButton({
  modalClose,
}: {
  modalClose: TModalClose;
}) {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    if (modalClose === 'leave-request' || modalClose === 'thanks-for-request') {
      dispatch(closeDropdownMenu());
    }

    dispatch(closeModal(modalClose));
  };

  return (
    <button className={styles['modal-close-button']} onClick={handleClose}>
      <div className={styles['modal-close-button__inner']}>
        <span />
        <span />
      </div>
    </button>
  );
}
