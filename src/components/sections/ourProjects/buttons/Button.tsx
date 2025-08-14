import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { filterProjects } from '@/slices/ourProjects/ourProjectsSlice';
import UiButtonWrapper from '@/components/ui/button/Wrapper';

interface IOurProjectButtonProps {
  name: string;
  activeButton: string;
  setActiveButton: (name: string) => void;
}

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
