import { useAppDispatch } from '@/hooks/useAppDispatch';
import { filterProjects } from '@/store/slices/ourProjects/ourProjectsSlice';
import UiButton from '@/components/ui/button/Button';

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
    <UiButton
      name={name}
      type={activeButton === name ? 'fill-rounded' : 'outline-rounded'}
      size={'small'}
      onClick={handleClick}
    />
  );
}
