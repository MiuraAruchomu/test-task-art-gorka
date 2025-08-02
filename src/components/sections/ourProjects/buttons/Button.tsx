import { IOurProjectButtonProps } from '../ourProjects.interface';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { filterProjects } from '@/features/ourProjects/ourProjectsSlice';
import UiButtonWrapper from '@/components/ui/button/Wrapper';

export default function OurProjectsButton({
  name,
  activeButton,
  setActiveButton,
}: IOurProjectButtonProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setActiveButton(name);
    dispatch(filterProjects(name));
  };

  return (
    <UiButtonWrapper
      type={activeButton === name ? 'fill-rounded' : 'outline-rounded'}
      size={'small'}
      children={
        <button style={{ whiteSpace: 'nowrap' }} onClick={handleClick}>
          {name}
        </button>
      }
    />
  );
}
