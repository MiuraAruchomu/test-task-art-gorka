import styles from './styles/dropdownMenuButtons.module.scss';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { openModal } from '@/slices/modals/modalsSlice';
import UiButtonWrapper from '../ui/button/Wrapper';

export default function DropdownMenuButtons() {
  const dispatch = useAppDispatch();

  return (
    <div className={styles['dropdown-menu-buttons']}>
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
