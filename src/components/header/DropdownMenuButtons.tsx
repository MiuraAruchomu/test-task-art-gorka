import styles from './styles/dropdownMenuButtons.module.scss';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { openModal } from '@/store/slices/modals/modalsSlice';
import UiButton from '../ui/button/Button';

export default function DropdownMenuButtons() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModal('leave-request'));
  };

  return (
    <div className={styles['dropdown-menu-buttons']}>
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
