import styles from './styles/headerButtons.module.scss';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import UiButton from '../ui/button/Button';
import { openModal } from '@/store/slices/modals/modalsSlice';

export default function HeaderButtons() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModal('leave-request'));
  };

  return (
    <div className={styles['header-buttons']}>
      <UiButton name={'8 800 222 86 84'} type={'text'} size={'medium'} />
      <UiButton
        name={'Обсудить проект'}
        type={'outline'}
        size={'medium'}
        onClick={handleClick}
      />
    </div>
  );
}
