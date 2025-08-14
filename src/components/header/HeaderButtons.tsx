import styles from './styles/headerButtons.module.scss';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import UiButtonWrapper from '../ui/button/Wrapper';
import { openModal } from '@/slices/modals/modalsSlice';

export default function HeaderButtons() {
  const dispatch = useAppDispatch();

  return (
    <div className={styles['header-buttons']}>
      <UiButtonWrapper type={'text'} size={'medium'}>
        <button>8 800 222 86 84</button>
      </UiButtonWrapper>
      <UiButtonWrapper type={'outline'} size={'medium'}>
        <button onClick={() => dispatch(openModal('leave-request'))}>
          Обсудить проект
        </button>
      </UiButtonWrapper>
    </div>
  );
}
