export interface IProject {
  imgPath: string;
  title: string;
  filters: string[];
  linkName: string;
  linkPath: string;
}

export interface IOurProjectsListItemProps extends IProject {}

export interface IOurProjectButtonProps {
  name: string;
  activeButton: string;
  setActiveButton: (name: string) => void;
}
