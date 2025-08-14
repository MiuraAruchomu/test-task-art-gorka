import styles from './styles/list.module.scss';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectFilteredProjects } from '@/slices/ourProjects/selectors';
import OurProjectsListItem from './Item';

export default function OurProjectsList() {
  const selectProjects = useAppSelector(selectFilteredProjects);

  return (
    <div className={styles['our-projects-list']}>
      {selectProjects &&
        selectProjects.map((project) => (
          <OurProjectsListItem
            key={project.title}
            imgPath={project.imgPath}
            title={project.title}
            filters={project.filters}
            linkName={project.linkName}
            linkPath={project.linkPath}
          />
        ))}
    </div>
  );
}
